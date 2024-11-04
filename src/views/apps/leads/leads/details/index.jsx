// // MUI Imports
// import Grid from '@mui/material/Grid'

// // Component Imports
// import OrderDetailHeader from './OrderDetailHeader'
// import LeadDetails from './LeadDetails'
// import TabsPanel from '@/components/tabs-panel'
// import NewTask from './NewTask'
// import LogACall from './LogACall'
// import Email from './Email'
// import CustomBreadcrumb from '../../../../../components/bread-crumbs'
// const OrderDetails = ({ leadData, order }) => {
//   const breadcrumbs = [
//     { label: 'Home', path: '/' },
//     { label: 'Leads', path: '/apps/leads/leads' },
//     { label: `Lead #${order || 'ID'}`, path: `/leads/${order || 'ID'}` }

//   ]
//   const activityTabs = [
//     {
//       label: 'New Task',
//       content: (
//         <div>
//           <NewTask></NewTask>
//         </div>
//       )
//     },
//     {
//       label: 'Log a Call',
//       content: (
//         <div>
//         <LogACall></LogACall>
//         </div>
//       )
//     },
//     {
//       label: 'Email',
//       content: (
//         <div>
//           <Email></Email>
//         </div>
//       )
//     }
//   ]

//   const leadTabs = [
//     {
//       label: 'Activity',
//       content: (
//         <div className='mt-[-40px]'>
//           <TabsPanel tabs={activityTabs}></TabsPanel>
//         </div>
//       )
//     },
//     {
//       label: 'Quote Details',
//       content: (
//         <div>
//           <LeadDetails></LeadDetails>
//         </div>
//       )
//     },
//     {
//       label: 'Lead History',
//       content: (
//         <div>
//           <LeadDetails></LeadDetails>
//         </div>
//       )
//     }
//   ]

//   return (
//     <Grid container spacing={6}>
//        <Grid item xs={12}>
//         <CustomBreadcrumb breadcrumbs={breadcrumbs} />
//       </Grid>
//       <Grid item xs={12}>
//         <OrderDetailHeader leadData={leadData} order={order} />
//       </Grid>

//       <Grid item xs={12}>
//         <TabsPanel tabs={leadTabs}></TabsPanel>
//       </Grid>
//     </Grid>
//   )
// }

// export default OrderDetails

'use client'
import React, { Suspense, lazy , useState , useEffect } from 'react';
// MUI Imports
import Grid from '@mui/material/Grid';
// Shimmer Effect Import
import ShimmerEffect from '../../../../../components/shimmer-effect/index';

// Lazy load component imports
const OrderDetailHeader = lazy(() => import('./OrderDetailHeader'));
const LeadDetails = lazy(() => import('./LeadDetails'));
const TabsPanel = lazy(() => import('@/components/tabs-panel'));
const NewTask = lazy(() => import('./NewTask'));
const LogACall = lazy(() => import('./LogACall'));
const Email = lazy(() => import('./Email'));
const CustomBreadcrumb = lazy(() => import('../../../../../components/bread-crumbs'));

const OrderDetails = ({ leadData, order }) => {


  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Leads', path: '/apps/leads/leads' },
    { label: `Lead #${order || 'ID'}`, path: `/leads/${order || 'ID'}` }
  ];

  const activityTabs = [
    {
      label: 'New Task',
      content: (
        <Suspense fallback={<ShimmerEffect variant="rectangular" width="100%" height={200} />}>
          <NewTask />
        </Suspense>
      )
    },
    {
      label: 'Log a Call',
      content: (
        <Suspense fallback={<ShimmerEffect variant="rectangular" width="100%" height={200} />}>
          <LogACall />
        </Suspense>
      )
    },
    {
      label: 'Email',
      content: (
        <Suspense fallback={<ShimmerEffect variant="rectangular" width="100%" height={200} />}>
          <Email />
        </Suspense>
      )
    }
  ];

  const leadTabs = [
    {
      label: 'Activity',
      content: (
        <div className='mt-[-40px]'>
          <Suspense fallback={<ShimmerEffect variant="rectangular" width="100%" height={300} />}>
            <TabsPanel tabs={activityTabs} />
          </Suspense>
        </div>
      )
    },
    {
      label: 'Quote Details',
      content: (
        <Suspense fallback={<ShimmerEffect variant="rectangular" width="100%" height={300} />}>
          <LeadDetails />
        </Suspense>
      )
    },
    {
      label: 'Lead History',
      content: (
        <Suspense fallback={<ShimmerEffect variant="rectangular" width="100%" height={300} />}>
          <LeadDetails />
        </Suspense>
      )
    }
  ];

  return (
    <div className={isLoaded ? 'visible' : 'hidden'}>
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Suspense fallback={<ShimmerEffect variant="rectangular" width="100%" height={50} />}>
          <CustomBreadcrumb breadcrumbs={breadcrumbs} />
        </Suspense>
      </Grid>
      <Grid item xs={12}>
        <Suspense fallback={<ShimmerEffect variant="rectangular" width="100%" height={150} />}>
          <OrderDetailHeader leadData={leadData} order={order} />
        </Suspense>
      </Grid>
      <Grid item xs={12}>
        <Suspense fallback={<ShimmerEffect variant="rectangular" width="100%" height={300} />}>
          <TabsPanel tabs={leadTabs} />
        </Suspense>
      </Grid>
    </Grid>
    </div>
  );
};

export default OrderDetails;