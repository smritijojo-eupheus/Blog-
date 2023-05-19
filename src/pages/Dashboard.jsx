import React, { useLayoutEffect, useState } from "react";
import NavBar from "../component/NavBar/NavBar";
import Blog from "../component/Blog/Blog";
import Footer from "../component/Footer/Footer";
import BasicSelect from "../component/BasicSelect/BasicSelect";
import instance from "../instance";
import Button from "@mui/material/Button";
import authHeader from "../store/authHeader";
import Cookies from "js-cookie";

const Dashboard = () => {
  const [blogData, setBlogData] = useState([]);
  const [tags, setTags] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [tagsData, setTagsData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  useLayoutEffect(() => {
    getBlogs();
    getFilterData();
  }, []);

  const getBlogs = async () => {
    const res = await instance({
      url: `allblogs`,
      method: "GET",
      // headers: jwtInterceoptor,
    });
    console.log(res.data.data[0]._id);
    setBlogData(res.data.data);
  };
  const getFilterData = async () => {
    const res = await instance({
      url: `getfilteritems`,
      method: "GET",
      // headers: {
      //   Authorization: jwtInterceoptor,
      // },
    });
    console.log(res.data.subcategory);
    console.log(res.data.tags);
    setTagsData(res.data.tags);
    setSubCategoryData(res.data.subcategory);
  };

  const getBlogsByFilter = async () => {
    console.log(tags);
    console.log(subCategory);
    let url1;
    try {
      if (tags) {
        url1 = `blogsbyfilter?tags=${tags}`;
      }

      if (subCategory) {
        url1 = `blogsbyfilter?subcategory=${subCategory}`;
      }
      if (tags && subCategory) {
        url1 = `blogsbyfilter?tags=${tags}&subcategory=${subCategory}`;
      }
      if (!tags && !subCategory) {
        url1 = `blogsbyfilter`;
      }
      console.log(url1);
      const res = await instance({
        url: url1,
        method: "GET",
        headers: {
          "x-api-key": Cookies.get("tokens"),
        },
      });
      console.log(res.data);
      console.log(res.data.data[0]._id);
      setBlogData(res.data.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleOrderProcessingForm = (value, type) => {
    switch (type) {
      case "select_tags":
        console.log(value);
        setTags(value);
        break;

      case "select_subCategory":
        console.log(value);
        setSubCategory(value);
        break;
    }
  };
  return (
    <div className="">
      <div className="">
        <NavBar />
      </div>
      {/* <div className="flex justify-center text-4xl font-bold mt-[30%] lg:mt-[10%] font-serif">
        ALL BLOGS
      </div> */}

      <div className="flex justify-center text-3xl font-bold mt-[30%] lg:mt-[10%] font-serif">
        EXPLORE BLOGS
      </div>
      <div className="flex justify-center mt-[2rem]">
        <div className="flex justify-around w-[50%] ">
          <div>
            <BasicSelect
              handleOrderProcessingForm={handleOrderProcessingForm}
              Name={"select_tags"}
              value={tags}
              data={tagsData}
              label={"Tags"}
            />
          </div>
          <div>
            <BasicSelect
              handleOrderProcessingForm={handleOrderProcessingForm}
              Name={"select_subCategory"}
              value={subCategory}
              data={subCategoryData}
              label={"SubCategory"}
            />
          </div>
          <div>
            <Button onClick={getBlogsByFilter}>Search</Button>
          </div>
          {/* <div>
            <BasicSelect />
          </div> */}
        </div>
      </div>

      <div className="flex justify-center gap-[4rem] flex-wrap px-[4rem] py-[2rem]">
        {blogData.map((data) => (
          <div>
            <Blog
              width="300"
              title={data.title}
              desc={data.body}
              path="blog"
              id={data._id}
            />
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
