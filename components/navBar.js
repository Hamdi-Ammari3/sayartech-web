import React from 'react'
import Image from 'next/image'
import logo from '../images/logo.jpeg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar_logo_div'>
            <h2>Sayartech</h2>
        </div>
        <div>
          <h5>مدرسة النخيل الاهلية</h5>
        </div>
    </div>
  )
}

export default Navbar