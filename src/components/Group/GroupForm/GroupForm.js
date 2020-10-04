import React,{useState,useCallback} from 'react'
import {Modal,Spinner,Form,Button} from 'react-bootstrap'
import './GroupForm.scss'
import {useDropzone} from 'react-dropzone'
import Default from '../../../assets/Images/Default.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faImage} from '@fortawesome/free-solid-svg-icons'
import {CreateApi} from '../../../api/group'
import { toast } from 'react-toastify'

export default function GroupForm(props) {
    const {setShowModal,showModal} = props
    const [load, setLoad] = useState(false)
    const [name, setName] = useState("")
    const [bannerFile,setBannerFile] = useState(null)
    const [bannerExist, setBannerExist] = useState(false)
    const [bannerUrl, setBannerUrl] = useState(null)
    const onDropBanner = useCallback(acceptedFile =>{
        const file = acceptedFile[0]
        setBannerUrl(URL.createObjectURL(file))
        setBannerFile(file)
        setBannerExist(true)
    })
    const submitForm = e =>{

        e.preventDefault()
        CreateApi(bannerFile,name).then(response=>{
            if(response.state===true){
                toast.success("Group created successfully")
                setLoad(false)
                setShowModal(false)
                setName("")
                setBannerExist(false)
            }else{

            }
        }).catch(err=>{
            console.log(err)
        })
    }
    const changeForm = e =>{
        setName({[e.target.name]:e.target.value})
    }
    const {
        getRootProps: getRootBannerProps,
        getInputProps: getInputBannerProps
    } = useDropzone({
        accept: 'image/jpeg, image/png',
        noKeyboard: true,
        multiple:false,
        onDrop: onDropBanner
    })
    return (
        <Modal
        aria-labelledby="contained-modal-title-vcenter"
        size="lg"
        centered
        show={showModal}
        onHide={()=> setShowModal(false)}
        className="group_modal"
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

        <div className="group_form">
            <div className="banner_form" style={
                !bannerExist ? ({backgroundImage:`url('${Default}')`}) : ({backgroundImage:`url('${bannerUrl}')`})}
                {...getRootBannerProps()}
            >
                     <div className="mask">
                <span><FontAwesomeIcon icon={faImage}/></span>
              <input
                    {...getInputBannerProps()}
                />
              </div>
            </div>
            </div>
            <Form onSubmit={submitForm} onChange={changeForm}>
                <Form.Group>
                    <Form.Control
                        type="text" placeholder="Write yor name" defaultValue={name} name="name"/>
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit">
                    {!load ? "Save" : (<Spinner animation="border"/>)}
                </Button>
            </Form>
        </Modal.Body>
    </Modal>
    )
}
