import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import "./Home.css";
import Think from "../picture/think.png";
import search from "../picture/search.png";
import Post_generator from "../components/Post_generator";
import PostData from "../PostData";
import Miniprofile from "../components/Miniprofile";
// import ScrollRestoration from "react-scroll-restoration";

function Home() {
  // const [havepost]
  const [post_data, setPost_data] = useState([]);
  const [displayload, setDisplayload] = useState(false);
  const componentDidMount = async () => {
    try {
      const response = await fetch(`http://localhost:3000/post/all_post`);
      const json = await response.json();
      setDisplayload(true);
      setPost_data(json);
    } catch {
      console.error("fail");
    }
  };
  // componentDidMount();
  const testdata = [
    {
      author: {
        user_id: "6329fedcc3479021a8d8d1e4",
        username: "kitipong tame",
        profile_pic_url:
          "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      },
      post_title:
        "    โครงสร้างของบทความวิจัย  (research paper) มีดังนี้ บางบทความใช้เลขหมายกำกับ หรือเขียนอภิปรายตามหัวข้อปัญหาวิจัย หรือคำถามวิจัย (research questions)",
      cover_photo_url:
        "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      post_content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metusPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metusPellentesque habitant morbi tristique senectus et netus et malesuada fames ac sad as dqw as dx wqdq deqw e wq ewq ewq e wq eqw edqw eqw q  qw wqturpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus",
      post_like_count: 45,
      post_comment_count: 2112,
    },
    {
      author: {
        user_id: "6329fedcc3479021a8d8d1e4",
        username: "kanpech ",
        profile_pic_url:
          "https://static.trueplookpanya.com/tppy/member/m_545000_547500/545994/cms/images/2019-Q3/%E0%B9%81%E0%B8%A1%E0%B8%A79%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95.jpg",
      },
      post_title:
        "สวัสดีครับ2 Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum congue ipsum enim, quis sagittis diam dapibus vitae. Nam convallis mollis consectetur. Donec dictum lobortis nibh, et fermentum nisl laoreet ut. Sed metus lectus, viverra gravida mattis sit amet, fringilla ",
      cover_photo_url:
        "https://static.thairath.co.th/media/dFQROr7oWzulq5FZYSepvl9DB1i50K00ibBJqUkYfxOBstWhhRdHMHEXFnVVFNc9GiG.webp",
      post_content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metusPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metusPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus",
      post_like_count: 23,
      post_comment_count: 212,
    },
    {
      author: {
        user_id: "6329fedcc3479021a8d8d1e4",
        username: "kankasem",
        profile_pic_url:
          "https://image.sistacafe.com/w800/images/uploads/summary/image/5043/1449106947-Instagrams-most-famous-cat-Nala16__605.jpg",
      },
      post_title:
        "สวัสดีครับ3Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum congue ipsum enim, quis sagittis diam dapibus vitae. Nam convallis mollis consectetur. Donec dictum lobortis nibh, et fermentum nisl laoreet ut. Sed metus lectus, viverra gravida mattis sit amet, fringilla ",
      cover_photo_url:
        "https://www.central.co.th/e-shopping/storage/2020/12/CUTE-KITTY.jpg",
      post_content:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum congue ipsum enim, quis sagittis diam dapibus vitae. Nam convallis mollis consectetur. Donec dictum lobortis nibh, et fermentum nisl laoreet ut. Sed metus lectus, viverra gravida mattis sit amet, fringilla elementum lectus. Quisque et pharetra ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non turpis ac mauris commodo scelerisque. Maecenas ut sem sed diam placerat facilisis. Phasellus aliquet vehicula tortor pretium viverra. Morbi tincidunt imperdiet purus, a lobortis nisi auctor eget. Sed pulvinar sollicitudin erat feugiat dictum. Cras purus nisi, sagittis non accumsan id, volutpat nec ipsum. Nunc blandit ante ac velit dictum pretium. Integer neque dui, mattis eu diam sit amet, scelerisque dignissim lacus.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metusPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus",
      post_like_count: 20,
      post_comment_count: 2,
    },
  ];
  const [category, setCategory] = useState([true, false, false, false, false]);
  const [topic, setTopic] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const maikan = false;
  const [followtopic, setFollowtopic] = useState(false);

  const category_select = (category_number) => {
    if (category[category_number] !== true) {
      setCategory((prevdata) =>
        prevdata.map((data, idx) => (idx === category_number ? true : false))
      );
    }
  };

  const topic_select = (topic_number) => {
    if (topic[topic_number] !== true) {
      setTopic((prevdata) =>
        prevdata.map((data, idx) => (idx === topic_number ? true : false))
      );
    }
  };

  return (
    <PostData.Provider postdata={testdata}>
      <div className="Home_page">
        <div className="home_test">
          <div className="Nav_home">
            <NavBar />
            {/* <ScrollRestoration /> */}
          </div>
          <div className="home_search">
            <div className="home_search_box">
              <h1 className="home_search_title">
                Exchange and meet through this endless KU's colony !
              </h1>
              <div className="home_search_input">
                <form>
                  <input
                    type="text"
                    required
                    className="search_input"
                    placeholder="Search"
                  />
                  <button className="search-button">
                    <img src={search} width="14px" height="14px" alt="" />
                  </button>
                </form>
              </div>
            </div>
            <div className="think_img_box">
              <img
                src={Think}
                alt="Girl in a jacket"
                className="think_img_photo"
              ></img>
            </div>
          </div>
          <nav className="Nav_topic">
            <div
              className={`${category[0] ? "current_category" : null}`}
              onClick={() => category_select(0)}
            >
              General
            </div>
            <div
              className={`${category[1] ? "current_category" : null}`}
              onClick={() => category_select(1)}
            >
              Learning
            </div>
            <div
              className={`${category[2] ? "current_category" : null}`}
              onClick={() => category_select(2)}
            >
              News
            </div>
            <div
              className={`${category[3] ? "current_category" : null}`}
              onClick={() => category_select(3)}
            >
              Market
            </div>
            <div
              className={`${category[4] ? "current_category" : null}`}
              onClick={() => category_select(4)}
            >
              Faculty
            </div>
          </nav>
          <div className="Home_post">
            <form
              className={`home_checkbox ${category[0] ? "display_none" : null}`}
            >
              <input
                type="checkbox"
                onClick={() => setFollowtopic(!followtopic)}
              ></input>
              <label>Show following topics only</label>
            </form>
            <div className={`${category[4] ? "post_faculty" : null}`}>
              {/* ใส่ตอนมีข้อมูลให้ fetch */}
              {/* <div
                className={`loader ${displayload ? "display_none" : null}`}
              ></div> */}

              <Post_generator data={testdata} />
              {/* <Post_generator data={post_data} /> */}
            </div>
          </div>
          <div
            className={`home_sidebar ${category[4] ? null : "display_none"}`}
          >
            <div>
              <ul className="select_faculty">
                <li
                  className={`${topic[0] ? "current_topic" : null}`}
                  onClick={() => topic_select(0)}
                >
                  Agriculture
                </li>
                <li
                  className={`${topic[1] ? "current_topic" : null}`}
                  onClick={() => topic_select(1)}
                >
                  Agro-Industry
                </li>
                <li
                  className={`${topic[2] ? "current_topic" : null}`}
                  onClick={() => topic_select(2)}
                >
                  Architecture
                </li>
                <li
                  className={`${topic[3] ? "current_topic" : null}`}
                  onClick={() => topic_select(3)}
                >
                  Business Administration
                </li>
                <li
                  className={`${topic[4] ? "current_topic" : null}`}
                  onClick={() => topic_select(4)}
                >
                  Econimics
                </li>
                <li
                  className={`${topic[5] ? "current_topic" : null}`}
                  onClick={() => topic_select(5)}
                >
                  Environment
                </li>
                <li
                  className={`${topic[6] ? "current_topic" : null}`}
                  onClick={() => topic_select(6)}
                >
                  Forestry
                </li>
                <li
                  className={`${topic[7] ? "current_topic" : null}`}
                  onClick={() => topic_select(7)}
                >
                  Humanities
                </li>
                <li
                  className={`${topic[8] ? "current_topic" : null}`}
                  onClick={() => topic_select(8)}
                >
                  Science
                </li>
                <li
                  className={`${topic[9] ? "current_topic" : null}`}
                  onClick={() => topic_select(9)}
                >
                  Social science
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PostData.Provider>
  );
}

export default Home;
