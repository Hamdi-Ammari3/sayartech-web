import React,{useState} from 'react'
import ClipLoader from "react-spinners/ClipLoader"
import { useGlobalState } from '../globalState'

function Drivers() {
  const [searchTerm,setSearchTerm] = useState('')

  const titles = ['السائق','نوع السيارة','موديل السيارة','لوحة السيارة','التقييم']

  const { drivers, loading, error } = useGlobalState()

    // Filtered students based on search term
    const filteredDrivers = drivers.filter((driver) => {
      const searchRating = parseFloat(searchTerm)
      return(
        driver.driver_full_name.includes(searchTerm) || 
        driver.driver_car_type.includes(searchTerm) || 
        driver.driver_car_model.includes(searchTerm) || 
        driver.driver_car_plate.includes(searchTerm) ||
        (driver.rating === searchRating)
      )
    })
    
  // Handle search input change
   const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className='white_card-section-container'>
      <div className='students-section-inner'>
        <div className='students-section-inner-titles'>
          {titles.map(title => (
            <div key={title} className='students-section-inner-title'>
              <input onChange={handleSearchChange} placeholder={title} type='text' className='students-section-inner-title_search_input'/>
            </div>
          ))}
        </div>
        <div className='students-section-inner-infos'>
          {loading ? (
            <div className="loading_spinner">
              <ClipLoader
                color={'#955BFE'}
                loading={loading}
                size={70}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : filteredDrivers.length > 0 ? (
            <>
              {filteredDrivers.map((driver, index) => (
                <div key={index} className='students-section-inner-info'>
                  <h5>{driver.driver_full_name}</h5>
                  <h5>{driver.driver_car_type}</h5>
                  <h5>{driver.driver_car_model}</h5>
                  <h5>{driver.driver_car_plate}</h5>
                  <h5>{driver.rating === 0 ? '-' : driver.rating}</h5>
                </div>
              ))}
            </>
          ) : (
            <div className="no-results">
              <h5>لا توجد نتائج للبحث</h5>
            </div>
          )}
        </div>     
      </div>
    </div>
  )
}

export default Drivers