import React, { useContext } from 'react'
import './toggle.css'
import sun from '../../images/sun.png'
import moon from '../../images/moon.png'
import { ThemeContext } from '../../context'
const Toggle = () => {
  const theme = useContext(ThemeContext)
   const darkMode = theme.state.darkMode;
    const handleClick= () =>{
      theme.dispatch({type:"TOGGLE"})
    }
  return (
    <div className='t' style={{border: darkMode && '1px solid red',margin: darkMode && 1}}>
      <img src={sun} alt="" className="t-icon" />
      <img src={moon} alt="" className="t-icon" />
      <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}

export default Toggle
