import React from 'react'

const Navbar = ({ setActiveSection }) => {

  return (
    <div className='navbar'>

      <div className='section-buttons'>
        <div className='logo-button' onClick={() => setActiveSection('home')}>
          <h5>سيارتك</h5>
        </div>

        <div className='section-button' onClick={() => setActiveSection('about')}>
          <h5>من نحن</h5>
        </div>

        <div className='section-button' onClick={() => setActiveSection('features')}>
          <h5>مميزات التطبيق</h5>
        </div>

        <div className='section-button' onClick={() => setActiveSection('contact')}>
          <h5>تواصل معنا</h5>
        </div>
      </div>
           
    </div>
  )
}

export default Navbar