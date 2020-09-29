import React, {Component} from 'react';

class HeadSection extends Component {
    render() {
        let {data} = this.props;

        return (
            <div>
                <div className="content">
                    <img src={data.backgroundURL} alt=""/>
                    <div className="caption">
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeadSection;
