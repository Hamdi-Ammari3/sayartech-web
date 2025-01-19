import React from 'react'
import Image from 'next/image'
import appFeature from '../images/app-features-image.jpg'

const Features = () => {
  return (
    <div className='main-section-container'>
        <div className='main-section-text-box'>
            <p>
            يوفر تطبيق <b>سيارتك</b> مجموعة من الخيارات التي تجعل تجربة النقل مريحة وآمنة. تشمل ميزاتنا الحجز الإلكتروني السريع، مع إمكانية التحقق من ملفات السائقين والتأكد من أهليتهم لنقل الأطفال. نوفر لكم اشتراكات محددة الرسوم تضمن الشفافية، بالإضافة إلى خاصية تتبع الموقع في الوقت الفعلي عبر الخريطة. كما يقدم التطبيق نظام إشعارات متكامل لإبقاء أولياء الأمور على اطلاع دائم بجميع التفاصيل
            </p>
        </div>
        <div className='main-section-image-box'>
          <Image src={appFeature} alt='app-feature' width={450} height={450}/>
        </div>
    </div>
  )
}

export default Features