// 'use client'
// // MUI Imports
// import Grid from '@mui/material/Grid'
// import QuoteDetailHeader from './QuoteDetailHeader'
// import QuoteInformationCard from './QuoteInformationCard'
// import CaseDetailsCard from './QuoteDetailsCard'
// import OrderDetailsCard from './OrderDetailsCard'
// import TabsPanel from '../../../../components/tabs-panel'
// import SupplyChain from './supplyChain'
// import Notes from './Notes'
// import SupplierDetails from './SupplierDetails'
// import OpenTasks from './OpenTasks'
// import CustomBreadcrumb from '../../../../components/bread-crumbs'

// const QuoteDetails = ({ orderData, order }) => {
//   const quotesTabs = [
//     {
//       label: 'Quote Details',
//       content: (
//         <div>
//           <OrderDetailsCard />
//         </div>
//       )
//     },
//     {
//       label: 'Supply Chain',
//       content: (
//         <div>
//           <SupplyChain />
//         </div>
//       )
//     },
//     {
//       label: 'Notes',
//       content: (
//         <div>
//           <Notes />
//         </div>
//       )
//     },
//     {
//       label: 'Supplier Details',
//       content: (
//         <div>
//           <SupplierDetails />
//         </div>
//       )
//     },
//     {
//       label: 'Open Tasks',
//       content: (
//         <div>
//           <OpenTasks orderData={orderData} />
//         </div>
//       )
//     }
//   ]

//   const breadcrumbs = [
//     { label: 'Home', path: '/' },
//     { label: 'Quotes', path: '/apps/quotes' },
//     { label: `Quote #${order || 'ID'}`, path: `/quotes/${order || 'ID'}` }
//   ]

//   return (
//     <Grid container spacing={6}>
//       {/* Header */}
//       <Grid item xs={12}>
//         <CustomBreadcrumb breadcrumbs={breadcrumbs} />
//       </Grid>

//       <Grid item xs={12}>
//         <QuoteDetailHeader orderData={orderData} order={order} />
//       </Grid>

//       <Grid item xs={12} md={8}>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <CaseDetailsCard />
//           </Grid>
//         </Grid>
//       </Grid>

//       <Grid item xs={12} md={4}>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <QuoteInformationCard orderData={orderData} />
//           </Grid>
//         </Grid>
//       </Grid>

//       <Grid item xs={12}>
//         <TabsPanel tabs={quotesTabs} />
//       </Grid>
//     </Grid>
//   )
// }

// export default QuoteDetails


'use client';

// React Imports
import React, { Suspense, lazy } from 'react';

// MUI Imports
import Grid from '@mui/material/Grid';

// Shimmer Component Import
import Shimmer from '../../../../components/shimmer-effect'; // Adjust the import path as needed

// Component Imports (Using lazy loading)
const QuoteDetailHeader = lazy(() => import('./QuoteDetailHeader'));
const QuoteInformationCard = lazy(() => import('./QuoteInformationCard'));
const CaseDetailsCard = lazy(() => import('./QuoteDetailsCard'));
const OrderDetailsCard = lazy(() => import('./OrderDetailsCard'));
const SupplyChain = lazy(() => import('./supplyChain'));
const Notes = lazy(() => import('./Notes'));
const SupplierDetails = lazy(() => import('./SupplierDetails'));
const OpenTasks = lazy(() => import('./OpenTasks'));
const CustomBreadcrumb = lazy(() => import('../../../../components/bread-crumbs'));
const TabsPanel = lazy(() => import('../../../../components/tabs-panel'));

const QuoteDetails = ({ orderData, order }) => {
  const quotesTabs = [
    {
      label: 'Quote Details',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <OrderDetailsCard />
        </Suspense>
      )
    },
    {
      label: 'Supply Chain',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <SupplyChain />
        </Suspense>
      )
    },
    {
      label: 'Notes',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <Notes />
        </Suspense>
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
      label: 'Open Tasks',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <OpenTasks orderData={orderData} />
        </Suspense>
      )
    }
  ];

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Quotes', path: '/apps/quotes' },
    { label: `Quote #${order || 'ID'}`, path: `/quotes/${order || 'ID'}` }
  ];

  return (
    <Grid container spacing={6}>
      {/* Header */}
      <Grid item xs={12}>
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={50} />}>
          <CustomBreadcrumb breadcrumbs={breadcrumbs} />
        </Suspense>
      </Grid>

      <Grid item xs={12}>
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={50} />}>
          <QuoteDetailHeader orderData={orderData} order={order} />
        </Suspense>
      </Grid>

      <Grid item xs={12} md={8}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={200} />}>
              <CaseDetailsCard />
            </Suspense>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={4}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={200} />}>
              <QuoteInformationCard orderData={orderData} />
            </Suspense>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={200} />}>
          <TabsPanel tabs={quotesTabs} />
        </Suspense>
      </Grid>
    </Grid>
  );
};

export default QuoteDetails;

