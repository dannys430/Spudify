import React from 'react';

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
  
  handleSubmit(e) {
    e.preventDefault()
    this.props.login(this.state)
      .then(() => this.props.history.push('/'))
  }

  render() {
    return (
      <>
        <div className="logo-div">
          <img className="logo" src="/assets/spudify_logo.png" alt="Spudify Logo" />
        </div>
        <section className="form">
        
        <div>
          <form onSubmit={this.handleSubmit}>
            <p className="login-msg">To continue, log in to Spotify.</p>

            
              <button className="facebook-button"><p> &#9824; CONTINUE WITH FACEBOOK</p></button>
              <button className="apple-button"><p> &#129364; CONTINUE WITH POTATO</p></button>
            
            


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

            <button className="login-button" onClick={this.handleSubmit}>LOG IN</button>
          </form>
        </div>
        </section>
      </>
    )
  }
}

export default Login;