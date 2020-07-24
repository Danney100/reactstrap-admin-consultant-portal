import React from 'react'
import {Row, Col, Button, Card, Input} from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'

const GiftCardTable = () => {
  const sortCaret = (order) => {
    if (!order) return <span>&nbsp;&nbsp;</span>
    else if (order === 'asc') return <i className="fa fa-long-arrow-up ml-2" />
    else if (order === 'desc') return <i className="fa fa-long-arrow-down ml-2" />
    return null
  }

  const actionFormater = () => {
    return <Button className="mr-2 bg-danger border-danger">Expire</Button>
  }

  const columns = [
    {
      dataField: 'generated',
      text: 'Generated',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'code',
      text: 'Code',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'originating',
      text: 'Originating...',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'value',
      text: 'Value',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'currencyType',
      text: 'Currency Type',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'purchasedBy',
      text: 'Purchased By',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'redeemed',
      text: 'Redeemed',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'redeemedBy',
      text: 'Redeemed By',
      sort: true,
      sortCaret: sortCaret,
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]

  const data = [
    {
      id: 1,
      generated: '6/22/2020 9:54PM',
      code: 'HT74-FV46',
      originating: '1044327',
      value: '$25.00',
      currencyType: 'USD',
      purchasedBy: 'Heather Shaughnessy(Consultant 14427)',
      redeemed: '',
      redeemedBy: '',
    },
    {
      id: 2,
      generated: '6/21/2020 4:35 AM',
      code: 'ZV76-ZT26',
      originating: '1041458',
      value: '$100.00',
      currencyType: 'USD',
      purchasedBy: 'Emily Allen(Consultant 7261)',
      redeemed: '6/21/2020 9:59 AM',
      redeemedBy: 'Sarah Patellos(Customer C199485)',
    },
    {
      id: 3,
      generated: '6/21/2020 4:35 AM',
      code: 'HG43-FG79',
      originating: '1044213',
      value: '$100.00',
      currencyType: 'USD',
      purchasedBy: 'Amanda Johnson(Consultant 19959)',
      redeemed: '',
      redeemedBy: '',
    },
  ]

  return (
    <Card className="mt-3">
      <Row className="m-0 mt-2 p-2 justify-content-center align-items-center">
        <Col lg={9} className="text-center text-lg-left mb-2">
          <Button color="info">
            <i className="fa fa-file-excel-o mr-2" />
            Export to Excel
          </Button>
        </Col>
        <Col lg={3} xs={6} sm={6} className="mb-2">
          <Input type="search" placeholder="Search" />
        </Col>
      </Row>
      <Row className="mt-3 m-0">
        <Col lg={12} className="p-0">
          <BootstrapTable
            keyField="id"
            data={data}
            columns={columns}
            classes="table-responsive text-black border-left-0 border-right-0"
            pagination={paginationFactory()}
          />
        </Col>
      </Row>
    </Card>
  )
}

export default GiftCardTable
