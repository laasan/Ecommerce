import React, {useEffect} from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Message } from '../components/Message'
import { addToCart } from '../actions/cartActions'

function CartScreen() {
  const params = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  const productId = params.id
  const qty = queryParams.get('qty')
  
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  console.log(cartItems)

  useEffect(() => {
    if(productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return (
    <div>CartScreen</div>
  )
}

export default CartScreen