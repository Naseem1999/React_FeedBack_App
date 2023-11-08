
import {FaTimes,FaEdit} from 'react-icons/fa' 
import Card from './Shared/Card'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedBackContext from './Context/Feedbackcontext'
const FeedbackItem = ({item }) => {
  const {deleteFeedback,EditFeedback}=useContext(FeedBackContext);
  return (
    <>
    <Card>
        <div className='num-display'>{item.rating}</div>
        <button onClick={()=>deleteFeedback(item.id)} className='close'>
          <FaTimes color='purple'/>
        </button>
        <button onClick={()=>EditFeedback(item)} className='edit'>
            <FaEdit color='purple'/> 
        </button>
        <div className='text-display'>{item.text}</div>
      
    </Card>
    </>
  )
}

FeedbackItem.propTypes={
  item:PropTypes.object.isRequired,
}


export default FeedbackItem