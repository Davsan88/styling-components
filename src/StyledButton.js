import React from 'react'

const StyledButton = () => {
    const StyledHeading = {
        textAlign: 'center',
        color: 'darkgreen',
        backgroundColor: 'darkyellow'
    }
    const StyledButton = {
        padding: '8px 12px',
        border: '2px solid black'
        borderRadius: '8px' 
        color: 'darkgreen',
        backgroundColor: 'darkyellow'
    }
  
    return (
    <div>
        <h1>I'm the One Who Knocks</h1>
        <button>Knock</button>      
    </div>
  )
}

export default StyledButton
