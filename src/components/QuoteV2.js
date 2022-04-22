import { Card } from "react-bootstrap"
import { MoreVert, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { IconButton, MobileStepper, Button } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

export default function QuoteV2 () {
  const theme = useTheme
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Card className="mt-4">
      <Card.Header as="h5">
        Dr. Seuss
        <IconButton variant="text" size="small" align="right" className="p-0 float-end"><MoreVert /></IconButton>
      </Card.Header>

      <Card.Body align='left' className="p-0">
        <Card.Text className="p-3 m-0" align="center">
          "This is where the quote would be"
        </Card.Text>
        <MobileStepper
          className="p-1"
          variant="dots"
          steps={6}
          position="static"
          activeStep={activeStep}
          sx={{ flexGrow: 1 }}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </Card.Body>
    </Card>
  )
}