// MUI Imports
'use client'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import { useEdit } from '@/contexts/EditContext'
// Component Imports
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

export const paymentStatus = {
  1: { text: 'Paid', color: 'success' },
  2: { text: 'Pending', color: 'warning' },
  3: { text: 'Cancelled', color: 'secondary' },
  4: { text: 'Failed', color: 'error' }
}
export const statusChipColor = {
  Delivered: { color: 'success' },
  'Out for Delivery': { color: 'primary' },
  'Ready to Pickup': { color: 'info' },
  Dispatched: { color: 'warning' }
}

const OrderDetailHeader = ({ leadData, order }) => {
  // Vars
  const buttonProps = (children, color, variant) => ({
    children,
    color,
    variant
  })

  const { isEditing, toggleEdit, handleSave } = useEdit() // Access global state

  return (
    <div className='flex flex-wrap justify-between sm:items-center max-sm:flex-col gap-y-4'>
      <div className='flex flex-col items-start gap-1'>
        <div className='flex items-center gap-2'>
          <Typography variant='h5'>{`Lead #${order}`}</Typography>
        </div>
        <Typography>{`${new Date(leadData?.date ?? '').toDateString()}, ${leadData?.time} (ET)`}</Typography>
      </div>
      <div>
        {/* <Button variant='contained' size='small' className='ml-4 max-sm:is-full'>
          New
        </Button> */}
        <Button variant='contained' size='small' className='ml-4 max-sm:is-full'>
          Import
        </Button>
        <Button variant='contained' size='small' className='ml-4 max-sm:is-full'>
          Convert To Account
        </Button>
        <Button variant='contained' size='small' className=' ml-4 max-sm:is-full'>
          Clone
        </Button>
        <Button variant='contained' size='small' className='ml-4 max-sm:is-full'>
          Find Duplicates
        </Button>
        <Button className='mx-4' variant='contained' color={isEditing ? 'secondary' : 'primary'} onClick={toggleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </Button>
        <OpenDialogOnElementClick
          element={Button}
          elementProps={buttonProps('Remove Lead', 'error', 'outlined')}
          dialog={ConfirmationDialog}
          dialogProps={{ type: 'delete-order' }}
        />
      </div>
    </div>
  )
}

export default OrderDetailHeader
