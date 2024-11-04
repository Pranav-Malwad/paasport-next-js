import { useState, useEffect } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material'

// Constants
const STAGE_OPTIONS = [
  'Manual',
  'Request for Quote',
  'Quote',
  'Follow Up/Review',
  'Positive Buying Sign',
  'Negotiation',
  'Purchase Order',
  'Closed Lost'
]
const SUPPLIER_OPTIONS = ['Supplier 1', 'Supplier 2', 'Supplier 3'] // Replace with actual suppliers
const SUPPLIER_TYPE_OPTIONS = ['Domestic', 'International']
const ITAR_OPTIONS = ['Yes', 'No']
const NET_TERMS_OPTIONS = ['NET 7', 'NET 10', 'NET 15', 'NET 30', 'NET 45', 'NET 60', 'NET 75', 'NET 90']
const INVOICE_AMOUNT_OPTIONS = [
  '0-100$',
  '100-500$',
  '500-1000$',
  '1000-5000$',
  '5000-10000$',
  '10000-50000$',
  '50000+'
]
const GP_OPTIONS = Array.from({ length: 20 }, (_, i) => `${i * 5}-${(i + 1) * 5}%`) // 0-5%, 5-10%, ..., 95-100%

const TableFilters = ({ setData, productData, currentPage }) => {
  // States
  const [filters, setFilters] = useState({
    order: '',
    customer: '',
    email: '',
    firstName: '',
    lastName: '',
    stage: '',
    supplier: '',
    supplierType: '',
    itar: '',
    netTerms: '',
    invoiceAmount: '',
    gpPercentage: '',
    process: '',
    industry: '',
    leadSource: '',
    accountExecutive: '',
    projectManager: '',
    startDate: '',
    endDate: ''
  })

  useEffect(() => {
    const filteredData = productData?.filter(product => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true // Skip empty filters
        if (key === 'invoiceAmount' && value) {
          // Add logic for invoiceAmount range filtering
          return checkInvoiceAmount(product.invoiceAmount, value)
        }
        // return product[key] === value
        return product[key]?.toString().toLowerCase().includes(value.toString().toLowerCase())
      })
    })

    setData(filteredData ?? [])
  }, [filters, productData, setData])

  // Function to check invoice amount range
  const checkInvoiceAmount = (amount, range) => {
    const [min, max] = range.split('-').map(x => parseFloat(x.replace('$', '').trim()))
    return amount >= min && (max ? amount <= max : true)
  }

  // Function to handle filter changes
  const handleChange = e => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  // Function to clear filters
  const clearFilters = () => {
    setFilters({
      order: '',
      customer: '',
      email: '',
      firstName: '',
      lastName: '',
      stage: '',
      supplier: '',
      supplierType: '',
      itar: '',
      netTerms: '',
      invoiceAmount: '',
      gpPercentage: '',
      process: '',
      industry: '',
      leadSource: '',
      accountExecutive: '',
      projectManager: '',
      startDate: '',
      endDate: ''
    })
  }

  const clearFilter = field => {
    setFilters(prev => ({ ...prev, [field]: '' }))
  }

  return (
    <>
      <CardContent>
        <Typography variant='h6' className='mb-4' gutterBottom>
          Advanced Search
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label={`${currentPage} ID`}
              variant='outlined'
              fullWidth
              name='order'
              value={filters.order}
              onChange={handleChange}
              InputProps={{
                endAdornment: filters.order && <IconButton onClick={() => clearFilter('order')}>x</IconButton>
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label='Account'
              variant='outlined'
              fullWidth
              name='customer'
              value={filters.customer}
              onChange={handleChange}
              InputProps={{
                endAdornment: filters.customer && <IconButton onClick={() => clearFilter('customer')}>x</IconButton>
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label='Email'
              variant='outlined'
              fullWidth
              name='email'
              value={filters.email}
              onChange={handleChange}
              InputProps={{
                endAdornment: filters.email && <IconButton onClick={() => clearFilter('email')}>x</IconButton>
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label='First Name'
              variant='outlined'
              fullWidth
              name='firstName'
              value={filters.firstName}
              onChange={handleChange}
              InputProps={{
                endAdornment: filters.firstName && <IconButton onClick={() => clearFilter('firstName')}>x</IconButton>
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label='Last Name'
              variant='outlined'
              fullWidth
              name='lastName'
              value={filters.lastName}
              onChange={handleChange}
              InputProps={{
                endAdornment: filters.lastName && <IconButton onClick={() => clearFilter('lastName')}>x</IconButton>
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='stage-select'>Stage</InputLabel>
              <div className='flex items-center justify-between gap-4'>
                <Select
                  labelId='stage-select'
                  id='select-stage'
                  name='stage'
                  value={filters.stage}
                  className='w-full'
                  onChange={handleChange}
                  label='Stage'
                >
                  <MenuItem value=''>Select Stage</MenuItem>
                  {STAGE_OPTIONS.map(stage => (
                    <MenuItem key={stage} value={stage}>
                      {stage}
                    </MenuItem>
                  ))}
                </Select>

                {filters.stage && <IconButton onClick={() => clearFilter('stage')}>x</IconButton>}
              </div>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='supplier-select'>Supplier</InputLabel>
              <div className='flex items-center justify-between gap-4'>
                <Select
                  labelId='supplier-select'
                  id='select-supplier'
                  name='supplier'
                  className='w-full'
                  value={filters.supplier}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: filters.supplier && <IconButton onClick={() => clearFilter('supplier')}>x</IconButton>
                  }}
                  label='Supplier'
                >
                  <MenuItem value=''>Select Supplier</MenuItem>
                  {SUPPLIER_OPTIONS.map(supplier => (
                    <MenuItem key={supplier} value={supplier}>
                      {supplier}
                    </MenuItem>
                  ))}
                </Select>
                {filters.supplier && <IconButton onClick={() => clearFilter('supplier')}>x</IconButton>}
              </div>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='supplier-type-select'>Supplier Type</InputLabel>
              <div className='flex items-center justify-between gap-4'>
                <Select
                  labelId='supplier-type-select'
                  id='select-supplier-type'
                  name='supplierType'
                  className='w-full'
                  value={filters.supplierType}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: filters.supplierType && (
                      <IconButton onClick={() => clearFilter('supplierType')}>x</IconButton>
                    )
                  }}
                  label='Supplier Type'
                >
                  <MenuItem value=''>Select Supplier Type</MenuItem>
                  {SUPPLIER_TYPE_OPTIONS.map(type => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
                {filters.supplierType && <IconButton onClick={() => clearFilter('supplierType')}>x</IconButton>}
              </div>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='itar-select'>ITAR</InputLabel>
              <div className='flex items-center justify-between gap-4'>
                <Select
                  labelId='itar-select'
                  id='select-itar'
                  name='itar'
                  className='w-full'
                  value={filters.itar}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: filters.itar && <IconButton onClick={() => clearFilter('itar')}>x</IconButton>
                  }}
                  label='ITAR'
                >
                  <MenuItem value=''>Select ITAR</MenuItem>
                  {ITAR_OPTIONS.map(option => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
                {filters.itar && <IconButton onClick={() => clearFilter('itar')}>x</IconButton>}
              </div>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='net-terms-select'>Net Terms</InputLabel>
              <div className='flex items-center justify-between gap-4'>
                <Select
                  labelId='net-terms-select'
                  id='select-net-terms'
                  name='netTerms'
                  className='w-full'
                  value={filters.netTerms}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: filters.netTerms && <IconButton onClick={() => clearFilter('netTerms')}>x</IconButton>
                  }}
                  label='Net Terms'
                >
                  <MenuItem value=''>Select Net Terms</MenuItem>
                  {NET_TERMS_OPTIONS.map(term => (
                    <MenuItem key={term} value={term}>
                      {term}
                    </MenuItem>
                  ))}
                </Select>
                {filters.netTerms && <IconButton onClick={() => clearFilter('netTerms')}>x</IconButton>}
              </div>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='invoice-amount-select'>Invoice Amount</InputLabel>
              <div className='flex items-center justify-between gap-4'>
                <Select
                  labelId='invoice-amount-select'
                  id='select-invoice-amount'
                  className='w-full'
                  name='invoiceAmount'
                  value={filters.invoiceAmount}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: filters.invoiceAmount && (
                      <IconButton onClick={() => clearFilter('invoiceAmount')}>x</IconButton>
                    )
                  }}
                  label='Invoice Amount'
                >
                  <MenuItem value=''>Select Invoice Amount</MenuItem>
                  {INVOICE_AMOUNT_OPTIONS.map(amount => (
                    <MenuItem key={amount} value={amount}>
                      {amount}
                    </MenuItem>
                  ))}
                </Select>
                {filters.invoiceAmount && <IconButton onClick={() => clearFilter('invoiceAmount')}>x</IconButton>}
              </div>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='gp-select'>GP</InputLabel>
              <div className='flex items-center justify-between gap-4'>
                <Select
                  labelId='gp-select'
                  id='select-gp'
                  className='w-full'
                  name='gpPercentage'
                  value={filters.gpPercentage}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: filters.gpPercentage && (
                      <IconButton onClick={() => clearFilter('gpPercentage')}>x</IconButton>
                    )
                  }}
                  label='GP'
                >
                  <MenuItem value=''>Select GP</MenuItem>
                  {GP_OPTIONS.map(gpPercentage => (
                    <MenuItem key={gpPercentage} value={gpPercentage}>
                      {gpPercentage}
                    </MenuItem>
                  ))}
                </Select>
                {filters.gpPercentage && <IconButton onClick={() => clearFilter('gpPercentage')}>x</IconButton>}
              </div>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label='Process'
              variant='outlined'
              fullWidth
              name='process'
              value={filters.process}
              InputProps={{
                endAdornment: filters.process && <IconButton onClick={() => clearFilter('process')}>x</IconButton>
              }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label='Industry'
              variant='outlined'
              fullWidth
              name='industry'
              value={filters.industry}
              InputProps={{
                endAdornment: filters.industry && <IconButton onClick={() => clearFilter('industry')}>x</IconButton>
              }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label='Lead Source'
              variant='outlined'
              fullWidth
              name='leadSource'
              value={filters.leadSource}
              onChange={handleChange}
              InputProps={{
                endAdornment: filters.leadSource && <IconButton onClick={() => clearFilter('leadSource')}>x</IconButton>
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label='Account Executive'
              variant='outlined'
              fullWidth
              name='accountExecutive'
              value={filters.accountExecutive}
              onChange={handleChange}
              InputProps={{
                endAdornment: filters.accountExecutive && (
                  <IconButton onClick={() => clearFilter('accountExecutive')}>x</IconButton>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label='Project Manager'
              variant='outlined'
              fullWidth
              name='projectManager'
              value={filters.projectManager}
              onChange={handleChange}
              InputProps={{
                endAdornment: filters.projectManager && (
                  <IconButton onClick={() => clearFilter('projectManager')}>x</IconButton>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label='Start Date'
              variant='outlined'
              fullWidth
              type='date'
              InputLabelProps={{
                shrink: true
              }}
              name='startDate'
              value={filters.startDate}
              onChange={handleChange}
              InputProps={{
                endAdornment: filters.startDate && <IconButton onClick={() => clearFilter('startDate')}>x</IconButton>
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label='End Date'
              variant='outlined'
              fullWidth
              type='date'
              InputLabelProps={{
                shrink: true
              }}
              name='endDate'
              value={filters.endDate}
              onChange={handleChange}
              InputProps={{
                endAdornment: filters.endDate && <IconButton onClick={() => clearFilter('endDate')}>x</IconButton>
              }}
            />
          </Grid>
          <Grid container spacing={2} justifyContent='flex-end' style={{ marginTop: '16px' }}>
            <Grid item>
              <Button variant='contained' color='primary' onClick={clearFilters}>
                Clear Filters
              </Button>
            </Grid>
            {/* <Grid item>
            <Button variant="outlined" color="secondary" onClick={closeAdvanceSearch} >
              Close
            </Button>
          </Grid> */}
          </Grid>
        </Grid>
      </CardContent>
    </>
  )
}

export default TableFilters
