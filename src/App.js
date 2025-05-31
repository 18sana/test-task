// // import React, { useEffect, useState } from 'react';

// // export default function App() {
// //   const [theme, setTheme] = useState('light');
// //   useEffect(() => {
// //     const savedTheme = localStorage.getItem('theme');
// //     if (savedTheme) {
// //       setTheme(savedTheme);
// //       document.documentElement.classList.add(savedTheme);
// //     }
// //   }, []);
// //   useEffect(() => {
// //     document.documentElement.classList.remove(theme === 'light' ? 'dark' : 'light');
// //     document.documentElement.classList.add(theme);
// //     localStorage.setItem('theme', theme);
// //   }, [theme]);

// //   const toggleTheme = () => {
// //     setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
// //   };

// //   return (
// //     <div className="min-h-screen transition duration-300 bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center">
// //       <h1 className="text-4xl font-bold mb-4">Light/Dark Theme Toggle</h1>
// //       <button
// //         onClick={toggleTheme}
// //         className="px-6 py-2 rounded-md shadow-md bg-blue-500 dark:bg-yellow-400 text-white dark:text-black hover:opacity-90 transition"
// //       >
// //         Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
// //       </button>
// //     </div>
// //   );
// // }
// // import "./styles.css";
// import { useState } from "react";
// function Toggle() {
//   const [light, setLight] = useState("");
//   const style1 = {
//     backgroundColor: "black",
//     color: "white",
//     width: 100,
//     height: 100,
//   };
//   const style2 = {
//     backgroundColor: "white",
//     color: "black",
//     width: 100,
//     height: 100,
//   };
//   const handleClick = () => {
//     setLight(!light);
//   };
//   return (
//     <div>
//       <p>{light ? "Switch is on" : "Switch is off"}</p>
//       <div style={light ? style1 : style2}></div>
//       <button onClick={handleClick}>{light ? "ON" : "OFF"}</button>
//     </div>
//   );
// }
// export default function App() {
//   return (
//     <div className="App">
//       <Toggle />
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const containerStyle = {
    height: '100vh',
    backgroundColor: theme === 'light' ? '#ffffff' : '#111111',
    color: theme === 'light' ? '#000000' : '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: theme === 'light' ? '#007bff' : '#f1c40f',
    color: theme === 'light' ? '#ffffff' : '#000000',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <h1>Light/Dark Theme Toggle</h1>
      <button onClick={toggleTheme} style={buttonStyle}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

export default App;