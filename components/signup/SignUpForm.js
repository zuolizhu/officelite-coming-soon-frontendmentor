import React from 'react'
import * as Yup from 'yup'
import Select, { components } from 'react-select'
import { Formik, Form, Field } from 'formik'
import { CustomSelectStyles } from './CustomSelectStyle'


const SignupSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email('Invalid email').required(),
  phoneNumber: Yup.string().required(),
  companyName: Yup.string().required()
})

const SelectOptions = [
  { value: 'basic', label: 'Basic Pack', price: 'Free' },
  { value: 'pro', label: 'Pro Pack', price: '$9.99' },
  { value: 'ultimate', label: 'Ultimate Pack', price: '$19.99' }
]

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <div className="dropdown-arrow"></div>
    </components.DropdownIndicator>
  );
};

export default function SignUpForm() {

  return (
    <section className="signup-form-wrap">
      <Formik
        initialValues={{
          name: '',
          emailAddress: '',
          plan: 'Basic Pack',
          phoneNumber: '',
          companyName: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          console.log('submit!')
          alert(values)
        }}
      >
        {({ errors, touched, handleBlur, setFieldValue }) => (
          <Form className="signup-form">
            <label className="sr-only" htmlFor="name">name</label>
            <Field name="name" placeholder="Name" className={errors.name && touched.name ? 'error': ''} />
            <label className="sr-only" htmlFor="emailAddress">Email Address</label>
            <Field name="emailAddress" placeholder="Email Address" className={errors.emailAddress && touched.emailAddress ? 'error': ''} />
            <Select
              name="plan"
              label="plan"
              instanceId={"plan"}
              onBlur={handleBlur}
              styles={CustomSelectStyles}
              options={SelectOptions}
              defaultValue={SelectOptions[0]}
              components={{ DropdownIndicator }}
              onChange={option => setFieldValue('plan', option)}
            />
            <label className="sr-only" htmlFor="phoneNumber">Phone Number</label>
            <Field name="phoneNumber" placeholder="Phone Number" className={errors.phoneNumber && touched.phoneNumber ? 'error': ''} />
            <label className="sr-only" htmlFor="companyName">Company Name</label>
            <Field name="companyName" placeholder="Company Name" className={errors.companyName && touched.companyName ? 'error': ''} />
            <button className="btn btn--blue btn--blue--signup" type="submit">Get on the list</button>
          </Form>
        )}
      </Formik>
    </section>
  )
}
