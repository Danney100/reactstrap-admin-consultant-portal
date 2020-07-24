import React from 'react'
import {Collapse, FormGroup, Col, Label, Button, Input} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import Select from 'react-select'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#3f4651',
    padding: '10px 15px',
    marginTop: '10px',
  },
  open: {
    borderTopLeftRadius: '0.25rem',
    borderTopRightRadius: '0.25rem',
  },
  close: {
    borderRadius: '0.25rem',
  },
  collapse: {
    '& label': {
      fontSize: '12px',
      color: ' #423b3c',
      fontWeight: 700,
      lineHeight: 2,
    },
    border: '1px solid #dee2e6',
    borderBottomLeftRadius: '0.25rem',
    borderBottomRightRadius: '0.25rem',
  },
}))

const ModuleGroup = ({label, fields, index, open, setOpen}) => {
  const classes = useStyles()

  const toggle = () => {
    if (open === index) {
      setOpen(null)
    } else {
      setOpen(index)
    }
  }
  return (
    <>
      <div className={`${open === index ? classes.open : classes.close} ${classes.root}`}>
        <span className="big ml-1" style={{color: 'white'}}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> {label}
            </Label>
          </FormGroup>
        </span>
        <div className="d-flex" onClick={() => toggle()}>
          <i
            className={open === index ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}
            style={{color: 'white', cursor: 'pointer'}}></i>
        </div>
      </div>
      <Collapse isOpen={open === index} className={classes.collapse}>
        <Col sm={12} className="px-4 mb-3 pt-2">
          {fields.map((field, index) => {
            return (
              <FormGroup check key={index} row>
                <Label check>
                  <Input type="checkbox" /> {field}
                </Label>
              </FormGroup>
            )
          })}
        </Col>
      </Collapse>
    </>
  )
}

ModuleGroup.propTypes = {
  label: PropTypes.string,
  fields: PropTypes.object,
  index: PropTypes.number,
  open: PropTypes.oneOfType[(PropTypes.object, PropTypes.number)],
  setOpen: PropTypes.func,
}

export default ModuleGroup
