import React, {useState, useEffect} from 'react'
import {Row, Col, Card, CardBody, Button, ButtonGroup, Collapse} from 'reactstrap'
import {connect, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'

import OrderButtonGroup from './components/OrderButtonGroup'
import OrderDetails from './components/OrderDetails'
import OrderItems from './components/OrderItems'
import OrderNav from './components/OrderNav'
import {getOrderDetials} from 'api'
import {setOrderDetails} from 'duck/actions/order'

const ViewOrder = (props) => {
  const [isOpen, setIsOpen] = useState(true)

  const orderToDisplay = props.order.get('orderToDisplay')
  const token = props.user.get('token')

  const dispatch = useDispatch()
  const toggleOpen = () => setIsOpen(!isOpen)

  const payload = {
    id: orderToDisplay,
    token: token,
  }
  useEffect(() => {
    if (orderToDisplay) {
      getOrderDetials(payload)
        .then((res) => {
          if (!res?.hasError) {
            dispatch(setOrderDetails(res.data))
          }
        })
        .catch((err) => console.log(err))
    }
  }, [orderToDisplay])

  return (
    <Row>
      <Col md={12} sm={12} xs={12}>
        <Card lg={12} md={12} sm={12} xs={12} className="mb-3 mt-3">
          <CardBody className="py-2 bg-primary">
            <Row className="text-white">
              <Col sm={8} lg={8} className="my-auto">
                <i className="fa fa-shopping-cart"></i>
                <span className="big ml-1"> Order Search: 780299 (record 1 of 500 )</span>
              </Col>
              <Col className="text-lg-right text-center" lg={4} sm={4}>
                <ButtonGroup size="sm">
                  <Button color="info">
                    <i className="fa fas fa-fast-backward mr-1"></i>
                    <span>First</span>
                  </Button>
                  <Button color="info">
                    <i className="fa fas fa-step-backward mr-1"></i>
                    <span>Prev</span>
                  </Button>
                  <Button color="info">
                    <i className="fa fas fa-step-forward mr-1"></i>
                    <span>Next</span>
                  </Button>
                  <Button color="info">
                    <i className="fa fas fa-fast-forward mr-1"></i>
                    <span>Last</span>
                  </Button>
                </ButtonGroup>
                <i
                  onClick={toggleOpen}
                  style={{cursor: 'pointer'}}
                  className={isOpen ? 'fa far fa-angle-up ml-2' : 'fa far fa-angle-down ml-2'}></i>
              </Col>
            </Row>
          </CardBody>
          <Collapse isOpen={isOpen} className="m-3">
            <OrderButtonGroup />
            <OrderDetails />
            <OrderItems />
            <OrderNav />
          </Collapse>
        </Card>
      </Col>
    </Row>
  )
}

ViewOrder.propTypes = {
  order: PropTypes.object,
  orderToDisplay: PropTypes.string,
  user: PropTypes.object,
}

const mapStateToProps = (state) => ({
  order: state.order,
  user: state.user,
})

export default connect(mapStateToProps)(ViewOrder)
