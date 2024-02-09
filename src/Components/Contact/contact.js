import React, {useState} from 'react'
import './contact.css'
import Common from '../Common/common'

const Contact = () => {
  const[formData, setFormData] = useState({userName:'',email:'',subject:'',description:''});

  const[error,setError] = useState({});

  // form validation

  const formValidation = () =>{
    let valid = true;
    const newError = {};

    // userName
    if(!formData.userName.trim()){
      newError.userName = 'userName is required'
      valid = false; 
    }
    // email
    if(!formData.email.trim()){
      newError.email = 'Email is required'
      valid = false; 
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
      newError.email = 'Email is invalid '
      valid= false
    }else {
      newError.email = 'Perfect email*'
      valid= false
    }
    // subject
    if(!formData.subject.trim()){
      newError.subject = 'Subject is required'
      valid = false; 
    }
    // description
    if(!formData.description.trim()){
      newError.description = 'Description is required'
      valid = false; 
    }
    setError(newError);
    return valid
  }

  //input onchange
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.id] : e.target.value,});
  }

  // validateForm

  const validateForm= (e) =>{
    e.preventDefault();
    if(formValidation()){
      console.log('Form Submitted Successfully :', formData)
    }else{
      console.error("Form not submitted")
    }
  }
 

  return (
    <div>
        <section className='contact-us'>
            <Common name='Contact Us' title='Get Helps & Friendly Support'/>
        </section>
      <section className='Form-section'>
        <div className="container">
          <form id='form' onSubmit={validateForm}>
            <div className='form-heading'>
              <h4>Queries Form</h4>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='userName' value={formData.userName} onChange={handleChange} placeholder='Name' />
                {error.userName && <span>{error.userName}</span>}
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' value={formData.email} onChange={handleChange} placeholder='email@gmail.com'/>
                {error.email && <span>{error.email}</span>}
              </div>
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <label htmlFor='subject'>Subject</label>
                <input type='text' id='subject' value={formData.subject} onChange={handleChange} placeholder='subject'/>
                {error.subject && <span>{error.subject}</span>}
              </div>
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <label htmlFor='description'>Description</label><br/>
                <textarea id='description' value={formData.description} onChange={handleChange} placeholder='Description'></textarea>
                {error.description && <span>{error.description}</span>}
              </div>
              <div className='button'>
                <button type='submit'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
