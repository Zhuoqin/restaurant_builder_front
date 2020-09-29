import React, {Component} from 'react';
import HeadSection from "./HeadSection";

const FAKE_DATA = {
    head: {
        title: 'Welcome to J',
        description: 'Mobile Template',
        backgroundURL: 'http://astylers.com/dish/images/product1.jpg'
    },
    feature: [
        {
            title: 'Free Wife',
            iconName: 'fa-wifi',
            iconUrl: '',
        },
        {
            title: 'Free Wife',
            iconName: 'fa-phone',
            iconUrl: '',
        },
        {
            title: 'Free Wife',
            iconName: 'fa-phone',
            iconUrl: '',
        }
    ],
    menu: [
        {
            title: 'Delicious thick noodles',
            price: 12,
            backgroundURL: 'http://astylers.com/dish/images/product2.jpg'
        },
        {
            title: 'Delicious thick noodles',
            price: 45,
            backgroundURL: 'http://astylers.com/dish/images/blog2.jpg'
        },
        {
            title: 'Delicious thick noodles',
            price: 12,
            backgroundURL: 'http://astylers.com/dish/images/blog3.jpg'
        }
    ]
};

function NavHeader() {
    return <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
                <h4 className="text-white">Collapsed content</h4>
                <span className="text-muted">Toggleable via the navbar brand.</span>
            </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
        </nav>
    </div>;
}

function FeatureSection(props) {
    let {data} = props;
    return <section className="feature">
        <div className="container">
            <div className="row">
                {
                    data.map((item, index) => (
                        <div className="col s4" key={index}>
                            <div className="content">
                                <i className={`fa ${item.iconName}`} />
                                <span>{item.title}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>;
}

function MenuSection(props) {
    let {data} = props;
    return <section className="menu">
        <div className="container">
            <div className="row">
                {
                    data.map((item, index) => (
                        <div className="col s6" key={index}>
                            <div className="content">
                                <a href="product-details.html">
                                    <img src={item.backgroundURL} alt=""/>
                                    <p>{item.title}</p>
                                </a>
                                <h5>${item.price}</h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>;
}

class Landing extends Component {
    state = {
        landingData: null
    };

    componentDidMount() {
        // todo: fetch landing by id
        // [GET] /landings/:id
        // fetch ()
        this.setState({landingData: FAKE_DATA});
    }

    render() {
        // let landingData = this.state.landingData;
        let {landingData} = this.state;
        if (!landingData) {
            return <p>loading..</p>
        }
        return (
            <div className="landing_page">
                <NavHeader/>
                <HeadSection data={landingData?.head}/>
                <FeatureSection data={landingData?.feature}/>
                <MenuSection data={landingData?.menu}/>
            </div>
        );
    }
}

export default Landing;
