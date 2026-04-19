import { useState } from 'react';

function StudentRow({ student, onUpdateScore }) {
    const [scoreInput, setScoreInput] = useState(student.score);
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = () => {
        if (scoreInput !== '' && scoreInput >= 0 && scoreInput <= 100) {
            onUpdateScore(student.id, scoreInput);
            setIsEditing(false);
        }
    };

    const status = student.score >= 40 ? "Pass" : "Fail";
    const statusClass = student.score >= 40 ? "pass" : "fail";

    return (
        <tr className="student-row glass-glow">
            <td className="student-name">{student.name}</td>

            <td>
                {isEditing ? (
                    <input
                        type="number"
                        value={scoreInput}
                        onChange={(e) => setScoreInput(e.target.value)}
                        min="0"
                        max="100"
                        className="score-input"
                    />
                ) : (
                    <span className="score">{student.score}</span>
                )}
            </td>

            <td>
                <span className={`status ${statusClass}`}>
                    {status}
                </span>
            </td>

            <td>
                {isEditing ? (
                    <button onClick={handleSave} className="save-btn">
                        Save
                    </button>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="update-btn"
                    >
                        Update
                    </button>
                )}
            </td>
        </tr>
    );
}

export default StudentRow;