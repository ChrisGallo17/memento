import { Container } from "react-bootstrap";
import Quote from "./Quote";

export default function Feed (props) {
  const { quotes } = props;

  return (
    <Container className='mt-4'>
      {quotes.map((quote, index) =>
        <Quote quote={quote.quote} author={quote.author} key={index}/>
      )}
    </Container>
  )
}