import { Card } from "react-bootstrap"

export default function Quote (props) {

  return (
    <Card className="mt-4">
      <Card.Body align='left'>"{props.quote}"</Card.Body>
      <Card.Footer className="pt-1 pb-1" align='right'> - Author</Card.Footer>
    </Card>
  )
}