import { Card, Row, Col } from "react-bootstrap"
import { MoreVert, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { IconButton, MobileStepper, Button, Stack } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

export default function QuoteV2 () {
  const theme = useTheme
  const [activeStep, setActiveStep] = useState(0);
  const numberOfQuotes = 6;

  const handleNext = () => {
    if (activeStep + 1 === numberOfQuotes) {
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  
  const handleBack = () => {
    if (activeStep === 0) {
      setActiveStep(numberOfQuotes - 1);
    } else {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <Card className="mt-4">
      <Card.Header as="h5">
        Dr. Seuss
        <IconButton variant="text" size="small" align="right" className="p-0 float-end"><MoreVert /></IconButton>
      </Card.Header>

      <Card.Body align='left' className="p-0">

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="p-3 m-0"
          spacing={2}>
          <IconButton onClick={handleBack}>
            <ArrowBackIos color="primary"/>
          </IconButton> 
          <Card.Text align="center">
            "This is where the quote would be"
          </Card.Text>
          <IconButton onClick={handleNext}>
            <ArrowForwardIos color="primary"/>
          </IconButton> 

        </Stack>
        
        <MobileStepper
          className="pb-2"
          variant="dots"
          steps={numberOfQuotes}
          position="static"
          activeStep={activeStep}
          sx={{ flexGrow: 1 }}
          style={{justifyContent: "center"}}
          // nextButton={
          //   <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          //     {theme.direction === 'rtl' ? (
          //       <KeyboardArrowLeft />
          //     ) : (
          //       <KeyboardArrowRight />
          //     )}
          //   </Button>
          // }
          // backButton={
          //   <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          //     {theme.direction === 'rtl' ? (
          //       <KeyboardArrowRight />
          //     ) : (
          //       <KeyboardArrowLeft />
          //     )}
          //   </Button>
          // }
        />
      </Card.Body>
    </Card>
  )
}