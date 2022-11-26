import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/navigate/About";
import Contacts from "./components/navigate/Contacts";
import Course from "./components/navigate/Course";
import Courses from "./components/navigate/Courses";
import Home from "./components/navigate/Home";
import NotFound from "./components/navigate/NotFound";
import MainLayouts from "./layout/MainLayouts";

import "./App.css";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<MainLayouts />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path='contacts'
              element={<Contacts />}
            />
            <Route
              path='about'
              element={<About />}
            />
            <Route
              path='courses'
              element={<Courses />}
            />
            <Route
              path='courses/:slug'
              element={<Course />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
