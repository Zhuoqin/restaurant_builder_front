import React from "react";

const TAX_RATE = 0.13;

class RightPanel extends React.Component {
    render() {
        return (
            <div className={'cart_container'}>
                <div className={'img_wrap'}>
                    <img alt="Your Cart" src="/shopping-cart.png" className="d-inline-block align-top"/>
                    <h3>Your Cart</h3>
                </div>
                <div>
                    <table style={{width: '100%'}}>
                        <thead>
                        <tr>
                            <td className="table-header">Item</td>
                            <td className="table-header">Quantity</td>
                        </tr>
                        </thead>
                        <tbody id='shoppingCart'>
                        {
                            // todo: Q7 - write your answer to map items and quantities
                            Object.keys(this.props.items).map(it => (
                                this.props.items[it] !== 0?(<tr>
                                    <td className="table-body">{it}</td>
                                    <td className="table-body">{this.props.items[it]}</td>
                                </tr>):(<></>)
                            ))


                            // write code above
                        }
                        </tbody>
                    </table>
                    <hr/>
                    <div>
                        <span className='mr-2'>Coupon Code</span>
                        <span>
                        <select
                            id="demo-simple-select"
                            // todo: Q8 - write your answer to bind controlled select value and change event - hint: use callback from props

                            onChange={this.props.coupon}
                            // write code above
                        >
                            <option value={0}>NONE</option>
                            <option value={15}>OFF $15</option>
                            <option value={25}>OFF $25</option>
                        </select>
                    </span>
                    </div>
                    <hr/>
                    <table style={{width: '100%'}}>
                        <thead>
                        <tr>
                            <td className="table-header" colSpan={3}>Price</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr id='subTotalRow'>
                            <td>Sub Total</td>
                            <td>$ {this.props.subTotal}</td>
                        </tr>
                        <tr id='taxRow'>
                            <td>Tax(13%)</td>
                            {/*  todo: Q9: write your answer to replace '???' and display the calculated tax amount like $ 13  */}
                            <td>$ {this.props.tax}</td>
                        </tr>
                        <tr id="totalPriceRow">
                            <td>Total Price</td>
                            {/*  todo: Q10: write your answer to replace '???' and display the calculated total amount like $ 113  */}
                            <td>$ {this.props.total}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default RightPanel;
