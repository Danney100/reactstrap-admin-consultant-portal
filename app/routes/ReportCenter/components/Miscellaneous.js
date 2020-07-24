import React, {useState} from 'react'

import CollapseList from './CollapseList'

const Miscellaneous = () => {
  const [open, setOpen] = useState(true)

  const toggleCollapse = () => {
    setOpen(!open)
  }

  const links = [
    {
      label: 'Logs',
      fields: [
        'Address Validation Log',
        'Compliance Report for Kristen',
        'Email Opt Out List',
        'Gateway Conversation Report',
        'Merchant Transactions',
        'Payout Register',
        'Sent Email Log',
        'Shipping Conversation Report',
        'Skywallet Transactions with Detail',
        'Subscription Run Exceptions',
        'Tax Conversations',
        'Tax Integration Log',
      ],
      tabId: '1',
    },
    {
      label: 'Uncategorized',
      fields: ['Gift Cards', 'Inventory Old', 'Inventory-Test', 'Ship Run Orders Report'],
      tabId: '2',
    },
  ]

  return (
    <div className="mb-3">
      <div className="d-flex bg-primary py-2 text-white justify-content-between px-3 rounded-top mt-3">
        <span className="big ml-1 text-white">MISCELLANEOUS</span>
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

export default Miscellaneous
