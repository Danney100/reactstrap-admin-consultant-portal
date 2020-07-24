import React, {useState, useContext, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  Row,
  Col,
  CardTitle,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  ButtonGroup,
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardBody,
} from 'reactstrap'
import PropTypes from 'prop-types'
import MoonLoader from 'react-spinners/MoonLoader'

import Product from './Product/index'
import Sidebar from './Sidebar'
import AppContext from 'components/App/AppContext'
import Paginations from './Pagination'
import {getAllProducts} from 'api'

export const Shopping = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const token = props.user.get('token')
    setLoading(true)
    getAllProducts(token)
      .then((res) => {
        if (!res?.hasError) {
          setProducts(res)
          setLoading(false)
        }
      })
      .catch((err) => console.log(err))
  }, [])

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Add Order')
  }, [])

  const toggle = () => setDropdownOpen((prevState) => !prevState)

  const items = [
    {
      name: 'all products',
      label: 'All Products',
      items: [
        {name: 'wine club', label: 'Wine Club'},
        {
          name: 'wine',
          label: 'Wine',
          items: [
            {name: 'gift sets', label: 'Gift Sets'},
            {name: 'sparkling', label: 'Sparkling'},
            {
              name: 'white',
              label: 'White',
              items: [
                {name: 'fruity white', label: 'Fruity White'},
                {name: 'earth white', label: 'Earthy white'},
                {name: 'creamy', label: 'Creamy'},
                {name: 'crisp', label: 'Crisp'},
              ],
            },
            {name: 'rosé', label: 'Rosé'},
            {
              name: 'red',
              label: 'Red',
              items: [
                {name: 'fruity red', label: 'Fruity Red'},
                {name: 'earthy red', label: 'Earthy red'},
                {name: 'bold', label: 'Bold'},
                {name: 'light', label: 'Light'},
              ],
            },
          ],
        },
      ],
    },
    {name: 'circle', label: 'Circle Exclusive'},
    {name: 'scout circle tasting', label: 'Scout Circle Tasting'},
    {
      name: 'merch',
      label: 'Merch',
      items: [
        {name: 'wearables', label: 'Wearables'},
        {name: 'drinkware', label: 'Drinkware'},
        {name: 'entertaining', label: 'Entertaining'},
        {name: 'marketing tools', label: 'Marketing Tools'},
      ],
    },
  ]

  const history = useHistory()

  const routeChange = () => {
    let path = '/order-center/create-new-order/shopping/viewcart'
    history.push(path)
  }

  const itemCount = props.cart.get('itemCount')

  if (props.process.get('isLoading')) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <MoonLoader size={75} color={'#de8b6d'} loading={true} />
      </div>
    )
  }

  return (
    <>
      <Row className="d-flex">
        <Col className="p-3 d-flex justify-content-end">
          <Button onClick={routeChange} color="info" className="rounded-0">
            <i className="fa fa-fw fa-shopping-cart mr-1"></i>
            {itemCount}
          </Button>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
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
        <Col>
          <Card className="mb-3">
            <CardBody className="py-2 bg-primary">
              <CardTitle className="mb-0">
                <Container fluid>
                  <Row>
                    <Col md={12} xl={4} className="pl-0 mb-1">
                      <InputGroup style={{width: '60%'}}>
                        <Input placeholder="Search" className="rounded-0" />
                        <InputGroupAddon addonType="append" className="bg-white">
                          <Button color="secondary" outline tag={Link} to="/apps/tasks/list">
                            <i className="fa fa-search"></i>
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                    <Col
                      className="d-flex justify-content-end text-lg-right text-right pl-0"
                      xl={8}>
                      <span
                        md={2}
                        className="d-flex text-white align-items-center w-auto font-weight-normal mr-1">
                        Items per page
                      </span>
                      <Input type="select" className="rounded-0 mr-1 w-25" md={2}>
                        <option defaultValue="">2</option>
                        <option>4</option>
                        <option>6</option>
                        <option>24</option>
                        <option>48</option>
                        <option>72</option>
                        <option>96</option>
                        <option>All</option>
                      </Input>

                      <span
                        md={2}
                        className="d-flex text-white align-items-center font-weight-normal w-auto mr-1">
                        Sort by
                      </span>
                      <Input type="select" md={4} xs={12} className="rounded-0 mr-1 w-25">
                        <option defaultValue="">Popular</option>
                        <option>Lowest to Highest</option>
                        <option>Highest to Lowest</option>
                        <option>A-Z</option>
                      </Input>
                      <ButtonGroup md={2}>
                        <Button className="rounded-0">
                          <i className="fa fa-list-ul"></i>
                        </Button>
                        <Button className="rounded-0">
                          <i className="fa fa-th"></i>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </Container>
              </CardTitle>
            </CardBody>
            <Row className="m-0 p-3">
              <Col md={3} className="p-0 m-0">
                <Sidebar items={items} />
              </Col>
              <Col md={9} className="p-0">
                <div>
                  <Row>
                    <Col md={12}>
                      <div className="mb-3">
                        <div className="px-3 py-2 bg-primary">
                          <h4 className="mb-0 font-weight-light text-white">All Products</h4>
                        </div>
                        <div className="p-3 border border-secondary">
                          <Col sm={9} className="pl-0 text-black">
                            All Products
                          </Col>
                        </div>
                      </div>
                      <div className="px-3 py-2 mb-3 bg-light">
                        <a href="#">All Products</a>
                      </div>
                    </Col>
                    <Paginations />
                  </Row>
                </div>
                <div className="product-grid-view">
                  {loading ? (
                    <MoonLoader size={75} color={'#de8b6d'} loading={true} />
                  ) : (
                    <Product products={products} />
                  )}
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  )
}

Shopping.propTypes = {
  cart: PropTypes.object,
  process: PropTypes.object,
  user: PropTypes.object,
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  process: state.process,
  user: state.user,
})

export default connect(mapStateToProps)(Shopping)
