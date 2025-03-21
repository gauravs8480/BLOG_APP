import React from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";
import { useState } from "react";
const PostListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <h1 className="mb-8 text-2xl"> development blog </h1>
      <button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden "
      >
        {open ? "Close" : "Filter or Search"}{" "}
      </button>
      <div className="flex gap-8">
        <div className="flex flex-col-reverse md:flex-row">
          <PostList />
          <div className={`${open ? "block" : "hidden"} md:block`}>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
