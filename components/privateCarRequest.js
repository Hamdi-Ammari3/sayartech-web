import React,{useState} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { addDoc, collection } from 'firebase/firestore';
import { DB } from '../firebaseConfig'

const cars = [
  {label: 'سيارة خاصة صالون ',value: 'سيارة خاصة صالون ' },
  {label:'سيارة خاصة ٧ راكب ',value:'سيارة خاصة ٧ راكب '},
  {label:'ستاركس ',value:'ستاركس '},
  {label:'باص صغير ١٢ راكب',value:'باص صغير ١٢ راكب'},
  {label:'باص متوسط ١٤ راكب',value:'باص متوسط ١٤ راكب'},
  {label:'باص كبير ٣٠ راكب',value:'باص كبير ٣٠ راكب'}
]

const PrivateCarRequest = () => {

  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [numberOfCars, setNumberOfCars] = useState(null);
  const [carType, setCarType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!date || !startTime || !endTime || !numberOfCars || !carType) {
      setError('الرجاء التاكد من ادخال جميع البيانات');
      return;
    }
    setError('');
    setLoading(true);

  // Format startTime and endTime as human-readable time

  const formattedStartTime = startTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const formattedEndTime = endTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

      // Get the current date and time as request_send_date
      const requestSendDate = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });

    // Construct request data
    const carRequestData = {
      date: date.toISOString().split('T')[0], // Store only the date part
      startTime: formattedStartTime,
      endTime: formattedEndTime,
      numberOfCars,
      carType: carType.value,
      request_send_date: requestSendDate,
    };

    try {
      await addDoc(collection(DB, 'carRequest'), carRequestData);
      alert('تم ارسال الطلب بنجاح')
      setDate(null)
      setStartTime(null)
      setEndTime(null)
      setNumberOfCars(null)
      setCarType(null)
    } catch (err) {
      alert('حدث خطا ما الرجاء المحاولة مرة ثانية');
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className='white_card-section-container'>
      <div className='private_car_request_header'>
        <h4>طلب سيارات خاصة</h4>
      </div>
      <div className='private_car_request_form_div'>
      <form onSubmit={handleSubmit} className='private_car_request_form'>
        <div className='private_car_request_form_date'>
        <div className='private_car_request_form_date_day'>
          <DatePicker 
          selected={date} 
          onChange={(date) => setDate(date)} 
          className='private_car_request_form_date_day_input'
          placeholderText= 'اليوم'
          />
        </div>
        <div className='private_car_request_form_date_time'>
          <DatePicker
            selected={startTime}
            onChange={(time) => setStartTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Start Time"
            dateFormat="h:mm aa"
            className='private_car_request_form_date_day_input'
            placeholderText='وقت الحضور'
          />
        </div>
        <div>
          <DatePicker
            selected={endTime}
            onChange={(time) => setEndTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="End Time"
            dateFormat="h:mm aa"
            className='private_car_request_form_date_day_input'
            placeholderText='وقت المغادرة'
          />
        </div>
        </div>
        
        <div className='private_car_request_form_car'>
          <div className='private_car_request_form_car_carNumber'>
          <input
            type="number"
            value={numberOfCars}
            onChange={(e) => setNumberOfCars(e.target.value)}
            min="1"
            required
            className='private_car_request_form_date_day_input'
            placeholder='عدد السيارات'
          />
          </div>

        <div>
          <Select
            value={carType}
            onChange={setCarType}
            options={cars}
            placeholder="نوع السيارات"
            className='private_car_request_form_car_carType_input'
          />
        </div>
        </div>
        {error && <p className='car_request_error_message'>{error}</p>}
        <div className='private_car_request_header'>
          <button type="submit" disabled={loading} className='send_request_button'>
            {loading ? (
              <h5>جاري الارسال</h5>
            ) : (
              <h5>ارسال الطلب</h5>
            )}
          </button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default PrivateCarRequest