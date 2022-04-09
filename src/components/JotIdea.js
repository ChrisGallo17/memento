import { Modal } from "react-bootstrap";
import { TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function JotIdea(props, quotes, setQuotes) {
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [quoteValue, setQuoteValue] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuotes([...quotes, quoteValue])
    console.log(quoteValue, quotes)
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Jot an idea
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField
            fullWidth
            focused
            id="inputQuote"
            type="text"
            placeholder="na"
            name="quoteInput"
            value={quoteValue}
            label="Quote"
            onChange={e => setQuoteValue(e.target.value)}
            multiline
            rows={4}
            />
        </Modal.Body>
        <Modal.Footer>
          <Stack spacing={1} direction="row">
            <Button variant="outlined" onClick={props.onHide}>Cancel</Button>
            <Button variant="contained" onClick={props.onHide} type="submit">Save</Button>
          </Stack>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
