import React from 'react'

export default function ContactUs() {
  return (
    <div className='contactUs'>
      <div className="container">
        <div className='sectionLeft'>
          <ul>
            <li>
              Address
              <p>Mada Center 8th floor, 379 Hudson</p>
              <p>St. New York, NY 10018 US</p>
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
          <form autocomplete="off">
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
              <label>Write us a message</label> <br/>
              <textarea rows="6" cols="40"></textarea>
            </div> <br/>

            <button className='btnSend'>
              <span class="shadow"></span> <span class="edge"></span>
              <span class="front text">Send</span>
            </button> <br />
          </form>

        </div>
      </div>
    </div>
  )
}
