import React, {useContext, useEffect} from 'react'
import {Row, Col, Card, Label, Input, Button, FormGroup, Form, CardHeader} from 'reactstrap'
import {useHistory} from 'react-router'
import AppContext from 'components/App/AppContext'

const AddDisplayCategory = () => {
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Create Display Category')
  }, [])

  const history = useHistory()

  const routeChange = () => {
    history.push('/products/display-category-manager')
  }

  const sites = [
    'Corporate Website',
    'Replicated Websites',
    'Website Party',
    'Consultant Join',
    'Portal Consultant',
    'Portal Customer',
    'Portal Party',
    'Flight',
    'Flight Consultant',
    'Consultant Subscription',
    'Flight Customer',
    'Customer Subscription',
    'Promotional Rewards',
    'Host Rewards',
  ]

  return (
    <Row>
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
                The edit display category page allows the user to adjust the name and description of
                all display categories currently configured. In addition, the user can adjust the
                Display In sections and create/edit custom website urls.
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
                <Input type="text" id="name"></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="description" sm={2} className="text-dark text-lg-right">
                Description
              </Label>
              <Col sm={6}>
                <Input type="textarea" id="description"></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="url" sm={2} className="text-dark text-lg-right">
                URL Extension
              </Label>
              <Col sm={6}>
                <Input type="text" id="url"></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="image" sm={2} className="text-dark text-lg-right">
                Image URL
              </Label>
              <Col sm={3}>
                <Input type="text" id="image"></Input>
              </Col>
              <Col sm={3}>
                <Button className="mt-lg-0 mt-1">
                  <i className="fa fa-fw fa-plus" aria-hidden="true" />
                  Choose Image
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Card>
        <Card className="mb-4">
          <CardHeader className="mb-3">
            <Row>
              <Col lg={6} xs={12} sm={12} className="text-black text-lg-left text-center">
                Shopping Carts
              </Col>
              <Col lg={6} xs={12} sm={12} className="text-lg-right text-center mt-lg-0 mt-2">
                <Button color="success" size="sm">
                  <i className="fa fa-fw fa-check-square" aria-hidden="true"></i> Check All
                </Button>
                <Button className="ml-1 " color="danger" size="sm">
                  <i className="fa fa-fw fa-square"></i> Uncheck All
                </Button>
              </Col>
            </Row>
          </CardHeader>
          <Row className="m-0 pl-4 text-black">
            {sites.map((site, index) => {
              return (
                <Col lg={4} md={6} sm={12} xs={12} key={index}>
                  <FormGroup row className="ml-0">
                    <Input type="checkbox" />
                    <Label>{site}</Label>
                  </FormGroup>
                </Col>
              )
            })}
          </Row>
        </Card>
      </Col>
      <Col xs={6} lg={6}>
        <Button color="danger" onClick={routeChange}>
          <i className="fa fa-fw fa-times-circle-o" aria-hidden="true"></i>Cancel
        </Button>
      </Col>
      <Col xs={6} lg={6} className="text-right">
        <Button color="success" onClick={routeChange}>
          <i className="fa fa-fw fa-check-circle-o" aria-hidden="true"></i>Save
        </Button>
      </Col>
    </Row>
  )
}

export default AddDisplayCategory
