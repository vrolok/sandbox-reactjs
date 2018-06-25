import React, { Component } from 'react'

export default class AddProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      age: '',
      bio: '',
      hobbies: [],
    }

    this.handleName = this.handleName.bind(this)
    this.handleAge = this.handleAge.bind(this)
    this.handleBio = this.handleBio.bind(this)
    this.handleHobby = this.handleHobby.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleName (e) {
    this.setState({
      name: e.target.value
    })
  }

  handleAge (e) {
    this.setState({
      age: e.target.value
    })
  }

  handleBio (e) {
    this.setState({
      bio: e.target.value
    })
  }

  handleHobby (e) {
    this.setState({
      hobbies: [ e.target.value ]
    })
  }

  handleSubmit () {
    // App addUser method that accepts {name, bio, hobbies}
    this.props.addUser(this.state)
  }
  
  render () {
    return (
      <div>
        <p>Add User</p>
        <p>
        <label>Name</label><br/>
        <input onChange={this.handleName} value={this.state.name}/> 
        </p>
        <p>
        <label>Age</label><br/>
        <input onChange={this.handleAge} value={this.state.age}/>
        </p>
        <p>
        <label>Bio</label><br/>
        <input onChange={this.handleBio} value={this.state.bio}/>
        </p>
        <p>
        <label>Hobby</label><br/>
        <input onChange={this.handleHobby} value={this.state.hobbies}/>
        </p>
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    )
  }
}
