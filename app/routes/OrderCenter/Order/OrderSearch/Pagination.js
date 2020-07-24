import React from 'react'
import {Col, Input, Pagination, PaginationItem, PaginationLink, FormGroup} from 'reactstrap'
import PropTypes from 'prop-types'

const SearchPagination = ({classes}) => {
  return (
    <FormGroup row>
      <Col>
        <Pagination aria-label="Page navigation example" className="mx-3">
          <PaginationItem>
            <PaginationLink className="font-weight-bold " first />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="font-weight-bold " previous />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="font-weight-bold " next />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="font-weight-bold " last />
          </PaginationItem>
        </Pagination>
      </Col>
    </FormGroup>
  )
}

SearchPagination.propTypes = {
  classes: PropTypes.object,
}

export default SearchPagination
