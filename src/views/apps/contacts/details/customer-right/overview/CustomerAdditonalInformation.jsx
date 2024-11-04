'use client'
import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Typography,
  Card
} from '@mui/material'

const CustomerAdditionalInformation = () => {
  const [isEditing, setIsEditing] = useState(false) // State to toggle edit/save mode
  const [formData, setFormData] = useState({
    industry: 'Consumer Products',
    accountExecutive: 'Pratik AE',
    projectManager: 'Pratik PM',
    sdr: '',
    hearAboutUs: '',
    sameAsBillingAddress: false,
    shippingAddress1: '',
    shippingAddress2: '',
    shippingAddress3: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
    shippingCountry: '',
    nda: false,
    unsubscribe: false,
    receiveInfo: false,
    account: false,
    leadSource: '',
    process: '',
    leadSourceDetail: '',
    email: '',
    phone: '(989) 898-8899',
    rating: '',
    reason: '',
    contactPassword: '',
    sameAsShippingAddress: false,
    billingAddress1: 'Changed On Order Page',
    billingAddress2: '',
    billingAddress3: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    billingCountry: '',
    contactStatus: 'Active',
    itar: '',
    manufacturing: '',
    notes: ''
  })

  const handleEditToggle = () => setIsEditing(prev => !prev)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  return (
    
      <Card className='p-4'>
      
        
        <Typography variant="h6" gutterBottom className='mb-4' >Contact Information</Typography>
        <Grid container spacing={4} >
          <Grid item xs={6}>
            <TextField
              label='Industry'
              name='industry'
              value={formData.industry}
              onChange={handleChange}
              disabled={!isEditing}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Account Executive'
              name='accountExecutive'
              value={formData.accountExecutive}
              onChange={handleChange}
              disabled={!isEditing}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Project Manager'
              name='projectManager'
              value={formData.projectManager}
              onChange={handleChange}
              disabled={!isEditing}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>SDR</InputLabel>
              <Select name='sdr' value={formData.sdr} onChange={handleChange} disabled={!isEditing}>
                <MenuItem value='SDR 1'>SDR 1</MenuItem>
                <MenuItem value='SDR 2'>SDR 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Lead Source</InputLabel>
              <Select name='leadSource' value={formData.leadSource} onChange={handleChange} disabled={!isEditing}>
                <MenuItem value='Source 1'>Source 1</MenuItem>
                <MenuItem value='Source 2'>Source 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Process</InputLabel>
              <Select name='process' value={formData.process} onChange={handleChange} disabled={!isEditing}>
                <MenuItem value='Process 1'>Process 1</MenuItem>
                <MenuItem value='Process 2'>Process 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <TextField
              label='Phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              disabled={!isEditing}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label='Lead Source Details'
              name='leadSourceDetails'
              value={formData.projectManager}
              onChange={handleChange}
              disabled={!isEditing}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label='ITAR'
              name='itar'
              value={formData.itar}
              onChange={handleChange}
              disabled={!isEditing}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label='Manufacturing'
              name='manufacturing'
              value={formData.manufacturing}
              onChange={handleChange}
              disabled={!isEditing}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label='Notes'
              name='notes'
              value={formData.notes}
              onChange={handleChange}
              disabled={!isEditing}
              fullWidth
            />
          </Grid>
        </Grid>
       
          <div className=' mt-4'>
          <Button variant='contained' onClick={handleEditToggle}>
            {isEditing ? 'Save' : 'Edit'}
          </Button>
        </div>
      </Card>
    
  )
}

export default CustomerAdditionalInformation
