import React from 'react';
import {Link} from 'react-router-dom';

function ValidationMsg(props) {
  if (!props.valid) {
    return <div className='form-errors'>{props.message}</div>
  }
  return null;
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '', emailValid: false,
      password: '', passwordValid: false,

      formValid: false,
      errorMsg: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDemo = this.handleDemo.bind(this)
  }

  validateForm() {
    const { emailValid, passwordValid} = this.state;
    this.setState({
      formValid: emailValid && passwordValid
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
      errorMsg.email = 'Please enter your Spudify email address.'
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
      errorMsg.password = 'Please enter your password.'
    }

    this.setState({passwordValid, errorMsg}, this.validateForm);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleDemo(e) {
    e.preventDefault()
    this.props.login({ email: 'guest@example.com', password: 'password' })
      .then(() => this.props.history.push('/us'))
  }
  
  handleSubmit(e) {
    e.preventDefault()
    this.props.login(this.state)
      .then(() => this.props.history.push('/us'))
  }

  render() {
    return (
      <>
        <div className="logo-div">
          <Link to="/us"><img className="logo" src={window.logoURL} alt="Spudify Logo" /></Link>
        </div>

        <section className="form">
        
          <form onSubmit={this.handleSubmit}>
            <p className="login-msg">To continue, log in to Spotify.</p>

            
              <div className="fb-apple-buttons">
                <button onClick={this.handleDemo} className="facebook-button"><p>CONTINUE AS GUEST</p></button>
                <a href="https://github.com/dannys430/" className="apple-button"><p>CONTINUE TO GITHUB</p></a>
              </div>
            
            <hr className="or" />


            <label>
              <input
                className="form-input"
                type="text" 
                placeholder="Email address" 
                value={this.state.email}
                onChange={(e) => this.updateEmail(e.target.value)}
              />
              <ValidationMsg valid={this.state.emailValid} message={this.state.errorMsg.email} />
            </label>
            
            <br/>

            <label>
              <input
                className="form-input"
                type="password" 
                placeholder="Password" 
                value={this.state.password}
                onChange={(e) => this.updatePassword(e.target.value)}
              />
              <ValidationMsg valid={this.state.passwordValid} message={this.state.errorMsg.password} />
            </label>
            
            <br/>

            <div className='login-button-div'>
              <button className="login-button" onClick={this.handleSubmit}>LOG IN</button>
            </div>

          
            <div className="login-msg-2-div">
              <p className="login-msg">Don't have an account?</p>
            </div>

            <Link to="/signup" className="signup-button">SIGN UP FOR SPUDIFY</Link>
            
          </form>
        </section>
      </>
    )
  }
}

export default Login;