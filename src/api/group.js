import {API_HOST} from '../utils/constants'
import {GetTokenApi} from './auth'
export function GetGroup(page){
    const url = `${API_HOST}/group?page=${page}`
    const params = {
        headers:{
            "Authorization":`Bearer ${GetTokenApi()}`
        },
    }
    return fetch(url,params).then((response)=>{
        return response.json()
    }).then(result=>{
        return result
    }).catch(err=>{
        return err
    })
}
export function CreateApi(banner,data){
    const url = `${API_HOST}/group/store`
    const name = data.name
    const formData = new FormData
    formData.append('banner',banner)
    formData.append('name',name)
    const params = {
        method:"POST",
        headers:{
            "Authorization":`Bearer ${GetTokenApi()}`
        },
        body:formData
    }
    return fetch(url,params).then(response=>{
        return response.json()
    }).then(result=>{
        return result
    }).catch(err=>{
        return err
    })
}
