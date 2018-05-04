import React, { Component } from 'react';

import { getImageForEnv } from 'static/images/index';
import ContactProfileCard from 'components/view/Contact/ContactProfileCard';
import ContactNotesCard from 'components/view/Contact/ContactNotesCard';
import ContactEvents from 'components/view/ContactEvents';
import { cyan600 } from 'material-ui/styles/colors'

class ContactInfo extends Component {

    render() {

        const { user, uid, contact } = this.props;
        // console.log(this.props)
        // let { user, uid, contact } = this.props;
        // contact.events = [
        //   {
        //     uid: "1",
        //     date: "04-20-2018"
        //   },
        //   {
        //     uid: "1",
        //     date: "04-12-2018"
        //   },
        //   {
        //     uid: "1",
        //     date: "03-10-2018"
        //   },
        // ]

        return (
            <div>

                <h2>Contacts</h2>
                {contact.birthCountry}
                <pre>UID from URL: <span style={{color:'red'}}>{uid}</span></pre>

                <div>
                    <ContactProfileCard titleColor={cyan600} contact={contact} />
                    <ContactEvents titleColor={cyan600} contactEvents={contact.events} />
                    <ContactNotesCard titleColor={cyan600} />
                </div>

            </div>
        );
    }
}

export default ContactInfo;
