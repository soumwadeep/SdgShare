import { React, useState, useEffect } from "react";

import { Link, Route, Routes } from "react-router-dom";

import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";

import { Sidebar, UserProfile } from "../components";
import { client } from "../client";
import { userQuery } from "../utils/data";

import logo from "../assets/logocropped.png";
import Pins from "./Pins";

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  return (
    <>
      <div
        className="flex 
      bg-gray-50
      md:flex-row
      flex-col
      h-screen
      transition-height
      duration-75
      ease-out"
      >
        <div
          className="hidden
        md:flex
        h-screen
        flex-initial"
        >
          <Sidebar />
        </div>{" "}
        {/* md stands for medium devices hidden is for hidden */}
        <div
          className="flex
        md:hidden
        flex-row"
        >
          <HiMenu
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setToggleSidebar(false)}
          />
          <Link to="/">
            <img src={logo} alt="logo" className="w-28" />
          </Link>
          <HiMenu
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setToggleSidebar(false)}
          />
          <Link to={`user-profile/${user?._id}`}>
            <img src={logo} alt="logo" className="w-28" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
