import React, {useContext, useEffect} from 'react'
import {Row, Col, Button, Card} from 'reactstrap'

import AppContext from 'components/App/AppContext'
import {JoinOptionTable} from './components/JoinOptionTable'
import {useHistory} from 'react-router-dom'

const JoinOptionManager = () => {
  const history = useHistory()

  const routeChange = () => {
    history.push('/join/join-option-edit')
  }

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Join Option Management')
  }, [])

  return (
    <div className="container-fluid p-0 mt-2">
      <Row>
        <Col className="text-right">
          <Button color="info" className="mb-1" onClick={routeChange}>
            <i className="fa fa-fw fa-plus" />
            New Join Option
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
            <span>
              A join option configuration is assigned to a product to enable that product in the
              join process, along with rules configured for the configuration. The join option
              management page includes each join option configuration that has been created in the
              application. To enable or disable a join option configuration use the
              &quot;Enabled&quot; checkbox and Save Changes. A join option configuration needs to be
              enabled to be available for assignment to a product.
            </span>
          </Col>
          <Col lg={12} className="my-auto text-right">
            <span>Features Guide Link</span>
          </Col>
        </Row>
        <Row className=" text-black m-0 mt-2">
          <JoinOptionTable />
        </Row>
      </Card>
    </div>
  )
}

export default JoinOptionManager
