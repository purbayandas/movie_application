import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";

function MovieCard({image, title, text, releaseDate, rating}) {
  return (
    <div className="MovieCard">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <Card.Text>
            {releaseDate}
          </Card.Text>
          <Card.Text>
            {rating}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;