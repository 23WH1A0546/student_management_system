
# **Student Management System (MERN Stack)**

## **1. Introduction**

### **1.1 Purpose**

This document defines the design and development of a **Student Management System** using the MERN stack.
The system provides role-based access for Admin and Teacher users to manage student data efficiently.

### **1.2 Target Audience**

* Faculty / Admin
* Teachers
* Students (for record management)
* Developers learning MERN stack

### **1.3 Learning Outcomes**

* CRUD operations using MERN stack
* REST API development
* MongoDB schema design
* Role-Based Access Control (RBAC)
* Frontend and backend integration

---

## **2. System Overview**

### **2.1 User Roles**

| Role    | Description                                  |
| ------- | -------------------------------------------- |
| Admin   | Full control over student records            |
| Teacher | View students, mark attendance, update marks |

---

### **2.2 Core Features**

* Add, edit, delete student records
* View student details
* Mark attendance (Present / Absent)
* Update marks with automatic grade calculation
* Search students by name, roll number, or department

---

## **3. High-Level Architecture**

```
[ React Frontend ]
         |
     REST API
         |
[ Node.js + Express ]
         |
      [ MongoDB ]
```

**Key Principle:**
Single backend with React frontend

---

## **4. Database Design**

### **4.1 Database**

* MongoDB
* Mongoose ODM

---

### **4.2 Collections**

#### **students**

```json
{
  "_id": "ObjectId",
  "name": "string",
  "rollNumber": "string",
  "department": "string",
  "marks": "number",
  "grade": "string",
  "attendance": "string",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

---

## **5. Backend Design**

### **5.1 Tech Stack**

* Node.js
* Express.js
* MongoDB
* JWT Authentication

---

### **5.2 Folder Structure**

```
backend/
│── models/
│── controllers/
│── routes/
│── middleware/
│── server.js
```

---

### **5.3 Authentication Flow**

1. User logs in (Admin/Teacher)
2. Credentials are verified
3. JWT token is generated
4. Protected routes are accessed using token

---

### **5.4 API Endpoints**

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| POST   | /students     | Add student      |
| GET    | /students     | Get all students |
| GET    | /students/:id | Get student      |
| PUT    | /students/:id | Update student   |
| DELETE | /students/:id | Delete student   |

---

### **5.5 Role-Based Access Control**

* Admin → Full access
* Teacher → Limited access
* Middleware used for authorization

---

## **6. Frontend (React)**

### **6.1 Tech Stack**

* React.js
* Axios
* React Router

---

### **6.2 Folder Structure**

```
src/
├── components/
├── pages/
├── services/
├── App.js
```

---

### **6.3 Key Pages**

* Login Page
* Admin Dashboard
* Teacher Dashboard
* Student List Page
* Edit Student Page

---

## **7. Feature Details**

### **7.1 Attendance**

* Mark student as Present or Absent

### **7.2 Marks & Grade Calculation**

* ≥ 90 → A
* ≥ 75 → B
* ≥ 50 → C
* < 50 → Fail

---

### **7.3 Search**

* By Name
* By Roll Number
* By Department

---

## **8. Security**

* JWT Authentication
* Role-based authorization
* Input validation

---

## **9. Development Workflow**

* Backend using Node + Express
* Frontend using React
* MongoDB for database
* GitHub for version control

---

## **10. Future Enhancements**

* Student login system
* Attendance percentage
* Reports generation
* Dashboard analytics

---

## **11. Conclusion**

This project demonstrates a complete MERN stack application with role-based access and real-world features like attendance and grading.

---

## **Student Details**

**Name:** Y. Vaishavi
**Roll Number:** 23WH1A0546

---
