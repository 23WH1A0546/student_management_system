import { useState } from "react";
import axios from "axios";

function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    rollNumber: "",
    branch: "",
    section: "",
    marks: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/students", student);
    alert("Student Added");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} /><br/>
      <input name="rollNumber" placeholder="Roll No" onChange={handleChange} /><br/>
      <input name="branch" placeholder="Branch" onChange={handleChange} /><br/>
      <input name="section" placeholder="Section" onChange={handleChange} /><br/>
      <input type="number" name="marks" placeholder="Marks" onChange={handleChange} /><br/>
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;