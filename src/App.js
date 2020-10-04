import React,{useState,useEffect} from 'react';
import './App.scss';
import Auth from './pages/Auth'
import Routing from './routes/routing'
import {ToastContainer} from 'react-toastify'
import {authContext} from './utils/context'
import {IsLogged} from './api/auth'

export default function App() {
    const [user, setUser] = useState(null)
    const [loadUser, setLoadUser] = useState(false)
    const [refreshLogin, setRefreshLogin] = useState(false)
    useEffect(() => {
       setUser(IsLogged())
       setRefreshLogin(false)
       setLoadUser(true)
    }, [refreshLogin])
    if(!loadUser)return null
    return (
        <authContext.Provider value={user}>
            {user ?
            (<Routing setRefreshLogin={setRefreshLogin}/>)
            :
            (<Auth setRefreshLogin={setRefreshLogin}/>)}
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
        </authContext.Provider>
    );
}
