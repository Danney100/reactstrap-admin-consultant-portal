import React from 'react'
import {SidebarMenu} from 'components'

import consultant from 'images/menuIcons/consultant.svg'
import customer from 'images/menuIcons/customer.svg'
import report from 'images/menuIcons/report.svg'
import product from 'images/menuIcons/product.svg'
import productConfig from 'images/menuIcons/productConfig.svg'
import order from 'images/menuIcons/order.svg'
import home from 'images/menuIcons/home.svg'
import userMng from 'images/menuIcons/userMng.svg'
import consultantActive from 'images/menuIcons/consultantActive.svg'
import customerActive from 'images/menuIcons/customerActive.svg'
import homeActive from 'images/menuIcons/homeActive.svg'
import orderActive from 'images/menuIcons/orderActive.svg'
import productActive from 'images/menuIcons/productActive.svg'
import productConfAcvtive from 'images/menuIcons/productConfActive.svg'
import reportActive from 'images/menuIcons/reportActive.svg'
import userMngActive from 'images/menuIcons/userMngActive.svg'
import shippingfast from 'images/menuIcons/shippingfast.svg'
import shippingActive from 'images/menuIcons/shippingActive.svg'

export const SidebarMiddleNav = () => {
  return (
    <SidebarMenu className="">
      <SidebarMenu.Item
        icon={<img src={home} alt="" />}
        activeIcon={<img src={homeActive} alt="" />}
        title="Dashboards"
        to="/dashboards"
      />
      <SidebarMenu.Item
        icon={<img src={consultant} alt="" />}
        activeIcon={<img src={consultantActive} alt="" />}
        title="Consultant Center"
        to="/consultant-center"
      />
      <SidebarMenu.Item
        icon={<img src={customer} alt="" />}
        activeIcon={<img src={customerActive} alt="" />}
        title="Customer Center"
        to="/customer-center"
      />
      <SidebarMenu.Item
        icon={<img src={order} alt="" />}
        activeIcon={<img src={orderActive} alt="" />}
        title="Order Center"
        to="/order-center"
      />
      <SidebarMenu.Item
        icon={<img src={userMng} alt="" />}
        activeIcon={<img src={userMngActive} alt="" />}
        title="Consultant Portal"
        to="/consultant-portal"
      />
      <SidebarMenu.Item
        icon={<img src={report} alt="" />}
        activeIcon={<img src={reportActive} alt="" />}
        title="Report Center"
        to="/reports/list-reports-view"
      />
      <SidebarMenu.Item
        icon={<img src={product} alt="" />}
        activeIcon={<img src={productActive} alt="" />}
        title="Product Center"
        to="/product-center"
      />
      {/* Product Configuration */}
      <SidebarMenu.Item
        icon={<img src={productConfig} alt="" />}
        activeIcon={<img src={productConfAcvtive} alt="" />}
        title="Product Configuration">
        <SidebarMenu.Item
          title="Product Display Categories"
          to="/products/display-category-manager"
          exact
        />
        <SidebarMenu.Item
          title="Product Classifications"
          to="/products/product-classification-manager"
          exact
        />
        <SidebarMenu.Item title="Product Types" to="/products/product-type-manager" exact />
        <SidebarMenu.Item title="Variation Types" to="/products/variation-type-setup" exact />
        <SidebarMenu.Item title="Join Options" to="/join/join-option-manager" exact />
        <SidebarMenu.Item title="Trigger Options" to="/rewards/trigger-option-manager" exact />
        <SidebarMenu.Item title="Gift Cards" to="/products/gift-card-manager" exact />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<img src={shippingfast} alt="" />}
        activeIcon={<img src={shippingActive} alt="" />}
        title="Shipping">
        <SidebarMenu.Item title="Shipping Center" to="/shipping/shipping-center" exact />
        <SidebarMenu.Item title="New Shipping Run" to="/shipping/create-shipping-file-run" exact />
        <SidebarMenu.Item title="Shipping File Center" to="/shipping/shipping-file-center" exact />
        <SidebarMenu.Item title="Import Shipping File" to="/shipping/import-shipping-file" exact />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<img src={userMng} alt="" />}
        activeIcon={<img src={userMngActive} alt="" />}
        title="User Management"
        to="/user-management"
      />
    </SidebarMenu>
  )
}
