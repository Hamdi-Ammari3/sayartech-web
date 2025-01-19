import React from 'react'
import Image from 'next/image'
import contactImage from '../images/contact-image.jpg'

const Contact = () => {
  return (
    <div className='main-section-container'>
        <div className='main-section-text-box'>
            <p>
            للتواصل معنا، نحن دائمًا هنا لخدمتكم. يمكنكم التواصل معنا عبر الواتساب على الرقم: <b dir="ltr">+964 771 420 0085</b> أو إرسال بريد إلكتروني إلى <b>support@sayartech.com</b>
            </p>
            <p>
                نسعد بالإجابة على جميع استفساراتكم وملاحظاتكم لضمان تقديم أفضل خدمة ممكنة
            </p>
        </div>
        <div className='main-section-image-box'>
          <Image src={contactImage} alt='about-image' width={450} height={450}/>
        </div>
    </div>
  )
}

export default Contact