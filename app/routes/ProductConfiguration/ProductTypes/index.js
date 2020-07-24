import React, {useContext, useEffect} from 'react'
import {Row, Col, Card, Button} from 'components'
import {useHistory} from 'react-router-dom'
import AppContext from 'components/App/AppContext'
import ProductTypeTable from './components/ProductTypeTable'

const ProductTypeManager = () => {
  const history = useHistory()

  const routeChange = () => {
    history.push('/products/product-type-edit')
  }

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Product Types')
  }, [])

  return (
    <div className="container-fluid p-0 mt-2">
      <Row>
        <Col className="mt-3 mb-2 pr-2">
          <Button className=" mr-2 float-right bg-success border-success" onClick={routeChange}>
            <i className="fa fa-fw fa-plus" aria-hidden="true" />
            Add Product Type
          </Button>
        </Col>
      </Row>
      <Card lg={12} md={12} sm={12} xs={12} className="mb-3 p-3 mt-3">
        <Row className="border text-black m-0 p-2 rounded">
          <Col lg={1} sm={1} xs={2} className="text-center">
            <span className="fa-stack fa-lg">
              <i className="fa fas fa-question-circle fa-2x text-warning"></i>
            </span>
          </Col>
          <Col sm={11} lg={11} xs={10}>
            <span>This is a help message based on the current active area.</span>
          </Col>
          <Col lg={12} className="my-auto text-right">
            <span>Features Guide Link</span>
          </Col>
        </Row>
        <ProductTypeTable />
      </Card>
    </div>
  )
}

export default ProductTypeManager
