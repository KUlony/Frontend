import React from "react";
import Navbar from "../components/NavBar";
import Post_generator from "../components/Post_generator";
import "./Search.css";
import search from "../picture/search.png";

function Search() {
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

  return (
    <div className="search_page">
      <div className="search_page_scoll">
        <div className="search_page_navkulony">
          <Navbar />
        </div>
        <div className="search_page_navbar">
          <nav className="search_page_topic_nav">
            <form>
              <input
                type="text"
                required
                className="search_page_input"
                placeholder="Search"
              />
              <button className="search_page_button">
                <img src={search} width="14px" height="14px" alt="" />
              </button>
            </form>
            <div className="search_page_nav_topic">
              <ul>
                <li>Post</li>
                <li>User</li>
                <li>Topics</li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="search_page_content">
          <Post_generator data={testdata} />
        </div>
      </div>
    </div>
  );
}

export default Search;
