import React from 'react'

const ContactForm = () => {
    const formFields = [
        {inputType : 'text' , inputPlaceholder : 'First Name'},
        {inputType : 'text' , inputPlaceholder : 'Last Name'},
        {inputType : 'email' , inputPlaceholder : 'Email Address'},
        {inputType : 'tel' , inputPlaceholder : 'Phone Number'},
    ]
    return (
        <>
        <form className="form contact-card">
            <div className="row g-4">
                {
                    formFields.map((fields , i) => (
                        <div key={i} className="col-md-6">
                            <div className="form-group">
                                <input type={fields.inputType} placeholder={fields.inputPlaceholder} className="form-control" autoComplete="off" />
                            </div>
                        </div>
                    ))
                }
                <div className="col-sm-12 col-12">
                    <div className="form-group">
                        <textarea name="message" id="message" rows="5" className="form-control" placeholder="Message" autoComplete="off"></textarea>
                    </div>
                </div>
                <div className="col-sm-12 col-12">
                    <button type="button" className="themebtn white-hover">Submit</button>
                </div>
            </div>
        </form>
        </>
    )
}

export default ContactForm