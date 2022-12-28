import React from 'react'
import { BiSearch } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { RiMoreFill } from "react-icons/ri";




function RightSide() {

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
    
  return (
    <div className="rigthside">
        <Search />
        <Trends />
        <FollowAdvices />
    </div>
  )
}

export default RightSide