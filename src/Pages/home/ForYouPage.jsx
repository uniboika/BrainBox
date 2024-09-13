// ForYouPage.js
import React from "react";
import Post from "./Post";

import logo2 from "../../assets/logo2.jpg";
import logo from "../../assets/logo.png";
import dp from "../../assets/dp.jpg";
import me from "../../assets/babale.jpeg";
import bigbro from "../../assets/bigbro.jpg";
import yusuf from "../../assets/yusuf.jpg";
import mac from "../../assets/mac.jpg";
import mate from "../../assets/class mate.jpg";
import chiken from "../../assets/chicken.jpg";
import nagudu from "../../assets/nagudu.JPG";
import auwal from "../../assets/yaauwal.JPG";
import fam from "../../assets/fam.jpg";
import latest from "../../assets/latest.jpg";
import dadi from "../../assets/dadi.JPG";
import bihub from "../../assets/bihub.JPG";
import abbaboss from "../../assets/abbaboss.JPG";

export default function ForYouPage() {
 const posts = [
   {
     author: "Nazif Abdullahi",
     profileImage: dp,
     caption: "I love Nigeria",
     date: "Jan 30",
     userName: "@Uniboika",
     postImage: me,
   },
   {
     author: "Muhammad Abdullahi",
     profileImage: abbaboss,
     caption: "Brainstorm IT Solutions",
     date: "Aug 15",
     userName: "@Uniboika",
     postImage: bihub,
   },
   {
     author: "Abdulsalam Abubakar",
     profileImage: dadi,
     caption: "babale suits",
     date: "Aug 15",
     userName: "@abdulfreeman",
     postImage: nagudu,
   },
   {
     author: "BrainBox",
     profileImage: logo2,
     caption: "New Logo",
     date: "Jun 30",
     userName: "@brainbox",
     postImage: logo2,
   },
   {
     author: "Auwal Tijjani",
     profileImage: auwal,
     caption: "C.E.O",
     date: "1s",
     userName: "@auwaltee",
     postImage: bigbro,
   },

   {
     author: "Jamila abdullahi",
     profileImage: latest,
     caption: "Fam",
     date: "Aug 30",
     userName: "@meelarh",
     postImage: fam,
   },
   {
     author: "Yusuf Abdulslam",
     profileImage: yusuf,
     storyImage: mate,
     caption: "Brainbox",
     date: "Aug 15",
     userName: "@Uniboika",
     postImage: logo,
   },
   {
     author: "Sadik Abubakar",
     profileImage: mac,
     caption: "With my gees",
     date: "Aug 15",
     userName: "@Uniboika",
     postImage: chiken,
   },
 ];
  return (
    <div>
      <Post posts={posts} />
    </div>
  );
}
