import React, { Component } from 'react';
import {
	Card,
	CardImg,
	CardTitle,
	CardBody, Breadcrumb, BreadcrumbItem, CardText,
	Button, Label, Modal, ModalBody, ModalHeader, Col, Row
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

export class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			isModalOpen: false
		}
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
		console.log(this.isModalOpen);
	}

	handleSubmit(values) {
		this.toggleModal();
		console.log("current state is: " + JSON.stringify(values));
		alert("current state is: " + JSON.stringify(values));
	}

	render() {
		return (
			<>
				<Button outline secondary onClick={this.toggleModal}>
					<i className='fa fa-edit'></i> Submit Comments
				</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>
						Submit Comment
					</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<Row className="form-group">
								<Label htmlFor="rating" md={2}>Rating</Label>
								<Col>
									{/* <Control.text type='number' min={1} max={5} model=".rating" id="rating" name="rating" placeholder="Rating" className="form-control" defaultValue={1} /> */}
									<Control.select model=".rating" id="rating" name="rating" defaultValue={1} className="form-select" >
										<option value="1" selected>1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</Control.select>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="author" md={2}>Your Name</Label>
								<Col md={10}>
									<Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control" validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
									<Errors className="text-danger" model=".author" show="touched" messages={{ required: 'Required ! ', minLength: 'Must be greater than 2 characters ! ', maxLength: 'Must be 15 characters or less ! ' }} />
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="comment" md={2}>Comment</Label>
								<Col md={10}>
									<Control.textarea model=".comment" id="comment" name="comment" rows="8" placeholder='Your Comments' className="form-control" />
								</Col>
							</Row>
							<Row className="form-group">
								<Col md={{ size: 10, offset: 2 }}>
									<Button type="submit" color="primary">
										Submit
									</Button>
								</Col>
							</Row>
						</LocalForm>
					</ModalBody>
				</Modal>
			</>
		)
	}
}

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
						<CommentForm />
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
