import React,{useState} from 'react'
import {Form,Button,Spinner} from 'react-bootstrap'
import './Login.scss'
import Map from '../../../assets/Icons/map.png'
import {values,size} from 'lodash'
import {toast} from 'react-toastify'
import {isEmailValid} from '../../../utils/validation'
import {LogInApi,SetTokenApi} from '../../../api/auth'

export default function Login(props) {
    const {setRefreshLogin} = props
    const [formData, setFormData] = useState(initialValues)
    const [load, setLoad] = useState(false)
    const submitForm = e =>{
        e.preventDefault()
        let count = 0
        values(formData).some(value=>{
            value && count++
            return null
        })
        if(count!==size(formData)){
            toast.warning("All field is necesary")
        }else if(!isEmailValid(formData.email)){
            toast.warning("the email is invalid")
        }else{
            setLoad(true)
            LogInApi(formData).then(response=>{
                if(response.error){
                    toast.error(response.error)
                    setLoad(false)
                }else if(response.token){
                    toast.success("Wellcome")
                    SetTokenApi(response.token)
                    setLoad(false)
                    setRefreshLogin(true)
                }
            })
        }

    }
    const changeForm = e =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    return (
        <div className="login">
            <div className="login__header">
                <h5>Wellcome!</h5>
            </div>
            <div className="login__body">
                <img src={Map} alt="none"/>
                <Form onChange={changeForm} onSubmit={submitForm}>
                    <Form.Group>
                        <Form.Control
                        type="email"
                        defaultValue={formData.email}
                        name="email" placeholder="Write your email"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                        type="password"
                        defaultValue={formData.password}
                        name="password" placeholder="Write your password"/>
                    </Form.Group>
                    <Button type="submit">
                        {!load ? "Login":(<Spinner animation="border"/>)}
                    </Button>
                </Form>
            </div>
        </div>
    )
}
function initialValues(){
    return ({
        email:"",
        password:""
    })
}
