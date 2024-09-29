import React,{useState} from 'react'
import ClipLoader from "react-spinners/ClipLoader"
import { useGlobalState } from '../globalState'

function Schools() {

  const [searchTerm,setSearchTerm] = useState('')

  const titles = ['المدرسة','عدد الطلاب','عدد الحصص']

  const { schools, loading, error } = useGlobalState()


    // Filtered students based on search term
    const filteredSchools = schools.filter((school) => {
      const searchRating = parseFloat(searchTerm)
      return(
        school.school_name.includes(searchTerm) || 
        (school.school_students === searchRating) || 
        (school.school_lessons === searchRating)
      )
    })


   // Handle search input change
   const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


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
          ) : filteredSchools.length > 0 ? (
            <>
              {filteredSchools.map((school, index) => (
                <div key={index} className='students-section-inner-info'>
                  <h5>{school.school_name}</h5>
                  <h5>{school.school_students}</h5>
                  <h5>{school.school_lessons}</h5>
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

export default Schools