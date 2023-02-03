import { useState } from 'react';

function checkPassword(password) {
  return password === 'smoochie'
}

function DraftLogin(props) {

  const [values, setValues] = useState({password: ``});
  const [error, setError] = useState();
  const [validated, setValidated] = useState(sessionStorage.getItem('isValidated'))

  const changeHandler = ({ target: { name, value } }) => {
    const newState = { ...values, [name]: value };
    setValues(newState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setError();

    if (!values.password) {
      setError('Please enter the password')
      return
    }

    const isValid = checkPassword(values.password)
    if (isValid) {
      sessionStorage.setItem('isValidated', true)
      setValidated(true)
    }
    else {
      setError('Wrong password. Try again.')
    }
  }

  return(
  validated ? props.children : 
    <>
      <h1 className="text-center">This draft is password protected</h1>
      <div className="col-md-6 offset-md-3 rounded p-3 shadow bg-light">
        <form onSubmit={submitHandler}>
          <label className="h5">Password</label>
          <input className="form-control" onChange={changeHandler} name="password" type="password" />
          {error && <div className="text-danger">{error}</div>}
          <div className="text-center">
          <button className="btn btn-primary mt-4">Submit</button>
          </div>
        </form>
      </div>
      <div className="text-center">
        <a href="/">Home</a>
      </div>
    </>
  )
}

export default DraftLogin;
