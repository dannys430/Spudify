import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    // this.bday = {
    //   month: '',
    //   date: '',
    //   year: ''
    // }
    this.state = {
      email: '',
      password: '',
      name: '',
      // birth_date: this.bday['year'] + this.bday['month'] + this.bday['date'],
      birth_date: '',
      gender: ''
    }

    

    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleDate = this.handleDate.bind(this)

    // this.handleBirthday = this.handleBirthday.bind(this)
    // this.parseBirthday = this.parseBirthday.bind(this)

    // this.handleMonth = this.handleMonth.bind(this)
    // this.handleDate = this.handleDate.bind(this)
    // this.handleYear = this.handleYear.bind(this)


  }

  
  // handleMonth(month) {
    
  //     this.bday['month'] = month
    

  //   // this.bday[month] = '12'
  // }

  // handleDate(date) {
    
  //     this.bday['date'] = date
    

  //   // this.bday[date] = '30'
  // }

  // handleYear(year) {
    
  //     this.bday['year'] = year
    

  //   // this.bday[year] = '1980'
  // }

  



  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    }
  }

  // handleInput2(type1, type2) {
  //   return (e) => {
  //     this.setState({ [type1]: { [type2]: e.target.value}})
  //   }
  // }

  // handleBirthday(type) {
  //   return (e) => {
  //     this.bday[type] = e.target.value
  //   }
  // }

  // parseBirthday() {
  //   this.setState({ birth_date: this.bday[month] + this.bday[date] + this.bday[year]})
  // }

  handleSubmit(e) {
    e.preventDefault()
    // this.parseBirthday()
    this.props.createNewUser(this.state)
    .then(() => this.props.history.push('/'))
  }

  // FIRST
  // function handleDate(mo) {
  //   return function (dat) {
  //     return function (yr) {
  //       const month = mo.toString()
  //       const date = dat.toString()
  //       const year = yr.toString()
  //       return year + month.padStart(2, '0') + date.padStart(2, '0')
  //     }
  //   }
  // }

  // SECOND
  // handleDate(mo) {
  //   return function (dt) {
  //     return function (yr) {
  //       const month = mo.toString()
  //       const date = dt.toString()
  //       const year = yr.toString()
  //       return this.setState({birth_date: year + month.padStart(2, '0') + date.padStart(2, '0') }) 
  //     }
  //   }
  // }
  
  render() {
    return (
      <div>
        <h1>Sign up for free to start listening.</h1>
        <form onSubmit={this.handleSubmit}>
        
          <label>What's your email?
            <input 
              type="text" 
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>

          <label>Create a password
            <input 
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>

          <label>What should we call you?
            <input 
              type="text" 
              value={this.state.name}
              onChange={this.handleInput('name')}
            />
          </label>
          





            {/* <select onChange={this.handleDate('03')}>
              <option selected disabled value>Month</option>
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
            </select> */}


            {/* <input type="text" value={this.bday.month} onChange={() => this.handleMonth('12')}/>
            <input type="text" onChange={() => this.handleDate('30')}/>
          <input type="text" onChange={() => this.handleYear('1970')}/> */}

            {/* this works */}
          <label>What's your date of birth?
            <input 
              type="date"
              value={this.state.birth_date}
              onChange={this.handleInput('birth_date')}
            />
          </label>








          <label>What's your gender?

            <label>Male
              <input 
                type="radio"
                id="Male"
                name="gender" 
                value='Male'
                onChange={this.handleInput('gender')}
              />
            </label>

            <label>Female
              <input 
                type="radio"
                id="Female"
                name="gender" 
                value='Female'
                onChange={this.handleInput('gender')}
              />
            </label>

            <label>Non-binary
              <input 
                type="radio"
                id="Non-binary"
                name="gender" 
                value='Non-binary'
                onChange={this.handleInput('gender')}
              />
            </label>

          </label>
          <button onClick={this.handleSubmit}>SIGN UP</button>
          
        </form>
      </div>
    )
  }
}

export default Signup;