import React, { useContext, useLayoutEffect } from "react";
import Blog from "../component/Blog/Blog";
import Navbar from "../component/NavBar/NavBar";
import logo1 from "../../src/assets/logo1.png";
import Footer from "../component/Footer/Footer";
import instance from "../instance";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../store/auth";

import authHeader from "../store/authHeader";

const BlogPage = () => {
  const [blogData, setBlogData] = useState([]);
  let { id } = useParams();

  useLayoutEffect(() => {
    getBlogs(id);
  }, []);

  const getBlogs = async (id) => {
    const res = await instance({
      url: `blogs/${id}`,
      method: "GET",
    });
    console.log(res.data.data);
    setBlogData(res.data.data);
  };

  return (
    <div className="min-h-screen min-w-full">
      <Navbar />
      <div className=" flex justify-center mt-[30%] md:mt-[20%] lg:mt-[10%]">
        <div className="w-[50%]">
          <Blog
            path="blogpage"
            title={blogData.title}
            // authorfname={blogData.authorId.fname}
            // authorlname={blogData.authorId.lname}
            src={logo1}
            publicationDate={"30th August 2021"}
            width="100%"
            desc={blogData.body}
            tags={blogData.tags}
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
