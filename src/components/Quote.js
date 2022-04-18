import { Card, Modal } from "react-bootstrap"
import { Edit, Delete } from "@mui/icons-material";
import { IconButton, Button, Grid, TextField, Stack } from "@mui/material";
import { useState } from "react";
import { db } from "../utils/firebase";

export default function Quote (props) {
  const { quote, user } = props;
  
  const [editQuote, setEditQuote] = useState(quote.quote)
  const [editAuthor, setEditAuthor] = useState(quote.author)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdate = () => {
    // Push new data to DB to overwrite
    db.ref("users/" + user.uid + "/quotes/" + quote.key ).set({
      quote : editQuote,
      author : editAuthor,
      key : quote.key
    }).catch(alert);
    handleClose()
  }
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this quote?")){
      // Delete from DB
      let quoteRef = db.ref("/users/" + user.uid + "/quotes/" + quote.key);
      quoteRef.remove();

      handleClose()
    }
  }


  return (
    <Card className="mt-4" key={quote.key}>
      <Card.Body align='left'>"{quote.quote}"</Card.Body>
      {quote.author !== '' &&
        <Card.Footer className="pt-1 pb-1"> 
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item>
              <div >
                - {quote.author}
              </div>
            </Grid>
            <Grid item >
              <IconButton variant="text" size="small" className="p-0" onClick={handleShow}><Edit /></IconButton>
            </Grid>
        </Grid>
        </Card.Footer>
      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Quote</Modal.Title>
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
          defaultValue={quote.quote}
          onChange={e => setEditQuote(e.target.value)}
        />
        <TextField
          className="mt-3"
          fullWidth
          id="Author"
          label="Author"
          placeholder="Marcus Aurelius"
          defaultValue={quote.author}
          onChange={e => setEditAuthor(e.target.value)}
        />
        </Modal.Body>
        <Modal.Footer>
          <IconButton className="float-start" color="error" align="left" onClick={handleDelete}>
            <Delete />
          </IconButton> 
          <Stack spacing={1} direction="row">
            <Button variant="outlined" onClick={handleClose}>Close</Button>
            <Button variant="contained" color="success" onClick={handleUpdate}>Update</Button>
          </Stack>
        </Modal.Footer>
      </Modal>
    </Card>
  )
}