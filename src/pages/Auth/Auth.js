import React,{useState} from 'react'
import Login from '../../components/Auth/Login'
import SingUp from '../../components/Auth/SingUp'
import './Auth.scss'

export default function Auth() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="auth">
            <div className="auth__login">
                <span></span><span></span>
                <span></span><span></span>
                <Login ></Login>

            </div>
            <button className="auth__option" onClick={()=>setShowModal(true)}>Don't have an account?</button>
            <SingUp showModal={showModal} setShowModal={setShowModal}></SingUp>
        </div>
    )
}
