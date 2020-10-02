//import the const for the url
import {API_HOST} from '../utils/constants'
//this is a exported function and recive a object
export function SingUpApi(formData){
    //this is the url to the rest api
    const url = `${API_HOST}/register`
    //this is the data to send for the endpoint
    const userData = {
        //add all the data
        ...formData,
        //modify to the email in lowercase
        email : formData.email.toLowerCase()
    }
    //delete the repeat password
    delete userData.repeat_password
    //this const add the paramethers for the api
    const params ={
        //especicate the method
        method: "POST",
        //especicate the headers
        headers:{
            //especificate he content type
            "Content-Type":"application/json"
        },
        //especificate the data to send for the server and convert to a stringify json
        body: JSON.stringify(userData)
    }
    //returned the peticion
    return fetch(url,params)
    //then get the response
    .then(response=>{
        //retuened de response in json format
        return response.json()
    })
    //then get the result
    .then(result=>{
        //returned the result
        return result
    })
    //if exists a error
    .catch(err=>{
        //return de error
        return err;
    })
}
