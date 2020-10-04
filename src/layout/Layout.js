import React from 'react'
import {Nav,Container,Row,Col} from 'react-bootstrap'
import './Layout.scss'
import sidebar from '../components/SideBar'
import SideBar from '../components/SideBar'

export default function Layout(props) {
    const {children,className} = props
    return (
        <Container fluid>
                <Row>
                    <Col xs={3} id="sidebar-wrapper">
                        <SideBar/>
                    </Col>
                    <Col  xs={9} id="page-content-wrapper" className={`${className}`}>
                        {children}
                    </Col>
                </Row>

        </Container>
    )
}
