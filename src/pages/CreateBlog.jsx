import React, { useLayoutEffect, useState } from "react";
import Navbar from "../component/NavBar/NavBar";
import TextField from "@mui/material/TextField";
import { Button, Select } from "@mui/material";
import BasicSelect from "../component/BasicSelect/BasicSelect";
import Footer from "../component/Footer/Footer";
import instance from "../instance";
import Cookies from "js-cookie";

const CreateBlog = () => {
  const [file, setFile] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [blogImage, setblogImage] = useState("");

  // useLayoutEffect = () => {
  //   clear();
  // };

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(e.target.files);
  };

  const handleUpload = async () => {
    const res = await instance({
      url: `uploadfile`,
      method: "POST",
      data: file,
    });
    console.log(file);
    console.log(res.data);
    setblogImage(res.data.downloadURL);
  };

  const options = [
    { label: "ART ", value: 1 },

    { label: " SCIENCE & TECHNOLOGY", value: 2 },

    { label: "TRAVEL & LIFESTYLE", value: 3 },

    { label: "ENTERTAINMENT", value: 4 },
  ];
  const handleOrderProcessingForm = (value, type, index) => {
    switch (type) {
      case "select_category":
        console.log(value.label);
        setCategory(value.label);
        break;
    }
  };

  const authorId = Cookies.get("id");

  const postData = async () => {
    console.log(localStorage.getItem("tokens"));
    console.log(typeof authorId);
    let dataToPost = {
      title: title,
      body: body,
      tags: tags,
      category: category,
      subcategory: subcategory,
      blogImage: blogImage,
      authorId: authorId,
    };
    const res = await instance({
      url: `blogs`,
      method: "POST",
      data: dataToPost,
      headers: {
        " x-api-key": Cookies.get("tokens"),
      },
    });
    alert(res.data.message[0].state);
  };

  // const clear = () => {
  //   setTitle("");
  //   setBody("");
  //   setTags("");
  //   setCategory("");
  //   setSubcategory("");
  //   setblogImage("");
  //   setFile("");
  // };

  return (
    <div className="w-screen">
      <div>
        <Navbar />
      </div>

      <div className="flex justify-center mt-[30%] lg:mt-[10%]">
        <div className="border-2 border-black w-[50%] rounded-sm shadow-md shadow-slate-400  ">
          <div className="border-2 border-black p-3 bg-blue-500 font-bold text-[1.5rem]">
            Create Blog
          </div>
          <div className="p-4 ">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <div className="text-slate-600 font-bold">Title *</div>
                <TextField
                  className="w-full"
                  size="small"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="">
                <div className="text-slate-600 font-bold">
                  Category Dropdown*
                </div>
                {/* <TextField className="w-full" size="small" /> */}
                <BasicSelect
                  handleOrderProcessingForm={handleOrderProcessingForm}
                  Name={"select_category"}
                  data={options}
                  value={category}
                />
              </div>
            </div>

            <div className=" flex flex-col lg:flex-row lg:justify-between my-6">
              <div className="text-slate-600 font-bold">Upload Image Link*</div>
              <div className="flex flex-col gap-y-4 md:flex-row md:justify-between ">
                <div>
                  <input type="file" onChange={(e) => handleChange(e)} />
                </div>
                <div>
                  <Button variant="contained" onClick={handleUpload}>
                    Upload
                  </Button>
                </div>
              </div>
            </div>

            <div className="my-3">
              <div className="text-slate-600 font-bold">subcategory*</div>
              <TextField
                className="w-full"
                size="small"
                onChange={(e) => setSubcategory(e.target.value)}
              />
            </div>
            <div className="my-3">
              <div className="text-slate-600 font-bold">Body*</div>
              <TextField
                className="w-full "
                rows={3}
                multiline={true}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            {/* <div className="my-3">
              <div className="text-slate-600 font-bold">Image Link*</div>
              <TextField className="w-full" size="small" />
            </div> */}

            <div className="my-3">
              <div className="text-slate-600 font-bold">Add Tags*</div>
              <TextField
                className="w-full"
                onChange={(e) => setTags(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-y-2 sm:flex-row sm:gap-2 mt-2">
              <Button
                variant="contained"
                className="!rounded-[2rem]"
                onClick={postData}
              >
                Create Blog
              </Button>
              <Button variant="contained" className="!rounded-[2rem]">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CreateBlog;
