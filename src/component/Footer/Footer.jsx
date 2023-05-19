import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Footer = () => {
  return (
    <>
      <div className="w-[100%] ">
        <div className="px-8 py-8 bg-gradient-to-r from-gray-100 to-gray-200 mt-[5%] ">
          <div className="flex">
            <div className="text-2xl font-bold my-2 mx-5">Follow Us</div>
            <div className="my-2  hover:animate-bounce">
              <ArrowDownwardIcon />
            </div>
          </div>

          <div className="flex gap-8 mx-5">
            <div className="hover:animate-bounce">
              <FacebookIcon />
            </div>
            <div className="hover:animate-bounce">
              <InstagramIcon />
            </div>
            <div className="hover:animate-bounce">
              <TwitterIcon />
            </div>
            <div className="hover:animate-bounce">
              <PinterestIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
