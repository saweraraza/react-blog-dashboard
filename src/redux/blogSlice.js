import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial blog data
const initialBlogsData = [
  { id: 1, title: "Understanding React Hooks", category: "React", author: "Ali Khan", readingTime: 6, featured: true },
  { id: 2, title: "Redux Toolkit Basics", category: "Redux", author: "Sara Ahmed", readingTime: 8, featured: false },
  { id: 3, title: "Building Blog UI in React", category: "React", author: "Hamza Malik", readingTime: 5, featured: false },
  { id: 4, title: "Node.js and Express Introduction", category: "Node", author: "Ayesha Noor", readingTime: 7, featured: true }
];

// Async thunk simulation for API loading
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async (_, { rejectWithValue }) => {
  try {
    // Simulate network delay of 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return initialBlogsData;
  } catch (error) {
    return rejectWithValue("Failed to fetch blog data.");
  }
});

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    searchText: "",
    selectedCategory: "All",
    loading: false,
    error: null,
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    addBlog: (state, action) => {
      state.blogs.unshift({
        id: Date.now(),
        ...action.payload,
        readingTime: Number(action.payload.readingTime) || 5,
        featured: false,
      });
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
    toggleFeatured: (state, action) => {
      const blog = state.blogs.find((b) => b.id === action.payload);
      if (blog) {
        blog.featured = !blog.featured;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error occurred";
      });
  },
});

export const { setSearchText, setSelectedCategory, addBlog, deleteBlog, toggleFeatured } = blogSlice.actions;
export default blogSlice.reducer;