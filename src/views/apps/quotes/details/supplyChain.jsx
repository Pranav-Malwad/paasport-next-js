


import React, { useState } from 'react';
import { Box,  Checkbox, Button, Typography, Grid, Card, Chip, CardContent, CardActions } from '@mui/material';

// Example supplier data
const suppliersData = [
  { id: 1, name: 'Supplier A', type: 'domestic' },
  { id: 2, name: 'Supplier B', type: 'domestic' },
  { id: 3, name: 'Supplier C', type: 'international' },
  { id: 4, name: 'Supplier D', type: 'international' }, { id: 5, name: 'Supplier E', type: 'Domestic' },
  { id: 6, name: 'Supplier F', type: 'International' },
];

// Predefined manufacturing type
const predefinedManufacturingType = 'both'; // Change this to 'international' or 'both' as needed

const SupplyChain = () => {
  const [selectedSuppliers, setSelectedSuppliers] = useState([]);

  const handleCheckboxChange = (supplierId) => {
    setSelectedSuppliers((prevSelected) => {
      const newSelected = prevSelected.includes(supplierId)
        ? prevSelected.filter(id => id !== supplierId) // Deselecting supplier
        : [...prevSelected, supplierId]; // Selecting supplier

      // Show buttons if there's at least one supplier selected, otherwise hide
      return newSelected;
    });
  };

  // Determine if the buttons should be shown based on the selected suppliers
  const showButtons = selectedSuppliers.length > 0;

  return (
    <Card className='p-4' elevation={3} sx={{ borderRadius: 2 }}>
      <Grid container spacing={2}>
        {suppliersData.map((supplier) => {
          const showSupplier =
            (predefinedManufacturingType === 'domestic' && supplier.type === 'domestic') ||
            (predefinedManufacturingType === 'international' && supplier.type === 'international') ||
            (predefinedManufacturingType === 'both');

          return (
            showSupplier && (
              <Grid item xs={12} sm={6} md={3} key={supplier.id}>
                <Card variant="outlined">
                  <CardContent className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <Checkbox
                        checked={selectedSuppliers.includes(supplier.id)}
                        onChange={() => handleCheckboxChange(supplier.id)}
                      />
                      <Typography variant="h6">{supplier.name}</Typography>
                    </div>

                    <Chip
                      label={supplier.type.charAt(0).toUpperCase() + supplier.type.slice(1)}
                      color={supplier.type === 'domestic' ? 'primary' : 'secondary'}
                      size="small"
                      sx={{ marginLeft: 1 }} // Add margin for spacing
                    />
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => alert(`Contacting ${supplier.name}`)}>
                      Contact Supplier
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          );
        })}
      </Grid>

      {showButtons && (
        <Box sx={{ marginTop: 8 }}>
          <Button variant="contained" onClick={() => alert('Request for Quote sent for selected suppliers')} sx={{ marginRight: 2 }}>
            Request for Quote
          </Button>
          <Button variant="contained" onClick={() => alert('Update Supplier Quote for selected suppliers')}>
            Update Supplier Quote
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default SupplyChain;