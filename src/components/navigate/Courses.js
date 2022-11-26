import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import courses from "../../data/courses";

const SORT_KEYS = ["title", "slug", "id"];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCoursers, setSortedCoursers] = useState(
    sortCourses(courses, sortKey),
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate(".");
      setSortKey();
      setSortedCoursers([...courses]);
    }
  }, [sortKey, navigate]);

  console.log(sortKey);

  return (
    <div>
      <h1> {sortKey ? `Courses sorted by ${sortKey}` : "Courses"}</h1>
      {sortedCoursers.map((course) => (
        <div key={course.id}>
          <Link
            to={course.slug}
            className={"courseLink"}
          >
            {course.slug}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
