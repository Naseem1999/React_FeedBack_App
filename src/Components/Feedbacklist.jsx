import {motion,AnimatePresence} from 'framer-motion'
import React from 'react'
import Feedbackitem from './FeedbackItem'
import { useContext } from 'react'
import FeedBackContext from './Context/Feedbackcontext'
import Spinner from './Shared/Spinner'

const Feedbacklist = () => {
   

  const {feedback,isLoading }=useContext(FeedBackContext);
    if(!isLoading && (!feedback || feedback.length===0)){
        return <p>No Feedback Yet</p>
    }

   return isLoading ? (<Spinner/>) : (
   
   <div className='feedback-list'>
   <AnimatePresence>
     {feedback.map((item) => (
       <motion.div
         key={item.id}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
       >
         <Feedbackitem
           key={item.id}
           item={item}
           
         />
       </motion.div>
     ))}
   </AnimatePresence>
 </div>
 ) 
    


  // return <div className='feedback-list'>
  //   {feedback.map((item)=>{
  //      return <Feedbackitem key={item.id} item={item} handleDelete={handleDelete}/>
  //   })}
  // </div>
  
}


export default Feedbacklist