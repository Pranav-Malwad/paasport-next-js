'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports

import ShippingAndBilling from './ShippingAndBilling'

const AddressBilling = () => {
  return (
    <Grid container spacing={6}>

      <Grid item xs={12}>
        <ShippingAndBilling></ShippingAndBilling>
      </Grid>

      
    </Grid>
  )
}

export default AddressBilling
