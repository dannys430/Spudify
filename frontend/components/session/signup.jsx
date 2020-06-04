import React from 'react';
import { Link } from 'react-router-dom';

function ValidationMsg(props) {
  if (!props.valid) {
    return <div className='error-msg'>{props.message}</div>
  }
  return null;
}

class Signup extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      email: '', emailValid: false,
      password: '', passwordValid: false,
      name: '', nameValid: false,
      bday_month: '', 
      bday_year: '', yearValid: false,
      bday_date: '', dateValid: false,
      gender: '',

      formValid: false,
      errorMsg: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  validateForm() {
    const { emailValid, passwordValid, nameValid, dateValid, yearValid } = this.state;
    this.setState({
      formValid: emailValid && passwordValid && nameValid && dateValid && yearValid
    })
  }

  updateEmail(email) {
    this.setState({email}, this.validateEmail)
  }

  validateEmail() {
    const {email} = this.state;
    let emailValid = true;
    let errorMsg = {...this.state.errorMsg}
    
    if (!email.length) {
      emailValid = false;
      errorMsg.email = 'You need to enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailValid = false;
      errorMsg.email = `This email is invalid.`
    }
    
    this.setState({emailValid, errorMsg}, this.validateForm)
  }
  
  updatePassword(password) {
    this.setState({password}, this.validatePassword)
  }

  validatePassword() {
    const {password} = this.state;
    let passwordValid = true;
    let errorMsg = { ...this.state.errorMsg}

    if (!password.length) {
      passwordValid = false;
      errorMsg.password = 'You need to enter a password.'
    } else if (password.length < 6) {
      passwordValid = false;
      errorMsg.password = 'Your password is too short.';
    }

    this.setState({passwordValid, errorMsg}, this.validateForm);
  }

  updateName(name) {
    this.setState({name}, this.validateName)
  }

  validateName() {
    const {name} = this.state;
    let nameValid = true;
    let errorMsg = {...this.state.errorMsg}

    if (!name.length) {
      nameValid = false;
      errorMsg.name = 'Enter a name for your profile.'
    } else {
      nameValid = false;
      errorMsg.name = 'This appears on your profile.'
    }

    this.setState({nameValid, errorMsg}, this.validateForm);
  }

  updateDate(bday_date) {
    this.setState({bday_date}, this.validateDate)
  }

  validateDate() {
    const {bday_date} = this.state;
    let dateValid = true;
    let errorMsg = {...this.state.errorMsg}

    if (!bday_date.length || bday_date > 31 || isNaN(bday_date)) {
      dateValid = false;
      errorMsg.date = 'Enter a valid day of the month.'
    } 

    this.setState({dateValid, errorMsg}, this.validateForm);
  }

  updateYear(bday_year) {
    this.setState({bday_year}, this.validateYear)
  }

  validateYear() {
    const {bday_year} = this.state;
    let yearValid = true;
    let errorMsg = {...this.state.errorMsg}

    if (!bday_year.length || bday_year < 1900 || isNaN(bday_year)) {
      yearValid = false;
      errorMsg.year = 'Enter a valid year.'
    } else if(bday_year > 2007) {
      yearValid = false;
      errorMsg.year = `Sorry, you don't meet Spudify's age requirements`
    }

    this.setState({yearValid, errorMsg}, this.validateForm);
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      birth_date: this.state.bday_year + '/' + this.state.bday_month + '/' + this.state.bday_date,
      gender: this.state.gender
    }
    this.props.createNewUser(newUser)
    .then(() => this.props.history.push('/'))
  }

  render() {
    return (
      <>
        <h1>Sign up for free to start listening.</h1>
        <div className='form'>
          <form onSubmit={this.handleSubmit}>
            <label>What's your email?
              <br/>
              <input 
                type="text" 
                placeholder="Enter your email."
                value={this.state.email}
                onChange={(e) => this.updateEmail(e.target.value)}
                />
              <ValidationMsg valid={this.state.emailValid} message={this.state.errorMsg.email} />
            </label>
            
            <br/>

            <label>Create a password
              <br/>
              <input 
                type="password"
                placeholder="Create a password."
                value={this.state.password}
                onChange={(e) => this.updatePassword(e.target.value)}
              />
              <ValidationMsg valid={this.state.passwordValid} message={this.state.errorMsg.password} />
            </label>

            <br />

            <label>What should we call you?
              <br/>
              <input 
                type="text" 
                placeholder="Enter a profile name."
                value={this.state.name}
                onChange={(e) => this.updateName(e.target.value)}
              />
              <ValidationMsg valid={this.state.nameValid} message={this.state.errorMsg.name} />
            </label>
            
        

            <div>
              <label>What's your date of birth?
                <br/>

                <div>
                  <label>Month
                    <br/>
                    <select value={this.state.bday_month} onChange={this.handleInput('bday_month')} >
                        <option value='' disabled >Month</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                  </label>
                </div>

                
                <div>
                  <label>Day
                    {/* <br/> */}
                    <input type="text" placeholder="DD" maxLength="2" value={this.state.bday_date} onChange={(e) => this.updateDate(e.target.value)} />
                    <ValidationMsg valid={this.state.dateValid} message={this.state.errorMsg.date} />
                  </label>
                </div>

                <div>
                  <label>Year
                    {/* <br/> */}
                    <input type="text" placeholder="YYYY" maxLength="4" value={this.state.bday_year} onChange={(e) => this.updateYear(e.target.value)} />
                    <ValidationMsg valid={this.state.yearValid} message={this.state.errorMsg.year} />
                  </label>
                </div>

              </label>
            </div>

            <br />

            <div>
              <label>What's your gender?
                <br/>
                  <input 
                    type="radio"
                    id="Male"
                    name="gender" 
                    value='Male'
                    onChange={this.handleInput('gender')}
                  />
                  <label>Male</label>
  
                  <input 
                    type="radio"
                    id="Female"
                    name="gender" 
                    value='Female'
                    onChange={this.handleInput('gender')}
                  />
                  <label>Female</label>
  
                  <input 
                    type="radio"
                    id="Non-binary"
                    name="gender" 
                    value='Non-binary'
                    onChange={this.handleInput('gender')}
                  />
                  <label>Non-binary</label>
              </label>
            </div>

            <br />

              {/* don't use javascript:void */}
            {/* <p>By clicking on Sign up, you agree to Spudify's <a href='javascript:void(0)'>Terms and Conditions of Use</a>.</p> */}
            
            <button onClick={this.handleSubmit}>SIGN UP</button>
            <p>Have an account?<Link to="/login">Log in</Link>.</p>
            
          </form>
        </div>
      </>
    )
  }
}

export default Signup;