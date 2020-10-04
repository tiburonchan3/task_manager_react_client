import React,{useEffect, useState} from 'react'
import Layout from '../../layout/Layout'
import {GetGroup} from '../../api/group'
import GroupForm from '../../components/Group/GroupForm'
import {map} from 'lodash'
import ListGroup from '../../components/Group/ListGroups'
import {Row,Col,Button} from 'react-bootstrap'
import './Home.scss'

export default function Home() {
    const [groups, setGroups] = useState(null)
    const [page, setPage] = useState(1)
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
      GetGroup(page).then(response=>{
         setGroups(response.data)
      }).catch(()=>{
          console.log("error")
      })
    }, [page,showModal])
    return (
       <Layout className="home">
            <div className="header">
                <div className="title">
                    <h4 className="lead">Mis grupos</h4>
                </div>
                <Button onClick={()=>setShowModal(true)}>Crear Grupo</Button>
            </div>
            <Row>
            <GroupForm setShowModal={setShowModal} showModal={showModal}></GroupForm>
                {map(groups,(group,index) =>(
                    <Col xs={4} key={index}>
                        <ListGroup group={group}></ListGroup>
                    </Col>
                ))}
            </Row>
       </Layout>
    )
}
