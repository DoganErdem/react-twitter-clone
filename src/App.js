import "./scss/main.scss";
import React, { useState } from "react";
import { BiHomeCircle, BiUserCircle, BiWorld, BiSearch } from "react-icons/bi";
import { RiNotification2Line, RiListCheck2, RiMoreFill } from "react-icons/ri";
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { BsStars, BsEmojiSmile, BsPersonCircle } from "react-icons/bs";
import { TbPhoto, TbCalendarTime } from "react-icons/tb";
import { HiOutlineGif } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiShare } from "react-icons/fi";
import { GiFeather } from "react-icons/gi";

import LeftSide from "./components/leftside/index";

function App() {
  const [tweet, setTweet] = useState([]);
  const [id, setId] = useState(0);
  const [input, setInput] = useState("");

  const handleTweet = () => {
    setTweet((tweet) => [{ text: input, id: id }, ...tweet]);
    setInput("");
    setId(id + 1);
  };

  const Search = () => {
    return (
      <div className="search">
        <div className="search-icon">
          <BiSearch size={22} />
        </div>
        <div className="search-text">
          <input
            className="search-text-tweet"
            type={"text"}
            placeholder="Search Twitter"
          ></input>
        </div>
      </div>
    );
  };

  const FollowAdvices = () => {
    return (
      <div className="who">
        <div className="who-text">
          <span>Who to follow</span>
        </div>
        <a href="">
          <div className="who-follow">
            <div className="who-follow-name">
              <BsPersonCircle size={30} color="white" />
              <div className="who-follow-name-name">
                <div className="who1">
                  <div className="who-name">Volkan Günay</div>
                  <div className="who-mail">@volkangünay</div>
                </div>
                <div className="who-follow-follow">
                  <span>Follow</span>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="">
          <div className="who-follow">
            <div className="who-follow-name">
              <BsPersonCircle size={30} color="white" />
              <div className="who-follow-name-name">
                <div className="who1">
                  <div className="who-name">Galatasaray</div>
                  <div className="who-mail">@galatasaray</div>
                </div>
                <div className="who-follow-follow">
                  <span>Follow</span>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="" className="who-show">
          <div className="who-show-more">
            <span>Show more</span>
          </div>
        </a>
      </div>
    );
  };

  const Trends = () => {
    return (
      <div className="trend">
        <div className="trend-text">
          <span>Trends for you</span>
        </div>
        <a href="">
          <div className="trend-box">
            <div className="trend-box-top">
              <span>Trending in Turkey</span>
              <RiMoreFill className="icon-more" />
            </div>
            <div>Dünya Kupası</div>
            <div className="trend-box-bottom">54k tweet</div>
          </div>
        </a>
        <a href="">
          <div className="trend-box">
            <div className="trend-box-top">
              <span>Trending in Turkey</span>
              <RiMoreFill className="icon-more" />
            </div>
            <div>Dünya Kupası</div>
            <div className="trend-box-bottom">54k tweet</div>
          </div>
        </a>
        <a href="">
          <div className="trend-box">
            <div className="trend-box-top">
              <span>Trending in Turkey</span>
              <RiMoreFill className="icon-more" />
            </div>
            <div>Dünya Kupası</div>
            <div className="trend-box-bottom">54k tweet</div>
          </div>
        </a>
        <a href="">
          <div className="trend-box">
            <div className="trend-box-top">
              <span>Trending in Turkey</span>
              <RiMoreFill className="icon-more" />
            </div>
            <div>Dünya Kupası</div>
            <div className="trend-box-bottom">54k tweet</div>
          </div>
        </a>
        <a href="">
          <div className="trend-box">
            <div className="trend-box-top">
              <span>Trending in Turkey</span>
              <RiMoreFill className="icon-more" />
            </div>
            <div>Dünya Kupası</div>
            <div className="trend-box-bottom">54k tweet</div>
          </div>
        </a>
        <a href="">
          <div className="trend-box">
            <div className="trend-box-top">
              <span>Trending in Turkey</span>
              <RiMoreFill className="icon-more" />
            </div>
            <div>Dünya Kupası</div>
            <div className="trend-box-bottom">54k tweet</div>
          </div>
        </a>
        <a href="">
          <div className="trend-box">
            <div className="trend-box-top">
              <span>Trending in Turkey</span>
              <RiMoreFill className="icon-more" />
            </div>
            <div>Dünya Kupası</div>
            <div className="trend-box-bottom">54k tweet</div>
          </div>
        </a>
        <a href="">
          <div className="trend-box">
            <div className="trend-box-top">
              <span>Trending in Turkey</span>
              <RiMoreFill className="icon-more" />
            </div>
            <div>Dünya Kupası</div>
            <div className="trend-box-bottom">54k tweet</div>
          </div>
        </a>
      </div>
    );
  };

  const RightSide = () => {
    return (
      <div className="rigthside">
        <Search />
        <Trends />
        <FollowAdvices />
      </div>
    );
  };

  const Tweet = (text) => {
    return (
      <li>
        <div className="tweet-up">
          <div className="tweet-up-profile">
            <BsPersonCircle size={45} />
          </div>
          <div className="tweet-up-article">
            <div className="tweet-up-article-name">
              <span>Doğan Erdem Kara </span>
              <span> @doganerdem</span>
              <a href="">
                <RiMoreFill className="icon-more" />
              </a>
            </div>
            <span>{text.text}</span>
            <div className="tweet-down">
              <a href="" className="tweet-down-icon">
                <FaRegComment size={15} color="darkcyan" />
                <span>183</span>
              </a>
              <a href="">
                <FaRetweet size={19} color="darkcyan" />
                <span>283</span>
              </a>
              <a href="">
                <FaRegHeart size={15} color="darkcyan" />
                <span>193</span>
              </a>
              <a href="">
                <FiShare size={17} color="darkcyan" />
              </a>
            </div>
          </div>
        </div>
      </li>
    );
  };

  const Feed = () => {
    return (
      <div className="main-head">
        <div className="main-head-home">
          <div className="home-text">
            <a href="">
              <h2>Home</h2>
            </a>
          </div>

          <div className="star">
            <a href="">
              <BsStars size={25} />
            </a>
          </div>
        </div>

        <div className="navigator">
          <div className="profil-foto">
            <BiUserCircle size={48} color="white" />
          </div>
          <div className="what">
            <div className="what-happening">
              <input
                type={"text"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What's happening?"
              ></input>
            </div>
            <a href="" className="what-icon">
              <div>
                <BiWorld size={20} color="rgb(29, 155, 240)" />
                <span>Everyone can reply</span>
              </div>
            </a>
            <div className="what-icon-alt">
              <div className="what-icon-alt-icon">
                <a href="">
                  <TbPhoto size={20} color="rgb(29, 155, 240)" />
                </a>
                <a href="">
                  <HiOutlineGif size={20} color="rgb(29, 155, 240)" />
                </a>
                <a href="">
                  <RiListCheck2 size={20} color="rgb(29, 155, 240)" />
                </a>
                <a href="">
                  <BsEmojiSmile size={18} color="rgb(29, 155, 240)" />
                </a>
                <a href="">
                  <TbCalendarTime size={18} color="rgb(29, 155, 240)" />
                </a>
                <a href="">
                  <HiOutlineLocationMarker
                    size={18}
                    color="rgb(29, 155, 240)"
                  />
                </a>
              </div>

              <div className="what-icon-alt-tweet">
                <button onClick={handleTweet} className="tweet-a">
                  <span>Tweet</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <a href="" className="show">
          <div className="show-tweets">
            <span>Show 100 Tweets</span>
          </div>
        </a>

        <div className="tweet">
          <ul>
            {tweet.map(({ text, id }) => (
              <Tweet key={id} text={text} />
            ))}
          </ul>
        </div>

        <div className="mobil-tweet" onClick={handleTweet}>
          <GiFeather className="twt-feather" size={40} color="white" />
        </div>
        <div className="bottom">
          <div className="bottom-icon">
            <a className="bottom-icon-home">
              <BiHomeCircle size={27} color="white" />
            </a>
            <a className="bottom-icon-search">
              <BiSearch size={27} />
            </a>
            <a className="bottom-icon-notification">
              <RiNotification2Line size={26} color="white" />
            </a>
            <a className="bottom-icon-message">
              <MdOutlineLocalPostOffice size={27} color="white" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <LeftSide />
      <div className="main">
        <Feed />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
