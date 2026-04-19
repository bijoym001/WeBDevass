import { useState } from 'react';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import StudentTable from './components/StudentTable';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Bijoy Mukherjee", score: 99 },
    { id: 2, name: "Ankit Sharma", score: 50 },
    { id: 3, name: "Priyo Maity", score: 90 },
    { id: 4, name: "Om Chaurasia", score: 32 },
  ]);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      score: parseInt(score),
    };
    setStudents([...students, newStudent]);
  };
<N></N>
  const updateScore = (id, newScore) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, score: parseInt(newScore) } : student
    ));
  };

  
  const totalStudents = students.length;
  const passedStudents = students.filter(s => s.score >= 40).length;
  const avgScore = totalStudents > 0 
    ? (students.reduce((sum, s) => sum + s.score, 0) / totalStudents).toFixed(1) 
    : 0;

  return (
    <div className="app">
      <Header />

      <div className="container">
       
        <div className="stats">
          <div className="stat-card">
            <h3>Total Students</h3>
            <p className="stat-number">{totalStudents}</p>
          </div>
          <div className="stat-card">
            <h3>Passed</h3>
            <p className="stat-number">{passedStudents}</p>
          </div>
          <div className="stat-card">
            <h3>Average Score</h3>
            <p className="stat-number">{avgScore}</p>
          </div>
        </div>

        <AddStudentForm onAddStudent={addStudent} />

        <StudentTable 
          students={students} 
          onUpdateScore={updateScore} 
        />
      </div>

      <footer className="footer">
        STUDENT SCORECARD MADE BY BIJOY MUKHERJEE
      </footer>
    </div>
  );
}

export default App;