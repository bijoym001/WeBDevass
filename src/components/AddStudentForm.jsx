import { useState } from 'react';

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && score !== '') {
      onAddStudent(name, score);
      setName('');
      setScore('');
    }
  };

  return (
    <div className="form-container">
      <h3>Register New Student</h3>
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Score (0-100)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          min="0"
          max="100"
          required
        />
        <button type="submit" className="add-btn">
          + Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudentForm;