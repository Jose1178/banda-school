import React, { useEffect, useState } from "react";
import Nav from "./Nav";

function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const coursesDiv = courses.map((course) => {
    return (
      <a
        href={`/courses/units/${course.id}`}
        key={course.id}
        className="rounded bg-white overflow-hidden shadow-lg"
      >
        <img
          className="w-full"
          src={`https://source.unsplash.com/random/800x600?job&${course.id}`}
          alt={course.name}
        />
        <div className="px-6 py-4">
          <div className="underline font-bold text-left text-xl mb-2">
            {`Course name: ${course.name}`}{" "}
          </div>
          <div className="px-2 py-1 text-left border bottom-1 border-gray-800 rounded-lg">
            <p className="underline text-bold">{`Fee: ${course.fee} KSH`}</p>
            <p className="text-gray-700 text-base">{course.description}</p>
          </div>
        </div>
      </a>
    );
  });

  return (
    <div className="bg-slate-300">
      <Nav />
      <h1 className="mt-3 underline text-3xl">Banda School Courses</h1>
      <div className="mt-4 px-10 text-left">
        <p className="mb-3">
          Welcome to the Banda School's courses page! Here you'll find all the
          information you need to choose the courses that best fit your academic
          goals and interests. Our school offers a diverse range of courses
          taught by experienced teachers who are dedicated to helping you
          achieve your full potential.
        </p>
        <p>
          Whether you're interested in science, math, history, language, or the
          arts, we have something for you. With our carefully designed
          curriculum and flexible learning options, you'll have the opportunity
          to explore new subjects and develop skills that will prepare you for
          success in college and beyond. Browse through our course offerings and
          discover the exciting opportunities that await you at Banda School.
        </p>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {coursesDiv}
      </div>
    </div>
  );
}

export default Courses;
