import React,{useState} from 'react'
import ClipLoader from "react-spinners/ClipLoader"
import { useGlobalState } from '../globalState'

function Drivers() {
  const [searchTerm,setSearchTerm] = useState('')

  const titles = ['السائق','نوع السيارة','موديل السيارة','لوحة السيارة','التقييم']

  //const { drivers, loading, error } = useGlobalState()

  const drivers = [
    {name:'اسماعيل احمد خليل',carType:'ستاركس',carModel:'تويوتا',carPlate:'١٢٣٤٥',rating:'4'},
    {name:'محمود ياسين علي',carType:'ستاركس',carModel:'شيفروليه',carPlate:'١٢٣٤٥',rating:'3'},
    {name:'جمال صبحي سالم',carType:'ستاركس',carModel:'هيونداي',carPlate:'١٢٣٤٥',rating:'5'},
  ]

    // Filtered students based on search term
    const filteredDrivers = drivers.filter((driver) => {
      return(
        driver.name.includes(searchTerm) || 
        driver.carType.includes(searchTerm) || 
        driver.carModel.includes(searchTerm) || 
        driver.carPlate.includes(searchTerm) ||
        driver.rating.includes(searchTerm)
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
          {filteredDrivers.map((driver, index) => (
            <div key={index} className='students-section-inner-info'>
              <h5>{driver.name}</h5>
              <h5>{driver.carType}</h5>
              <h5>{driver.carModel}</h5>
              <h5>{driver.carPlate}</h5>
              <h5>{driver.rating}</h5>
            </div>
          ))}
        </div>     
      </div>
    </div>
  )
}

export default Drivers