import React,{useState,useEffect} from 'react'
import { DB } from '../firebaseConfig'
import { collection, addDoc,serverTimestamp } from 'firebase/firestore'
import { BsSend } from "react-icons/bs";

function Email() {
  const [emailText,setEmailText] = useState('')
  const [todayDate, setTodayDate] = useState('')
  const [loading, setLoading] = useState(false);

      // Get the current date and time as request_send_date
      const emailSendDate = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });

  const handleSend = async () => {
    setLoading(true);
    if (emailText.trim() !== '') {
      try {
        await addDoc(collection(DB, 'messages'), {
          sender: 'مدرسة نبع الحياة', // You can dynamically set this
          receiver: 'SayarTech Admin',
          messageBody: emailText,
          date: emailSendDate,
          status: 'unread'
        });
        setEmailText(''); // Reset the message after sending
        alert('تم الارسال بنجاح');
      } catch (error) {
        alert('حدث خطا ما الرجاء المحاولة مرة ثانية');
      }finally{
        setLoading(false)
      }
    }
  };
  
  return (
    <div className='white_card-section-container'>
      <div className='email-headline'>
        <div className='sender-receiver-text'>
          <h5>بلاغ من مدرسة النخيل الاهليةالى شركة سيارتك</h5>
        </div>
      </div>
      <div className='email-main'>
        <textarea
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
          placeholder='اكتب رسالتك هنا'
        />
        <button onClick={handleSend} className='send_request_button'>
          <h5>{loading ? 'جاري الارسال' : 'ارسال'}</h5>
          <BsSend className='email_send_icon' />
        </button>
      </div>
    </div>
  )
}

export default Email