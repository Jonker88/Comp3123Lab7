import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import StudentInfo from './components/StudentInfo'

function App() {
  const [studentInfo] = useState({
    course: 'FullStack Development - 1',
    subject: 'React JS Programming Week09 Lab exercise',
    studentId: '101480537',
    studentName: 'Jonathan Cao',
    college: 'George Brown College, Toronto',
  })

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <StudentInfo
        course={studentInfo.course}
        subject={studentInfo.subject}
        studentId={studentInfo.studentId}
        studentName={studentInfo.studentName}
        college={studentInfo.college}
      />
    </>
  )
}

export default App