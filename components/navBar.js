import React from 'react'
import { CiLogout } from "react-icons/ci"
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter();
  const logoutHandler = () => {
    localStorage.removeItem('adminLoggedIn');
    router.push('/login');
  }
  return (
    <div className='navbar'>
        <div className='navbar_logo_div'>
            <h2>Sayartech</h2>
        </div>
        <div className='navbar_user_box'>
          <h5>مدرسة النخيل الاهلية</h5>
          <button onClick={logoutHandler}>
            <p>خروج</p>
            <CiLogout style={{color:'#000',fontSize:15}} />
          </button>
        </div>
    </div>
  )
}

export default Navbar