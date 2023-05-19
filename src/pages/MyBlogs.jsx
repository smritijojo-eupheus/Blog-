import { Button, TextField } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RecommendIcon from "@mui/icons-material/Recommend";
import { useNavigate } from "react-router-dom";
import instance from "../instance";
import Cookies from "js-cookie";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Navbar from "../component/NavBar/NavBar";

const MyBlogs = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogBody, setDialogBody] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/createblog`);
  };

  useLayoutEffect(() => {
    GetBlogsByAuthor();
  }, []);
  const GetBlogsByAuthor = async () => {
    let authorId1 = Cookies.get("id");
    const dataToPost = {
      authorId: authorId1,
    };
    const res = await instance({
      url: `/blogsbyauthor`,
      method: "POST",
      data: dataToPost,
      headers: {
        "x-api-key": Cookies.get("tokens"),
      },
    });
    console.log(res.data);

    setData(res.data.data);
  };

  const updateBlog = async () => {
    const dataToPost = {
      title: dialogTitle,
      body: dialogBody,
    };
    const res = await instance({
      url: `blogs/${id}`,
      method: "PUT",
      data: dataToPost,
      headers: {
        "x-api-key": Cookies.get("tokens"),
      },
    });
    console.log(res.data.message);
  };

  const handleClose = () => {
    setOpen(false);
    setId("");
  };

  const handleDialog = async (id) => {
    console.log(id);
    setId(id);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    console.log(id);
    const res = await instance({
      url: `blogs/${id}`,
      method: "DELETE",
      headers: {
        "x-api-key": Cookies.get("tokens"),
      },
    });
    console.log(res.data.message);
  };
  return (
    <>
      <div className="">
        <Navbar />
        <div className="flex gap-[5%] min-h-screen w-[100%] px-[5%] mt-[30%] lg:mt-[6%] ">
          <div className="flex-col w-[65%] ">
            <div className="flex-col  border-black border-2 p-4 rounded-md mt-[5%] bg-yellow-200 ">
              <div>Hi {Cookies.get("username")}</div>
              <div>
                <p>
                  Welcome to Jogs, A blogging platform that provides blogs on
                  everything....and most important its free...See you on the
                  other side
                </p>
              </div>
              <div className="flex justify-start mt-5">
                <Button
                  variant="contained"
                  className="!bg-blue-800"
                  onClick={handleClick}
                >
                  Write New Post
                </Button>
              </div>
            </div>
            <div className=" mt-[5%]  p-4 rounded-md bg-slate-100">
              <div className="font-black text-lg">My Blogs</div>
              {data.map((data) => (
                <div
                  className="flex justify-between mb-5
            "
                >
                  <div>
                    <img src={data.blogImage} width="80px"></img>
                  </div>
                  <div className="flex-col">
                    <div className="mb-2">{data.title}</div>
                    <div>
                      <Button variant="outlined">Read More..</Button>
                    </div>
                  </div>
                  <div className="flex-col gap-x-4">
                    <div className="flex gap-2">
                      <div>
                        <Button
                          variant="contained"
                          onClick={() => handleDialog(data._id)}
                        >
                          Update
                        </Button>
                        <Dialog open={open} onClose={handleClose} fullWidth>
                          <DialogTitle>
                            Are You Sure You Want to Update this Blog?
                          </DialogTitle>
                          <DialogContent>
                            <div className="!flex-col ">
                              <div className="my-3">
                                <TextField
                                  label="Title"
                                  onChange={(e) =>
                                    setDialogTitle(e.target.value)
                                  }
                                  className="w-full"
                                />
                              </div>
                              <div>
                                <TextField
                                  label="Body"
                                  onChange={(e) =>
                                    setDialogBody(e.target.value)
                                  }
                                  multiline={true}
                                  rows={5}
                                  className="w-full"
                                />
                              </div>
                            </div>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={updateBlog} variant="contained">
                              UPDATE
                            </Button>
                            <Button onClick={handleClose} variant="contained">
                              Close
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                      <div>
                        <Button
                          variant="contained"
                          onClick={() => handleDelete(data._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="">
                        <Button>
                          {" "}
                          <VisibilityIcon />
                        </Button>
                      </div>
                      <div className="">
                        <Button>
                          <RecommendIcon />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-col mt-[3%] w-[300px] ">
            <div className="flex gap-5 bg-slate-100 p-5  mb-5 rounded-md  ">
              {" "}
              <div>
                {/* <img></img> */}
                hii
              </div>
              <div className="flex-col">
                {" "}
                <div>$625</div>
                <div>Total Views</div>
              </div>
            </div>
            {/*common box*/}
            <div className="flex gap-5 bg-blue-100 p-5  mb-5 rounded-md">
              {" "}
              <div>
                {/* <img></img> */}
                hello
              </div>
              <div className="flex-col">
                {" "}
                <div>$625</div>
                <div>Total Likes</div>
              </div>
            </div>
            {/*common box*/}
            <div className="flex gap-5 bg-pink-100 p-5  mb-5 rounded-md">
              {" "}
              <div>
                {/* <img></img> */}
                human
              </div>
              <div className="flex-col">
                {" "}
                <div>$625</div>
                <div>Total Subscribers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBlogs;
