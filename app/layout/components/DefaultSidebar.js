import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {
  Sidebar,
  SidebarTrigger,
  Avatar,
  AvatarAddOn,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Input,
} from 'components'
import {makeStyles} from '@material-ui/styles'

import {SidebarMiddleNav} from './SidebarMiddleNav'
import {SidebarBottomA} from 'routes/components/Sidebar/SidebarBottomA'
import scout from 'images/logos/scout.png'

const useStyles = makeStyles({
  root: {
    '& .btn-secondary:focus': {
      boxShadow: 'none',
    },
    '& .dropdown-toggle::after': {
      marginLeft: '0.5em',
      verticalAlign: 'middle',
    },
    '& .btn-secondary.dropdown-toggle:focus': {
      boxShadow: 'none',
    },
    '& .dropdown-menu': {
      border: 'none',
      boxShadow: ' 0 3px 12px 0 rgba(108, 98, 98, 0.12)',
      borderRadius: '5px',
      '& .dropdown-item': {
        color: '#423b3c',
      },
    },
  },
})

export const DefaultSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const classes = useStyles()

  const history = useHistory()

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const logout = () => {
    localStorage.clear()
    history.push('/login')
  }

  return (
    <Sidebar>
      {/* START SIDEBAR-OVERLAY: Close (x) */}
      <Sidebar.Close>
        <SidebarTrigger tag={'a'} href="#!">
          <i className="fa fa-times-circle fa-fw"></i>
        </SidebarTrigger>
      </Sidebar.Close>
      {/* START SIDEBAR-OVERLAY: Close (x) */}

      {/* START SIDEBAR: Only for Desktop */}
      <Sidebar.HideSlim>
        <Sidebar.Section className="p-0 text-center">
          <Link to="/" className="sidebar__brand">
            <img src={scout} style={{width: '75%'}} />
          </Link>
        </Sidebar.Section>
        <Sidebar.Section className="p-0 text-center">
          <Avatar.Image
            size="lg"
            src={'/static/44.jpg'}
            addOns={[
              <AvatarAddOn.Icon className="fa fa-circle" color="white" key="avatar-icon-bg" />,
              <AvatarAddOn.Icon className="fa fa-circle" color="success" key="avatar-icon-fg" />,
            ]}
          />
        </Sidebar.Section>
        <Sidebar.Section className="p-0 text-center">
          <span>
            <Dropdown isOpen={isOpen} toggle={toggle} className={classes.root}>
              <DropdownToggle caret className="bg-white border-0 text-dark font-weight-bold">
                John Doe
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/Videos/Vimeo">
                  {/* <i className="fa fas fa-video-camera mr-2"></i> */}
                  Videos
                </DropdownItem>
                <DropdownItem>
                  {/* <i className="fa fas fa-book mr-2"></i> */}
                  Knowledge Base
                </DropdownItem>
                <DropdownItem>
                  {/* <i className="fa fas fa-life-ring mr-2"></i> */}
                  Support Request
                </DropdownItem>
                <hr className="w-75 mx-auto my-2" />
                <DropdownItem onClick={logout}>
                  <i className="fa fas fa-sign-out mr-2"></i>Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </span>
        </Sidebar.Section>
        {/* <Sidebar.Section className="pl-5 pr-5 text-center">
          <Input
            type="search"
            placeholder="Search Menu"
            style={{color: '#adaaaa', background: '#f7f7f7', border: '0px'}}
          />
        </Sidebar.Section> */}
      </Sidebar.HideSlim>
      {/* END SIDEBAR: Only for Desktop */}

      {/* START SIDEBAR: Only for Mobile */}
      <Sidebar.MobileFluid>
        <Sidebar.Section fluid cover>
          {/* SIDEBAR: Menu */}
          <SidebarMiddleNav />
        </Sidebar.Section>

        <SidebarBottomA />
      </Sidebar.MobileFluid>
      {/* END SIDEBAR: Only for Mobile */}
    </Sidebar>
  )
}
