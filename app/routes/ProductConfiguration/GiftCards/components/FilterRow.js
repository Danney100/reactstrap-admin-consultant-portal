import React from 'react'
import {Row, Col, Button, Input} from 'reactstrap'

const FilterRow = () => {
  return (
    <Row className="mt-3 text-lg-left text-center text-black">
      <Col className="col-md-auto my-auto">Gift Cards Generated Between:</Col>
      <Col lg={3} className="p-2 p-lg-0">
        <Row className="m-0 justify-content-lg-start justify-content-center align-items-center">
          Start
          <Col lg={10} sm={6} xs={6}>
            <Input type="date" />
          </Col>
        </Row>
      </Col>
      <Col lg={3} className="p-2 p-lg-0">
        <Row className="m-0 justify-content-lg-start justify-content-center align-items-center ">
          End
          <Col lg={10} sm={6} xs={6}>
            <Input type="date" />
          </Col>
        </Row>
      </Col>
      <Col lg={2}>
        <Button color="success">Filter</Button>
      </Col>
    </Row>
  )
}

export default FilterRow
