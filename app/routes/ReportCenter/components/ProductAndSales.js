import React, {useState} from 'react'

import CollapseList from './CollapseList'

const ProductAndSales = () => {
  const [open, setOpen] = useState(true)

  const toggleCollapse = () => {
    setOpen(!open)
  }

  const links = [
    {
      label: 'Orders',
      fields: [
        'All Orders',
        'Order Aging',
        'Order Invoices v2',
        'Orders with Payment Type',
        'Product Sales By Customer',
        'Refunded Orders',
        'Returns',
        'Sales By Product - Corporate',
        'Sales Tax By State',
        'Sales Tax by City',
        'Sales Tax by County',
        'Sales Tax by Zip Code',
        'Skywallet Transactions with Detail KM',
        'Subscriptions',
      ],
      tabId: '1',
    },
    {
      label: 'Parties',
      fields: ['All Parties'],
      tabId: '2',
    },
    {
      label: 'Products',
      fields: [
        'Active Cost Tiers',
        'Cost Of Goods Sold',
        'Cost Of Goods Summary',
        'Inventory Adjustment Audit',
        'Inventory Availability',
        'Inventory Availability By Warehouse',
        'Inventory Availability By Warehouse Bin',
        'Inventory Counts',
        'Subscriptions by Product',
      ],
      tabId: '3',
    },
  ]

  return (
    <div className="mb-3">
      <div className="d-flex bg-primary py-2 text-white justify-content-between px-3 rounded-top mt-3">
        <span className="big ml-1 text-white">PRODUCTS and SALES</span>
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

export default ProductAndSales
