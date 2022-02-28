import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardDeck
} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return (
      <div className='container'>
        <div className='row'>
          <Loading />
        </div>
      </div>
    );
  } else if (errMess) {
    return (
      <div className='container'>
        <div className='row'>
          <h4>{errMess}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <Card className="shadow-sm">
        <CardImg src={baseUrl + item.image} alt={item.name} />
        <CardBody>
          <CardTitle tag={'h3'} className="pb-3">{item.name}</CardTitle>
          {item.designation ? <CardSubtitle className="pb-3">{item.designation}</CardSubtitle> : null}
          <CardText className=''>{item.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

function Home(props) {
  return (
    <div className="container my-5">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <CardDeck>
            <RenderCard
              item={props.dish}
              isLoading={props.dishesLoading}
              errMess={props.dishesErrMess}
            />
            <RenderCard item={props.promotion}
              isLoading={props.promosLoading}
              errMess={props.promosErrMess}
            />
            <RenderCard item={props.leader} />
          </CardDeck>
        </div>
      </div>
    </div>
  );
}

export default Home;