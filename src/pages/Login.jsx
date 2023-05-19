import React, { useContext, useState } from "react";
import login from "../assets/login.jpeg";
import logo1 from "../assets/logo1.png";
import { Button, TextField } from "@mui/material";
import instance from "../instance";
import AuthContext from "../store/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const { LoginPage } = useContext(AuthContext);

  const postData = async () => {
    let dataToPost = {
      email: email,
      password: password,
    };
    console.log(dataToPost);
    const res = await instance({
      url: `loginUser`,
      method: "POST",
      data: dataToPost,
    });
    console.log(res.data.message);
    Cookies.set("tokens", res.data.accessToken);
    Cookies.set("id", res.data.id);
    Cookies.set("user", true);
    Cookies.set("username", dataToPost.email);
    navigate("/blog");
  };
  return (
    <div className="">
      <div className="">
        <img src={login} className="w-[100%] h-screen relative"></img>
      </div>
      <div>
        <div className="w-[35%] border-2 border-black rounded-md shadow-xl shadow-slate-400  absolute bottom-[20%] left-[34%] bg-white ">
          <div className="flex justify-center">
            <img src={logo1} width={150}></img>
          </div>
          <div className="p-[1rem] my-3">
            <TextField
              variant="standard"
              label="Email"
              type="email"
              className="!w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="p-[1rem] my-3">
            <TextField
              variant="standard"
              label="Password"
              type="password"
              className="!w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center my-6 p-[1rem]">
            <Button
              variant="contained"
              className="!w-full bg-gradient-to-r from-orange-400 to-rose-400"
              onClick={postData}
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
