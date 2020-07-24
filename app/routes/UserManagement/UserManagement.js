import React, {useState, useContext, useEffect} from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'components'
import {useHistory} from 'react-router-dom'
import UsersTable from './UsersTable'
import UserTypesTable from './UserTypesTable'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import AppContext from 'components/App/AppContext'
import { scBase } from 'styles/sc-jss-components/_variables';
import {
  cssHeading,
  cssHeadingUpSm,
  cssInputBase,
  cssBtnBase,
  cssBtnBaseUpSm,
  cssSuccessButton,
  cssAlert,
  cssAlertUpMd,
  cssTable,
  tableActionBtns,
} from 'styles/sc-jss-components';

export const UserManagement = () => {
  const scVar = scBase();

  const theme = useTheme();

  const useStyles = makeStyles({
    root: {
      ...cssHeading(),
      ...cssInputBase(),
      ...cssAlert(),
      ...cssTable(),
      ...tableActionBtns(),
      '& .tab-content': {
        [theme.breakpoints.up('md')]: {
          position: 'relative',
        },
      },
      '& .tab-pane.active': {
        [theme.breakpoints.up('md')]: {
          display: 'inline-block',
          width: '100%',
        },
      },
      '& .table td': {
        verticalAlign: 'baseline !important',
      },
      '& .sc-btn-action-wrapper': {
        width: `calc(178 / ${scVar.fontBase} * 1em)`,
      },
      '& .sc-btn-action--layout': {
        width: 'calc(50% - 3px)',
      },
      '& .search-wrapper': {
        marginTop: '1rem',
        [theme.breakpoints.up('md')]: {
          position: 'absolute',
          top: 0,
          right: 0,
          marginTop: 0,
          transform: 'translateY(calc(-100% - 10px))',
        },
      },
      [theme.breakpoints.up('sm')]: {
        ...cssHeadingUpSm(),
      },
      [theme.breakpoints.up('md')]: {
        ...cssAlertUpMd(),
      },
    },
    buttons: {
      ...cssBtnBase(),
      ...cssSuccessButton(),
      [theme.breakpoints.up('sm')]: {
        ...cssBtnBaseUpSm(),
      },
    },
  },
  { 
    name: 'scUserManagement',
  })

  const classes = useStyles()

  const [activeTab, setActiveTab] = useState('1')

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  const history = useHistory()
  const routeChange = (path) => {
    history.push(path)
  }
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('User Management')
  }, [])

  return (
    <div className={ `${classes.root} container` }>
      <div className="sc-heading-bar mt-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between">
        <h1 className="sc-heading">{activeTab === '1' ? 'User Types' : 'Users'}</h1>
        <div className={ `${classes.buttons} col-example text-left` }>
          {activeTab === '1' ? (
            <Button
              className="sc-btn sc-btn--success sc-btn--w240"
              color="link"
              onClick={() => routeChange('/user-management/create-new-usertype')}
              size="lg">
              Add New User Type
            </Button>
          ) : (
            <Button
              className="sc-btn sc-btn--success sc-btn--w240"
              color="link"
              onClick={() => routeChange('/user-management/create-new-user')}
              size="lg">
              Create New User
            </Button>
          )}
        </div>
      </div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="px-3 pb-3 pt-1">
              <Nav className="sc-nav-tabs sc-sfui-text-semibold">
                <NavItem
                  className={`sc-nav-tabs__item ${
                    activeTab === '1' ? 'sc-nav-tabs__item--active' : ''
                  }`}>
                  <NavLink
                    className="sc-nav-tabs__link"
                    onClick={() => {
                      toggle('1')
                    }}>
                    User Types
                  </NavLink>
                </NavItem>
                <NavItem
                  className={`sc-nav-tabs__item ${
                    activeTab === '2' ? 'sc-nav-tabs__item--active' : ''
                  }`}>
                  <NavLink
                    className="sc-nav-tabs__link"
                    onClick={() => {
                      toggle('2')
                    }}>
                    Users
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <UserTypesTable setActiveTab={setActiveTab}/>
                </TabPane>
                <TabPane tabId="2">
                  <UsersTable />
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
