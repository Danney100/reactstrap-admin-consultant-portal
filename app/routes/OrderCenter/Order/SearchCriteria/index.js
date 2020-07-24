import React, {useContext, useEffect} from 'react'
import {Row, Col, Card, CardBody, Label, ListGroup, CardTitle, Input} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import AppContext from 'components/App/AppContext'
import FilterItems from './components/FilterItems'
import CreateButton from './components/CreateButton'
import {customerOptions} from './options'
import CommonButton from 'routes/components/CommonButton'

const useStyles = makeStyles({
  radiusButton: {
    borderRadius: 30,
    backgroundColor: '#e6e0dd !important',
  },
  title: {
    fontSize: '22px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  filterTitle: {
    fontSize: '14px',
    color: '#403839',
    fontFamily: 'SFUIText-Semibold',
  },
  inputStyle: {
    fontSize: '14px',
    color: '#adaaaa',
    fontFamily: 'SFUIText-Medium',
  },
})

export const SearchCriteria = ({
  register,
  applyFilter,
  handleSubmit,
  filters,
  clearFilter,
  resetFilters,
  handleSearch,
}) => {
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Customer Center')
  }, [])

  return (
    <div>
      <CreateButton />
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-3 text-white rounded-top mx-2 border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
                <div>
                  <span className={classes.title}>Search Criteria</span>
                </div>
              </CardTitle>
            </CardBody>
            <div>
              <ListGroup>
                <Row lg={12} md={12} sm={12} xs={12} form className="mx-2 pb-4 border-bottom">
                  <Col xl={{size: 1}} className="mt-2 d-flex align-items-center">
                    <Label className={`${classes.filterTitle} ml-3`}>New Filter</Label>
                  </Col>
                  <Col xl={{size: 3}} className={`${classes.inputStyle} mt-2 rounded-circle`}>
                    <Input type="select" innerRef={register} name="field">
                      {customerOptions.map((option, index) => {
                        return (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        )
                      })}
                    </Input>
                  </Col>
                  <Col xl={{size: 3}} className={`${classes.inputStyle} mx-2 mt-2`}>
                    <Input
                      type="select"
                      className={classes.radiusButton}
                      innerRef={register}
                      name="operator">
                      <option value="wildcard">Contains</option>
                      <option value="match">Is In</option>
                    </Input>
                  </Col>
                  <Col xl={{size: 3}} className={`${classes.inputStyle} mt-2 mx-2`}>
                    <Input type="text" placeholder="Value" innerRef={register} name="value" />
                  </Col>
                  <Col xl={{size: 1}} className="mt-2 mx-2 d-flex justify-content-end">
                    <CommonButton
                      onClick={handleSubmit(applyFilter)}
                      title="Add Filter"
                      buttonType="filterButton"
                    />
                  </Col>
                </Row>
              </ListGroup>
            </div>
          </Card>
          <Row>
            <Col className="mb-3 d-flex justify-content-end">
              <CommonButton onClick={resetFilters} title="Reset" buttonType="cancelButton" />
              <CommonButton onClick={handleSearch} title="Search" buttonType="saveButton" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

SearchCriteria.propTypes = {
  register: PropTypes.func,
  applyFilter: PropTypes.func,
  handleSubmit: PropTypes.func,
  filters: PropTypes.array,
  clearFilter: PropTypes.func,
  resetFilters: PropTypes.func,
  handleSearch: PropTypes.func,
}

export default SearchCriteria
