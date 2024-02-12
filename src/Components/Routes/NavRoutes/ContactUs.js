import React from 'react'

export default function ContactUs() {
  return (
    <div className='contactUs'>
        <div className="container">
            <div className='sectionLeft'>
              <ul>
                <li>
                  Address
                  <p>16, A-6, Dda Market, Paschim Vihar</p>
                  <p>Delhi, New Delhi-1100063, India</p>
                </li>
                <li>
                  Let's Talk
                  <p>+91 9876543210</p>
                </li>
                <li>
                  General Support
                  <p>contact@indiatourism.com</p>
                </li>
              </ul>
            </div>

            <div className='sectionRight'>
              <form autoComplete="off">
                <h3 className='header'>Send Us A Message</h3> <br />
                <div className='form-item'>
                  <input type="text" name='name' required /> <br />
                  <label>Name</label> <br />
                </div>

                <div className='form-item'>
                  <input type="text" name='mail' required />  <br />
                  <label>E-mail</label> <br />
                </div>

                <div className='form-item'>
                  <input type="number" name='pass' required />  <br />
                  <label>Phone</label> <br />
                </div>
                <div className='form-item'>
                  <label>Write us a message</label> <br />
                  <textarea rows="6" cols="40"></textarea>
                </div> <br />

                <button className='btnSend'>
                  <span className="shadow"></span> <span className="edge"></span>
                  <span className="front text">Send</span>
                </button> <br />
              </form>

            </div>
        </div>
    </div>
  )
}
