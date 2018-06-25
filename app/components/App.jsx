import React, { Component } from 'react'
import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'

export default class App extends Component {
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
    // not so magic but ugly
    this.addUser = this.addUser.bind(this)
  }

  addUser(newProfile) {
    // magic to call re-render on concat
    this.setState({
      profiles: this.state.profiles.concat([ newProfile ])
    });

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
        </div>
      )
    })
    return (
      <div>
        { profiles }
        <AddProfile addUser={this.addUser} />
      </div>
    )
  }
}