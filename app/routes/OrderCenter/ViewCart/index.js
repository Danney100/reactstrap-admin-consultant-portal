import React, {useState, useEffect} from 'react'
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  CardTitle,
  Label,
  FormGroup,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  Button,
  CardBody,
  Card,
  Media,
  Input,
  Table,
} from 'reactstrap'
import MoonLoader from 'react-spinners/MoonLoader'
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Map, List, fromJS} from 'immutable'

import {cartDetailsWatcher} from 'duck/watcher'

const ViewCart = (props) => {
  const itemCount = props.cart.get('itemCount')
  const cartID = props.cart.get('cartID')
  const cartDetails = props.cart.getIn(['cartDetails'], Map()).toJS()
  const cartItems = fromJS(props.cart.get('items', List())).toJS()

  const [isOpen, setIsOpen] = useState(false)

  const token = props.user.get('token')

  const toggleOpen = () => setIsOpen(!isOpen)

  const history = useHistory()

  const routeChange = () => {
    let path = '/order-center/create-new-order/shopping/viewcart/createperson'
    history.push(path)
  }

  const routeChange1 = () => {
    let path = '/order-center/create-new-order/shopping'
    history.push(path)
  }

  useEffect(() => {
    if (itemCount) {
      props.cartDetailsWatcher({cartID, token})
    }
  }, [cartID, itemCount])

  if (props.process.get('isLoading')) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <MoonLoader size={75} color={'#de8b6d'} loading={true} />
      </div>
    )
  }

  return (
    <div>
      <Row className="d-flex">
        <Col className="p-3 d-flex justify-content-end">
          <Button onClick={routeChange} color="info" className="rounded-0">
            <i className="fa fa-fw fa-shopping-cart mr-1" />
            {itemCount}
          </Button>
          <Dropdown>
            <DropdownToggle caret className="rounded-0" color="info"></DropdownToggle>
            <DropdownMenu style={{left: '-114px'}}>
              <DropdownItem divider />
              <DropdownItem header>
                <strong>Sub total:$0.00</strong>
              </DropdownItem>
              <DropdownItem>
                <div>View or Edit Cart</div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Card className="mb-3">
            <CardBody className="py-2 bg-primary rounded-top">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-center">
                <div>
                  <span className="text-white">SCOUT SAFESHIP(Copy)</span>
                </div>
              </CardTitle>
            </CardBody>
            <ListGroup>
              <ListGroupItem className="border m-3">
                <Media className="d-flex justify-content-center">
                  <Media>
                    <span>
                      <i
                        className="fa fa-check-circle-o d-flex justify-content-end"
                        aria-hidden="true"></i>
                      It’s our innovative, eco-friendly seasonal shipping program designed to
                      protect your wine (and the planet) through the hot summer months. Learn more
                      at scoutandcellar.com/scoutsafeship.
                    </span>
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col md="6">
          <Card className="mb-3">
            <CardBody className="py-2 bg-primary rounded-top">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-center">
                <div>
                  <span className="text-white">Boost Your Stash For Less Cash</span>
                </div>
              </CardTitle>
            </CardBody>
            <ListGroup>
              <ListGroupItem className="border m-3">
                <Media className="d-flex justify-content-center">
                  <Media>
                    <span>
                      <i className="fa fa-gift d-flex justify-content-end" aria-hidden="true"></i>
                      Buy at least 6+ bottles to receive 5% off your entire order!
                    </span>
                  </Media>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col md="6">
          <Card className="mb-3">
            <CardBody className="py-2 bg-primary rounded-top">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-center">
                <div>
                  <span className="text-white">Add Coupon Or Promo Code</span>
                </div>
              </CardTitle>
            </CardBody>
            <ListGroup>
              <div className="d-flex  justify-content-start m-2">
                <div className="p-2 text-left pr-0">
                  <Input></Input>
                </div>
                <div className="p-2 text-left pr-0">
                  <Button color="spotify">
                    <i className="fa fa-plus mr-2"></i>
                    Add Code
                  </Button>
                </div>
              </div>
            </ListGroup>
          </Card>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Card md={12} className="mb-3">
            <CardBody className="py-2 bg-primary rounded-top">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-center">
                <div>
                  <span className=" text-white">Your Cart</span>
                </div>
              </CardTitle>
            </CardBody>
            <ListGroup>
              {Object.keys(cartDetails).length === 0 ? (
                <div className="text-center p-4">No items in cart</div>
              ) : (
                <div className="pl-1">
                  <Col>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th className="align-middle">
                            <span>SKU</span>
                          </th>
                          <th className="align-middle">
                            <span>Item</span>
                          </th>
                          <th className="align-middle">
                            <span>Individual Price</span>
                          </th>
                          <th className="align-middle">
                            <span>Total Price</span>
                          </th>
                          <th className="align-middle">
                            <span>Rewards</span>
                          </th>
                          <th className="align-middle">
                            <span>Quantity</span>
                          </th>
                          <th className="align-middle">
                            <span>Edit Item</span>
                          </th>
                          <th className="align-middle">
                            <span>Totals</span>
                          </th>
                          <th className="align-middle">
                            <span>Product Total</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => {
                          return (
                            <tr key={item.id}>
                              <td className="align-middle">{item.name}</td>
                              <td className="align-middle">{item.description}</td>
                              <td className="align-middle">{`$${
                                item.price[0]['amount'] / 100
                              }`}</td>
                              <td className="align-middle">{`$${
                                (item.price[0]['amount'] * item.quantity) / 100
                              }`}</td>
                              <td className="align-middle">
                                <span>
                                  <Input type="text"></Input>
                                </span>
                              </td>
                              <td className="align-middle">{item.quantity}</td>
                              <td className="align-middle">
                                <span>
                                  <Col>
                                    <Button className="mb-1 mr-1" color="info">
                                      <i className="fa fa-refresh" aria-hidden="true"></i>
                                    </Button>
                                    <Button className="mb-1 mr-1" color="danger">
                                      <i className="fa fa-trash" aria-hidden="true"></i>
                                    </Button>
                                  </Col>
                                </span>
                              </td>
                              <td className="align-middle">{`$${
                                item.price[0]['amount'] / 100
                              }`}</td>
                              <td className="align-middle">{`$${
                                (item.price[0]['amount'] * item.quantity) / 100
                              }`}</td>
                            </tr>
                          )
                        })}
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Total</td>
                          <td>{cartDetails.meta.display_price.with_tax.formatted}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </div>
              )}
              <Col sm={{size: 5, offset: 0}}>
                <Card
                  className="mb-3"
                  lg={{size: 6, offset: 3}}
                  md={{size: 8, offset: 2}}
                  sm={{size: 8, offset: 4}}>
                  <CardBody className="py-2 bg-primary text-white rounded-top">
                    <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
                      <div>
                        <i className="fa fa-fw fa-shopping-cart text-white"></i>
                        <span className="ml-1 text-white">Quick Add Item</span>
                      </div>
                      <div className="d-flex text-white" onClick={toggleOpen}>
                        <i className={isOpen ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}></i>
                      </div>
                    </CardTitle>
                  </CardBody>
                  <Collapse isOpen={isOpen}>
                    <FormGroup row className="mt-4 mx-3">
                      <Label for="input" className="ml-2" sm={{size: 3, offset: 2}}>
                        SKU
                      </Label>
                      <Col sm={7} className="ml-2 mr-2">
                        <Input type="text" placeholder="Item SKU/Name"></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mx-3">
                      <Label for="input" className="ml-2" sm={{size: 3, offset: 2}}>
                        QTY
                      </Label>
                      <Col
                        sm={4}
                        className="mb-2 text-lg-right text-right mb-1 d-flex justify-content-end">
                        <Input type="number" className="mr-1 ml-2"></Input>
                      </Col>
                      <Col
                        sm={3}
                        className="text-lg-right text-right mb-2 d-flex justify-content-end mr-1">
                        <Button color="info">Quick Add Items</Button>
                      </Col>
                    </FormGroup>
                  </Collapse>
                </Card>
              </Col>
              <Col className="text-lg-right text-right mb-3 d-flex justify-content-between">
                <Button className="mr-3" color="warning" onClick={routeChange}>
                  <i className="fa fas fa-check-circle mr-1"></i>
                  Checkout
                </Button>
                <Button onClick={routeChange1} color="info">
                  <i className="fa fas fa-check-circle mr-1"></i>
                  Continue Shopping
                </Button>
              </Col>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

ViewCart.propTypes = {
  cart: PropTypes.object,
  user: PropTypes.object,
  setLoadingStatus: PropTypes.func,
  process: PropTypes.object,
  cartDetailsWatcher: PropTypes.func,
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  process: state.process,
  user: state.user,
})

const mapDispatchToProps = {cartDetailsWatcher}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCart)
