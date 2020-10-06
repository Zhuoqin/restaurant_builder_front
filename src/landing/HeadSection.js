import React, {Component} from 'react';

class HeadSection extends Component {
    render() {
        let {data} = this.props;

        return (
            <div>
                <div className="container">
<div className='header'>
                    <img className="col 3" src={data.backgroundURL} alt=""/>
</div>
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
