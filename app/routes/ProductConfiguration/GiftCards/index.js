import React, {useEffect, useContext, useState} from 'react'
import {Row, Col, Button, Card} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import AppContext from 'components/App/AppContext'
import FilterRow from './components/FilterRow'
import GiftCardTable from './components/GiftCardTable'
import CodeFormatModal from './components/CodeFormatModal'

const GiftCards = () => {
  const [modal, setModal] = useState(false)

  const context = useContext(AppContext)
  const {setTitle} = context

  const history = useHistory()

  const toggle = () => setModal(!modal)

  useEffect(() => {
    setTitle('Gift Cards')
  }, [])

  const routeChange = () => {
    history.push('/products/gift-card-create')
  }

  return (
    <div className="container-fluid p-0 mt-2">
      <CodeFormatModal modal={modal} toggle={toggle} />
      <Row>
        <Col className="text-lg-right text-center" onClick={toggle}>
          <Button color="secondary" className="mr-1 mb-1">
            Set Default Code Format
          </Button>
          <Button color="info" className="mb-1" onClick={routeChange}>
            Create Gift Cards
          </Button>
        </Col>
      </Row>
      <Card lg={12} md={12} sm={12} xs={12} className="mb-3 p-3 mt-3">
        <Row className="border text-black m-0 p-2">
          <Col sm={12} lg={8}>
            <span className="fa-stack fa-lg">
              <i className="fa fas fa-question-circle fa-2x text-warning"></i>
            </span>
            <span>
              Here you can see your outstanding gift cards as well as those that have been redeemed.
            </span>
          </Col>
          <Col lg={4} className="my-auto text-lg-right">
            <span>Features Guide Link</span>
          </Col>
        </Row>
        <FilterRow />
        <GiftCardTable />
      </Card>
    </div>
  )
}

export default GiftCards
