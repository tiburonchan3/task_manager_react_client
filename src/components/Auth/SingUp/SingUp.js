//import all necesary packages
import React,{useState} from 'react'
import {Modal,Button,Form,Spinner} from "react-bootstrap"
import './SingUp.scss'
import {values,size} from 'lodash'
import {toast} from 'react-toastify'
import {isEmailValid} from '../../../utils/validation'
import {SingUpApi} from '../../../api/auth'

export default function SingUp(props) {
    //this state contain the user data to send the SingUpApi
    const [formData, setFormData] = useState(initialValues)
    //this are the props recived for the another component
    const {showModal,setShowModal} = props
    //this state containt the load for the spinner in the button
    const [load, setLoad] = useState(false)
    //function when the user submit the form this recive the event
    const SubmitForm = e =>{
        //prevent default for not recharge the page
        e.preventDefault();
        //this variable contain the initial value for the size of the fields in the form
        let count = 0
        //this is the function for comprobate the values in the form are the same of the formData
        values(formData).some(value=>{
            //the count value increment for each field of the form
            value && count++
            //this return null
            return null
        })
        //this is the comprobation for the field values are not equal to the formData
        if(count!==size(formData)){
            //return a toast with a message
            toast.warning("All data is necesary");
        }
        //this validate if the email are valid
        else if(!isEmailValid(formData.email)){
            //return a toast with a message
            toast.warning("The email is invalid")
        }
        //this validate if the password are equals
        else if(formData.password!==formData.repeat_password){
            //return a toast with a message
            toast.warning("The passwords are not equals")
        }
        //this validate if the password has more than 8 characters
        else if(size(formData.password) < 8){
            //return a toast with a message
            toast.warning("the password need 8 chracters")
        }
        //if all correct
        else{
            //inicialize the spinner
            setLoad(true)
            //send the data to the api function
            SingUpApi(formData)
            //the recive the response
            .then(response => {
                //validate if the state to send the api is true
              if(response.state===true){
                  //show a toast with a message
                  toast.success("User created")
                  //hidde the modal
                  setShowModal(false)
                  //stop the spinner
                  setLoad(false)
                  //set the form with the initial values
                  setFormData(initialValues)
              }
              //if exist an exeption
              else{
                  //show a toast with a message
                  toast.warning("this email is used for another user")
                  //stop the spinner
                  setLoad(false)
              }
            })
            //if the peticion contain an error
            .catch(()=>{
                //show a toast with a message
                toast.error("Server Error")
            })
        }

    }
    //function when the form is change
    const ChangeForm = e =>{
        //set the formdata with the values of the form
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    return (
        <Modal
        aria-labelledby="contained-modal-title-vcenter"
        size="lg"
        centered
        show={showModal}
        onHide={()=> setShowModal(false)}
        className="register_modal"
        >
        <div className="borders">
        <span></span><span></span>
        <span></span><span></span>
        </div>
        <Modal.Header closeButton>
            <Modal.Title>
           Complete the form!
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className="register__form">
            <Form onChange={ChangeForm} onSubmit={SubmitForm}>
                <Form.Group>
                    <Form.Control
                        type="text" placeholder="Write yor name" defaultValue={formData.name} name="name"/>
                    <Form.Control
                        type="email" placeholder="White your email" defaultValue={formData.email} name="email"/>
                    <Form.Control
                        type="password" placeholder="White your password" defaultValue={formData.password} name="password"/>
                    <Form.Control
                        type="password" placeholder="Repeat your password" defaultValue={formData.repeat_password} name="repeat_password"/>
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit">
                    {!load ? "Save" : (<Spinner animation="border"/>)}
                </Button>
            </Form>

        </div>
        </Modal.Body>
    </Modal>
    )
}
//this function inicialize the form
function initialValues(){
    //return de data empty
    return ({
        name:"",
        email:"",
        password:"",
        repeat_password:""
    })
}
