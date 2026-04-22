import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    rollNumber: "",
    branch: "",
    section: "",
    marks: ""
  });

  // Fetch existing data
  useEffect(() => {
    const fetchStudent = async () => {
      const res = await axios.get("http://localhost:5000/api/students");
      const found = res.data.find(s => s._id === id);
      setStudent(found);
    };
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/students/${id}`, student);
    alert("Student Updated");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={student.name} onChange={handleChange} /><br/>
      <input name="rollNumber" value={student.rollNumber} onChange={handleChange} /><br/>
      <input name="branch" value={student.branch} onChange={handleChange} /><br/>
      <input name="section" value={student.section} onChange={handleChange} /><br/>
      <input type="number" name="marks" value={student.marks} onChange={handleChange} /><br/>
      <button type="submit">Update Student</button>
    </form>
  );
}

export default EditStudent;