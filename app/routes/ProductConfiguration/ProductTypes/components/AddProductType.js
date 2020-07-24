import React, {useEffect, useContext} from 'react'
import {Form, FormGroup, Label, Col, Card, Input, Row, Button} from 'components'
import {useHistory} from 'react-router-dom'
import AppContext from 'components/App/AppContext'

function AddProductType() {
  const context = useContext(AppContext)
  const {setTitle} = context
  const history = useHistory()

  useEffect(() => {
    setTitle('New Product Type')
  }, [])

  const routeChange = () => {
    history.push('/products/product-type-manager')
  }

  return (
    <Row className="mt-3">
      <Col md={12} sm={12} xs={12}>
        <Card lg={12} md={12} sm={12} xs={12} className="mb-4 p-3">
          <Row className="border text-black m-0 p-2 rounded">
            <Col lg={1} sm={1} xs={2} className="text-center">
              <span className="fa-stack fa-lg">
                <i className="fa fas fa-question-circle fa-2x text-warning"></i>
              </span>
            </Col>
            <Col sm={11} lg={11} xs={10}>
              <span>
                Create/edit a product type. You can set the name of the type and an optional
                description.
              </span>
            </Col>
            <Col lg={12} className="my-auto text-right">
              <span>Features Guide Link</span>
            </Col>
          </Row>
          <Form className="mt-3">
            <FormGroup row>
              <Label for="name" sm={2} className="text-dark text-lg-right">
                Name
              </Label>
              <Col sm={6}>
                <Input type="text" id="name" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="description" sm={2} className="text-dark text-lg-right">
                Description
              </Label>
              <Col sm={6}>
                <Input type="textarea" id="description" />
              </Col>
            </FormGroup>
          </Form>
        </Card>
      </Col>
      <Col xs={6} lg={6}>
        <Button color="danger" onClick={routeChange}>
          <i className="fa fa-fw fa-times-circle-o" aria-hidden="true"></i>Cancel Changes
        </Button>
      </Col>
      <Col xs={6} lg={6} className="text-right">
        <Button color="success" onClick={routeChange}>
          <i className="fa fa-fw fa-check-circle-o" aria-hidden="true"></i>Save Changes
        </Button>
      </Col>
    </Row>
  )
}

export default AddProductType
