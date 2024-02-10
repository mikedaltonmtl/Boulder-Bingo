import * as React from 'react';
import Box from '@mui/material/Box';
import MuiStepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Select Challenges', 'Go Climb!'];

export default function Stepper() {
  return (
    <Box sx={{ width: '95%', mt: 2, mx: 1 }}>
      <MuiStepper activeStep={0}>
        {steps.map(label => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </MuiStepper>
    </Box>
  );
}