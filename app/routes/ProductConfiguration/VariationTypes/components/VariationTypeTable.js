import React from 'react'
import {Row, Col, Button, Input} from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import PropTypes from 'prop-types'

const VariationTypeTable = ({toggle}) => {
  const sortCaret = (order) => {
    if (!order) return <span>&nbsp;&nbsp;</span>
    else if (order === 'asc') return <i className="fa fa-long-arrow-up ml-2" />
    else if (order === 'desc') return <i className="fa fa-long-arrow-down ml-2" />
    return null
  }

  const actionFormater = () => {
    return (
      <Button className="mr-2 mb-1" color="success" size="sm" onClick={toggle}>
        <i className="fa fa-fw fa-pencil" aria-hidden="true" />
        Edit
      </Button>
    )
  }

  const columns = [
    {
      dataField: 'Name',
      text: 'Name',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'Description',
      text: 'Description',
      sortCaret: sortCaret,
      sort: true,
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]

  const data = [
    {id: 1, Name: 'Available Options', Description: 'Available Options'},
    {id: 2, Name: 'Available Sizes', Description: 'Available Sizes'},
    {id: 3, Name: 'Bag Options', Description: 'Bag Options'},
    {id: 4, Name: 'Box Options', Description: 'Box Options'},
    {id: 5, Name: 'Carrier Options', Description: 'Carrier Options'},
    {id: 6, Name: 'Frequency', Description: 'Frequency'},
    {id: 7, Name: 'Holiday Box Options', Description: 'Holiday Box Options'},
    {id: 8, Name: 'Lotion Options', Description: 'Lotion Options'},
    {id: 9, Name: 'Number of Bottles', Description: 'Number of Bottles'},
    {id: 10, Name: 'Options', Description: 'Options'},
    {id: 11, Name: 'Pip Stick Options', Description: 'Pip Stick Options'},
    {id: 12, Name: 'Red', Description: 'Red Wine'},
    {id: 13, Name: 'Ship Date', Description: 'Ship Date'},
    {id: 14, Name: 'Soap Options', Description: 'Soap Options'},
    {id: 15, Name: 'Sticker Options', Description: 'Sticker Options'},
    {id: 16, Name: 'Tote Options', Description: 'Tote Options'},
    {id: 17, Name: 'White', Description: 'White Wine'},
    {id: 18, Name: 'Wine Type', Description: 'Wine Type'},
  ]

  return (
    <>
      <Row className="m-0 mt-2 p-2 justify-content-end">
        <Col lg={3} xs={6} sm={6} className="mb-2 pr-0">
          <Input type="search" placeholder="Search" />
        </Col>
      </Row>
      <Row className="mt-2 m-0">
        <Col lg={12} className="p-0">
          <BootstrapTable
            keyField="id"
            data={data}
            columns={columns}
            classes="text-black border-left-0 border-right-0"
            pagination={paginationFactory()}
          />
        </Col>
      </Row>
    </>
  )
}

VariationTypeTable.propTypes = {
  toggle: PropTypes.func,
}

export default VariationTypeTable
