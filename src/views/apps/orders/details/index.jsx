// // MUI Imports

// import Grid from '@mui/material/Grid'

// // Component Imports
// import OrderDetailHeader from './OrderDetailHeader'
// import OrderDetailsCard from './OrderDetailsCard'
// import ShippingActivity from './ShippingActivityCard'
// import CustomerDetails from './CustomerDetailsCard'
// import { EditProvider } from '@/contexts/EditContext'
// import ShippingAddress from './ShippingAddressCard'
// import BillingAddress from './BillingAddressCard'
// import QuoteDetailsCard from './QuoteDetailsCard'
// import QuoteInformationCard from './QuoteInformationCard'
// import ShipmentComponent from './ShipmentTable'
// import OrderFormComponent from './OrderFormComponent'
// import TabsPanel from '../../../../components/tabs-panel/index'
// import SupplierDetails from './SupplierDetails'
// import ShippingInformation from './ShippingInformation'
// import DescriptionInformation from './DescriptionInformation'
// import InvoiceDetails from './InvoiceNotification'
// import Accounting from './Accounting'
// import CloseOrder from './CloseOrder'
// import CustomBreadcrumb from '../../../../components/bread-crumbs/index'
// const OrderDetails = ({ orderData, order }) => {
//   const quotesTabs = [
//     {
//       label: 'Shipments',
//       content: (
//         <div>
//           <ShipmentComponent></ShipmentComponent>
//         </div>
//       )
//     },
//     {
//       label: 'Order Details',
//       content: (
//         <div>
//           <OrderFormComponent />
//         </div>
//       )
//     },
//     {
//       label: 'Address Information',
//       content: (
//         <>
//           <Grid item xs={12} className='mb-4'>
//             <ShippingAddress />
//           </Grid>
//           <Grid item xs={12}>
//             <BillingAddress />
//           </Grid>
//         </>
//       )
//     },
//     {
//       label: 'Supplier Details',
//       content: <SupplierDetails></SupplierDetails>
//     },
//     {
//       label: 'Shipping Information',
//       content: (
//         <div>
//           <ShippingInformation></ShippingInformation>
//         </div>
//       )
//     },
//     {
//       label: 'Description Information',
//       content: (
//         <div>
//           <DescriptionInformation></DescriptionInformation>
//         </div>
//       )
//     },
//     {
//       label: 'Invoice Notification ',
//       content: (
//         <div>
//           <InvoiceDetails />
//         </div>
//       )
//     },
//     {
//       label: 'Close Order',
//       content: (
//         <div>
//           <CloseOrder></CloseOrder>
//         </div>
//       )
//     },
//     {
//       label: 'Accounting',
//       content: (
//         <div>
//           <Accounting></Accounting>
//         </div>
//       )
//     }
//   ]

//   const breadcrumbs = [
//     { label: 'Home', path: '/' },
//     { label: 'Orders', path: '/apps/orders' },
//     { label: `Order #${order || 'ID'}`, path: `/orders/${order || 'ID'}` }
//   ]
//   return (
//     <Grid container spacing={6}>
//       <Grid item xs={12}>
//         <CustomBreadcrumb breadcrumbs={breadcrumbs} />
//       </Grid>
//       <Grid item xs={12}>
//         <OrderDetailHeader orderData={orderData} order={order} />
//       </Grid>
//       <Grid item xs={12} md={8}>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <QuoteDetailsCard />
//           </Grid>
//           <Grid item xs={12}>
//             <OrderDetailsCard></OrderDetailsCard>
//           </Grid>
          
//         </Grid>
//       </Grid>
//       <Grid item xs={12} md={4}>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <QuoteInformationCard></QuoteInformationCard>
//           </Grid>
          
//         </Grid>
//       </Grid>

//       <Grid item xs={12}>
//         <TabsPanel tabs={quotesTabs} />
//       </Grid>
//     </Grid>
//   )
// }

// export default OrderDetails



// React Imports
import React, { Suspense, lazy } from 'react';

// MUI Imports
import Grid from '@mui/material/Grid';

// Shimmer Import
import Shimmer from '../../../../components/shimmer-effect/index'

// Lazy Load Components
const OrderDetailHeader = lazy(() => import('./OrderDetailHeader'));
const OrderDetailsCard = lazy(() => import('./OrderDetailsCard'));
const ShippingActivity = lazy(() => import('./ShippingActivityCard'));
const CustomerDetails = lazy(() => import('./CustomerDetailsCard'));
const ShippingAddress = lazy(() => import('./ShippingAddressCard'));
const BillingAddress = lazy(() => import('./BillingAddressCard'));
const QuoteDetailsCard = lazy(() => import('./QuoteDetailsCard'));
const QuoteInformationCard = lazy(() => import('./QuoteInformationCard'));
const ShipmentComponent = lazy(() => import('./ShipmentTable'));
const OrderFormComponent = lazy(() => import('./OrderFormComponent'));
const TabsPanel = lazy(() => import('../../../../components/tabs-panel/index'));
const SupplierDetails = lazy(() => import('./SupplierDetails'));
const ShippingInformation = lazy(() => import('./ShippingInformation'));
const DescriptionInformation = lazy(() => import('./DescriptionInformation'));
const InvoiceDetails = lazy(() => import('./InvoiceNotification'));
const Accounting = lazy(() => import('./Accounting'));
const CloseOrder = lazy(() => import('./CloseOrder'));
const CustomBreadcrumb = lazy(() => import('../../../../components/bread-crumbs/index'));

const OrderDetails = ({ orderData, order }) => {
  const quotesTabs = [
    {
      label: 'Shipments',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <ShipmentComponent />
        </Suspense>
      )
    },
    {
      label: 'Order Details',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <OrderFormComponent />
        </Suspense>
      )
    },
    {
      label: 'Address Information',
      content: (
        <>
          <Grid item xs={12} className='mb-4'>
            <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
              <ShippingAddress />
            </Suspense>
          </Grid>
          <Grid item xs={12}>
            <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
              <BillingAddress />
            </Suspense>
          </Grid>
        </>
      )
    },
    {
      label: 'Supplier Details',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <SupplierDetails />
        </Suspense>
      )
    },
    {
      label: 'Shipping Information',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <ShippingInformation />
        </Suspense>
      )
    },
    {
      label: 'Description Information',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <DescriptionInformation />
        </Suspense>
      )
    },
    {
      label: 'Invoice Notification',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <InvoiceDetails />
        </Suspense>
      )
    },
    {
      label: 'Close Order',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <CloseOrder />
        </Suspense>
      )
    },
    {
      label: 'Accounting',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <Accounting />
        </Suspense>
      )
    }
  ];

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Orders', path: '/apps/orders' },
    { label: `Order #${order || 'ID'}`, path: `/orders/${order || 'ID'}` }
  ];

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <CustomBreadcrumb breadcrumbs={breadcrumbs} />
        </Suspense>
      </Grid>
      <Grid item xs={12}>
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <OrderDetailHeader orderData={orderData} order={order} />
        </Suspense>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
              <QuoteDetailsCard />
            </Suspense>
          </Grid>
          <Grid item xs={12}>
            <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
              <OrderDetailsCard />
            </Suspense>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
              <QuoteInformationCard />
            </Suspense>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <TabsPanel tabs={quotesTabs} />
        </Suspense>
      </Grid>
    </Grid>
  );
};

export default OrderDetails;
