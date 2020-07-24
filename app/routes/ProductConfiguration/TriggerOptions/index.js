import React, {useContext, useEffect} from 'react'
import {Row, Col, Button, Card, FormGroup, Input, Label} from 'reactstrap'
import AppContext from 'components/App/AppContext'
import {useHistory} from 'react-router-dom'
import TriggerOptionTable from './components/TriggerOptionTable'

const TriggerOptionManager = () => {
  const history = useHistory()

  const routeChange = () => {
    history.push('/rewards/trigger-option-edit')
  }

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Trigger Options Manager')
  }, [])

  return (
    <div className="container-fluid p-0 mt-2">
      <Row className="border bg-white text-black m-0 p-2 rounded">
        <Col lg={1} sm={1} xs={2} className="text-center">
          <span className="fa-stack fa-lg">
            <i className="fa fas fa-question-circle fa-2x text-warning"></i>
          </span>
        </Col>
        <Col sm={11} lg={11} xs={10}>
          <span>
            Manage your trigger options that will take affect when a person is shopping or managing
            their subscriptions.
          </span>
        </Col>
        <Col lg={12} className="my-auto text-right">
          <span>Features Guide Link</span>
        </Col>
      </Row>
      <Card lg={12} md={12} sm={12} xs={12} className="mb-3 p-3 mt-3">
        <Row className="pl-2">
          <Col className="text-black pl-4 my-auto" lg={6} sm={12} xs={12}>
            <FormGroup className="m-0">
              <Input type="checkbox" />
              <Label>Show Expired</Label>
            </FormGroup>
          </Col>
          <Col className="text-right" lg={6} sm={12} xs={12}>
            <Button color="info" className="mb-1" onClick={routeChange}>
              <i className="fa fa-fw fa-plus" />
              Add New Trigger Option
            </Button>
          </Col>
        </Row>
        <TriggerOptionTable />
      </Card>
    </div>
  )
}

export default TriggerOptionManager
