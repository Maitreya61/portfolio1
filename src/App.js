import React from 'react';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import About from './Components/About';
import Home from './Components/Home';
import Works from './Components/Works';
import Contact from './Components/Contact';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/skills',
        element:<Skills/>
      },
      {
        path:'/works',
        element:<Works/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ]
  }
])

function App() {


  return (
    <>
    <div className="app">
      <RouterProvider router={router} />
    </div>
    </>
    
  );
}

export default App;
