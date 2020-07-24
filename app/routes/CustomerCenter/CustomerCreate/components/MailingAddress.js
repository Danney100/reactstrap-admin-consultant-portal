import React from 'react'
import PropTypes from 'prop-types'
import {Col, Card, Label, FormGroup, Input, Row} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    color: '#403839',
    fontSize: 12,
    fontFamily: 'SFUIText-Bold',
  },
  input: {
    marginBottom: 50,
  },
  name: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
  border: {
    borderRadius: 4,
    color: 'red',
    marginRight: 26,
  },
  option: {
    fontFamily: 'SFUIText-Medium',
    fontSize: 14,
    color: '#6c6766',
  },
  distance: {
    marginBottom: 30,
  },
})

const MailingAddress = (props) => {
  const {register, errors, demotrigger, DemoData} = props
  const {shipping_address} = errors

  const classes = useStyles()
  return (
    <Card className={classes.distance}>
      <div tag="h5">
        <h4 className={classes.name}>
          Default Mailing Address
          <hr className={classes.border} />
        </h4>
      </div>
      <div>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3 mt-3">
              <Label className={classes.title}>Country*</Label>
              <Input
                type="select"
                name="shipping_address.country"
                innerRef={register({required: 'This field is required.'})}
                className={classes.option}>
                <option value="US">United States</option>
              </Input>
              {shipping_address && shipping_address.country && (
                <span className="text-danger">{shipping_address.country.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 mt-3">
              <Label className={classes.title}>State*</Label>
              <Input
                type="select"
                name="shipping_address.county"
                className={classes.option}
                innerRef={register({required: 'This field is required.'})}>
                <option value={'CA'} key={'CA'}>
                  {'California'}
                </option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>City*</Label>
              <Input type="text" name="shipping_address.city" defaultValue="" innerRef={register} />
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Postal Code*</Label>
              <Input
                type="text"
                name="shipping_address.postcode"
                defaultValue=""
                innerRef={register({required: 'This field is required.'})}
              />
              {shipping_address && shipping_address.postcode && (
                <span className="text-danger">{shipping_address.postcode.message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 8, offset: 2}}>
            <FormGroup className="mr-ml-5  mx-3">
              <Label className={classes.title}>Street1*</Label>
              <Input
                type="text"
                name="shipping_address.line_1"
                defaultValue=""
                innerRef={register({required: 'This field is required.'})}
              />
              {shipping_address && shipping_address.line_1 && (
                <span className="text-danger">{shipping_address.line_1.message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Phone Number*</Label>
              <Input
                type="text"
                name="shipping_address.phone_number"
                defaultValue=""
                innerRef={register}
              />
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Street2</Label>
              <Input
                type="text"
                name="shipping_address.line_2"
                defaultValue=""
                innerRef={register}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form className="mb-4">
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Validated</Label>
              <Input
                type="select"
                name="residential"
                className={classes.option}
                innerRef={register}>
                <option>Unknown</option>
                <option>Yes</option>
                <option>No</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 ">
              <Label className={classes.title}>Residential</Label>
              <Input
                Input
                type="select"
                name="residential"
                className={classes.option}
                innerRef={register}>
                <option>Yes</option>
                <option>No</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </div>
    </Card>
  )
}

MailingAddress.propTypes = {
  demotrigger: PropTypes.bool,
  DemoData: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
}

export default MailingAddress
