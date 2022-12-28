import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { MdOutlineLocalPostOffice, MdOutlineMoreHoriz } from "react-icons/md";
import { CgProfile, CgMoreO } from "react-icons/cg";
import { RiNotification2Line, RiFileListLine } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { GiFeather } from "react-icons/gi";
import { BiHomeCircle, BiHash } from "react-icons/bi";

export default function LeftSide() {

  const [tweet, setTweet] = useState([]);
  const [text, setText] = useState("");
  const [id, setId] = useState(0);
  const handleTweet = () => {
    setTweet((tweet) => [{ text: text, id: id }, ...tweet]);
    setText("");
    setId(id + 1);
  };

  const LeftSideTop = () => {
    return (
      <div className="leftside-top">
        <div className="leftside-top-icon">
          <a href="" className="leftside-top-icon-twitter">
            <ImTwitter size={30} color="white" />
          </a>
          <a href="" className="leftside-top-icon-home">
            <BiHomeCircle size={27} color="white" />
            <span>Home</span>
          </a>
          <a href="" className="leftside-top-icon-explore">
            <BiHash size={27} color="white" />
            <span>Explore</span>
          </a>
          <a href="" className="leftside-top-icon-notification">
            <RiNotification2Line size={27} color="white" />
            <span>Notifications</span>
          </a>
          <a href="" className="leftside-top-icon-message">
            <MdOutlineLocalPostOffice size={27} color="white" />
            <span>Message</span>
          </a>
          <a href="" className="leftside-top-icon-bookmarks">
            <BsBookmark size={25} color="white" />
            <span>Bookmarks</span>
          </a>
          <a href="" className="leftside-top-icon-list">
            <RiFileListLine size={27} color="white" />
            <span>List</span>
          </a>
          <a href="" className="leftside-top-icon-profile">
            <CgProfile size={27} color="white" />
            <span>Profile</span>
          </a>
          <a href="" className="leftside-top-icon-more">
            <CgMoreO size={27} color="white" />
            <span>More</span>
          </a>
          <button onClick={handleTweet} className="button">
            <span className="button-tweet">Tweet</span>
            <div>
              <GiFeather className="button-feather" size={27} color="white" />
            </div>
          </button>
        </div>
      </div>
    );
  };

  const LeftSideBottom = () => {
    return (
      <div className="leftside-bottom">
        <a href="" className="leftside-bottom-link">
          <FaCircle size={27} color="white" />
          <span>Doğan Erdem Kara</span>
          <MdOutlineMoreHoriz
            className="leftside-bottom-link-icon"
            size={27}
            color="white"
          />
        </a>
      </div>
    );
  };

  return (
    <div className="leftside">
      <LeftSideTop />
      <LeftSideBottom />
    </div>
  );
}
