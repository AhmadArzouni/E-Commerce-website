import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='row1'>


<div className="col1">
<h3>
						Download Our App
					</h3>
					<p>
						Download App for Android and Ios mobile phone.
					</p>
					<div className='app-logo'>
                    
						<img src='/assets/a.png'/>
					</div>
</div>
<div className="col1">
<h3>
						Useful links
					</h3>
					<ul type="none">
                    <li><a href=''>Coupons</a></li>
                        <li><a href=''>Blog Post</a></li>
                       <li> <a href=''>Return Policy</a></li>
                       <li><a href=''>Join Affiliate</a></li>
						
					</ul>
</div>
<div className="col1">
<h3>
						Follow Us
					</h3>
					<ul type="none">
						
                       <li><a href=''>Facebook</a></li>
                       <li><a href=''>Twitter</a></li>
                       <li><a href=''>Instagram</a></li>
                       <li><a href='https://www.youtube.com/'>Youtube</a></li>

						
					</ul>
</div>




    </div>
  )
}
