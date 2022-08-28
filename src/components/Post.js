import React from "react";
import "./Post.css";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { MdOutlineModeComment } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";

function Post() {
  return (
    <div className="PostBox">
      <div className="Header">
        <div className="UserProfile">Image</div>
        {/* <div class="Report">Report</div> */}
        <div className="TitleHead_box">
          <h4 className="TitleHead">
            รีวิว สาขาวิชา “วิศวกรรมคอมพิวเตอร์” หรือ “Computer Engineering”
            เรียนอะไรบ้าง? จบมาทำงานอะไรได้บ้าง?
          </h4>
        </div>
      </div>

      <p className="Content">
        สวัสดีครับ น้องๆ ทั้งหลาย ที่มีความสนใจในวิชาชีพด้าน “วิศวกรรมศาสตร์”
        ผมคิดว่า น้องๆ หลายๆ คน ส่วนใหญ่คงมีความฝันที่อยากจะทำงานอาชีพเป็น
        “วิศวกร” กันใช่ไหมครับ สำหรับอาชีพ “วิศวกร” นั้น ก็จะมีหลากหลายด้าน
        และหลากหลายสาขา ซึ่งแต่ละสาขานั้น
        ก็จะทำงานในส่วนงานที่ตัวเองเป็นผู้เชี่ยวชาญ สำหรับปัจจุบันนี้ ซึ่งทุกๆ
        คน ก็รู้ดีกันอยู่แล้วใช่ไหมครับ ว่าเป็นยุคที่มาแรงมากๆ ของ
        “เทคโนโลยีด้านคอมพิวเตอร์” เพราะในอนาคตอันใกล้นี้ เครื่องมือ อุปกรณ์
        เครื่องจักร ยานยนต์ หรือ อื่นๆ จะมีการนำ “เทคโนโลยีด้านคอมพิวเตอร์”
        เข้ามามีบทบาทมากขึ้น เพราะฉะนั้น “สาขาวิศวกรรมศาสตร์”
        สาขาหนึ่งที่กำลังเป็นที่นิยมเป็นอย่างมากๆ นั้นก็คือ.....
      </p>

      <div class="FakeImage">Image</div>

      <h4 class="Topic">Topics : Engineering, รีวิวการเรียน</h4>

      <FcLikePlaceholder class="Like" size={30} />
      {/* <FcLike class='Liked' size={30}/> */}
      <div class="LikeCount">123</div>

      <MdOutlineModeComment class="Comment" size={30} />
      <div class="CommentCount">123</div>

      <AiOutlineShareAlt class="Share" size={30} />

      <div class="More">View more</div>
    </div>
  );
}

export default Post;
