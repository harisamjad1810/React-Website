import React, { useState } from 'react';

function Contact() {

  const [data, setData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {

  };

  return (
    <>

      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div style={{ width: '500px', marginLeft: '600px', fontWeight: 'bold' }} className="w3-container my-5 contact-us">
              <h1>Contact Us</h1>
              <i className="fa fa-map-marker" style={{ width: '30px', fontWeight: 'bold' }}></i> Lahore<br />
              <i className="fa fa-phone" style={{ width: '30px', fontWeight: 'bold' }}></i> Phone: +3249425978<br />
              <i className="fa fa-envelope" style={{ width: '30px', fontWeight: 'bold' }}> </i> Email: harisamjadam@gmail.com<br />


              <form onSubmit={formSubmit}>

                <p><input className="w3-input w3-padding-16 w3-border my-1" type="text"
                  placeholder="Name" required
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                /></p>

                <p><input className="w3-input w3-padding-16 w3-border" type="text"
                  placeholder="Email" required
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                /></p>

                <p><input className="w3-input w3-padding-16 w3-border" type="text"
                  placeholder="Message" required
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                /></p>

                <p><button className="w3-button w3-black w3-padding-large" type="submit"

                >SEND MESSAGE</button></p>

              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Contact;
