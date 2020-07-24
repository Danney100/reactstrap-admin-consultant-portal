import React, {useState} from 'react'
import {Row, Col, Button, CardHeader, Card, Modal, CardBody, Input} from 'reactstrap'
import PropTypes from 'prop-types'

const AddVariationType = ({modal, toggle}) => {
  const [fieldCount, setFieldCount] = useState(1)

  const addField = () => {
    setFieldCount((prevState) => prevState + 1)
  }

  const removeField = () => {
    if (fieldCount > 0) {
      setFieldCount((prevState) => prevState - 1)
    }
  }

  const renderFields = () => {
    const fields = []
    for (let i = 0; i < fieldCount; i++) {
      fields.push(
        <Row className="pl-3">
          <div className="border d-flex flex-row p-2" style={{width: '85%'}}>
            <div className="my-auto pl-2">
              <i className="fa fa-ellipsis-v pull-left text-black" />
            </div>
            <div style={{width: 'calc(100% - 75px)'}}>
              <Input placeholder="option type" />
            </div>
            <div className="ml-2">
              <Button color="warning" onClick={removeField}>
                <i className="fa fas fa-minus" />
              </Button>
            </div>
          </div>
        </Row>,
      )
    }

    return fields
  }

  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      className="mt-lg-5 mx-lg-auto m-3"
      style={{minWidth: '50%'}}>
      <Card>
        <CardHeader>
          <Row>
            <Col lg={6} xs={8} sm={8} className="text-black">
              Add / Edit Variation Type
            </Col>
            <Col lg={6} xs={4} sm={4} className="text-right my-auto">
              <i
                className="fa fa-times"
                aria-hidden="true"
                style={{cursor: 'pointer'}}
                onClick={toggle}
              />
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Row className="border text-black m-0 p-2 rounded">
            <Col lg={1} sm={1} xs={2} className="text-center">
              <span className="fa-stack fa-lg">
                <i className="fa fas fa-question-circle fa-2x text-warning"></i>
              </span>
            </Col>
            <Col sm={11} lg={11} xs={10}>
              <span>
                The variation setup interface within the product center allows users to configure
                any variations types that will be available during product configuration. Variations
                are used to setup varying item attributes such as color, size, etc.
              </span>
            </Col>
            <Col lg={12} className="my-auto text-right">
              <span>Features Guide Link</span>
            </Col>
          </Row>
          <Row className="mt-3 text-black">
            <Col className="pt-lg-2 text-lg-right" lg={4}>
              <span>Variation Type Name</span>
            </Col>
            <Col lg={6}>
              <Input className="mb-2" />
            </Col>
          </Row>
          <Row className="mt-3 text-black mb-2">
            <Col className="pt-lg-2 text-lg-right" lg={4}>
              <span>Variation Type Description</span>
            </Col>
            <Col lg={6}>
              <Input className="mb-2" />
            </Col>
          </Row>
          <Row className="pl-3 mt-4">
            <span className="h4">Default Variations and Order For Type</span>
          </Row>
          {renderFields()}
          <Row className="m-0 justify-content-end mb-2 mt-3">
            <Button color="success" className="ml-1" onClick={addField}>
              <i className="fa fas fa-plus" />
            </Button>
          </Row>
          <Row className="mt-2">
            <Col lg={6} xs={6} sm={6} md={6} className="text-left">
              <Button color="warning" onClick={toggle}>
                <i className="fa fa-times-circle-o mr-1" color="info" aria-hidden="true" />
                Cancel
              </Button>
            </Col>
            <Col lg={6} xs={6} sm={6} md={6} className="text-right">
              <Button color="success">
                <i className="fa fas fa-check-circle-o mr-1" />
                Save Changes
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Modal>
  )
}

AddVariationType.propTypes = {
  modal: PropTypes.bool,
  toggle: PropTypes.func,
}

export default AddVariationType
