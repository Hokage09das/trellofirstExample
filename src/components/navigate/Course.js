import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import courses from "../../data/courses";

const Course = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const course = courses.find((course) => course.slug === params.slug);
  useEffect(() => {
    if (!course) {
      navigate("..", {
        relative: "path",
      });
    }
  }, [course, navigate]);

  // Simple show no found component
  // if (!course) {
  //   return (
  //     <>
  //       <NotFound />
  //       <Link
  //         to='..'
  //         relative='path'
  //       >
  //         all courses
  //       </Link>
  //     </>
  //   );
  // }
  console.log(params);
  return (
    <>
      <h2>{course?.title}</h2>
      <h2>{course?.slug}</h2>
      <h2>{course?.id}</h2>
      <Link
        to='..'
        relative='path'
      >
        all courses
      </Link>
    </>
  );
};

export default Course;
