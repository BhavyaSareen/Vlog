// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Outlet,
// } from "react-router-dom";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Write from "./pages/Write";
// import Home from "./pages/Home";
// import Single from "./pages/Single";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Book from "./new.jsx/Book";
// import "./style.scss"
// import Add from "./new.jsx/Add";

// const Layout = () => {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/post/:id",
//         element: <Single />,
//       },
//       {
//         path: "/write",
//         element: <Write />,
//       },

//     ],
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/books",
//     element: <Book />,
//   },
//   {
//     path: "/add",
//     element: <Add />,
//   },
// ]);

// function App() {
//   return (
//     <div className="app">
//       <div className="container">
//         <RouterProvider router={router} />
        
//       </div>
//     </div>
    
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import Add from './new.jsx/Add';
import Book from './new.jsx/Book';

 
function App() {
  const [component, setComponent] = useState(<p>Loading...</p>);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/');
        if (response.ok) {
          setComponent(<Add />);
        } else {
          setComponent(<Book />);
        }
      } catch (error) {
        setComponent(<Book />);
      }
    };
 
    fetchData();
  }, []);
 
  return component;
}
 
export default App;
