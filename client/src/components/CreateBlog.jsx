import "../App.css";
import React, { useState } from 'react';
import AddIcon from "@mui/icons-material/Add";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import { useRightSide } from './RightSideContext';
// import RightSide from './RightSide'
export default function CreateBlog() {
  const [image, setImage] = useState("./images.jpg");
  const [title, setTitle] = useState("");
  const [write, setWrite] = useState("");
  const[txt,setTxt]=useState()
  const { addCard } = useRightSide();
  const [showFileInput, setShowFileInput] = useState(false);
  function handleclick() {
    setShowFileInput(true);
  }
  function handleChange(e) {
    
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
    setShowFileInput(false);
  }
  function handlebutton()
  {
        // RightSide.addCard()
        addCard({ title: title, description: write,image:image});
        
        setTitle("");
        setWrite("");


  }
  const handletitlechange = (event) => {
    setTitle(event.target.value);

  };
  function handlewritechange(e) {
     
    setWrite(e.target.value);
  }
 
  return (
    <>
      <img
        src={image}
        height="250px"
        style={{ width: "100vw", paddingTop: 0, padding: 0 }}
      ></img>
      <center>
      <input type='text' placeholder='Title' style={{ width: "50vw", paddingTop: 20, padding: 20}} onChange={handletitlechange} value={title}/>
      <div className="containere">
        <AddIcon fontSize="large" onClick={handleclick}></AddIcon>
        {showFileInput && <input type="file" onChange={handleChange} />}
        <textarea rows="15" cols="50" onChange={handlewritechange} style={{ width: "100vw", paddingTop: 10, padding: 10 }} value={write}>  Tell your story.....  </textarea>
        <br></br>
      </div>
      </center>
      <center><button type="button" onClick={handlebutton}>Publish</button></center>
     
    </>
  );
}





