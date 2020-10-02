import React,{useState} from 'react';
import './App.scss';
import Auth from './pages/Auth'
import {ToastContainer} from 'react-toastify'

function App() {
    const [user, setUser] = useState(null)
  return (
    <>
        {user ?(<div>Exite</div>):(<Auth/>)}
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            />
    </>
  )
}

export default App;
