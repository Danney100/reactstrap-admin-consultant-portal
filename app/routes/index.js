import React from 'react'
import {Switch, Redirect} from 'react-router'
import PrivateRoute from 'helpers/router/PrivateRoute'
import PublicRoute from 'helpers/router/PublicRoute'
// ----------- Pages Imports ---------------
import Dashboard from './Dashboard'
import ConsultantCenter from './ConsultantCenter'
import ConsultantCreate from './ConsultantCenter/ConsultantCreate'
import ConsultantNotes from './ConsultantCenter/ConsultantNotes'
import ConsultantPortal from './ConsultantPortal'
import TransSearchCriteria from './ConsultantCenter/ConsultantCreate/components/TransSearchCriteria'
import CustomerCenter from './CustomerCenter/index'
import CustomerCreate from './CustomerCenter/CustomerCreate'
import CustomerEdit from './CustomerCenter/CustomerEdit/index'
import Product from './ProductCenter'
import ProductCreate from './ProductCenter/ProductCreate'
import Producter from './ProductCenter/Products'
import OrderCenter from './OrderCenter/index'
import CreateNewOrder from './OrderCenter/CreateNewOrder'
import Shopping from './OrderCenter/Shopping'
import ViewCart from './OrderCenter/ViewCart'
import CreatePerson from './OrderCenter/CreatePerson'
import PlaceOrder from './OrderCenter/PlaceOrder'
import SubTotal from './OrderCenter/Subtotal'
import Transactions from './OrderCenter/PlaceOrder/components/Transactions'
import NavbarOnly from './Layouts/NavbarOnly'
import SidebarWithNavbar from './Layouts/SidebarWithNavbar'
import Error404 from './Pages/Error404'
import ForgotPassword from './Pages/ForgotPassword'
import Login from './Pages/Login'
import Register from './Pages/Register'

// ----------- Layout Imports ---------------
import {SidebarWithNavbarNavbar} from './../layout/components/SidebarWithNavbarNavbar'
import {DefaultSidebar} from './../layout/components/DefaultSidebar'
import {SidebarANavbar} from './../layout/components/SidebarANavbar'
import {SidebarASidebar} from './../layout/components/SidebarASidebar'
import {UserManagement} from './UserManagement/UserManagement'
import CreateNewUserType from './UserManagement/CreateNewUserType'
import CreateNewUser from './UserManagement/CreateNewUser'
import ReportCenter from './ReportCenter'
import ViewReport from './ReportCenter/ViewReport'
import ConsultantSalesReport from './ReportCenter/ViewReport/ConsultantSalesReport'
import YtdEarnings from './ReportCenter/ViewReport/YtdEarningsReport'
import ProductCustomReports from './ReportCenter/ViewReport/ProductCustomReports'
import GiftCards from './ProductConfiguration/GiftCards'
import CreateGiftCard from './ProductConfiguration/GiftCards/components/CreateGiftCard'
import ProductTypeManager from './ProductConfiguration/ProductTypes'
import ProductClassificationManager from './ProductConfiguration/ProductClassifications'
import JoinOptionManager from './ProductConfiguration/JoinOptions'
import DisplayCategoryManager from './ProductConfiguration/DisplayCategories'
import AddDisplayCategory from './ProductConfiguration/DisplayCategories/components/AddDisplayCategory'
import AddNewClassification from './ProductConfiguration/ProductClassifications/components/AddNewClassification'
import AddJoinOption from './ProductConfiguration/JoinOptions/components/AddJoinOption'
import AddProductType from './ProductConfiguration/ProductTypes/components/AddProductType'
import VariationTypeSetup from './ProductConfiguration/VariationTypes'
import ExistingCheckout from './OrderCenter/ExistingCheckout'
import EditPersoninfo from './OrderCenter/PlaceOrder/components/ContactInfo'
import BillingInfo from './OrderCenter/PlaceOrder/components/BillingInfo'
import ShippingInfo from './OrderCenter/PlaceOrder/components/Shippinginfo'
import ShippingCenter from './Shipping/ShippingCenter/index'
import NewShippingRun from './Shipping/NewShippingRun/index'
import SearchCriteria from './Shipping/ShippingFileCenter/index'
import ImportShippingFile from './Shipping/ImportShippingFile'
import ProcessQueueManage from './Shipping/ShippingCenter/ProcessQueueManage'
import ShippingFileConfiguration from './Shipping/ShippingFileCenter/ShippingFileConfiguration/index'
import AddNewShippingFile from './Shipping/ShippingFileCenter/AddNewShipping'
import Translate from './CustomerCenter/Translate'
import VideosResults from './Apps/VideosResults'

