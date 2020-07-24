import React, {useEffect} from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  Pagination,
  PaginationItem,
  PaginationLink,
  FormGroup,
  Input,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

import CommonButton from 'routes/components/CommonButton'
import SearchDetails from './SearchDetails'
import {useDispatch, useSelector} from 'react-redux'
import {getConsultantDetails} from 'api'
import {setConsultantDetails} from 'duck/actions/consultant'

const useStyles = makeStyles({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#403839',
  },
  dropStyle: {
    backgroundColor: 'white !important',
    color: '#27BFA3 !important',
    borderColor: 'white !important',
    fontSize: 14,
    outline: 'none',
  },
})

export const ConsultantSearch = () => {
  const consultantToDisplay = useSelector(({consultant}) => consultant.get('consultantToDisplay'))
  const token = useSelector(({user}) => user.get('token'))

  const dispatch = useDispatch()

  useEffect(() => {
    const payload = {
      id: consultantToDisplay,
      token: token,
    }
    if (consultantToDisplay) {
      getConsultantDetails(payload)
        .then((res) => {
          if (!res?.hasError) {
            dispatch(setConsultantDetails(res))
          }
        })
        .catch((err) => console.log(err))
    }
  }, [consultantToDisplay])

  const classes = useStyles()
  return (
    <div className="mt-2">
      <Row>
        <Col md={12} sm={12} xs={12}>
          <div className="d-flex justify-content-end mb-4">
            <CommonButton title="Edit Consultant" buttonType="saveButton" />
          </div>
          <Card lg={12} md={12} sm={12} xs={12}>
            <CardBody>
              <Row className="d-flex justify-content-between border-bottom ">
                <Col sm="12" md={{size: 6, offset: 0}} className=" d-flex justify-content-start">
                  <p className={classes.title}>Consultant:courtney bono</p>
                </Col>
                <Col className="d-flex justify-content-end">
                  <FormGroup row>
                    <Col className="d-flex justify-content-center justify-content-lg-start">
                      <Input
                        type="select"
                        name="select"
                        id="exampleSelect"
                        className={classes.select}>
                        <option>Go to Portal</option>
                        <option>Financials</option>
                        <option>DownLines</option>
                        <option>Admin</option>
                        <option>Add New</option>
                        <option>Cancel Consultant</option>
                      </Input>
                    </Col>
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
                </Col>
              </Row>
              <SearchDetails />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ConsultantSearch
