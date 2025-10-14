export default function StudentInfo({ course, subject, studentId, studentName, college }) {
  return (
    <>
      <h1>Welcome to {course}</h1>
      <h2>{subject}</h2>
      <h3>{studentId}</h3>
      <h4>{studentName}</h4>
      <p>{college}</p>
    </>
  )
}