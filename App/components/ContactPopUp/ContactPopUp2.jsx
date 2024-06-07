import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Modal,
  Typography,
  Button,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const primaryColor = '#1A56DB';

const ContactPopUp2 = ({ name, onClose, opened }) => {
  const [status, setStatus] = useState('unreviewed');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Status updated to: ${status}`);
    onClose();
  };

  if (!opened) return null;

  return (
    <Modal
      open={opened}
      onClose={onClose}
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 416,
          height: 427,
          bgcolor: 'background.paper',
          border: '1px solid #ccc',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 10, right: 10 }}>
          <CloseIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="h4"
          sx={{
            position: 'absolute',
            top: 50,
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '1.3rem',
            fontWeight: 900,
            color: '#6B7280',
            lineHeight: 1.5,
            textAlign: 'center',
            width: '65%',
          }}
        >
          Would you like to change {name}'s application status?
        </Typography>
        <Box
          sx={{
            position: 'absolute',
            top: 170,
            left: '60%',
            transform: 'translateX(-50%)',
            width: '80%',
            textAlign: 'left',
          }}
        >
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="status"
              name="status"
              value={status}
              onChange={handleChange}
            >
              <FormControlLabel value="reviewed" control={<Radio />} label="Reviewed" />
              <FormControlLabel value="unreviewed" control={<Radio />} label="Unreviewed" />
              <FormControlLabel value="contacted" control={<Radio />} label="Contacted" />
              <FormControlLabel value="accepted" control={<Radio />} label="Accepted" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{
            position: 'absolute',
            bottom: 70,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
          }}
        >
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            sx={{
              bgcolor: primaryColor,
              '&:hover': { bgcolor: primaryColor, boxShadow: 'none' },
              '&:active': { boxShadow: 'none' },
              boxShadow: 'none',
              padding: '10px 20px',
              fontSize: 14,
              fontWeight: 500,
              fontFamily: 'Inter',
              lineHeight: '21px',
              borderRadius: 2,
              textTransform: 'capitalize'
            }}
          >
            Save
          </Button>
          <Button
            type="button"
            variant="outlined"
            onClick={onClose}
            sx={{
              color: '#333',
              borderColor: '#ccc',
              padding: '10px 20px',
              fontSize: 14,
              fontWeight: 500,
              fontFamily: 'Inter',
              lineHeight: '21px',
              borderRadius: 2,
              textTransform: 'capitalize',
              '&:hover': {
                bgcolor: '#D1D5DB',
                borderColor: '#D1D5DB',
              }
            }}
          >
            No, cancel
          </Button>
        </Stack>
        <Box
          sx={{
            position: 'absolute',
            bottom: 15,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
          }}
        >
          <Stack direction="row" justifyContent="center" spacing={2}>
            <Box sx={{ width: 12, height: 12, bgcolor: '#D1D5DB', borderRadius: '50%' }}></Box>
            <Box sx={{ width: 12, height: 12, bgcolor: primaryColor, borderRadius: '50%' }}></Box>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
};

ContactPopUp2.propTypes = {
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired,
};

export default ContactPopUp2;