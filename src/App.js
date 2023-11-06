
import {v4 as uuidv4} from 'uuid'
import Header from "./Components/Header";
import React, { useState } from "react";
import FeedBackData from './Data/Feedbackdata';
import Feedbacklist from "./Components/Feedbacklist";
import FeedBackStats from "./Components/FeedBackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from './Pages/AboutPage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {

  const [feedback,setFeedback]=useState(FeedBackData);
  const deleteFeedback=(id) =>{
    if(window.confirm("Are you sure you want to delete ?")){
      setFeedback(feedback.filter((item)=>item.id !== id))
    }
  }

  const addFeedback=(newfeedback)=>{
       newfeedback.id=uuidv4()
      setFeedback([newfeedback, ...feedback])
  }
  return (

   <Router>
   <Header />
    <div className='container'>
      <FeedbackForm handleAdd={addFeedback}/>
      <FeedBackStats feedback={feedback}/>
    <Feedbacklist feedback={feedback} handleDelete={deleteFeedback}/>
   </div>
   </Router>
  
  );
}

export default App;
