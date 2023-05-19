import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateBlog from "./pages/CreateBlog";
import BlogPage from "./pages/BlogPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { AuthContextProvider } from "./store/auth";
import MyBlogs from "./pages/MyBlogs";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/blog" element={<Dashboard />}></Route>
            <Route path="/createblog" element={<CreateBlog />}></Route>
            <Route path="/blog_page/:id" element={<BlogPage />}></Route>
            <Route path="/create_signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/myblogs" element={<MyBlogs />}></Route>
            <Route path="/about_us" element={<AboutUs />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
