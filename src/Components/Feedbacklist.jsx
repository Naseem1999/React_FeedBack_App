import {motion,AnimatePresence} from 'framer-motion'
import React from 'react'
import Feedbackitem from './FeedbackItem'
import PropTypes from 'prop-types'
const Feedbacklist = ({feedback ,handleDelete}) => {

    if(!feedback || feedback.length===0){
        return <p>No Feedback Yet</p>
    }

    return (
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
                handleDelete={handleDelete}
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

Feedbacklist.propTypes={
  feedback:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      text:PropTypes.string.isRequired,
      rating:PropTypes.number.isRequired,
    })
  )
}

export default Feedbacklist