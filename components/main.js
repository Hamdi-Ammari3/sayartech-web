import React,{useState} from 'react'
import Image from 'next/image'
import { Modal } from "antd"
import appleStore from '../images/app-store.png'
import googlePlay from '../images/google-store.png'
import googleQRCode from '../images/google-QR.png'
import appleQRCode from '../images/apple-QR.png'
import homeImage from '../images/home-image.png'
import mainImage from '../images/main-image.jpg'
import '../app/style.css'

const Main = () => {
  const [isGoogleQRModalOpen,setIsGoogleQRModalOpen] = useState(false)
  const [isAppleQRModalOpen,setIsAppleQRModalOpen] = useState(false)

  //Open Google QR code modal
  const openGoogleQRModal = () => {
    setIsGoogleQRModalOpen(true)
  }

  //Close Google QR code modal
  const closeGoogleQRModal = () => {
    setIsGoogleQRModalOpen(false)
  }

  //Open Apple QR code modal
  const openAppleQRModal = () => {
    setIsAppleQRModalOpen(true)
  }
  
  //Close Apple QR code modal
  const closeAppleQRModal = () => {
    setIsAppleQRModalOpen(false)
  }

  return (
    <div className='main-section-container'>

      <div className='main-section-text-box'>
        <h1>خلي موضوع توصيلهم للمدرسة علينا</h1>
        <p>
          نستخدم في <b>سيارتك</b> أحدث التقنيات لتقديم تجربة نقل متكاملة ومريحة. نوفر لكم حجزًا إلكترونيًا سريعًا وسهلاً، ونضمن لكم اختيار سائقين موثوقين بعناية. كما نقدم نظام إشعارات ذكي لإبقاء أولياء الأمور على اطلاع دائم، بالإضافة إلى تتبع الموقع في الوقت الفعلي عبر الخريطة لمزيد من الأمان والراحة
        </p>
        <div className='main-section-buttons'>
          <div onClick={openAppleQRModal} className='main-section-button'>
            <Image src={appleStore} alt='apple-store' width={150} height={50}/>
          </div>
          <div onClick={openGoogleQRModal} className='main-section-button'>
            <Image src={googlePlay} alt='google-play' width={150} height={50}/>
          </div>
        </div>
        <Modal
          title={null}
          open={isGoogleQRModalOpen}
          onCancel={closeGoogleQRModal}
          centered
          footer={null}
        >
          <div className='QRcode-modal-container'>
            <Image src={googleQRCode} alt='google-qr' width={300} height={300}/>
          </div>
        </Modal>

        <Modal
          title={null}
          open={isAppleQRModalOpen}
          onCancel={closeAppleQRModal}
          centered
          footer={null}
        >
          <div className='QRcode-modal-container'>
            <Image src={appleQRCode} alt='google-qr' width={300} height={300}/>
          </div>
        </Modal>
      </div>

      <div className='main-section-image-box'>
        <Image src={mainImage} alt='home-image' width={450} height={450}/>
      </div>

    </div>
  )
}

export default Main