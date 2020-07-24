import React, {useState, useContext, useEffect} from 'react'
import {
  Row,
  Col,
  Card,
  Label,
  Input,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Button,
  FormGroup,
  Form,
  NavLink,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'components'
import {useHistory} from 'react-router'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import {fieldGroupFields, moduleFields} from './fields'
import FieldGroup from './components/FieldGroup'
import ModuleGroup from './components/ModuleGroup'
import AppContext from 'components/App/AppContext'

import {
  cssHeading,
  cssHeadingUpSm,
  cssCard,
  cssCardUpLg,
  cssInputBase,
  cssBtnBase,
  cssBtnBaseUpSm,
  cssSuccessButton,
  cssForm2ColUpLg,
} from 'styles/sc-jss-components';

const CreateNewUserType = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      ...cssHeading(),
      ...cssCard(),
      ...cssInputBase(),
      ...cssBtnBase(),
      ...cssSuccessButton(),
      [theme.breakpoints.up('sm')]: {
        ...cssHeadingUpSm(),
        ...cssBtnBaseUpSm(),
      },
      [theme.breakpoints.up('lg')]: {
        ...cssCardUpLg(),
        ...cssForm2ColUpLg(),
      },
    },
  },
  { 
    name: 'scCreateNewUserType',
  })
  const classes = useStyles()
  const [activeTab, setActiveTab] = useState('1')
  const [openFieldGroup, setopenFieldGroup] = useState(null)
  const [openModuleGroup, setOpenModuleGroup] = useState(null)

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('User Type Edit')
  }, [])

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }
  const history = useHistory()

  const routeChange = () => {
    history.push('/user-management')
  }

  return (
    <Form className={ `${classes.root} container` }>
      <div className="sc-heading-bar d-flex mt-3">
        <h1 className="sc-heading">Create User Type</h1>
      </div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          {/* START Card Widget */}
          <Card lg={12} md={12} sm={12} xs={12} className="sc-card mb-3 p-3">
            <div className="sc-card__heading">
              <h2 className="sc-heading">Basic Info</h2>
            </div>
            <div className="px-3 w-100">
              <FormGroup row>
                <Label for="userType" sm={3} className="text-lg-right">
                  User Type
                </Label>
                <Col sm={9} className="sc-form-2col__right">
                  <Input
                    className="sc-input"
                    type="text"
                    id="userType"
                    bsSize="lg"
                    placeholder="Business Development Management"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="description" sm={3} className="text-lg-right">
                  Description
                </Label>
                <Col sm={9} className="sc-form-2col__right">
                  <Input
                    className="sc-input"
                    type="textarea"
                    id="description"
                    bsSize="lg"
                    placeholder="For Business Development Management Roles"
                  />
                </Col>
              </FormGroup>
            </div>
          </Card>
          <Card lg={12} md={12} sm={12} xs={12} className="sc-card mb-3 p-3">
            <FormGroup row className="mt-3">
              <Col sm={12}>
                <Nav className="sc-nav-tabs sc-sfui-text-semibold">
                  <NavItem
                    className={ `sc-nav-tabs__item ${
                      activeTab === '1' ? 'sc-nav-tabs__item--active' : ''
                    }` }
                  >
                    <NavLink
                      className="sc-nav-tabs__link"
                      onClick={() => {
                        toggle('1')
                      }}>
                      Field Groups
                    </NavLink>
                  </NavItem>
                  <NavItem
                    className={ `sc-nav-tabs__item ${
                      activeTab === '2' ? 'sc-nav-tabs__item--active' : ''
                    }` }
                  >
                    <NavLink
                      className="sc-nav-tabs__link"
                      onClick={() => {
                        toggle('2')
                      }}>
                      Modules
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                  </TabPane>
                  <TabPane tabId="2">
                  </TabPane>
                </TabContent>
              </Col>
            </FormGroup>
          </Card>
        </Col>
        <Col xs={6} lg={6}>
          <Button color="danger" onClick={routeChange}>
            <i className="fa fa-fw fa-times-circle-o" aria-hidden="true"></i>Cancel Changes
          </Button>
        </Col>
        <Col xs={6} lg={6} className="text-right">
          <Button color="success" onClick={routeChange}>
            <i className="fa fa-fw fa-check-circle-o" aria-hidden="true"></i>Save Changes
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default CreateNewUserType
