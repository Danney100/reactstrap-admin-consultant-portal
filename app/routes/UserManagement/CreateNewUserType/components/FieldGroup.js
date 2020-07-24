import React from 'react'
import {Collapse, FormGroup, Col, Label, Button} from 'reactstrap'
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
      fontSize: '14px',
      color: ' #423b3c',
      fontWeight: 700,
      lineHeight: 2,
    },
    border: '1px solid #dee2e6',
    borderBottomLeftRadius: '0.25rem',
    borderBottomRightRadius: '0.25rem',
  },
}))

const FieldGroup = ({label, fields, index, open, setOpen}) => {
  const classes = useStyles()
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : '#3f4651',
      backgroundColor: state.isSelected ? '#3f4651' : '#f8f9fa',
    }),
    control: (provided) => ({
      ...provided,
      marginTop: '0%',
      borderRadius: '0.25rem',
      border: '1px solid #dee2e6',
      backgroundColor: '#f8f9fa',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#f8f9fa',
    }),
    valueContainer: (provided) => ({
      ...provided,
      borderRadius: '0.25rem',
      backgroundColor: '#f8f9fa',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      borderRadius: '0.25rem',
      backgroundColor: '#f8f9fa',
    }),
  }
  const options = [
    {
      label: 'No Access',
      value: 1,
    },
    {
      label: 'Read Only',
      value: 2,
    },
    {
      label: 'Read / Edit',
      value: 3,
    },
  ]

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
        <span className="big ml-1 text-white">{label}</span>
        <div className="d-flex" onClick={() => toggle()}>
          <i
            className={open === index ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}
            style={{color: 'white', cursor: 'pointer'}}></i>
        </div>
      </div>
      <Collapse isOpen={open === index} className={classes.collapse}>
        {fields.map((field, index) => {
          return (
            <FormGroup key={index} row>
              <Col sm={3}>
                <Label>{field}</Label>
              </Col>
              <Col sm={2}>
                <Select styles={customStyles} options={options} />
              </Col>
              <Col sm={2}>
                <Button color="info" className="mt-2 mt-lg-0">
                  <i className="fa fa-fw fa-eye"></i> View Fields
                </Button>
              </Col>
            </FormGroup>
          )
        })}
      </Collapse>
    </>
  )
}

FieldGroup.propTypes = {
  label: PropTypes.string,
  fields: PropTypes.object,
  index: PropTypes.number,
  open: PropTypes.oneOfType[(PropTypes.object, PropTypes.number)],
  setOpen: PropTypes.func,
}

export default FieldGroup
