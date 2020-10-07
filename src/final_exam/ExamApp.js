import React, {Component} from 'react';
import './ExamApp.css';
import Shop from "./components/Shop";

class ExamApp extends Component {
    render() {
        const items = [
            {
                heading: "Cap - $5",
                name: "hat",
                price: 5
            },
            {
                heading: "Gloves - $15",
                name: "gloves",
                price: 15
            },
            {
                heading: "Shirt - $35",
                name: "shirt",
                price: 35
            },
            {
                heading: "Coat - $50",
                name: "coat",
                price: 50
            },
            {
                heading: "Skirt - $35",
                name: "skirt",
                price: 35
            },
            {
                heading: "Trousers - $25",
                name: "trousers",
                price: 25
            },
            {
                heading: "Scarf - $20",
                name: "scarf",
                price: 20
            },
            {
                heading: "Sneakers - $100",
                name: "sneakers",
                price: 100
            },
            {
                heading: "Beanie - $15",
                name: "beanie",
                price: 15
            },
        ];

        return (
            <div className="App">
                <div>
                    <div className="d-flex justify-content-start">
                        <img style={{float: 'left'}} alt="Your Cart" width="75" height="75" src="/shop_icon.png" className="d-inline-block align-top"/>
                        <h1 className={'ml-3'}>
                            Shop Exam
                        </h1>
                    </div>
                </div>
                <Shop items={items}/>
            </div>
        );
    }
}

export default ExamApp;
