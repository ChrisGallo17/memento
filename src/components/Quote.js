import { Card } from "react-bootstrap"

export default function Quote (props) {
  const { quote, author } = props;

  return (
    <Card className="mt-4">
      <Card.Body align='left'>"{quote}"</Card.Body>
      {author !== '' &&
        <Card.Footer className="pt-1 pb-1" align='right'> - {author}</Card.Footer>
      }
    </Card>
  )
}