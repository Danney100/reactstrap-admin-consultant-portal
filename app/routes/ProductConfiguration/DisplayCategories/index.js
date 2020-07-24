import React, {useContext, useEffect} from 'react'
import {Row, Col, Card, CardBody, Button} from 'components'
import AppContext from 'components/App/AppContext'
import DataTree from './components/DataTree'
import {useHistory} from 'react-router'

const DisplayCategoryManager = () => {
  const context = useContext(AppContext)
  const {setTitle} = context

  const history = useHistory()

  useEffect(() => {
    setTitle('Product Display Categories')
  }, [])

  const routeChange = () => {
    history.push('/products/display-category-edit')
  }

  return (
    <div className="container-fluid p-0 mt-2">
      <Row>
        <Col className="mt-1 mb-3 pr-2 text-lg-right text-center">
          <Button className="mr-2 mb-2" color="success" onClick={routeChange}>
            <i className="fa fa-fw fa-plus" aria-hidden="true" />
            Add New Display Categories
          </Button>
          <Button className="mr-2 mb-2" color="dark" onClick={routeChange}>
            <i className="fa fa-fw fa-pencil" aria-hidden="true" />
            Edit Selected Display Categories
          </Button>
          <Button className="mr-2 mb-2" color="warning">
            <i className="fa fa-fw fa-trash" aria-hidden="true" />
            Delete Selected Display Categories
          </Button>
        </Col>
      </Row>
      <Card>
        <CardBody>
          <Row className="border text-black m-0 p-2">
            <Col sm={12} lg={8}>
              <span className="fa-stack fa-lg">
                <i className="fa fas fa-question-circle fa-2x text-warning"></i>
              </span>
              <span>
                Here you can see your outstanding gift cards as well as those that have been
                redeemed.
              </span>
            </Col>
            <Col lg={4} className="my-auto text-lg-right">
              <span>Features Guide Link</span>
            </Col>
          </Row>
          <Col className="mt-3">
            <DataTree />
          </Col>
        </CardBody>
      </Card>
      <Col className="mt-3 mb-3 p-0">
        <Button className="mr-2 bg-danger border-danger">
          <i className="fa fa-fw  fa-times-circle-o" aria-hidden="true"></i>Cancel Changes
        </Button>
        <Button className="float-right bg-success border-success">
          <i className="fa fa-fw fa-check-circle-o" aria-hidden="true"></i>Save Changes
        </Button>
      </Col>
    </div>
  )
}

export default DisplayCategoryManager
