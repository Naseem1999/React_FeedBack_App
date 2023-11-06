import React from 'react'
import PropTypes from 'prop-types'
const Header = () => {
  return (

    <header style={{backgroundColor:"black",color:"#ff6a95"}}>
     <div className='container'>
        <div>FeedBack UI</div>
     </div>

    </header>
    
    
  )
}

Header.defaultProps={
    text:"Feed back UI"
}

Header.propTypes ={
    text:PropTypes.string
}

export default Header