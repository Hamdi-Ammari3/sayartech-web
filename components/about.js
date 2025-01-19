import React from 'react'
import Image from 'next/image'
import aboutImage from '../images/about-image.jpg'

const About = () => {
  return (
    <div className='main-section-container'>
        <div className='main-section-text-box'>
            <p>
            في <b>سيارتك</b>، نحن فريق من المحترفين الملتزمين بتقديم حلول نقل مبتكرة وآمنة. تأسست شركتنا بهدف تسهيل حياة أولياء الأمور وتوفير وسيلة مريحة وآمنة لنقل أطفالهم إلى المدارس. نعمل بشغف على تقديم أفضل الخدمات باستخدام أحدث التقنيات، مع التركيز على السلامة والراحة. نحن أكثر من مجرد تطبيق، نحن شريككم في رحلاتكم اليومية
            </p>
        </div>
        <div className='main-section-image-box'>
          <Image src={aboutImage} alt='about-image' width={450} height={450}/>
        </div>
    </div>
  )
}

export default About