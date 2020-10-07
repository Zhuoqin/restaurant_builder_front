import React from "react";
import RightPanel from './rightPanel';
import LeftPanel from './leftPanel';

class Shop extends React.Component {
    state = {
        // todo: Q1 - write your answer to init state
        items: {},
        coupon: 0
        // write code above
    };

    addItem = (item) => {
        // todo: Q2 - write your answer to add cart item
        let {items} = this.state;
        let qualities = items[item.name] || 0;
        items[item.name] = qualities + 1;
        this.setState({items: items});
        // write code above
    };

    removeItem = (item) => {
        // todo: Q3 - write your answer to remove cart item
        let {items} = this.state;
        if (items[item.name]) {
            let qualities = items[item.name];
            items[item.name] = qualities - 1;
            if (!items[item.name]) {
                delete items[item.name];
            }
            this.setState({items: items});
        }
        // write code above
    };

    calculateTotal() {
        let sum = 0;
        // todo: Q4 - write your answer to calculate the sum price
        let {items, coupon} = this.state;
        Object.keys(items).forEach(key => {
            let qualities = items[key];
            let price = this.getPriceByShortName(key);
            sum += qualities * price;
        });
        if (coupon) {
            sum = coupon >= sum ? 0 : sum - coupon;
        }
        // write code above
        return sum;
    }

    getPriceByShortName(name) {
        // or you could map the price by name => price when app mounted to reduce complexity
        const {items} = this.props;
        let foundItem = items.find(item => item.name === name);
        return foundItem ? foundItem.price : 0;
    }

    handleCouponChange = (event) => {
        // console.log(event)
        // todo: Q5 - write your answer to handle coupe select change
        this.setState({coupon: event.target.value});
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
                                {...this.state}
                                onCouponChange={this.handleCouponChange}
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
