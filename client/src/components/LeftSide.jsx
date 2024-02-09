import React from "react";
import List from "@mui/material/List";
import "../App.css";
import LeftCard from "./LeftCard";
import CreateBlog from "./CreateBlog";

import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";

// const style = {
//   p: 0,
//   width: "100%",
//   maxWidth: 360,
//   borderRadius: 2,
//   border: "1px solid",
//   borderColor: "divider",
//   backgroundColor: "background.paper",
// };
const style = {
  p: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "black", // Change background color to black
  color: "white", // Change text color to white
};
export default function LeftSide() {
  // function createblog()
  // {
  //    navigate('/blog')
  // }

//   return (
//     <>
//       <BrowserRouter>
       
//         <Card></Card>
//         <Routes>
//           <Route path="/blog" element={<CreateBlog />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

  return (
    <>
      <BrowserRouter>
        <div className="app-container2">
        <Routes>
            <Route path="/blog" element={<CreateBlog />} />
          </Routes>
          <div className="cards-wrapper">
            <Card />
          </div>
         
        </div>
      </BrowserRouter>
    </>
  );}

function Card() {
  const navigate = useNavigate();
  function allcategories() {
    navigate("/blog");
  }

  return (
    <>
      <div >
        <div className="createblog">
          <List sx={style} aria-label="mailbox folders">
            <LeftCard
              title="Create A Blog"
              primary="Create A Blog"
              onClick={() => {
                navigate("/blog");
              }}
            ></LeftCard>
            <LeftCard
              title="All Categories"
              primary="All Categories"
              onClick={allcategories}
            ></LeftCard>
            <LeftCard title="Music" primary="Music"></LeftCard>
            <LeftCard
              title="Movie"
              primary="Movie"
              onClick={allcategories}
            ></LeftCard>
            <LeftCard
              title="Tech"
              primary="Tech"
              onClick={allcategories}
            ></LeftCard>
            <LeftCard
              title="Fashion"
              primary="Fashion"
              onClick={allcategories}
            ></LeftCard>
          </List>
        </div>
        <div className="options"></div>
      </div>
    </>
  );
}
