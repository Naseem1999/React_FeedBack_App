import React, { useState,useContext ,useEffect  } from 'react'
import Card from './Shared/Card'
import Button from './Shared/Button';
import RatingSelect from './RatingSelect';
import FeedBackContext from './Context/Feedbackcontext';
const FeedbackForm = () => {
 const {addFeedback,feedbackEdit,updateFeedbackItem}=useContext(FeedBackContext);
    useEffect(()=>{
        console.log("hello")
        if(feedbackEdit.edit===true){
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    },[feedbackEdit])   

    const [text,setText]=useState('');
    const [btnDisabled,setBtnDisabled]=useState(true)
    const [message,setMessage]=useState('Hello');
    const [rating,setRating]=useState(10);

   
    const handleTextChange=(e)=>{
        if(text===''){
            setBtnDisabled(true);
            setMessage(null)
        }else if(text !== '' && text.trim().length <=10){
            setMessage("Text must be atleat 10 chracters")
            setBtnDisabled(true)
        }else{
           setMessage(null);
           setBtnDisabled(false);

        }
     setText(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text.trim().length >10){
            const newfeddback={
                text,
                rating
            }
            if(feedbackEdit.edit===true){
                updateFeedbackItem(feedbackEdit.item.id,newfeddback)
            }else{
                 addFeedback(newfeddback) 
            }
            
            setText('');
            feedbackEdit.edit=false;
        }
      
    }
  return (
    <Card>
        <form action="" onSubmit={handleSubmit}>
            <h4>How would You Rate Your service With US?</h4>
             <RatingSelect select={(rating)=>setRating(rating)}/>
            <div className='input-group'>
                <input onChange={handleTextChange} value={text} type="text" placeholder='Write a review' />
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div  className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm