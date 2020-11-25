import './Summary.scss';
import { Button, Card, Image } from 'semantic-ui-react'


function Summary(props) {

  function status () {
    if (props.summary < 0) {
      return <p>You are owed
                <p className="money_green"> ${-props.summary / 100}</p>
              </p>
    } else if (props.summary === 0) {
      return <p>Worry is like interest paid in advance on a debt that never comes due.`</p>
    } else {
      return <p>
                <p className="money_red">You owe ${-props.summary / 100}</p>
              </p>
    }
  }

  return (
          <Card.Group className="dashboard_summary">
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='mini'
                  src='images/logo192.png'
                />
                <Card.Header>LOGGED IN USERNAME</Card.Header>
                <Card.Meta>Total balance of:</Card.Meta>
                <Card.Description>
                  {status()}
                  {/* Steve wants to add you to the group <strong>best friends</strong> */}
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
          )
}

export default Summary;