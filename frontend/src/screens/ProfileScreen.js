import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getUserDetails } from '../actions/userActions'

function ProfileScreen() {
  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
      </Col>

      <Col md={9}>
        <h2>My Orders</h2>
      </Col>

    </Row>
  )
}

export default ProfileScreen