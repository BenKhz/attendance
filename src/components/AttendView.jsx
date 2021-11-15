import React from 'react';
import {Link} from 'react-router-dom'

const AttendView = () => {
  return (
    <div id='attendView'>
      <Link to='/enrollView'>
          <Button onClick={()=>{ console.log('Clicked!')}}> Click Me! </Button>
      </Link>
    </div>
  )
}

export default AttendView;