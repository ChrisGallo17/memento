import { Container } from "react-bootstrap";
import Quote from "./Quote";

export default function Feed (props) {
  return (
    <Container className='mt-4'>
      {props.quotes.map((quote, index) =>
        <Quote quote={quote} key={index}/>
      )}
    </Container>
  )
}