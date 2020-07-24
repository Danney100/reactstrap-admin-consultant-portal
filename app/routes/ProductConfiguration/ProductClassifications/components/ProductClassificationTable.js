import React from 'react'
import {Row, Col, Button, Input} from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'

const ProductClassificationTable = () => {
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
        <Button className="mr-2 mb-1" color="danger" size="sm">
          <i className="fa fa-fw fa-trash" aria-hidden="true" />
          Delete
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
      dataField: 'Max Per Order',
      text: 'Max Per Order',
      sortCaret: sortCaret,
      sort: true,
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]

  const data = [
    {
      id: 1,
      Name: '$25 4 Bottle Set Reward',
      Description: '$25 4 Bottle Set Reward',
      'Max Per Order': 18,
    },
    {id: 2, Name: '1 bottle gift set', Description: '1 bottle gift set', 'Max Per Order': 18},
    {
      id: 3,
      Name: '10 % Scout & Cellar Birthday Discount',
      Description: '10 % Scout & Cellar Birthday Discount',
      'Max Per Order': 1,
    },
    {id: 4, Name: '12 Club', Description: '12 Club', 'Max Per Order': 11},
    {
      id: 5,
      Name: '12 days of Xmas Dec.10',
      Description: '12 days of Xmas Dec.10',
      'Max Per Order': 10,
    },
    {
      id: 6,
      Name: '12 days of Xmas Dec.11',
      Description: '12 days of Xmas Dec.11',
      'Max Per Order': 3,
    },
    {
      id: 7,
      Name: '12 days of Xmas Dec.12',
      Description: '12 days of Xmas Dec.12',
      'Max Per Order': 15,
    },
    {
      id: 8,
      Name: '12 days of Xmas Dec.13',
      Description: '12 days of Xmas Dec.13',
      'Max Per Order': 14,
    },
    {
      id: 9,
      Name: '12 days of Xmas Dec.3',
      Description: '12 days of Xmas Dec.3',
      'Max Per Order': 10,
    },
    {
      id: 10,
      Name: '12 days of Xmas Dec.4',
      Description: '12 days of Xmas Dec.4',
      'Max Per Order': 16,
    },
    {
      id: 11,
      Name: '12 days of Xmas Dec.5',
      Description: '12 days of Xmas Dec.5',
      'Max Per Order': 14,
    },
    {
      id: 12,
      Name: '12 days of Xmas Dec.6',
      Description: '12 days of Xmas Dec.6',
      'Max Per Order': 0,
    },
    {
      id: 13,
      Name: '12 days of Xmas Dec.7',
      Description: '12 days of Xmas Dec.7',
      'Max Per Order': 9,
    },
    {
      id: 14,
      Name: '12 days of Xmas Dec.8',
      Description: '12 days of Xmas Dec.8',
      'Max Per Order': 15,
    },
    {
      id: 15,
      Name: '12 days of Xmas Dec.9',
      Description: '12 days of Xmas Dec.9',
      'Max Per Order': 16,
    },
    {id: 16, Name: '2 bottle gift set', Description: '2 bottle gift set', 'Max Per Order': 18},
    {id: 17, Name: '20% Off Discount', Description: '20% Off Discount', 'Max Per Order': 11},
    {
      id: 18,
      Name: '2019 11.30 fieldhouses 15% off',
      Description: '2019 11.30 fieldhouses 15% off',
      'Max Per Order': 6,
    },
    {id: 19, Name: '3 bottle gift set', Description: '3 bottle gift set', 'Max Per Order': 8},
    {id: 20, Name: '4 bottle gift set', Description: '4 bottle gift set', 'Max Per Order': 7},
    {id: 21, Name: '4Club Tasting Set', Description: '4Club Tasting Set', 'Max Per Order': 18},
    {id: 22, Name: '6 Club and Tasting', Description: '6 Club and Tasting', 'Max Per Order': 18},
    {
      id: 23,
      Name: 'Business Basics Kit',
      Description: 'Consultant business kits',
      'Max Per Order': 1,
    },
    {id: 24, Name: 'Circle Exclusive', Description: 'Circle Exclusive', 'Max Per Order': 16},
    {
      id: 25,
      Name: 'Discount Subscriptions',
      Description: 'Discount Subscriptions (New for Coupon)',
      'Max Per Order': 15,
    },
    {id: 26, Name: 'Epic Pursuit', Description: 'Epic Pursuit', 'Max Per Order': 12},
    {
      id: 27,
      Name: 'FH Rose Val Day Discount',
      Description: 'FH Rose Val Day Discount',
      'Max Per Order': 18,
    },
    {
      id: 28,
      Name: 'Free 4 bottle set reward',
      Description: 'Free 4 Bottle Set Reward',
      'Max Per Order': 10,
    },
    {id: 29, Name: 'Gift Cards', Description: 'Gift Cards', 'Max Per Order': 19},
    {id: 30, Name: 'Holiday Sets', Description: 'Holiday Gift Sets', 'Max Per Order': 4},
    {
      id: 31,
      Name: 'Host Discount Items',
      Description: 'Associated with products that are eligible for host discount rewards.',
      'Max Per Order': 16,
    },
    {id: 32, Name: 'Imports', Description: 'Imports', 'Max Per Order': 11},
    {id: 33, Name: 'Merchandise', Description: 'Scout and Cellar Merchandise', 'Max Per Order': 8},
    {id: 34, Name: 'Middle Jane', Description: 'Middle Jane', 'Max Per Order': 16},
    {id: 35, Name: 'New Free Host', Description: 'New Free Host', 'Max Per Order': 3},
    {id: 36, Name: 'Party Order 12', Description: 'Party Order 12', 'Max Per Order': 14},
    {id: 37, Name: 'Party Order 4', Description: 'Party Order 4', 'Max Per Order': 3},
    {id: 38, Name: 'Party Order 6', Description: 'Party Order 6', 'Max Per Order': 6},
    {id: 39, Name: 'PV Reward 1', Description: 'PV Reward 1', 'Max Per Order': 13},
    {id: 40, Name: 'PV Reward 2', Description: 'PV Reward 2', 'Max Per Order': 10},
    {id: 41, Name: 'PV Reward 3', Description: 'PV Reward 3', 'Max Per Order': 15},
    {id: 42, Name: 'PV Reward 4', Description: 'PV Reward 4', 'Max Per Order': 19},
    {id: 43, Name: 'Rose', Description: 'Rose', 'Max Per Order': 1},
    {id: 44, Name: 'Sale Specials', Description: 'Sale Specials', 'Max Per Order': 12},
    {
      id: 45,
      Name: 'Saturday small biz sales',
      Description: 'Saturday small biz sales',
      'Max Per Order': 17,
    },
    {id: 46, Name: 'Sparkling', Description: 'Sparkling', 'Max Per Order': 10},
    {id: 47, Name: 'SSS qty limit', Description: 'to limit the qty in cart', 'Max Per Order': 10},
    {id: 48, Name: 'Tasting Sets', Description: '4-Bottle Sets', 'Max Per Order': 4},
    {id: 49, Name: 'Trigger Products', Description: 'Trigger Products', 'Max Per Order': 16},
    {id: 50, Name: 'Website Fee', Description: 'Website Fee', 'Max Per Order': 3},
    {id: 51, Name: 'Wilderness Road', Description: 'Wilderness Road', 'Max Per Order': 0},
    {
      id: 52,
      Name: 'Wine',
      Description: 'Wine against which volume discount can be applied',
      'Max Per Order': 4,
    },
    {id: 53, Name: 'Wine Clubs', Description: 'Wine Club Memberships', 'Max Per Order': 18},
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

export default ProductClassificationTable
