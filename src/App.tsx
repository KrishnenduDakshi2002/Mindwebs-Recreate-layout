import React, { useState } from 'react'
import './dist/css/App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import Footer from './Components/Footer'
const App = () => {
  const [ToggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className='body'>
      <div>
        <Navbar toggleSidebar={()=>setToggleSidebar(prev=>!prev)}/>
      </div>
      {/* visible up to 1280px */}
      <div>
        <Sidebar toggleMiniSidebar={false}/>
      </div>
      {/* visible in range of 820px to 1279px */}
      <div>
        <Sidebar toggleMiniSidebar={true}/>
      </div>
      {/* sliding sidebar */}
      <div className={`${ToggleSidebar ? 'sliding__sidebar__container__slide':'sliding__sidebar__container'}`}>
        <Sidebar toggleMiniSidebar={false} className='sliding__sidebar__button_style'/>
      </div>
      <div>
        <Home/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App