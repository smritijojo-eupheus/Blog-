import axios from "axios";
import { createContext, useLayoutEffect, useState } from "react";
// import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import instance from "../instance";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [res, setRes] = useState("");

  // const [user, setUser] = useState(() => {
  //   if (localStorage.getItem("tokens")) {
  //     let tokens = localStorage.getItem("tokens");
  //     // let decodeData = jwt_decode(tokens.access_token);
  //     console.log(typeof tokens);
  //     return tokens;
  //   }
  //   return null;
  // });

  const navigate = useNavigate();

  const LoginPage = async (dataToPost) => {
    const apiResponse = await instance({
      url: `loginUser`,
      method: "POST",

      data: dataToPost,
    });
    console.log(apiResponse.data.accessToken);

    // localStorage.setItem("tokens", apiResponse.data.accessToken);
    // // console.log(jwt_decode(apiResponse.data.accessToken));
    // // setUser(jwt_decode(apiResponse.data.accessToken));
    // localStorage.setItem("user", true);
    // localStorage.setItem("username", dataToPost.email);
    // localStorage.setItem("id", apiResponse.data.id);
    // navigate("/blog");
  };
  return (
    // <AuthContext.Provider value={{ user,LoginPage }}>
    <AuthContext.Provider value={{ LoginPage }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
