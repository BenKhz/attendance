import React from 'react';

const EnrollView = () => {
  return (
    <div id='enrollView'>
    You're on enrollView
        <Link to='/attendView'>
          <Button onClick={()=>{ console.log('Clicked!')}}> Click Me! </Button>
        </Link>
    </div>
  )
}

export default EnrollView;