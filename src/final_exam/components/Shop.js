import React from "react";
import RightPanel from './rightPanel';
import LeftPanel from './leftPanel';

class Shop extends React.Component {
    state = {
        // todo: Q1 - write your answer to init state


        // write code above
    };

    addItem = (item) => {
        // todo: Q2 - write your answer to add cart item


        // write code above
    };

    removeItem = (item) => {
        // todo: Q3 - write your answer to remove cart item


        // write code above
    };

    calculateTotal() {
        let sum = 0;
        // todo: Q4 - write your answer to calculate the sum price


        // write code above
        return sum;
    }

    handleCouponChange = (event) => {
        // console.log(event)
        // todo: Q5 - write your answer to handle coupe select change


        // write code above
    };

    render() {
        const {items} = this.props;
        let subTotal = this.calculateTotal();

        return (
            <div>
                <div className='container'>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <LeftPanel items={items} addItem={this.addItem} removeItem={this.removeItem}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <RightPanel
                                // todo: Q6 - write your answer to pass proper props/callbacks

                                // write code above
                                subTotal={subTotal}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Shop;
