import React from "react";
import blogpic from "../../assets/blogpic.jpeg";
import { Button } from "@mui/material";
import logo1 from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";

const Blog = (props) => {
  const navigate = useNavigate();
  // console.log(props);

  const NextPage = (id) => {
    navigate(`/blog_page/${id}`, { replace: true });
  };

  // let data = Object.entries(props.tags);
  // console.log(data);
  // console.log(typeof data);
  return (
    <div>
      {props.path === "blog" ? (
        <div className="flex-col relative shadow-md shadow-slate-400 p-3 ">
          <div className="hover:grayscale">
            <img src={blogpic} alt="blog" width={props.width}></img>
          </div>
          <div className="absolute top-[23.5rem] left-[3.5rem] bg-gradient-to-r from-orange-100 to-amber-300 text-black ">
            {props.title}
          </div>
          <div className="bg-white w-[300px]  ">
            <div className="py-[1rem] px-[1rem] font-serif">
              <div className="line-clamp-3">{props.desc}</div>

              <div className="flex justify-center mt-[0.5rem]">
                <Button variant="outlined" onClick={() => NextPage(props.id)}>
                  Read More
                </Button>
              </div>
            </div>

            {/* <div className="text-blue-400">#History #india</div> */}
          </div>
        </div>
      ) : (
        <div className="">
          <div className="text-2xl md:text-5xl font-serif">{props.title}</div>
          <div className="flex mt-2">
            <div className="w-[100px]">
              <img src={props.src}></img>
            </div>
            <div className="flex-col">
              <div className="flex gap-2">
                <div>
                  {props.authorfname} {props.authorlname}
                </div>
                <div>
                  <a href="/">. Follow</a>
                </div>
              </div>
              <div className="flex gap-2">
                <div>5min read</div>
                <div>. {props.publicationDate}</div>
              </div>
            </div>
          </div>
          {/* <div>Published in {props.publicationCom}</div> */}
          <div className="">
            <img src={blogpic} alt="blog" width={props.width}></img>
          </div>
          <div className="text-[1.3rem] font-serif tracking-widest mt-4">
            {props.desc}
          </div>
          <div>
            <div className="text-3xl font-black my-[4rem]">Further Reading</div>
            <div className="flex w-full shadow-md shadow-slate-400 my-[1.5rem]">
              <div className="flex-col py-5 ml-3">
                <div className="font-black font-serif">
                  How to make a GO board with CSS
                </div>
                <div>
                  It is a long established fact that a reader will be distracted
                </div>
                <div>level.gitconnect.com</div>
              </div>
              <div>
                <img src={logo1}></img>
              </div>
            </div>
            <div className="flex w-full shadow-md shadow-slate-400 my-[1.5rem]">
              <div className="flex-col py-5 ml-3">
                <div className="font-black font-serif">
                  How to make a GO board with CSS
                </div>
                <div>
                  It is a long established fact that a reader will be distracted
                </div>
                <div className="text-blue-500">level.gitconnect.com</div>
              </div>
              <div>
                <img src={logo1}></img>
              </div>
            </div>
          </div>
          <div className="flex gap-3 my-[1rem]">
            {/* {props.tags.map((item) => {
              <Button
                className="!rounded-[2rem] !bg-slate-400"
                variant="contained"
              >
                {item}
              </Button>;
            })} */}
            <Button
              className="!rounded-[2rem] !bg-slate-400"
              variant="contained"
            >
              {props.tags}
            </Button>
            <Button
              className="!rounded-[2rem] !bg-slate-400"
              variant="contained"
            >
              {props.tags}
            </Button>
          </div>

          {/*authorcard*/}
          <div className="flex-col shadow-md shadow-slate-400 p-4 ">
            <div className="flex justify-between">
              <div>
                {props.authorfname} {props.authorlname}
              </div>
              <div>
                <Button className="!rounded-xl !bg-slate-400 !text-white">
                  Follow
                </Button>
              </div>
            </div>
            <div className="flex gap-2">
              <div>{"365 followers"}</div>
              <div>Writer for {"sprikler"}</div>
              <div>. {props.publicationDate}</div>
            </div>
          </div>
          <div className="text-xl md:text-4xl font-serif my-[4rem]">
            Explore More Blogs
          </div>
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-7 my-[1rem]">
            <div>
              <Blog
                width="300px"
                title=" Ramayan and Mahabharat new"
                desc="It is a long established fact that a reader will be distracted by
            the letters, as opposed to using 'Content here..."
                path="blog"
              />
            </div>
            <div>
              <Blog
                width="300px"
                title=" Ramayan and Mahabharat new"
                desc="It is a long established fact that a reader will be distracted by
          the letters, as opposed to using 'Content here..."
                path="blog"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
