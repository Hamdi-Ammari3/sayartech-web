'use client'
import React,{useState,useEffect} from 'react'
import {useRouter} from 'next/navigation'
import ClipLoader from "react-spinners/ClipLoader"
import './style.css'
import Navbar from '../components/navBar'
import Main from '../components/main'
import Students from '../components/students'
import Drivers from '../components/drivers'
import Schools from '../components/schools'
import Email from '../components/email'
import PrivateCarRequest from '../components/privateCarRequest'

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeSection,setActiveSection] = useState('الرئيسية')
  const router = useRouter();


useEffect(() => {
  // Check if admin is logged in
  const adminLoggedIn = localStorage.getItem('adminLoggedIn');
  if (!adminLoggedIn) {
    router.push('/login'); // Redirect to login page if not authenticated
  } else {
    setIsAuthenticated(true); // Allow access to the dashboard
  }
}, []);


  if (!isAuthenticated) {
    return (
      <div style={{ width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <ClipLoader
        color={'#955BFE'}
        loading={!isAuthenticated}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>   
  )}

  
  // Function to handle select section
  const handleSectionSelect = (section) => {
    setActiveSection(section)
  }

// Function to render section component
  const renderContent = () => {
    switch (activeSection) {
      case 'الرئيسية':
        return <Main/>
      case 'الطلاب' :
        return <Students/>
      case 'السواق':
        return <Drivers/>
      case 'ارسال بلاغ':
        return <Email/>
      case 'طلب سيارات خاصة':
        return <PrivateCarRequest/>
      default:
        return <Main/>
    }
  }

  return (
    <div className='dashboard-container'>
      <Navbar/>
      <div className='main-box'>
        <div className='side-box'>
          <div>

            <div
              onClick={() => handleSectionSelect('الرئيسية')}
              className={activeSection === 'الرئيسية' ? 'active':''}
            >
              <h4 >الرئيسية</h4>
            </div>

            <div
              onClick={() => handleSectionSelect('الطلاب')}
              className={activeSection === 'الطلاب' ? 'active':''}
            >
              <h4 >الطلاب</h4>
            </div>

            <div
              onClick={() => handleSectionSelect('السواق')}
              className={activeSection === 'السواق' ? 'active':''}
            >
              <h4 >السواق</h4>
            </div>
            
            <div
              onClick={() => handleSectionSelect('ارسال بلاغ')}
              className={activeSection === 'ارسال بلاغ' ? 'active':''}
            >
              <h4 >ارسال بلاغ</h4>
            </div>

            <div
              onClick={() => handleSectionSelect('طلب سيارات خاصة')}
              className={activeSection === 'طلب سيارات خاصة' ? 'active':''}
            >
              <h4 >طلب سيارات خاصة</h4>
            </div>

          </div>
        </div>
        <div className='inner-box'>
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default Dashboard