import React from 'react'



const StyledButton = () => {
    const isDisabled = false

    const headingStyle = {
        textAlign: 'center',
        color: 'darkgreen',
        backgroundColor: 'yellow'
    }
    const buttonStyle = {
        padding: '8px 12px',
        border: '2px solid black',
        borderRadius: '8px', 
        color: 'darkgreen',
        backgroundColor: 'yellow'
    }
  
    return (
    <div>
        <h1 style={headingStyle}>I'm the One Who Knocks</h1>
        <button style={buttonStyle} disable={isDisabled} className='knockBtn'>Knock</button>      
    </div>
  )
}

export default StyledButton
