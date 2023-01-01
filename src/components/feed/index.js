import React, { useState} from 'react'
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

function Feed() {
    const [tweet, setTweet] = useState([]);
    const [id, setId] = useState(0);
    const [text, setText] = useState("");
  
    const handleTweet = () => {
      setTweet((tweet) => [{ text: text, id: id }, ...tweet]);
      setText("");
      setId(id + 1);
    };

    const Tweet = (text) => {
      return (
          <li className='tweet'>
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
                    value={text}
                    onChange={(e) => setText(e.target.value)}
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
              <GiFeather className="twt-feather" size={28} color="white" />
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
    <div className='main-head'>
        <Feed />
        <Tweet />
    </div>
  )
}

export default Feed