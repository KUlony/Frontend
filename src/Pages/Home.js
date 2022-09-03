import React from "react";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import "./Home.css";
import Think from "../picture/think.png";
import search from "../picture/search.png";
import Post_generator from "../components/Post_generator";

function Home() {
  const testdata = [
    {
      post_title: "สวัสดีครับ1",
      cover_photo_url: "url",
      post_content:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum congue ipsum enim, quis sagittis diam dapibus vitae. Nam convallis mollis consectetur. Donec dictum lobortis nibh, et fermentum nisl laoreet ut. Sed metus lectus, viverra gravida mattis sit amet, fringilla elementum lectus. Quisque et pharetra ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non turpis ac mauris commodo scelerisque. Maecenas ut sem sed diam placerat facilisis. Phasellus aliquet vehicula tortor pretium viverra. Morbi tincidunt imperdiet purus, a lobortis nisi auctor eget. Sed pulvinar sollicitudin erat feugiat dictum. Cras purus nisi, sagittis non accumsan id, volutpat nec ipsum. Nunc blandit ante ac velit dictum pretium. Integer neque dui, mattis eu diam sit amet, scelerisque dignissim lacus.",
      like: 20,
    },
    {
      post_title: "สวัสดีครับ2",
      cover_photo_url: "url",
      post_content:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum congue ipsum enim, quis sagittis diam dapibus vitae. Nam convallis mollis consectetur. Donec dictum lobortis nibh, et fermentum nisl laoreet ut. Sed metus lectus, viverra gravida mattis sit amet, fringilla elementum lectus. Quisque et pharetra ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non turpis ac mauris commodo scelerisque. Maecenas ut sem sed diam placerat facilisis. Phasellus aliquet vehicula tortor pretium viverra. Morbi tincidunt imperdiet purus, a lobortis nisi auctor eget. Sed pulvinar sollicitudin erat feugiat dictum. Cras purus nisi, sagittis non accumsan id, volutpat nec ipsum. Nunc blandit ante ac velit dictum pretium. Integer neque dui, mattis eu diam sit amet, scelerisque dignissim lacus.",
      like: 20,
    },
    {
      post_title: "สวัสดีครับ3",
      cover_photo_url: "url",
      post_content:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum congue ipsum enim, quis sagittis diam dapibus vitae. Nam convallis mollis consectetur. Donec dictum lobortis nibh, et fermentum nisl laoreet ut. Sed metus lectus, viverra gravida mattis sit amet, fringilla elementum lectus. Quisque et pharetra ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non turpis ac mauris commodo scelerisque. Maecenas ut sem sed diam placerat facilisis. Phasellus aliquet vehicula tortor pretium viverra. Morbi tincidunt imperdiet purus, a lobortis nisi auctor eget. Sed pulvinar sollicitudin erat feugiat dictum. Cras purus nisi, sagittis non accumsan id, volutpat nec ipsum. Nunc blandit ante ac velit dictum pretium. Integer neque dui, mattis eu diam sit amet, scelerisque dignissim lacus.",
      like: 20,
    },
  ];
  return (
    <div className="Home_page">
      <div className="Nav_home">
        <NavBar />
      </div>
      <div className="home_search">
        <div className="home_search_lorem">Kulony Best Community</div>
        <img src={Think} alt="Girl in a jacket" className="think_img"></img>
        <div className="home_search_input">
          <form>
            {/* <label>maikan</label> */}
            <input
              type="text"
              required
              className="search_input"
              placeholder="Search"
            />
            <button className="search-button">
              <img src={search} width="10px" height="10px" alt="" />
            </button>
          </form>
        </div>
      </div>
      <div className="Home_post">
        <nav className="Nav_topic">
          <div className="Topic">Discover</div>
          <div className="Topic">General</div>
        </nav>
        <Post_generator data={testdata} />
      </div>
    </div>
  );
}

export default Home;
