import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardDeck
} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

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
      <div className='col-12 col-md-4 py-5'>
        <FadeTransform in
          transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
          }}>
          <Card className="shadow-sm">
            <CardImg src={baseUrl + item.image} alt={item.name} />
            <CardBody>
              <CardTitle tag={'h3'} className="pb-3">{item.name}</CardTitle>
              {item.designation ? <CardSubtitle className="pb-3">{item.designation}</CardSubtitle> : null}
              <CardText className=''>{item.description}</CardText>
            </CardBody>
          </Card>
        </FadeTransform>
      </div>
    );
  }
}

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <CardDeck>
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            errMess={props.dishesErrMess}
          />
          <RenderCard
            item={props.promotion}
            isLoading={props.promosLoading}
            errMess={props.promosErrMess}
          />
          <RenderCard
            item={props.leader}
          />
        </CardDeck>
      </div>
    </div>
  );
}

export default Home;