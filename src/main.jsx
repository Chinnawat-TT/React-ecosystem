import React ,{useState}from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

function App(){

   const [darkMode,serDarkMode]= useState(true);

    const styleObj = {
        backgroundColor: darkMode ? "black" : "white",
        color : darkMode ? "white" : "black",
    }

    const handleToggleTheme =()=> {
        serDarkMode(!darkMode);
    }
    return <div style={styleObj} className='App'>
        <h1>Theme App</h1>
        <button onClick={handleToggleTheme}>Toggle Theme</button>
        </div>
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
