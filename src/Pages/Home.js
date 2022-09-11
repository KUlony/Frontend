import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import "./Home.css";
import Think from "../picture/think.png";
import search from "../picture/search.png";
import Post_generator from "../components/Post_generator";

function Home() {
  const [displayProfile, setdisplayProfile] = useState("none");
  const testdata = [
    {
      post_title:
        "    โครงสร้างของบทความวิจัย  (research paper) มีดังนี้ บางบทความใช้เลขหมายกำกับ หรือเขียนอภิปรายตามหัวข้อปัญหาวิจัย หรือคำถามวิจัย (research questions)",
      cover_photo_url: "url",
      post_content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metusPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metusPellentesque habitant morbi tristique senectus et netus et malesuada fames ac sad as dqw as dx wqdq deqw e wq ewq ewq e wq eqw edqw eqw q  qw wqturpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus",
      like: 45,
    },
    {
      post_title: "สวัสดีครับ2",
      cover_photo_url: "url",
      post_content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metusPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metusPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus",
      like: 23,
    },
    {
      post_title: "สวัสดีครับ3",
      cover_photo_url: "url",
      post_content:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum congue ipsum enim, quis sagittis diam dapibus vitae. Nam convallis mollis consectetur. Donec dictum lobortis nibh, et fermentum nisl laoreet ut. Sed metus lectus, viverra gravida mattis sit amet, fringilla elementum lectus. Quisque et pharetra ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non turpis ac mauris commodo scelerisque. Maecenas ut sem sed diam placerat facilisis. Phasellus aliquet vehicula tortor pretium viverra. Morbi tincidunt imperdiet purus, a lobortis nisi auctor eget. Sed pulvinar sollicitudin erat feugiat dictum. Cras purus nisi, sagittis non accumsan id, volutpat nec ipsum. Nunc blandit ante ac velit dictum pretium. Integer neque dui, mattis eu diam sit amet, scelerisque dignissim lacus.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metusPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus",
      like: 20,
    },
  ];

  const display = () => {
    setdisplayProfile("open");
  };
  return (
    <div className="Home_page">
      <div className="home_test">
        <div className="Nav_home">
          <NavBar />
        </div>
        <div className="home_search">
          <div className="home_search_box">
            <h1 className="home_search_title">Kulony Best Community</h1>
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
          <div className="think_img_box" onClick={display}>
            <img
              src={Think}
              alt="Girl in a jacket"
              className="think_img_photo"
            ></img>
          </div>
        </div>
        <nav className="Nav_topic">
          <div className="Topic">Discover</div>
          <div className="Topic">General</div>
        </nav>
        <div className="Home_post">
          <Post_generator data={testdata} />
        </div>
        {/* <div className="testpost">
          <div className={`home_post_profile ${displayProfile}`}></div>
        </div>
        <div className={`cover ${displayProfile}`}></div> */}
      </div>
    </div>
  );
}

export default Home;
