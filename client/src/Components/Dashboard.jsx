import React, { useEffect, useState } from "react";
import Nav from "./Nav";

function Dashboard() {
  const [student, setStudent] = useState({})
  const [studentData, setStudentData] = useState(null)
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.status === 200) {
        response.json().then((user) => {
          setStudent(user);
        });
      }
    });
  }, []);

  useEffect(() => {
    if (student) {
      fetch(`/students/${student.id}`)
        .then((res) => res.json())
        .then((data) => setStudentData(data))
    }
  }, [student]);

  return (
    <div>
      <Nav />
      <div className="container mx-auto mt-4 space-y-6 text-left border border-1 border-slate-700 p-2 divide-y divide-slate-500 rounded-lg">
        <h1 className="text-3xl font-sans font-bold">
          <span className="text-xl">Name: </span>{student.name}
        </h1>
        <p>{student.admission_number}</p>
        <p>{student.email}</p>
        <p>{student.id_number}</p>
        <p>{student.gender}</p>
        {/* {studentData ? <p>{studentData.course.id}</p> : null} */}
        <p>remaining fee</p>
      </div>
    </div>
  );
}

export default Dashboard;

