import React, { useState } from "react";
import bg2 from "../assets/bg2.jpeg";
import logo1 from "../assets/logo1.png";
import { Button, TextField } from "@mui/material";
import BasicSelect from "../component/BasicSelect/BasicSelect";
import { handler } from "@tailwindcss/line-clamp";
import instance from "../instance";
import Cookies from "js-cookie";

const SignUp = () => {
  const [title, setTitle] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [authorImage, setauthorImage] = useState("");
  const [file, setFile] = useState("");

  const handleOrderProcessingForm = (value, type, index) => {
    switch (type) {
      case "select_title":
        console.log(value.label);
        setTitle(value.label);
        break;
    }
  };

  const handleSubmit = async () => {
    let dataToPost = {
      fname: fname,
      lname: lname,
      title: title,
      email: email,
      password: pass,
      authorImage: authorImage,
    };
    const res = await instance({
      url: `authors`,
      method: "POST",
      data: dataToPost,
      headers: {
        "x-api-key": Cookies.get("tokens"),
      },
    });
    console.log(res.data);
  };

  const handleUpload = async () => {
    const res = await instance({
      url: `uploadfile`,
      method: "POST",
      data: file,
    });
    console.log(file);
    console.log(res.data);
    setauthorImage(res.data.downloadURL);
  };

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(e.target.files);
  };

  const options = [{ label: "Mr" }, { label: "Miss" }, { label: "Mrs" }];
  return (
    <div className="h-screen min-w-full ">
      <div className="flex">
        <div className="h-screen">
          <img src={bg2} className="!h-screen"></img>
        </div>
        <div className=" flex-col px-[1rem]">
          {/* apply justify-centre to logo1*/}
          {/* <div className="mx-[2rem] mt-[2rem]"> */}
          <div className="flex justify-center">
            <img src={logo1} width="150px"></img>
          </div>
          <div className="mt-[1rem]">
            <div className="flex gap-3">
              <div className="">
                <div className="mb-6 sm:mb-0">
                  Title<span className="text-red-500">*</span>
                </div>
                {/* <TextField variant="standard" /> */}
                <BasicSelect
                  handleOrderProcessingForm={handleOrderProcessingForm}
                  Name={"select_title"}
                  data={options}
                  value={title}
                  width="50px"
                />
              </div>
              <div>
                <div>
                  First Name<span className="text-red-500">*</span>
                </div>
                <TextField
                  variant="standard"
                  className=""
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>

              <div className="">
                <div>
                  Last Name <span className="text-red-500">*</span>
                </div>
                <TextField
                  variant="standard"
                  className=""
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-[3rem]">
              <div>
                Email<span className="text-red-500">*</span>
              </div>
              <TextField
                type="email"
                variant="standard"
                className="w-full"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-[3rem]">
              <div>
                PassWord<span className="text-red-500">*</span>
              </div>
              <TextField
                type="password"
                variant="standard"
                className="w-full"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>

            <div className=" flex flex-col lg:flex-row lg:justify-between my-6">
              <div className="text-slate-600 font-bold">Upload Profile pic</div>
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
            <div className="flex justify-center mt-[5rem]">
              <Button
                variant="contained"
                className="!rounded-xl !w-[80%] "
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
