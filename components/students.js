import React,{useState} from 'react'

function Students() {

  const [searchTerm, setSearchTerm] = useState('')

  const students = [
    {name:'محمد ناصر علي',class:'السنة الاولى',lesson:'الحصة الصباحية',age:'6',status:'وصل'},
    {name:'يزيد محمود خليل',class:'السنة الرابعة',lesson:'الحصة الصباحية',age:'9',status:'في الطريق'},
    {name:'ابراهيم ياسر ناصر',class:'السنة الثانية',lesson:'الحصة المسائية',age:'7',status:'وصل'},
    {name:'اميرة محمد سيد',class:'السنة الثالثة',lesson:'الحصة الصباحية',age:'8',status:'غائب'},
    {name:'محمد جمال خضر',class:'السنة الاولى',lesson:'الحصة المسائية',age:'6',status:'وصل'},
    {name:'اشرف كامل احمد',class:'السنة الثالثة',lesson:'الحصة الصباحية',age:'8',status:'وصل'},
    {name:'فاطمة سالم علي',class:'السنة الثانية',lesson:'الحصة المسائية',age:'7',status:'في الطريق'},
  ]

  
  const titles = ['الطالب','الصف','الحصة','العمر','الحالة']

   // Filtered students based on search term
    const filteredStudents = students.filter((student) =>
      student.name.includes(searchTerm) || 
      student.class.includes(searchTerm) || 
      student.lesson.includes(searchTerm) || 
      student.age.includes(searchTerm) || 
      student.status.includes(searchTerm)
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
          {filteredStudents.map((student, index) => (
            <div key={index} className='students-section-inner-info' >
              <h5>{student.name}</h5>
              <h5>{student.class}</h5>
              <h5>{student.lesson}</h5>
              <h5>{student.age}</h5>
              <h5
              className={student.status === 'وصل' ? 'in-school' :
                student.status === 'في الطريق' ? 'in-route' : 
                student.status === 'غائب' ? 'absent' : ''}
              >{student.status}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Students