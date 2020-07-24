import React, {useState} from 'react'

import CollapseList from './CollapseList'

const People = () => {
  const [open, setOpen] = useState(true)

  const toggleCollapse = () => {
    setOpen(!open)
  }

  const links = [
    {
      label: 'Consultants',
      fields: [
        'All consultant',
        'Cancelled Consultant',
        'Consultant Last Order',
        'Consultant Rank History',
        'Consultant Sales Report',
        'Consultant Sky Wallet Balances',
        'Consultant Subscriptions',
        'New All Consultants KM',
        'Rank Achievement',
        'Sales by Product-jk',
        'Top Earners',
        'YTD Earnings',
      ],
      tabId: '1',
    },
    {
      label: 'Customers',
      fields: ['All Customers', 'Customer Sky Wallet Balances', 'Customer Subscriptions'],
      tabId: '2',
    },
  ]

  return (
    <div className="mb-3">
      <div className="d-flex bg-primary py-2 text-white justify-content-between px-3 rounded-top mt-3">
        <span className="big ml-1 text-white">PEOPLE</span>
        <div onClick={toggleCollapse}>
          <i
            className={open ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}
            style={{color: 'white', cursor: 'pointer'}}></i>
        </div>
      </div>
      <CollapseList links={links} open={open} />
    </div>
  )
}

export default People
