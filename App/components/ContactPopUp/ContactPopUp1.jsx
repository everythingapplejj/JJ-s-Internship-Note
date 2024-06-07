import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Modal,
  Typography,
  Button,
  IconButton,
  Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 416,
  height: 293,
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: 2,
  textAlign: 'center',
  boxShadow: 'none'
};

const primaryColor = '#1A56DB';

const ContactPopUp1 = ({ name, email, phone, onClose, onContinue, opened }) => {
  if (!opened) return null;

  return (
    <Modal
      open={opened}
      onClose={onClose}
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
    >
      <Box sx={style}>
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 10, right: 10 }}>
          <CloseIcon />
        </IconButton>
        <Typography
          id="contact-modal-title"
          variant="h6"
          component="h4"
          sx={{
            position: 'absolute',
            top: 60,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '70%',
            color: '#6B7280',
            fontSize: '1.4rem',
            fontWeight: 900,
            lineHeight: '1.5',
            textAlign: 'center'
          }}
        >
          {name}'s Contact Information:
        </Typography>
        <Box
          sx={{
            position: 'absolute',
            top: 160,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '85%',
            textAlign: 'center'
          }}
        >
          <Typography
            id="contact-modal-description"
            sx={{
              color: '#4B5563',
              fontSize: 16,
              fontFamily: 'Inter',
              lineHeight: '24px',
              whiteSpace: 'pre-wrap'
            }}
          >
            {email}<br />{phone}
          </Typography>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: 70,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '85%'
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: primaryColor,
              '&:hover': { bgcolor: primaryColor, boxShadow: 'none' },
              '&:active': { boxShadow: 'none' },
              boxShadow: 'none',
              padding: '10px 20px',
              width: 85,
              height: 37,
              fontSize: 14,
              fontWeight: 500,
              fontFamily: 'Inter',
              lineHeight: '21px',
              borderRadius: 2,
              textTransform: 'capitalize'
            }}
            onClick={onContinue}
          >
            Continue
          </Button>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: 15,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%'
          }}
        >
          <Stack direction="row" justifyContent="center" spacing={2}>
            <Box sx={{ width: 12, height: 12, bgcolor: primaryColor, borderRadius: '50%' }}></Box>
            <Box sx={{ width: 12, height: 12, bgcolor: 'grey.400', borderRadius: '50%' }}></Box>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
}

ContactPopUp1.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired,
};

export default ContactPopUp1;