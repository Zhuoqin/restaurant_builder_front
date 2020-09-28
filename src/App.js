import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeadSectionEdit from "./HeadSectionEdit";

const FAKE_DATA = {
    headSection: {
        title: 'Welcome to J',
        description: 'Mobile Template',
        backgroundURL: 'www.google.com/test.png'
    },
    featureSection: [
        {
            title: 'Free Wife',
            iconUrl: '',
        },
        {
            title: 'Free Wife',
            iconUrl: '',
        }
    ],
    menuSection: [
        {
            title: 'Delicious thick noodles',
            price: 12,
            backgroundURL: ''
        },
        {
            title: 'Delicious thick noodles',
            price: 45,
            backgroundURL: ''
        },
        {
            title: 'Delicious thick noodles',
            price: 12,
            backgroundURL: ''
        }
    ]
};

export class App extends React.Component {
    render() {
        return (
            <div className="restaurant_page">
                <HeadSectionEdit data={FAKE_DATA.headSection}/>
                <hr/>
                <div className='text-center mb-3'>
                    <button className={'btn btn-primary'}>Edit Feature Section</button>
                </div>
                <hr/>
                <div className='text-center mb-3'>
                    <button className={'btn btn-primary'}>Edit Menu Section</button>
                </div>
            </div>
        );
    }
}

