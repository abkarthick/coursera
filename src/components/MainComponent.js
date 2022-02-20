import React, { Component } from "react";
import Header from './HeaderComponent';
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import Home from './HomeComponent';
import { Switch, Route, Redirect } from "react-router-dom";

import { DISHES } from "../shared/dishes";
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import DishDetails from "./DishdetailComponent";
import About from "./AboutComponent";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    // onDishSelected(dishId) {
    //     setSelectedDish(dishId)
    // }


    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }


        const DishWithId = ({ match }) => {
            return (
                <DishDetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                />
            );
        }

        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route exact path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                {/* {!selectedDish ? <Menu dishes={dishes} onClick={(dishId) => onDishSelected(dishId)} /> : ''} */}
                {/* <Menu dishes={dishes} onClick={(dishId) => onDishSelected(dishId)} /> */}
                {/* {selectedDish ? <DishDetails dish={dishes.filter((dish) => dish.id === selectedDish)[0]} /> : ''} */}
                <Footer />
            </div >
        );
    }
}

export default Main;
