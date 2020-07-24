import React from 'react'
import {Row, Col, Media, Card, CardBody, Input, CardTitle, ListGroup} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import ResultTable from './components/ResultTable'
import Pagination from './components/Pagination'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'

const useStyles = makeStyles({
  input: {
    borderColor: 'white',
  },
  media: {
    backgroundColor: '#ccf2ff',
    borderRadius: 50,
    width: 30,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
  },
  alertMedia: {
    backgroundColor: '#ffe6e6',
    borderRadius: 50,
    width: 30,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
  },
  demos: {
    margin: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#1EB7FF',
    borderRadius: 6,
  },
  alertDemos: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    padding: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#e94b35',
    borderRadius: 6,
  },
  title: {
    fontSize: '22px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
})

export const SearchResult = ({searchResults}) => {
  const classes = useStyles()

  return (
    <div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-3 text-white rounded-top mx-1 border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
                <div>
                  <span className={classes.title}>Search Results</span>
                </div>
                <div>
                  <CustomSearch className="mr-3" />
                </div>
              </CardTitle>
            </CardBody>
            <div>
              <ListGroup>
                <ResultTable searchResults={searchResults} />
                <Pagination />
              </ListGroup>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

SearchResult.propTypes = {
  searchResults: PropTypes.array,
}

export default SearchResult
