import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderMenuItem({ dish }) {
	return (
		<Card className='mx-auto' style={{ maxWidth: '285px' }}>
			<Link to={`/menu/${dish.id}`}>
				<CardImg alt={dish.name} src={dish.image} width='100%' />
				<CardImgOverlay>
					<CardTitle tag='h2' className='text-start text-light bg-dark text-center py-3 opacity-75 fs-2'>
						{dish.name}
					</CardTitle>
				</CardImgOverlay>
			</Link>
		</Card>
	);
}

const Menu = (props) => {

	const menu = props.dishes.dishes.map((dish) => {
		return (
			<div key={dish.id} className='col-12 col-md-6 col-lg-3 mb-5'>
				<RenderMenuItem dish={dish} />
			</div>
		)
	});

	if (props.dishes.isLoading) {
		return (
			<div className='container'>
				<div className='row'>
					<Loading />
				</div>
			</div>
		);
	} else if (props.dishes.errMess) {
		return (
			<div className='container'>
				<div className='row'>
					<h4>{props.dishes.errMess}</h4>
				</div>
			</div>
		);
	} else {
		return (
			<div className='container'>
				<div className='row'>
					<Breadcrumb>
						<BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
						<BreadcrumbItem active>Menu</BreadcrumbItem>
					</Breadcrumb>
					<div className='col-12'>
						<h3>Menu</h3>
						<hr />
					</div>
				</div>
				<div className='row pt-4'>
					{menu}
				</div>
			</div>
		);
	}
}

export default Menu;
