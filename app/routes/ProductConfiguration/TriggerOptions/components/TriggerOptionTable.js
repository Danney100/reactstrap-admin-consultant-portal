import React from 'react'
import {Row, Col, Button, Input} from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import {data} from './demoData'

const TriggerOptionTable = () => {
  const sortCaret = (order) => {
    if (!order) return <span>&nbsp;&nbsp;</span>
    else if (order === 'asc') return <i className="fa fa-long-arrow-up ml-2" />
    else if (order === 'desc') return <i className="fa fa-long-arrow-down ml-2" />
    return null
  }

  const actionFormater = () => {
    return (
      <>
        <Button className="mr-2 mb-1" color="success" size="sm">
          <i className="fa fa-fw fa-pencil" aria-hidden="true" />
          Edit
        </Button>
        <Button className="mr-2 mb-1" color="info" size="sm">
          <i className="fa fa-fw fa-clone" aria-hidden="true" />
          Copy
        </Button>
        <Button className="mr-2 mb-1" color="danger" size="sm">
          <i className="fa fa-fw fa-ban" aria-hidden="true" />
          Expire
        </Button>
      </>
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
    {
      dataField: 'startTime',
      text: 'Start Time',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'endTime',
      text: 'End Time',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'personType',
      text: 'Person Type',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'countries',
      text: 'Countries',
      sortCaret: sortCaret,
      sort: true,
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
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
            classes="text-black border-left-0 border-right-0 table-responsive"
            pagination={paginationFactory()}
          />
        </Col>
      </Row>
    </>
  )
}

export default TriggerOptionTable
