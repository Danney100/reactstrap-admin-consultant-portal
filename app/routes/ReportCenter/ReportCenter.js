import React, {useContext, useEffect} from 'react'
import {Row, Col, Input} from 'reactstrap'
import Select from 'react-select'

import AppContext from 'components/App/AppContext'
import People from './components/People'
import ProductAndSales from './components/ProductAndSales'
// import Miscellaneous from './components/Miscellaneous'
// import Uncategorized from './components/Uncategorized'

const ReportCenter = () => {
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Reports')
  }, [])

  const options = [
    {label: 'All', value: 1},
    {label: 'PEOPLE', value: 2},
    {label: 'PRODUCTS and SALES', value: 3},
    {label: 'MISCELLANEOUS', value: 4},
    {label: 'UNCATEGORIZED', value: 5},
  ]

  return (
    <>
      <Row className="justify-content-center justify-content-lg-start p-3">
        <Col lg={1} xs={10} sm={1} className="my-auto">
          <span className="text-dark">Category</span>
        </Col>
        <Col lg={3} xs={10} sm={4}>
          <Select options={options} defaultValue={options[0]} />
        </Col>
        <Col lg={1} xs={10} sm={1} className="my-auto">
          <span className="text-dark">Search</span>
        </Col>
        <Col lg={3} xs={10} sm={4}>
          <Input className="bg-white" placeholder="Start Typing To Search"></Input>
        </Col>
      </Row>
      <Row className="p-3">
        <Col md={12} sm={12} xs={12}>
          <People />
          <ProductAndSales />
          {/* <Miscellaneous />
          <Uncategorized /> */}
        </Col>
      </Row>
    </>
  )
}

export default ReportCenter
