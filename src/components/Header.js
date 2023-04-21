import React from 'react'


function Header() {
  return (
    <header className='display-flex' >
      <div className='logo'><a href="">Logo</a></div>
      
        <ul className='nav display-flex'>
           <li><a href=''>Home</a></li>
           <li><a href=''>About</a></li>
           <li><a href=''>Contacts</a></li>
            
        </ul>

      </header>
   
  )
}

export default Header
