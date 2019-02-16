import React from 'react';
import Branding from '../src/js/components/Branding.jsx';

test('Branding page renders', () => {
    const brandingData = {
        name: 'Shady Meadows B&B',
        map: {
            latitude: 52.6351204,
            longitude: 1.2733774
        },
        logo: {
            url: 'https://www.mwtestconsultancy.co.uk/img/rbp-logo.png'
        },
        description: 'Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.',
        contact: {
            name: 'Shady Meadows B&B',
            address: 'The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S',
            phone: '0123456789',
            email: 'fake@fakeemail.com'
        }
    }

    const brandingComponent = shallow(
        <Branding />
    )

    brandingComponent.setState(brandingData);
    brandingComponent.update();

    expect(brandingComponent).toMatchSnapshot();
});