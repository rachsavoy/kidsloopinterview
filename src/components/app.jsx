import React, from 'react';
import {render} from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import SigninForm from './signin_form';

const App = () => (
  <div>
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  </div>
);


export default App;
