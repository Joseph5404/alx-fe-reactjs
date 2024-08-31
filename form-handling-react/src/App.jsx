
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <h1>Registration Form with Formik</h1>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
