import './ToolBar.css';
import 'material-icons/css/material-icons.css';
import React, { useState } from 'react';

function ToolBar() {  
  const [isChecked, setIsChecked] = useState(false);
  const hamburgerChecked = () => {
    setIsChecked(!isChecked);
  };
      return(
        <div className='container'>
            <div className='button-wrapper'>
              <button type='button' className='component-button'><span class="material-icons-outlined">trending_up</span></button>
              <button type='button' className='component-button'><span class="material-icons-outlined">thermostat</span></button>
              <button type='button' className='component-button'><span class="material-icons-outlined">speed</span></button>
              <button type='button' className='component-button'><span class="material-icons-outlined">map</span></button>
              <button type='button' className='component-button'><span class="material-icons-outlined">rocket</span></button>
            </div>
            <div className='hamburger-wrapper'>    
              <label className='hamburger-menu'>
                  <input type='checkbox' checked={isChecked} onChange={hamburgerChecked}></input>
              </label>
              
              <aside className='sidebar'>
                  <nav className='sidebar-details'>
                    <div className={isChecked ? 'sidebar-text checked' : 'sidebar-text'}><div className='text-border'> Graph</div></div>
                    <div className={isChecked ? 'sidebar-text checked' : 'sidebar-text'}><div className='text-border'> Temperature</div></div>
                    <div className={isChecked ? 'sidebar-text checked' : 'sidebar-text'}><div className='text-border'> Speed</div></div>
                    <div className={isChecked ? 'sidebar-text checked' : 'sidebar-text'}><div className='text-border'> Map</div></div>
                    <div className={isChecked ? 'sidebar-text checked' : 'sidebar-text'}><div className='text-border'> Orientation</div></div>
                  </nav>
              </aside>
            </div>
        </div>
      );
  }
  

export default ToolBar;
