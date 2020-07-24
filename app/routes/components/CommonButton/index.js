import React from 'react'
import {Button} from 'reactstrap'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  addButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    width: 180,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },

  addItemButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    marginLeft: 30,
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    width: 240,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },

  cancelItemButton: {
    backgroundColor: '#6c6766',
    borderColor: '#6c6766',
    marginLeft: 30,
    '&:hover': {
      backgroundColor: '#6c6766 !important',
      borderColor: '#6c6766 !important',
    },
    '&:focus': {
      backgroundColor: '#6c6766 !important',
      borderColor: '#6c6766 !important',
    },
    width: 240,
    height: 40,
    fontSize: 13,
  },

  filterButton: {
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766 !important',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766 !important',
    },
    width: 147,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },

  saveButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    marginLeft: 30,
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3',
    },
    width: 180,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },

  cancelButton: {
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    width: 180,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  continueButton: {
    backgroundColor: '#E94B35',
    borderColor: '#E94B35',
    '&:hover': {
      backgroundColor: '#E94B35 !important',
      borderColor: '#E94B35',
    },
    '&:focus': {
      backgroundColor: '#E94B35 !important',
      borderColor: '#E94B35',
    },
    width: 180,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
})

const CommonButton = (props) => {
  const {title, onClick, buttonType} = props
  const classes = useStyles()
  return (
    <Button onClick={onClick} className={classes[buttonType]}>
      {title}
    </Button>
  )
}

CommonButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  buttonType: PropTypes.string.isRequired,
}

export default CommonButton