//------ PrivateRoute Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
  return (
    <Switch>
      <Redirect from="/" to="/login" exact />

      <PrivateRoute path="/dashboards" exact component={Dashboard} />
      <PrivateRoute path="/customer-center" exact component={CustomerCenter} />
      <PrivateRoute path="/customer-center/customer-create" exact component={CustomerCreate} />
      <PrivateRoute path="/customer-center/customer-edit" exact component={CustomerEdit} />
      <PrivateRoute path="/customer-center/customer-create/translate" exact component={Translate} />
      <PrivateRoute path="/consultant-center" exact component={ConsultantCenter} />
      <PrivateRoute
        path="/consultant-center/consultant-create"
        exact
        component={ConsultantCreate}
      />
      <PrivateRoute
        path="/consultant-center/consultant-create/translate"
        exact
        component={TransSearchCriteria}
      />
      <PrivateRoute
        path="/consultant-center/consultant-create/consultant-notes"
        exact
        component={ConsultantNotes}
      />
      <PrivateRoute
        path="/shipping/import-shipping-file/import-configuration-edit"
        exact
        component={AddNewShippingFile}
      />
      <PrivateRoute path="/product-center" exact component={Product} />
      <PrivateRoute path="/product-center/product-create" exact component={ProductCreate} />
      <PrivateRoute path="/product-center/product-create/products" exact component={Producter} />
      <PrivateRoute path="/consultant-portal" exact component={ConsultantPortal} />
      <PrivateRoute path="/order-center" exact component={OrderCenter} />
      <PrivateRoute path="/order-center/create-new-order" exact component={CreateNewOrder} />
      <PrivateRoute path="/order-center/create-new-order/shopping" exact component={Shopping} />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart"
        exact
        component={ViewCart}
      />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson"
        exact
        component={CreatePerson}
      />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson/placeorder"
        exact
        component={PlaceOrder}
      />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson/placeorder/existingcheckout"
        exact
        component={ExistingCheckout}
      />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson/placeorder/existingcheckout/editpersoninfo"
        exact
        component={EditPersoninfo}
      />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson/placeorder/existingcheckout/editbillinginfo"
        exact
        component={BillingInfo}
      />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson/placeorder/existingcheckout/editshippinginfo"
        exact
        component={ShippingInfo}
      />

      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson/placeorder/subtotal"
        exact
        component={SubTotal}
      />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson/placeorder/transactions"
        exact
        component={Transactions}
      />
      <PrivateRoute
        path="/order-center/create-new-order/shopping/viewcart/createperson/placeorder/subtotal/transactions"
        exact
        component={Transactions}
      />

      <PrivateRoute path="/user-management" exact component={UserManagement} />
      <PrivateRoute
        path="/user-management/create-new-usertype"
        exact
        component={CreateNewUserType}
      />
      <PrivateRoute
        path="/shipping/shipping-file-center/import-configration-manage"
        exact
        component={ShippingFileConfiguration}
      />
      <PrivateRoute path="/shipping-center/processing-queue" exact component={ProcessQueueManage} />
      <PrivateRoute path="/user-management/edit-usertype" exact component={CreateNewUserType} />
      <PrivateRoute path="/user-management/create-new-user" exact component={CreateNewUser} />
      <PrivateRoute path="/user-management/edit-user" exact component={CreateNewUser} />
      <PrivateRoute path="/reports/list-reports-view" exact component={ReportCenter} />
      <PrivateRoute
        path="/reports/view-report/consultant-sales-report"
        exact
        component={ConsultantSalesReport}
      />
      <PrivateRoute path="/reports/view-report/ytd-earnings" exact component={YtdEarnings} />
      <PrivateRoute
        path="/reports/view-report/sales-tax-by-city"
        exact
        component={() => <ProductCustomReports report="city" />}
      />
      <PrivateRoute
        path="/reports/view-report/sales-tax-by-county"
        exact
        component={() => <ProductCustomReports report="county" />}
      />
      <PrivateRoute
        path="/reports/view-report/sales-tax-by-zip-code"
        exact
        component={() => <ProductCustomReports report="zipCode" />}
      />
      <PrivateRoute path="/reports/view-report/:report" component={ViewReport} />
      <PrivateRoute path="/products/gift-card-manager" component={GiftCards} />
      <PrivateRoute path="/products/gift-card-create" component={CreateGiftCard} />
      <PrivateRoute path="/products/product-type-manager" component={ProductTypeManager} />
      <PrivateRoute
        path="/products/product-classification-manager"
        component={ProductClassificationManager}
      />
      <PrivateRoute
        path="/shipping/shipping-file-center/import-configration-manage/import-configuration-edit"
        exact
        component={AddNewShippingFile}
      />
      <PrivateRoute path="/shipping/shipping-file-center" exact component={SearchCriteria} />
      <PrivateRoute path="/join/join-option-manager" component={JoinOptionManager} />
      <PrivateRoute path="/products/display-category-manager" component={DisplayCategoryManager} />
      <PrivateRoute path="/products/display-category-edit" component={AddDisplayCategory} />
      <PrivateRoute path="/products/display-classification-edit" component={AddNewClassification} />
      <PrivateRoute path="/join/join-option-edit" component={AddJoinOption} />
      <PrivateRoute path="/products/product-type-edit" component={AddProductType} />
      <PrivateRoute path="/products/variation-type-setup" component={VariationTypeSetup} />

      <PrivateRoute path="/shipping/shipping-center" component={ShippingCenter} />
      <PrivateRoute path="/shipping/create-shipping-file-run" component={NewShippingRun} />
      <PrivateRoute path="/shipping/import-shipping-file" component={ImportShippingFile} />

      {/* Profile Routes */}
      <PrivateRoute component={VideosResults} path="/Videos/Vimeo" />

      {/*    Pages Routes    */}
      <PrivateRoute component={Error404} path="/pages/error-404" />
      <PrivateRoute component={ForgotPassword} path="/pages/forgot-password" />
      <PublicRoute component={Login} path="/login" />
      <PublicRoute component={Register} path="/pages/register" />
      {/*    404    */}
      <Redirect to="/pages/error-404" />
    </Switch>
  )
}
//------ Custom Layout Parts --------
export const RoutedNavbars = () => (
  <Switch>
    {/* Other Navbars: */}
    <PrivateRoute component={SidebarANavbar} path="/layouts/sidebar-a" />
    <PrivateRoute component={NavbarOnly.Navbar} path="/layouts/navbar" />
    <PrivateRoute component={SidebarWithNavbar.Navbar} path="/layouts/sidebar-with-navbar" />
    <PrivateRoute component={SidebarWithNavbarNavbar} />
  </Switch>
)
export const RoutedSidebars = () => (
  <Switch>
    {/* Other Sidebars: */}
    <PrivateRoute component={SidebarASidebar} path="/layouts/sidebar-a" />
    <PrivateRoute component={SidebarWithNavbar.Sidebar} path="/layouts/sidebar-with-navbar" />
    {/* Default Sidebar: */}
    <PrivateRoute component={DefaultSidebar} />
  </Switch>
)
