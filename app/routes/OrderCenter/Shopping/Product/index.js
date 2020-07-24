import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col, CardTitle, Button, Card, CardImg, CardSubtitle, CardBody} from 'reactstrap'
import {ToastContainer} from 'react-toastify'
import {connect} from 'react-redux'

import {addCartItem as cartAddItem} from 'duck/actions/cart'
import {setAllProducts} from 'duck/actions/products'
import * as util from 'helpers/util'
import {addCartItem} from 'api'
import Wine1 from 'images/wineimg/wine1.jpg'

const Product = (props) => {
  function handleAddCartItem(product) {
    const quantity = 1
    const token = props.user.get('token')
    product['quantity'] = 1
    const payload = {
      id: product.id,
      quantity: quantity,
    }
    addCartItem(props.cart.get('cartID'), payload, token)
      .then((res) => {
        if (!res?.hasError) {
          const actionPayload = {
            item: product,
            quantity: quantity,
          }
          props.cartAddItem(actionPayload)
          util.showInfoNotification('Item added to cart')
        } else {
          util.showErrorNotification(res.response.data.message)
        }
      })
      .catch((err) => console.log(err))
  }

  const {products} = props

  return (
    <Row>
      <ToastContainer />
      {products.slice(0, 100).map((product) => (
        <Col key={product.id} md={4} sm={6} xs={12}>
          <div>
            <Card>
              <CardImg top src={Wine1} alt="Card image cap" style={{height: '252px'}} />
              <CardBody>
                <CardTitle>{product.name}</CardTitle>
                <CardSubtitle className="d-flex justify-content-center">
                  ${product.price[0]['amount'] / 100}
                </CardSubtitle>
                <div className="text-lg-center text-center">
                  <Button className="mr-1 mb-1" color="info">
                    More Info
                  </Button>
                  <Button
                    className="mr-1 mb-1"
                    color="spotify"
                    onClick={() => handleAddCartItem(product)}>
                    <i className="fa fa-fw fa-shopping-cart" />
                    Add To Cart
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </Col>
      ))}
    </Row>
  )
}

Product.propTypes = {
  user: PropTypes.object,
  products: PropTypes.array,
  setAllProducts: PropTypes.func,
  cartAddItem: PropTypes.func,
  cart: PropTypes.object,
}

const mapStateToProps = (state) => ({
  user: state.user,
  cart: state.cart,
})

const mapDispatchToProps = {setAllProducts, cartAddItem}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
