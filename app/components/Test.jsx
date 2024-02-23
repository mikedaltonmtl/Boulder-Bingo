import {useState} from 'react';
import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Zoom from '@mui/material/Zoom';
import Typography from '@mui/material/Typography';


const testCard = [
  { front: '10 Push-ups', back: 'exercise', id: 1 },
  { front: 'Black climb', back: 'colour', id: 2 },
  { front: 'C2.2 climb', back: 'climb', id: 3 },
  { front: 'Purple climb', back: 'colour', id: 4 },
  { front: 'Intro', back: 'climb', id: 5 },
  { front: 'All the intros', back: 'intros', id: 6 },
  { front: 'C1 climb', back: 'climb', id: 7 },
  { front: 'Yellow climb', back: 'colour', id: 8 },
  { front: 'Red climb', back: 'colour', id: 9 },
  { front: '5 Pull-ups', back: 'exercise', id: 10 },
  { front: 'White climb', back: 'colour', id: 11 },
  { front: 'Intro climb', back: 'climb', id: 12 },
];

export default function Test() {
  const [showFront, setShowFront] = useState(true);

  return (
    <Container>
      <Button variant="outlined" onClick={() => setShowFront(prev => !prev)}>
        Flip
      </Button>
      <Box sx={{ flexGrow: 1, mt:3 }}>
        <Grid container spacing={1}>
          {testCard.map((challenge) => (
            <Grid item key={challenge.id} xs={3}>
              {showFront
                ?
                <Zoom in={showFront} style={{ transitionDelay: challenge.id * 200 }}>
                  <Typography variant="body2">
                    {challenge.front}
                  </Typography>
                </Zoom>
                :
                <motion.div
                  initial={{ opacity: 0.5, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, rotate: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 0, -30, 0, 15, 0] }}
                  transition={{ duration: 1, delay: challenge.id * 0.2, ease: "easeIn" }}
                >
                  <Typography variant="body2">
                    {challenge.back}
                  </Typography>
                </motion.div>
              }
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
