import React from 'react';
import {
	Card,
	CardImg,
	CardTitle,
	CardBody, Breadcrumb, BreadcrumbItem, CardText
} from 'reactstrap';
import { Link } from 'react-router-dom';

const DishDetails = (props) => {

	function RenderComments({ comments }) {
		return (
			<>
				<h2>Comments</h2>
				{comments.map(comment => {
					return (
						<div key={comment.id} >
							<p>{comment.comment}</p>
							<p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(comment.date))}</p>
						</div>
					)
				})}
			</>
		)
	}

	function RenderDish({ dish }) {
		return (
			<Card>
				<CardImg alt={dish.name} src={dish.image} top width='100%' />
				<CardBody>
					<CardTitle tag='h5'>{dish.name}</CardTitle>
					<CardText tag='h5'>{dish.description}</CardText>
				</CardBody>
			</Card>
		)
	}

	if (props.dish != null)
		return (
			<div className='container mb-5'>
				<div className='row'>
					<Breadcrumb>
						<BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
						<BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
						<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
					</Breadcrumb>
				</div>

				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<RenderDish dish={props.dish} />
					</div>
					<div className="col-12 col-md-5 m-1">
						<RenderComments comments={props.comments} />
					</div>
				</div>
			</div>

		)
	else {
		return (
			<></>
		)
	}
}
export default DishDetails
