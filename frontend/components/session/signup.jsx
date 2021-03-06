import React from 'react';
import { Link } from 'react-router-dom';

function ValidationMsg(props) {
  if (!props.valid) {
  return <div >{props.message}</div>
  }

  return null;
}

const warningIcon =
  <svg role="img" height="14" width="13" fill="#444444" viewbox="0 0 24 24">
    <circle cx="6.5" cy="7" r="6" fill="none" stroke="red"></circle>
    <line x1="6.5" y1="7" x2="6.5" fill="#181818" stroke="red" strokeWidth="10%" strokeLinecap="round" y2="4"></line>
    <circle cx="6.5" cy="10" r=".32" fill="#181818" stroke="red"></circle>
  </svg>
;


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
    this.handleDemo = this.handleDemo.bind(this)
  }
  
  validateForm() {
    const { emailValid, passwordValid, nameValid, dateValid, yearValid } = this.state;
    this.setState({
      formValid: emailValid && passwordValid && nameValid && dateValid && yearValid
    })
  }

  updateEmail(email) {
    this.setState({email: email.toLowerCase()}, this.validateEmail)
  }

  validateEmail() {
    const {email} = this.state;
    let emailValid = true;
    let errorMsg = {...this.state.errorMsg}
    
    if (!email.length) {
      emailValid = false;
      errorMsg.email = <div className="signup-form-errors" >{warningIcon} <p className="signup-form-errors error-messages">You need to enter your email.</p></div>
      document.getElementById('signup-form-input-email').style.border = '1px solid red'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailValid = false;
      errorMsg.email = <div className="signup-form-errors" >{warningIcon} <p className="signup-form-errors error-messages">This email is invalid.</p></div>
      document.getElementById('signup-form-input-email').style.border = '1px solid red'
    } else {
      emailValid = true
      document.getElementById('signup-form-input-email').style.border = '1px solid gray'
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
      errorMsg.password = <div className="signup-form-errors" >{warningIcon} <p className="signup-form-errors error-messages">You need to enter a password.</p></div>
      document.getElementById('signup-form-input-password').style.border = '1px solid red'
    } else if (password.length < 6) {
      passwordValid = false;
      errorMsg.password = <div className="signup-form-errors" >{warningIcon} <p className="signup-form-errors error-messages">Your password is too short.</p></div>
      document.getElementById('signup-form-input-password').style.border = '1px solid red'
    } else {
      passwordValid = true
      document.getElementById('signup-form-input-password').style.border = '1px solid gray'
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
      errorMsg.name = <div className="signup-form-errors" >{warningIcon} <p className="signup-form-errors error-messages">Enter a name for your profile.</p></div>
      document.getElementById('signup-form-input-name').style.border = '1px solid red'
    } else {
      nameValid = true
      document.getElementById('signup-form-input-name').style.border = '1px solid gray'
    }

    this.setState({nameValid, errorMsg}, this.validateForm);
  }

  handleMonth() {
    const dropdown = document.getElementById('signup-form-input-month')
    dropdown.style.border = '1px solid red'
    dropdown.addEventListener('change', () => {
      dropdown.style.border = '1px solid gray'
    })
    this.state.bday_month.length ? dropdown.style.border = '1px solid gray' : null
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
      errorMsg.date = <div className="signup-form-errors" >{warningIcon} <p className="signup-form-errors error-messages">Enter a valid day of the month.</p></div>
      document.getElementById('signup-form-input-date').style.border = '1px solid red'
    } else {
      dateValid = true
      document.getElementById('signup-form-input-date').style.border = '1px solid gray'
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
      errorMsg.year = <div className="signup-form-errors" >{warningIcon} <p className="signup-form-errors error-messages">Enter a valid year.</p></div>
      document.getElementById('signup-form-input-year').style.border = '1px solid red'
    } else if(bday_year > 2007) {
      yearValid = false;
      errorMsg.year = <div className="signup-form-errors" >{warningIcon} <p className="signup-form-errors error-messages">Sorry, you don't meet Spudify's age requirements</p></div>
      document.getElementById('signup-form-input-year').style.border = '1px solid red'
    } else {
      yearValid = true
      document.getElementById('signup-form-input-year').style.border = '1px solid gray'
    }

    this.setState({yearValid, errorMsg}, this.validateForm);
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    }
  }

  handleDemo(e) {
    e.preventDefault()
    this.props.login({ email: 'guest@example.com', password: 'password' })
      .then(() => this.props.history.push('/us'))
  }

  handleSubmit(e) {
    e.preventDefault()
    // validateDate()

    this.validateEmail()

    const newUser = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      birth_date: this.state.bday_year + '/' + this.state.bday_month + '/' + this.state.bday_date,
      gender: this.state.gender
    }
    this.props.createNewUser(newUser)
    .then(() => this.props.history.push('/us'))
  }


  render() {
    return (
      <>
        <div className="logo-small-div">
          <Link to="/us"><img className="logo-small" src={window.logoURL} alt="Spudify Logo"/></Link>
        </div>

        <section className='signup-form'>

          <form className="signup-form-form" onSubmit={this.handleSubmit}>
            <h1 className="signup-msg">Sign up for free to start listening.</h1>

            <div className="fb-apple-buttons">
              <button onClick={this.handleDemo} className="guest-button"><p>CONTINUE AS GUEST</p></button>
            </div>

            <hr className="or-signup" />

            <h2 className="signup-msg-2">Sign up with your email address</h2>

            <label className="signup-prompts" >What's your email?
              <br/>
              <input
                id="signup-form-input-email"
                className="signup-form-input" 
                type="text" 
                autoCapitalize="off"
                placeholder="Enter your email."
                value={this.state.email}
                onChange={(e) => this.updateEmail(e.target.value)}
                />
              <ValidationMsg valid={this.state.emailValid} message={this.state.errorMsg.email} />
            </label>
            
            <br/>

            <label className="signup-prompts" >Create a password
              <br/>
              <input
                id="signup-form-input-password"
                className="signup-form-input" 
                type="password"
                placeholder="Create a password."
                value={this.state.password}
                onChange={(e) => this.updatePassword(e.target.value)}
              />
              <ValidationMsg valid={this.state.passwordValid} message={this.state.errorMsg.password} />
            </label>

            <br />

            <label className="signup-prompts" >What should we call you?
              <br/>
              <input
                id="signup-form-input-name"
                className="signup-form-input" 
                type="text" 
                placeholder="Enter a profile name."
                value={this.state.name}
                onChange={(e) => this.updateName(e.target.value)}
              />
              <ValidationMsg valid={this.state.nameValid} message={this.state.errorMsg.name} />
            </label>
            
        

            <label className="signup-prompts" >What's your date of birth?
              <div>
                <br/>

                <div className="signup-bday-div">
                  <div className="month-div">
                    <label className="signup-bday-labels">Month
                      <br/>
                      <div>
                        <select onClick={() => this.handleMonth()} id="signup-form-input-month" className="signup-month-input" value={this.state.bday_month} onChange={this.handleInput('bday_month')} >
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
                      </div>
                    </label>
                  </div>
  
                  
                  <div className="date-div">
                    <label className="signup-bday-labels">Day
                      {/* <br/> */}
                      <div className="date-input">
                        <input id="signup-form-input-date" className="signup-date-input" type="text" placeholder="DD" maxLength="2" value={this.state.bday_date} onChange={(e) => this.updateDate(e.target.value)} />
                      </div>
                    </label>
                  </div>
  
                  <div className="year-div">
                    <label className="signup-bday-labels">Year
                      {/* <br/> */}
                      <div className="year-input">
                        <input id="signup-form-input-year"className="signup-year-input" type="text" placeholder="YYYY" maxLength="4" value={this.state.bday_year} onChange={(e) => this.updateYear(e.target.value)} />
                      </div>
                    </label>
                  </div>
                </div>

              </div>
            </label>
            
            <ValidationMsg valid={this.state.dateValid} message={this.state.errorMsg.date} />
            <br/>
            <ValidationMsg valid={this.state.yearValid} message={this.state.errorMsg.year} />

            <br />

            <label className="signup-prompts" >What's your gender?
              <div className='gender'>
                {/* <br/> */}


                  <div className="male-radio">
                    <label>
                      <input 
                        type="radio"
                        id="Male"
                        name="gender" 
                        value='Male'
                        onChange={this.handleInput('gender')}
                      />
                      Male
                    </label>
                  </div>
                  
  
                  <div className="female-radio">
                    <label>
                      <input 
                        type="radio"
                        id="Female"
                        name="gender" 
                        value='Female'
                        onChange={this.handleInput('gender')}
                      />
                      Female
                    </label>
                  </div>
                  
  
                  <div className="non-binary-radio">
                    <label>
                      <input 
                        type="radio"
                        id="Non-binary"
                        name="gender" 
                        value='Non-binary'
                        onChange={this.handleInput('gender')}
                      />
                      Non-binary
                    </label>
                  </div>
                  
              </div>
            </label>

            <br />

              {/* don't use javascript:void */}
            {/* <p>By clicking on Sign up, you agree to Spudify's <a href='javascript:void(0)'>Terms and Conditions of Use</a>.</p> */}
            

            <div className="signup-button-2-div">
            	<button className="signup-button-2" onClick={this.handleSubmit}>SIGN UP</button>
            </div>

              <p className="signup-login">Have an account?<Link className="tiny-login-link" to="/login">Log in</Link>.</p>
           
            
          </form>
        </section>
      </>
    )
  }
}

export default Signup;