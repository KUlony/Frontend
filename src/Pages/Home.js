import React, { useCallback, useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import "./Home.css";
import Think from "../picture/think.png";
import Homebackground from "../picture/home_title_background.png";
import search from "../picture/search.png";
import Post_generator from "../components/Post_generator";
import PostData from "../PostData";
import Miniprofile from "../components/Miniprofile";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaPassport } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Checklogin from "../components/Checklogin";

// import ScrollRestoration from "react-scroll-restoration";

function Home() {
  // const [havepost]
  // localStorage.removeItem("token");

  const token = localStorage.getItem("token");
  const [post_data, setPost_data] = useState([]);
  const [displayload, setDisplayload] = useState(true);
  const [apipath, setApipath] = useState("post/all_post");
  const [category, setCategory] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [followtopic, setFollowtopic] = useState(false);
  const [showtopic, setShowtopic] = useState(false);
  const [topicarray, setTopicarray] = useState([]);
  const [loadingtopic, setLoadingtopic] = useState(false);
  const [topic, setTopic] = useState([]);
  const [count, setCount] = useState(false);
  const [searchresult, setSearchresult] = useState("");
  const ref = useRef(null);
  const observer = useRef();
  const [pagecount, setPageCount] = useState(1);
  const [havemore, setHavemore] = useState(true);
  const [topicIdArrayy, setTopicIdArray] = useState([]);
  const init = () => {
    setPost_data([]);
    setPageCount(1);
    setHavemore(true);
    setTopic([]);
    setTopicarray([]);
    setSearchresult("");
  };

  useEffect(() => {
    componentDidMount();
  }, [category, followtopic]);

  const componentDidMount = async () => {
    try {
      let response = "";

      if (category[0]) {
        setDisplayload(false);
        if (!followtopic) {
          response = await fetch(`/api/post/all_post?page=1`, {
            headers: {
              Authorization: `${token}`,
            },
          });
          setApipath("post/all_post?");
        } else {
          response = await fetch(`/api/home?page=1`, {
            headers: {
              Authorization: `${token}`,
            },
          });
          setApipath("home?");
        }

        const json = await response.json();
        setDisplayload(true);
        setPost_data(json);
      } else if (category[1]) {
        setLoadingtopic(true);
        response = await fetch(`/api/topic/get_topic/General`, {
          headers: {
            Authorization: `${token}`,
          },
        });
      } else if (category[2]) {
        setLoadingtopic(true);
        response = await fetch(`/api/topic/get_topic/Learning`, {
          headers: {
            Authorization: `${token}`,
          },
        });
      } else if (category[3]) {
        setLoadingtopic(true);
        response = await fetch(`/api/topic/get_topic/News`, {
          headers: {
            Authorization: `${token}`,
          },
        });
      } else if (category[4]) {
        setLoadingtopic(true);
        response = await fetch(`/api/topic/get_topic/Market`, {
          headers: {
            Authorization: `${token}`,
          },
        });
      } else if (category[5]) {
        setLoadingtopic(true);
        response = await fetch(`/api/topic/get_topic/Faculty`, {
          headers: {
            Authorization: `${token}`,
          },
        });
      }

      const json = await response.json();
      console.log(json);
      setTopicIdArray(json.map((data) => data._id));
      setTopicarray(json.map((data) => data.topic_name));
      setLoadingtopic(false);
    } catch {
      console.error("fail");
    }
  };

  const category_select = (category_number) => {
    if (displayload && !loadingtopic) {
      if (category[category_number] !== true) {
        setCategory((prevdata) =>
          prevdata.map((data, idx) => (idx === category_number ? true : false))
        );
        init();
      }
    }
  };

  useEffect(() => {
    setTopic(
      topicarray.map((data, idx) => {
        if (idx === 0) {
          return true;
        } else {
          return false;
        }
      })
    );
  }, [topicarray]);

  const topic_select = (topic_number) => {
    if (displayload) {
      console.log(loadingtopic);
      if (topic[topic_number] !== true) {
        setTopic((prevdata) =>
          prevdata.map((data, idx) => (idx === topic_number ? true : false))
        );
      }
    }
  };

  const resultinput = (e) => {
    setSearchresult(e.target.value);
    setCount(false);
  };

  const topic_selectbysearch = (data) => {
    if (displayload) {
      const indexoftext = topicarray.indexOf(data);
      topic_select(indexoftext);
      setSearchresult(topicarray[indexoftext]);
    }
  };

  const lastSearchelement = useCallback(
    (node) => {
      if (!displayload) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageCount((pagecount) => pagecount + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [displayload]
  );
  const loadmore = async (e) => {
    try {
      setDisplayload(false);
      const loadmoredata = await fetch(`/api/${apipath}page=${pagecount}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      const loadmoredatajson = await loadmoredata.json();
      setDisplayload(true);
      setPost_data([...post_data, ...loadmoredatajson]);

      if (loadmoredatajson.length === 0) {
        setHavemore(false);
      }
    } catch {
      console.error("fail to load more");
    }
  };

  useEffect(() => {
    if (pagecount !== 1 && havemore) {
      loadmore();
    }
  }, [pagecount]);

  const followtopic_click = () => {
    if (displayload) {
      setFollowtopic(!followtopic);
      init();
    }
  };

  // ทุกครั้งที่topicเปลี่ยนจะ fetch ใหม่่ โดยใช้ตำแหน่ง idx แล้วไปชี้ที่ topic.id

  const topic_fetch = async () => {
    try {
      setPost_data([]);
      setPageCount(1);
      setHavemore(true);
      setDisplayload(false);
      const idxoftopic = topic.findIndex((data) => {
        if (data) {
          return data;
        }
      });

      const currenttopic = topicIdArrayy[idxoftopic];
      if (currenttopic) {
        // console.log(currenttopic);
        const response = await fetch(
          `/api/search/post/topic?text=${currenttopic}&page=1`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        const json = await response.json();
        // console.log(json);
        setPost_data(json);
        setDisplayload(true);
        setApipath(`search/post/topic?text=${currenttopic}&`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!loadingtopic && !category[0]) {
      topic_fetch();
    }
  }, [topic]);

  const dataupdate = (postid) => {};

  return (
    <div className="Home_page">
      <div className="home_test" ref={ref}>
        <div className="Nav_home">
          <NavBar />
          {/* <ScrollRestoration /> */}
        </div>

        <div className="home_search">
          <div className="home_search_center">
            <div className="home_search_box">
              <h1 className="home_search_title">Share & Explore</h1>
              <h3>through this endless KU's community !</h3>
              <button className="home_create_post_button">
                Create new post{" "}
                <BsPlusLg className="home_create_post_button_icon" />
                <Link to="/"></Link>
              </button>
              <Link to="/search">
                <button className="home_search_button">
                  Search
                  <HiSearch className="home_search_button_icon" />
                </button>
              </Link>
            </div>
            <div className="think_img_box">
              <img
                src={Think}
                alt="Girl in a jacket"
                className="think_img_photo"
              ></img>
            </div>
            <div>
              {" "}
              <img
                src={Homebackground}
                alt="Girl in a jacket"
                className="home_title_background"
              ></img>
            </div>
          </div>
        </div>
        <nav className="Nav_topic">
          {/* {topicarray.} */}

          <div
            className={`${category[0] ? "current_category" : null}`}
            onClick={() => category_select(0)}
          >
            Discover
          </div>
          <div
            className={`${category[1] ? "current_category" : null}`}
            onClick={() => category_select(1)}
          >
            General
          </div>
          <div
            className={`${category[2] ? "current_category" : null}`}
            onClick={() => category_select(2)}
          >
            Learning
          </div>
          <div
            className={`${category[3] ? "current_category" : null}`}
            onClick={() => category_select(3)}
          >
            News
          </div>
          <div
            className={`${category[4] ? "current_category" : null}`}
            onClick={() => category_select(4)}
          >
            Market
          </div>
          <div
            className={`${category[5] ? "current_category" : null}`}
            onClick={() => category_select(5)}
          >
            Faculty
          </div>
        </nav>
        <div className="home_Content">
          <form
            className={`home_checkbox ${category[0] ? null : "display_none"}`}
          >
            <input
              type="checkbox"
              onClick={followtopic_click}
              checked={followtopic}
            ></input>
            <label>Show following topics only</label>
          </form>
          <div
            className={`home_sidebar ${category[0] ? "display_none" : null}`}
          >
            <div>
              <form
                className="searchinput_form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  value={searchresult}
                  onChange={resultinput}
                  className="searchtopic_input"
                  placeholder="Search topic"
                />
                <HiSearch className="topic_search_icon" />
              </form>
              {!loadingtopic && (
                <ul className="select_faculty">
                  <div
                    className={`search_result ${
                      searchresult === "" ? "display_none" : null
                    } `}
                  >
                    {topicarray
                      .filter((data, topic_selectbysearchidx) => {
                        if (searchresult === "") {
                        } else if (
                          data
                            .toLowerCase()
                            .includes(searchresult.toLowerCase())
                        ) {
                          if (!count) {
                            setCount(true);
                          }
                          return data;
                        }
                      })
                      .map((data, idx) => {
                        const position = data
                          .toLowerCase()
                          .indexOf(searchresult.toLowerCase());
                        const possitionend = data.length;
                        const position_in_topic_array =
                          topicarray.indexOf(data);

                        return (
                          <li
                            onClick={() => topic_selectbysearch(data)}
                            className={`${
                              topic[position_in_topic_array] ? "green" : null
                            }`}
                          >
                            {data.slice(0, position)}
                            <span className="green">
                              {data.slice(
                                position,
                                position + searchresult.length
                              )}
                            </span>
                            {data.slice(
                              position + searchresult.length,
                              data.length
                            )}
                          </li>
                        );
                      })}
                    <p className={`${count ? "display_none" : null}`}>
                      No result found
                    </p>
                  </div>
                  <div className="topic_box">
                    {topicarray.map((data, idx) => {
                      if (idx < 12) {
                        return (
                          <li
                            className={`${topic[idx] ? "current_topic" : null}`}
                            onClick={() => topic_select(idx)}
                          >
                            {data}
                          </li>
                        );
                      } else {
                        if (idx === 12) {
                          return (
                            <div>
                              {!showtopic && (
                                <div className="show_box">
                                  <button
                                    className="topic_show_button"
                                    onClick={() => setShowtopic(!showtopic)}
                                  >
                                    Show more
                                  </button>
                                  <FiChevronDown
                                    className="topic_showmore_icon"
                                    onClick={() => setShowtopic(!showtopic)}
                                  />
                                </div>
                              )}
                              <li
                                className={`${
                                  topic[idx] ? "current_topic" : null
                                }  ${showtopic ? null : "display_none"}`}
                                onClick={() => topic_select(idx)}
                              >
                                {data}
                              </li>
                            </div>
                          );
                        } else if (idx === topicarray.length - 1) {
                          return (
                            <div>
                              <li
                                className={`${
                                  topic[idx] ? "current_topic" : null
                                }  ${showtopic ? null : "display_none"}`}
                                onClick={() => topic_select(idx)}
                              >
                                {data}
                              </li>
                              {showtopic && (
                                <div className="show_box">
                                  <button
                                    className="topic_show_button"
                                    onClick={() => setShowtopic(!showtopic)}
                                  >
                                    Show less
                                  </button>
                                  <FiChevronUp
                                    className="topic_showless_icon"
                                    onClick={() => setShowtopic(!showtopic)}
                                  />
                                </div>
                              )}
                            </div>
                          );
                        }

                        return (
                          <li
                            className={`${
                              topic[idx] ? "current_topic" : null
                            }  ${showtopic ? null : "display_none"}`}
                            onClick={() => topic_select(idx)}
                          >
                            {data}
                          </li>
                        );
                      }
                    })}
                  </div>
                </ul>
              )}
            </div>
          </div>
          <div className="Home_post">
            <div className={`${category[0] ? null : "post_faculty"}`}>
              {/* ใส่ตอนมีข้อมูลให้ fetch */}

              {/* <Post_generator data={testdata} /> */}
              {/* <Post_generator data={post_data} /> */}
              {post_data.map((element, index) => {
                if (post_data.length === index + 1) {
                  return (
                    <div ref={lastSearchelement}>
                      <Post
                        title={element.post_title}
                        like={element.post_like_count}
                        post_content={element.post_content}
                        photo={element.cover_photo_url}
                        comment={element.post_comment_count}
                        profilepic={element.author.profile_pic_url}
                        post_photo_url={element.post_photo_url}
                        username={element.author.username}
                        post_time={element.post_time}
                        post_id={element.post_id}
                        user_id={element.author.user_id}
                        user_like_status_post={element.user_like_status}
                      />
                    </div>
                  );
                } else {
                  return (
                    <Post
                      title={element.post_title}
                      like={element.post_like_count}
                      post_content={element.post_content}
                      photo={element.cover_photo_url}
                      comment={element.post_comment_count}
                      profilepic={element.author.profile_pic_url}
                      post_photo_url={element.post_photo_url}
                      username={element.author.username}
                      post_time={element.post_time}
                      post_id={element.post_id}
                      user_id={element.author.user_id}
                      user_like_status_post={element.user_like_status}
                    />
                  );
                }
              })}
              <div
                className={`loader ${displayload ? "display_none" : null}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Checklogin />;
    </div>
  );
}

export default Home;
