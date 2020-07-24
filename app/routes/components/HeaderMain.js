import React from 'react'
import PropTypes from 'prop-types'

import {InputGroup, InputGroupAddon, Input, Button, Row, Col} from 'components'

const HeaderMain = (props) => (
  <React.Fragment>
    {/* START H1 Header */}
    <Row className={` d-flex ${props.className}`}>
      <Col md={6}>
        <h1 className="display-4 mr-3 mb-2 align-self-start">{props.title}</h1>
      </Col>
      <Col md={6} className="d-flex">
        <InputGroup className="d-flex align-items-center">
          <Input placeholder="Search for..." className="bg-white" />
          <InputGroupAddon addonType="append">
            <Button color="primary">
              <i className="fa fa-search"></i>
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Col>
    </Row>
    {/* END H1 Header */}
  </React.Fragment>
)
HeaderMain.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.node,
  className: PropTypes.string,
}
HeaderMain.defaultProps = {
  title: 'Waiting for Data...',
  subTitle: 'Waiting for Data...',
  className: 'my-4',
}

export {HeaderMain}
