import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import "./Home.css";
import Think from "../picture/think.png";
import Homebackground from "../picture/home_title_background.png";
import search from "../picture/search.png";
import Post_generator from "../components/Post_generator";
import PostData from "../PostData";
import Miniprofile from "../components/Miniprofile";
import { Link } from "react-router-dom";
import { FaPassport } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
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
  const [showtopic, setShowtopic] = useState(false);
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

  const [followtopic, setFollowtopic] = useState(false);

  const [topicarray, setTopicarray] = useState([
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
  ]);

  const [topic, setTopic] = useState([]);
  const [count, setCount] = useState(false);
  const [searchresult, setSearchresult] = useState("");
  const category_select = (category_number) => {
    if (category[category_number] !== true) {
      setCategory((prevdata) =>
        prevdata.map((data, idx) => (idx === category_number ? true : false))
      );
    }

    // fetchข้อมูลมาก่อนแล้วค่อย set state
    setTopic(
      topicarray.map((data, idx) => {
        if (idx === 0) {
          return true;
        } else {
          return false;
        }
      })
    );
  };

  const topic_select = (topic_number) => {
    if (topic[topic_number] !== true) {
      setTopic((prevdata) =>
        prevdata.map((data, idx) => (idx === topic_number ? true : false))
      );
    }
  };

  const resultinput = (e) => {
    setSearchresult(e.target.value);
    setCount(false);
  };

  const topic_selectbysearch = (data) => {
    const indexoftext = topicarray.indexOf(data);
    topic_select(indexoftext);
    setSearchresult(topicarray[indexoftext]);
  };
  // <Link to="/search">search </Link>

  return (
    <PostData.Provider postdata={testdata}>
      <div className="Home_page">
        <div className="home_test">
          <div className="Nav_home">
            <NavBar />
            {/* <ScrollRestoration /> */}
          </div>

          <div className="home_search">
            <div className="home_search_center">
              <div className="home_search_box">
                <h1 className="home_search_title">Share & Explore</h1>
                <h3>thorugh this endless KU's community !</h3>
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
          <div className="home_Content">
            <div
              className={`home_sidebar ${category[0] ? "display_none" : null}`}
            >
              <div>
                <form
                  className={`home_checkbox ${
                    category[0] ? "display_none" : null
                  }`}
                >
                  <input
                    type="checkbox"
                    onClick={() => setFollowtopic(!followtopic)}
                  ></input>
                  <label>Show following topics only</label>
                </form>
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
                              <div>
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
                              <div>
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
                          className={`${topic[idx] ? "current_topic" : null}  ${
                            showtopic ? null : "display_none"
                          }`}
                          onClick={() => topic_select(idx)}
                        >
                          {data}
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
            <div className="Home_post">
              <div className={`${category[0] ? null : "post_faculty"}`}>
                {/* ใส่ตอนมีข้อมูลให้ fetch */}
                {/* <div
                className={`loader ${displayload ? "display_none" : null}`}
              ></div> */}

                <Post_generator data={testdata} />
                {/* <Post_generator data={post_data} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PostData.Provider>
  );
}

export default Home;
