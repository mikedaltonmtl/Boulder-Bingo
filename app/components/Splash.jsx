import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';

const style = {
  position: 'absolute', top: '50%', left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '75%', width: '60%', maxWidth: '500px',
  bgcolor: 'background.paper',
  border: '2px solid #42a5f5', boxShadow: 24,
  padding: 4,
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
        <Typography variant="body2" gutterBottom>
          Choose how many
          <Typography variant="body2" component="span" sx={{ color: '#2e7d32' }}>{' '}challenges{' '}</Typography>
          to attempt, then select which
          <Typography variant="body2" component="span" sx={{ color: '#d32f2f' }}>{' '}types{' '}</Typography>
          to face.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Include routes by
          <Typography variant="body2" component="span" sx={{ color: '#03a9f4' }}>{' '}colour</Typography>
          , climb the
          <Typography variant="body2" component="span" sx={{ color: '#2e7d32' }}>{' '}intro runs</Typography>
          , choose by
          <Typography variant="body2" component="span" sx={{ color: '#ed6c02' }}>{' '}difficulty</Typography>
          , even add
          <Typography variant="body2" component="span" sx={{ color: '#d32f2f' }}>{' '}exercises</Typography>
          .
        </Typography>
        <Typography variant="body2" gutterBottom>
          Challenges are added
          <Typography variant="body2" component="span" sx={{ color: '#ed6c02' }}>{' '}randomly{' '}</Typography>
          to the
          <Typography variant="body2" component="span" sx={{ color: '#2e7d32' }}>{' '}bingo card</Typography>
          . Don&apos;t like the way it looks? Just hit
          <Typography variant="body2" component="span" sx={{ color: '#03a9f4' }}>{' '}shuffle</Typography>
          .
        </Typography>
        <Box sx={{ marginBottom: 4, display: { xs: 'none', md: 'block' } }}>
          <Typography variant="subtitle1" mt={2} sx={{ color: '#9c27b0' }} gutterBottom>
            This is the printable version
          </Typography>
          <Typography variant="body2" gutterBottom>
            You are propably viewing this
            <Typography variant="body2" component="span" sx={{ color: '#d32f2f' }}>{' '}app{' '}</Typography>
            on a device larger than a phone.
          </Typography>
          <Typography variant="body2" gutterBottom>
            The good news is you can play
            <Typography variant="body2" component="span" sx={{ color: '#ed6c02' }}>{' '}Boulder Bingo{' '}</Typography>
            in exactly the same way on a tablet or larger device.
          </Typography>
          <Typography variant="body2" gutterBottom>
            However, if you would like to
            <Typography variant="body2" component="span" sx={{ color: '#9c27b0' }}>{' '}print{' '}</Typography>
            a
            <Typography variant="body2" component="span" sx={{ color: '#2e7d32' }}>{' '}physical bingo card</Typography>
            , choose your
            <Typography variant="body2" component="span" sx={{ color: '#1976d2' }}>{' '}settings{' '}</Typography>
            as normal and when you are happy with the
            <Typography variant="body2" component="span" sx={{ color: '#d32f2f' }}>{' '}bingo card{' '}</Typography>
            , select
            <Typography variant="body2" component="span" sx={{ color: '#ed6c02' }}>{' '}File {'>'} Print...{' '}</Typography>
            in the browser.
          </Typography>
        </Box>
        <Box textAlign="center" sx={{ mt: 2 }} >
          <Button
            variant="outlined"
            endIcon={<NorthEastOutlinedIcon />}
            onClick={() => setOpenSplash(false)}
          >
          Start
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}