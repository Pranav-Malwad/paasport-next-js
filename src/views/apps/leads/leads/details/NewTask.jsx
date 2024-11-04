'use client'
import React, { useContext, useState } from 'react'
import { FormControl, InputLabel, Select, Grid, Card, MenuItem, TextField, Button } from '@mui/material'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' // Import Quill styles

// Assuming useEdit is a custom context that provides edit state
const useEdit = () => {
  const [isEditing, setIsEditing] = useState(false)
  return { isEditing, setIsEditing }
}

const NewTask = () => {
  const { isEditing, setIsEditing } = useEdit()
  const [formData, setFormData] = useState({
    assignedTo: '',
    subject: '',
    status: '',
    dueDate: '',
    priority: '',
    comment: ''
  })

  // Handle form data changes
  const handleChange = field => e => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  // Handle comment changes for ReactQuill
  const handleCommentChange = value => {
    setFormData({ ...formData, comment: value })
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    // Save formData logic
    setIsEditing(false)
  }

  return (
    <Card className='p-4' elevation={3} sx={{ borderRadius: 2 }}>
      {/* Assigned To */}

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth margin='normal'>
            <InputLabel id='assigned-to-label'>Assigned To</InputLabel>
            <Select
              labelId='assigned-to-label'
              id='assigned-to'
              label='Assigned To'
              value={formData.assignedTo}
              onChange={handleChange('assignedTo')}
            >
              <MenuItem value='Justin Howard'>Justin Howard</MenuItem>
              <MenuItem value='Rob Schmidt'>Rob Schmidt</MenuItem>
              <MenuItem value='Ryan Costello'>Ryan Costello</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* Related To (Non-editable) */}
        <Grid item xs={6}>
          <TextField
            fullWidth
            margin='normal'
            label='Related To'
            value='yuga@gmail.com'
            InputProps={{ readOnly: true }}
          />
        </Grid>
        {/* Subject */}
        <Grid item xs={6}>
          <FormControl fullWidth margin='normal'>
            <InputLabel id='subject-label'>Subject</InputLabel>
            <Select
              label='Subject'
              labelId='subject-label'
              id='subject'
              value={formData.subject}
              onChange={handleChange('subject')}
            >
              <MenuItem value='Meeting'>Meeting</MenuItem>
              <MenuItem value='Call'>Call</MenuItem>
              <MenuItem value='Follow-up'>Follow-up</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* Status */}
        <Grid item xs={6}>
          <FormControl fullWidth margin='normal'>
            <InputLabel id='status-label'>Status</InputLabel>
            <Select
              label='Status'
              labelId='status-label'
              id='status'
              value={formData.status}
              onChange={handleChange('status')}
            >
              <MenuItem value='Not Started'>Not Started</MenuItem>
              <MenuItem value='In Progress'>In Progress</MenuItem>
              <MenuItem value='Completed'>Completed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* Due Date */}{' '}
        <Grid item xs={6}>
          <TextField
            fullWidth
            margin='normal'
            label='Due Date'
            type='date'
            value={formData.dueDate}
            onChange={handleChange('dueDate')}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        {/* Priority */}{' '}
        <Grid item xs={6}>
          <FormControl fullWidth margin='normal'>
            <InputLabel id='priority-label'>Priority</InputLabel>
            <Select
              label='Priority'
              labelId='priority-label'
              id='priority'
              value={formData.priority}
              onChange={handleChange('priority')}
            >
              <MenuItem value='Low'>Low</MenuItem>
              <MenuItem value='Medium'>Medium</MenuItem>
              <MenuItem value='High'>High</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* Comment */}
        <Grid item xs={12}>
        <InputLabel id='comments'>Comment</InputLabel>
          <div style={{ marginTop: '16px 0' }}>
            <ReactQuill
              value={formData.comment}
              onChange={handleCommentChange}
              theme={'snow' } // Use 'snow' theme for editing and 'bubble' for read-only
            />
          </div>
        </Grid>
        {/* Edit and Save Buttons */}
        <Grid item xs={12} className='flex justify-end'>
          <Button variant='contained' color='primary' onClick={handleSave}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Card>
  )
}

export default NewTask
