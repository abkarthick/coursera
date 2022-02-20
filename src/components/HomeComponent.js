import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardDeck
} from 'reactstrap';

function RenderCard({ item }) {

  return (
    <Card className="shadow-sm">
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );

}

function Home(props) {
  return (
    <div className="container my-5">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <CardDeck>
            <RenderCard item={props.dish} />
            <RenderCard item={props.promotion} />
            <RenderCard item={props.leader} />
          </CardDeck>
        </div>
      </div>
    </div>
  );
}

export default Home;