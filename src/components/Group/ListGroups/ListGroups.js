import React from 'react'
import {Card} from 'react-bootstrap'
import './ListGroups.scss'
import {HOST} from '../../../utils/constants'

export default function ListGroups(props) {
    const {group} = props
    return (
        <Card className="list-group">
            <Card.Header style={{backgroundImage: `url("${HOST}/uploads/images/${group.banner}")`}}>
                <div class="title">
                    <span>{group.name}</span>
                </div>
            </Card.Header>
            <Card.Body>{group.admin}</Card.Body>
        </Card>
    )
}
