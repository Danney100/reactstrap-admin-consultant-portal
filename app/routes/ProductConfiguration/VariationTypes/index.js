import React, {useContext, useEffect, useState} from 'react'
import {Row, Col, Card, Button} from 'components'
import AppContext from 'components/App/AppContext'
import VariationTypeTable from './components/VariationTypeTable'
import AddVariationType from './components/AddVariationType'

const VariationTypeSetup = () => {
  const [modal, setModal] = useState(false)

  const context = useContext(AppContext)
  const {setTitle} = context

  const toggle = () => setModal(!modal)

  useEffect(() => {
    setTitle('Variation Types')
  }, [])

  return (
    <div className="container-fluid p-0 mt-2">
      <AddVariationType modal={modal} toggle={toggle} />
      <Row>
        <Col className="mt-3 mb-2 pr-2">
          <Button className=" mr-2 float-right bg-success border-success" onClick={toggle}>
            <i className="fa fa-fw fa-plus" aria-hidden="true" />
            Add Variation Type
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
              The variation setup interface within the product center allows users to configure any
              variations types that will be available during product configuration. Variations are
              used to setup varying item attributes such as color, size, etc.
            </span>
          </Col>
          <Col lg={12} className="my-auto text-right">
            <span>Features Guide Link</span>
          </Col>
        </Row>
        <VariationTypeTable toggle={toggle} />
      </Card>
    </div>
  )
}

export default VariationTypeSetup
