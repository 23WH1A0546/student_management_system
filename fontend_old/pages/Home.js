import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/api/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/api/students/${id}`);
    fetchStudents();
  };

  const markAttendance = async (id, status) => {
    await axios.put(`http://localhost:5000/api/students/attendance/${id}`, {
      attendance: status
    });
    fetchStudents();
  };

  return (
    <div>
      <h2>Student List</h2>

      <Link to="/add">
        <button>Add Student</button>
      </Link>
      <Link to={`/edit/${s._id}`}>
  <button>Edit</button>
</Link>

      {students.map((s) => (
        <div key={s._id}>
          <p>
            {s.name} | {s.rollNumber} | {s.grade} | {s.attendance}
          </p>

          <button onClick={() => deleteStudent(s._id)}>Delete</button>

          <button onClick={() => markAttendance(s._id, "Present")}>
            Present
          </button>

          <button onClick={() => markAttendance(s._id, "Absent")}>
            Absent
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Home;