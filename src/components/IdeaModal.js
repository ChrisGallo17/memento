import { Modal } from "react-bootstrap";
import { Button, TextField, Stack } from "@mui/material";
import { useState } from "react";

export default function MyVerticallyCenteredModal(props) {
  const { quotes, setQuotes } = props;
  const [quoteValue, setQuoteValue] = useState()
  const [authorValue, setAuthorValue] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuotes([...quotes, {quote: quoteValue, author: authorValue}])
    setQuoteValue('')
    setAuthorValue('')
  };
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <form onSubmit={handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Write an Idea
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TextField
          fullWidth
          required
          multiline
          rows={4}
          id="inputQuote"
          type="text"
          placeholder='"Ill be back"'
          name="quoteInput"
          label="Quote"
          value={quoteValue}
          onChange={e => setQuoteValue(e.target.value)}
        />
        <TextField
          className="mt-3"
          id="Author"
          label="Author"
          placeholder="Marcus Aurelius"
          value={authorValue}
          onChange={e => setAuthorValue(e.target.value)}
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