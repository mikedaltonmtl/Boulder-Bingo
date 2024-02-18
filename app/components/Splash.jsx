import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '75%',
  bgcolor: 'background.paper',
  border: '2px solid #42a5f5',
  boxShadow: 24,
  p: 4,
};

export default function Splash({ openSplash, setOpenSplash }) {
  return (
    <Modal
      open={openSplash}
      onClose={() => setOpenSplash(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CloseIcon
          aria-label="close"
          onClick={() => setOpenSplash(false)}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            color: (theme) => theme.palette.grey[500],
          }}
        />
        <Typography variant="h6" gutterBottom>
            Boulder Bingo
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#9c27b0' }} gutterBottom>
            What is it?
        </Typography>
        <Typography variant="body2" gutterBottom>
          An app that generates
          <Typography variant="body2" component="span" sx={{ color: '#1976d2' }}>{' '}bingo cards{' '}</Typography>
          to make
          <Typography variant="body2" component="span" sx={{ color: '#ed6c02' }}>{' '}bouldering{' '}</Typography>
          even more fun!
        </Typography>
        <Typography variant="subtitle1" mt={2} sx={{ color: '#9c27b0' }} gutterBottom>
            How to play
        </Typography>
        <Typography variant="body2">
          Start by choosing how many
          <Typography variant="body2" component="span" sx={{ color: '#2e7d32' }}>{' '}challenges{' '}</Typography>
          you want to try, then decide which
          <Typography variant="body2" component="span" sx={{ color: '#d32f2f' }}>{' '}types{' '}</Typography>
          of challenge you dare to face.
        </Typography>
        <Typography variant="body2">
          You can include climbs by their
          <Typography variant="body2" component="span" sx={{ color: '#03a9f4' }}>{' '}colour</Typography>
          , to climb all the
          <Typography variant="body2" component="span" sx={{ color: '#2e7d32' }}>{' '}intro runs</Typography>
          , climbs by
          <Typography variant="body2" component="span" sx={{ color: '#ed6c02' }}>{' '}difficulty{' '}</Typography>
          and even
          <Typography variant="body2" component="span" sx={{ color: '#d32f2f' }}>{' '}exercises</Typography>
          .
        </Typography>
        <Typography variant="body2">
          The challenges you choose will be added
          <Typography variant="body2" component="span" sx={{ color: '#ed6c02' }}>{' '}randomly{' '}</Typography>
          to your
          <Typography variant="body2" component="span" sx={{ color: '#2e7d32' }}>{' '}bingo card</Typography>
          , if you don&apos;t like the way it looks, just hit
          <Typography variant="body2" component="span" sx={{ color: '#03a9f4' }}>{' '}shuffle</Typography>
          .
        </Typography>
      </Box>
    </Modal>
  );
}