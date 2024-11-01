
import React from 'react'
import Link from 'next/link'



const NavBar = () => {
  return (
    <div className='home'>
     <nav>
       <ul style={{display:"flex",gap:"1rem"}}>
        
          <li><Link href="/"><b>Home</b></Link></li>
          <li><Link href="/About"><b>About</b></Link></li>
          <li><Link href="/Contactus"><b>Contact us</b></Link></li>
         <li><Link href="/services"><b>Services</b></Link></li> 
         <li><Link href="/services/Freelancingservices"><b>Freelancingservices</b></Link></li> 

        
      </ul>
      </nav>
    </div>
  )
}

export default NavBar