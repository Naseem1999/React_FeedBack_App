import { createContext,useState,useEffect } from "react";
import { json } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const FeedBackContext=createContext();

export const FeedbackProvider=({children})=>{
    const [isLoading,setIsLoading]=useState(true);
    const [feedback,setFeedback]=useState([])

    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
    })
    useEffect(()=>{
     fetchFeedback();
    },[])
    const fetchFeedback= async()=>{
      const response=await fetch(`/feedback?_sort=id&_order=desc`)
      const data=await response.json();
      setFeedback(data);
      setIsLoading(false)
    }
    const EditFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    const deleteFeedback = async(id) => {
        
        if (window.confirm("Are you sure you want to delete ?")) 
        {
            await fetch(`/feedback/${id}`,{method:'DELETE'})
            setFeedback(feedback.filter((item) => item.id !== id));
        }
      };
      const updateFeedbackItem=async(id,updItem)=>{
         const response=await fetch(`/feedback/${id}`,{
            method:'PUT',
            headers:{
            'Content-Type':'application/json'
            },
            body:JSON.stringify(updItem)
         })

         const data=await response.json();  
        setFeedback(
            feedback.map((item)=>  item.id ===id ?  {...item,...data}  :  item )
            
        )
      }
      const addFeedback = async (newfeedback) => {

        const response=await fetch("/feedback",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newfeedback)
        })
       const data=await response.json();
        setFeedback([data, ...feedback]);
      };    
    return <FeedBackContext.Provider value={{feedback,feedbackEdit,isLoading,deleteFeedback,addFeedback,EditFeedback,updateFeedbackItem}}>
        {children}
    </FeedBackContext.Provider>
}


export default FeedBackContext;