import React from "react"
import Alert from 'react-bootstrap/Alert'

const Alerts = () => {
    return (

        
        <div className="default__container">
            <h4>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</h4>
            <Alert variant="info">
                <p>import Alert from 'react-bootstrap/Alert'</p>
            </Alert>

            <Alert variant="success">
            <Alert.Heading>Basic Alerts</Alert.Heading>
            <p>
                {'<Alert variant="success">'} <br />
                {'The alert message goes here'} <br />
                {'</Alert>'}
            </p>
            <hr />
            <p>
                Available variants include: 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light' and 'dark',
            </p>
            </Alert>

            <Alert variant="primary">
                This is a basic alert with primary variant.
            </Alert>

            <Alert variant="success">
            <Alert.Heading>Alerts with Links</Alert.Heading>
            <p>
                {'<Alert variant="success">'} <br />
                {'The alert message goes here'} <br />
                {'<Alert.Link href="#">an example link</Alert.Link>.'} <br />
                {'</Alert>'}
            </p>
            <hr />
            </Alert>

            <Alert variant="primary">
            This is an alert with a link primary variant.{'  '}
            <Alert.Link href="http://www.google.ca">Link to google</Alert.Link>.
            like.
            </Alert>

            
        </div>

    )
}

export default Alerts