import React from 'react'

import style from '../../styles/form.module.scss'

const ContactForm = () => {
  return (
    <form
      action='/success'
      name='karot contact form'
      id='contact-form'
      data-netlify='true'
      className={`${style.contact_form}`}
    >
      <input type='hidden' name='form-name' value='karot contact form' />
      <header className={`header text-center text-sm title ${style.header}`}>
        <h1>Tell us your thoughts.</h1>
      </header>
      <div className={`${style.form_group}`}>
        <label htmlFor='name' className={`text-md emphasis ${style.form_label}`}>
          Full name:
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className={`${style.form_control}`}
          required
          placeholder='Enter your name'
        />
      </div>
      <div className={`${style.form_group}`}>
        <label htmlFor='email' className={`text-md emphasis ${style.form_label}`}>
          E-mail:
        </label>
        <input
          type='email'
          name='email'
          id='email'
          className={`${style.form_control}`}
          required
          placeholder='Enter your email'
        />
      </div>
      <div className={`${style.form_group}`}>
        <label htmlFor='message' className={`text-md emphasis ${style.form_label}`}>
          Message:
        </label>
        <textarea
          name='message'
          id='message'
          className={`${style.form_control} ${style.form_control__textarea}`}
          cols='30'
          rows='10'
          placeholder='Help us become better...'
        ></textarea>
      </div>
      <div className={`${style.form_group}`}>
        <button type='submit' className={`button btn-default ${style.form_submit}`}>
          send message
        </button>
      </div>
    </form>
  )
}

export default ContactForm
