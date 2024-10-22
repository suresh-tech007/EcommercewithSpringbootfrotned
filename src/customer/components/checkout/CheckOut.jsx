import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import DeliveryAdressForm from './DeliveryAdressForm';
import OrderSummery from './OrderSummery';

const steps = ['Login', 'Add Delivery address', ' Order Summary','Payment'];

export default function CheckOut() {
    const location = useLocation()
  const [activeStep, setActiveStep] = React.useState(0);
const query = new URLSearchParams(location.search);
const step =  query.get("step");
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
     
  };

  const handleBack = () => {
     
  };

  const handleSkip = () => {
     
    }

    
  const handleReset = () => {
    
  };

  return (
   <div className='px-10 lg:px-20'>
     <Box sx={{ width: '100%' }}>
      <Stepper activeStep={step}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
           
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
         
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            
          </Box>

          <div className=' '>
            {step==2 ? <DeliveryAdressForm /> : <OrderSummery />}
          </div>
        </React.Fragment>
      )}
    </Box>
   </div>
  );
}
