import React, {useContext, useEffect} from 'react'
import {
  Row,
  Col,
  Card,
  Label,
  ListGroup,
  ListGroupItem,
  Input,
  Button,
  Media,
  FormGroup,
} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import AppContext from 'components/App/AppContext'
import {createCartWatcher} from 'duck/watcher'

function CreateNewOrder(props) {
  const context = useContext(AppContext)
  const {setTitle} = context

  const token = props.user.get('token')

  const history = useHistory()

  useEffect(() => {
    setTitle('Start New Order')
  }, [])

  const routeChange = () => {
    let path = '/order-center/create-new-order/shopping'
    const payload = {
      token: token,
      cartType: 'guest',
    }
    props.createCartWatcher(payload)
    history.push(path)
  }

  return (
    <>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <ListGroup>
              <ListGroupItem className="border m-3 rounded">
                <Media style={{display: 'flex', justifyContent: 'space-between'}}>
                  <Media left href="#">
                    <span className="fa-stack fa-lg">
                      <i className="fa fas fa-question-circle fa-2x text-warning"></i>
                    </span>
                  </Media>
                  <Media className="d-flex justify-content-between">
                    <Media left href="#">
                      <span className="fa-stack fa-lg"></span>
                    </Media>
                    <Media>
                      <span>
                        To start a new order, begin by using the fields below to identifying who the
                        order will be for.You can select from existing users(Existing Person)or new
                        users(New Person)using the Shop For parameter. If you previously started a
                        cart and did not complete it, you can select the link in the area above the
                        person criteria using the Continue feature.This will redirected you back
                        into that shopping session.
                      </span>
                    </Media>
                  </Media>
                </Media>
              </ListGroupItem>

              <Col md={{size: 8, offset: 1}}>
                <FormGroup row>
                  <Label md={4}>Order Date</Label>
                  <Col md={8}>
                    <Input
                      id="datetime-local"
                      type="datetime-local"
                      className="d-flex justify-content-end"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label md={4}>Subject Type</Label>
                  <Col md={8}>
                    <Input type="select">
                      <option>Customer</option>
                      <option>Consultant</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label md={4}>Shop For</Label>
                  <Col md={8}>
                    <Input type="select">
                      <option defaultValue="">New Person</option>
                      <option>Existing Person</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label md={4}>Customer Status</Label>
                  <Col md={8}>
                    <Input type="select">
                      <option defaultValue=""></option>
                      <option>Active</option>
                      <option>InActive</option>
                      <option>Cancelled</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label md={4}>Classcification</Label>
                  <Col md={8}>
                    <Input type="select">
                      <option defaultValue=""></option>
                      <option>Retail</option>
                      <option>Preferred</option>
                      <option>Guest</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label md={4}>Country</Label>
                  <Col md={8}>
                    <Input type="select">
                      <option defaultValue="">United States</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label md={4}>State</Label>
                  <Col md={8}>
                    <Input type="select">
                      <option defaultValue=""></option>
                      <option>Alabama</option>
                      <option>Alaska</option>
                      <option>AE</option>
                      <option>AP</option>
                      <option>Arizona</option>
                      <option>Arkansas</option>
                      <option>Califonia</option>
                      <option>Colorado</option>
                      <option>Connecticut</option>
                      <option>DC</option>
                      <option>Delaware</option>
                      <option>Florida</option>
                      <option>Georgia</option>
                      <option>Guam</option>
                    </Input>
                  </Col>
                </FormGroup>
              </Col>
            </ListGroup>

            <div className=" d-flex  justify-content-end">
              <div className="p-2 col-example text-left pr-0">
                <Button onClick={routeChange} color="success">
                  <i className="fa fa-plus mr-2"></i>
                  Start New Order
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  )
}

CreateNewOrder.propTypes = {
  order: PropTypes.object,
  user: PropTypes.object,
  createCartWatcher: PropTypes.func,
}

const mapStateToProps = (state) => ({
  order: state.order,
  user: state.user,
})

const mapDispatchToProps = {createCartWatcher}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewOrder)
