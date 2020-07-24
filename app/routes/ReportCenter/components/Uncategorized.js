import React, {useState} from 'react'

import CollapseList from './CollapseList'

const Uncategorized = () => {
  const [open, setOpen] = useState(true)

  const toggleCollapse = () => {
    setOpen(!open)
  }

  const links = [
    {
      label: 'UNCATEGORIZED',
      fields: [
        'Top Recruiters',
        '2018 Summer Incentive',
        'All Consultants KM',
        'All Consultants with join date',
        'All Orders KM',
        'All Parties KM',
        'Best Sellers Report',
      ],
      tabId: '1',
    },
  ]

  return (
    <div className="mb-3">
      <div className="d-flex bg-primary py-2 text-white justify-content-between px-3 rounded-top mt-3">
        <span className="big ml-1 text-white">UNCATEGORIZED</span>
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

export default Uncategorized
