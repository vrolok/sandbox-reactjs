import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  color: lime;
`

class Profile extends Component {
  render () {
    let hobbies = this.props.hobbies.map(hobby => {
      return <li>{ hobby }</li>
    })
    return (
      <div>
        <Title>
          <h1>{ this.props.name } Age: {this.props.age}</h1>
        </Title>
        <p>{ this.props.bio }</p>
        <h3>Hobbies:</h3>
        <ul>
          { hobbies }
        </ul>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: [
        {
          name: 'Joe',
          age: 30,
          bio: 'like to walk under the rain on a beach',
          hobbies: ['hiking', 'swimming']
        },
        {
          name: 'Sarah',
          age: 21,
          bio: 'party like crazy with friends all night',
          hobbies: ['drinking', 'netflix']
        }
      ]
    }
  }

  render() {
    let profiles = this.state.profiles.map(profile => {
      return (
        <div>
          <Profile 
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
            hobbies={profile.hobbies} />
          <button>Add new profile</button>
        </div>
      )
    })
    return (
      <div>
        { profiles }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))