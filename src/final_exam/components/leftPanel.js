import React from "react";

const ImageSrc = (name) => {
    return "/clothes/" + name + ".png";
};

class LeftPanel extends React.Component {
    render() {
        return (
            <div className={'container shop_items'} id='GridLeft'>
                <div className="row">
                    {this.props.items !== null ?
                        this.props.items.map((item, i) => (
                            <div className="col-md-6 col-lg-4" key={"item" + i}>
                                <div className="item">
                                    <div className='card'>
                                        <h6>{item.heading}</h6>
                                        <div>
                                            <img alt="Your Cart" src={ImageSrc(item.name)} className="d-inline-block align-top"/>
                                        </div>
                                        <div>
                                            <button className={'add_btn'} value={i} onClick={() => this.props.addItem(item)}>
                                                <i className={'fas fa-plus'}/>
                                            </button>
                                            <button className={'trash_btn'} onClick={() => this.props.removeItem(item)}>
                                                <i className="fas fa-trash"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        : ""
                    }
                </div>
            </div>

        )
    }
}

export default LeftPanel;
