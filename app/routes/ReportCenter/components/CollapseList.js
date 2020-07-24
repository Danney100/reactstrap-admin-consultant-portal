import React, {useState} from 'react'
import {
  Collapse,
  Card,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  Col,
  Row,
  TabPane,
  Badge,
} from 'reactstrap'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const CollapseList = ({links, open}) => {
  const [activeTab, setActiveTab] = useState('1')

  const toggleTabs = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  const getLink = (field) => `/reports/view-report/${field.toLowerCase().split(' ').join('-')}`

  return (
    <Collapse isOpen={open}>
      <Card lg={12} md={12} sm={12} xs={12} className="p-3 bg-white rounded-0">
        <Nav tabs>
          {links.map((link, index) => {
            return (
              <NavItem key={index}>
                <NavLink
                  style={activeTab === link.tabId ? {backgroundColor: '#f8f9fa'} : {}}
                  onClick={() => {
                    toggleTabs(link.tabId)
                  }}>
                  {link.label}
                  <Badge color="secondary" className="p-1 ml-1">
                    {link.fields.length}
                  </Badge>
                </NavLink>
              </NavItem>
            )
          })}
        </Nav>
        <TabContent activeTab={activeTab}>
          {links.map((link, index) => {
            return (
              <TabPane tabId={link.tabId} key={index}>
                <div className="my-3">
                  <Row className="px-2">
                    {link.fields.map((field, index) => (
                      <Col key={index} xs={12} lg={3}>
                        <Link to={getLink(field)}>{field}</Link>
                      </Col>
                    ))}
                  </Row>
                </div>
              </TabPane>
            )
          })}
        </TabContent>
      </Card>
    </Collapse>
  )
}

CollapseList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      fields: PropTypes.array.isRequired,
      tabId: PropTypes.string.isRequired,
    }),
  ),
  open: PropTypes.bool,
}

export default CollapseList
