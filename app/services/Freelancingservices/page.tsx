import React from 'react'
import cssStyles from "./Freelancingservics.module.css"

console.log(cssStyles,"CSS-Styles")

function Freelancingservicespage ()  {
  return (
    <div className='free'>
      <h1 className={cssStyles.free}><i><b>Our freelancing services</b></i></h1>
      <h2>Freelancing services</h2>
      <p>we are dedicated and experiene (5 years) [Graphics designing, content writing,SEO,Video editing,wordpress website developer,Digital marketing]
        we are specialize in list key skills service, and we are passionate about helping clients achieve their gols through innovative
        and effective solutions

        <h1 >service we offer </h1><br/>
        <ul>
            <li>Graphics designing</li><br/>
            <li> Content writing</li><br/>
            <li>SEO</li><br/>
            <li>Video editing</li><br/>
            <li>wordpress website developer</li><br/>
            <li>Digital marketing</li><br/>
        </ul>
      </p>
    </div>
    
  )
}

export default  Freelancingservicespage















