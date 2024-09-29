import React,{useState} from 'react'
import ClipLoader from "react-spinners/ClipLoader"
import { useGlobalState } from '../globalState'

function Students() {

  const [searchTerm, setSearchTerm] = useState('')

  const { students, loading, error } = useGlobalState()

  
  const titles = ['الطالب','المدرسة','الجنس','العمر','المسافة']

   // Filtered students based on search term
    const filteredStudents = students.filter((student) =>
      student.student_full_name.includes(searchTerm) || 
      student.student_school.includes(searchTerm) || 
      student.student_sex.includes(searchTerm) || 
      student.student_age.includes(searchTerm) || 
      student.distance_to_school.includes(searchTerm)
    );

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
              <input onChange={handleSearchChange} placeholder={title} type='text' className='students-section-inner-title_search_input' />
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
          ) : filteredStudents.length > 0 ? (
            <>
              {filteredStudents.map((student, index) => (
                <div key={index} className='students-section-inner-info'>
                  <h5>{student.student_full_name}</h5>
                  <h5>{student.student_school}</h5>
                  <h5>{student.student_sex}</h5>
                  <h5>{student.student_age}</h5>
                  <h5>{student.distance_to_school}</h5>
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
  );
}

export default Students