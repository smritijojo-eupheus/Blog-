import React, { useContext, useLayoutEffect } from "react";
import logo1 from "../../assets/logo1.png";
import { Disclosure } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth";
import { Cookie } from "@mui/icons-material";
import Cookies from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();
  // const { user } = useContext(AuthContext);

  // const handleClick = ({ name1 }) => {
  //   if ((name1 = "My Blogs")) {
  //     navigate(`/myblogs`);
  //   }
  //   if ((name1 = "home")) {
  //     navigate(`/`);
  //   }
  // };
  return (
    <div className="w-[100%] fixed top-0 z-50">
      <div className="flex justify-between bg-white py-[0.5rem] shadow-md shadow-slate-500 ">
        <div className="ml-[2rem]">
          <img
            src={logo1}
            height=""
            width="110px"
            // className="!bg-slate-400"
          ></img>
        </div>

        <div className="flex justify-around w-1/4 mt-4 ">
          <Disclosure as="div" className="relative group">
            {({ open }) => (
              <>
                <Disclosure.Button className=" rounded-md p-3  hover:bg-red-400 text-black">
                  {" "}
                  {Cookies.get("user") ? "Home" : "All Blogs"}
                </Disclosure.Button>
                {/* <Disclosure.Panel>
                  <div className="!flex-col absolute -bottom-[5rem] left-0 bg-pink-400 z-[9999]">
                    <div>
                      <a>1</a>
                    </div>
                    <div>
                      <a>2</a>
                    </div>
                    <div>
                      {" "}
                      <a>3</a>
                    </div>
                    <div>
                      <a>4</a>
                    </div>
                  </div>
                </Disclosure.Panel> */}
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="relative group">
            {({ open }) => (
              <>
                <Disclosure.Button
                  className="text-black rounded-md p-3 hover:bg-red-400"
                  // onClick={handleClick("My Blogs")}
                >
                  {" "}
                  {Cookies.get("user") ? "My Blogs" : "About"}
                </Disclosure.Button>
                <Disclosure.Panel as="div" className="hidden group-hover:block">
                  {/* <div className="!flex-col absolute -bottom-[5rem] left-0 bg-slate-400 z-[9999]">
                    <div>
                      <a href="/account/register">Register</a>
                    </div>
                    <div>
                      <a>2</a>
                    </div>
                    <div>
                      {" "}
                      <a>3</a>
                    </div>
                    <div>
                      <a>4</a>
                    </div>
                  </div> */}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="relative">
            {({ open }) => (
              <>
                <Disclosure.Button className="text-black rounded-md p-3 hover:bg-red-400 ">
                  {" "}
                  {Cookies.get("user")
                    ? "Hi!" + `${Cookies.get("username")}`
                    : "login/SignUp"}
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="!flex-col absolute -bottom-[5rem] left-0 bg-pink-400 z-[9999]">
                    <div>
                      <a>1</a>
                    </div>
                    <div>
                      <a>2</a>
                    </div>
                    <div>
                      {" "}
                      <a>3</a>
                    </div>
                    <div>
                      <a>4</a>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
