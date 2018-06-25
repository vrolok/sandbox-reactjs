import React, { Component } from 'react'
import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'
import { getProfiles } from '../utils/profileApi'
import { Parent } from './Children.jsx'
import WrapedComponent from './HOCExample.jsx'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: []
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

  componentDidMount() {
    getProfiles().then(profiles => {
      this.setState({
        profiles
      })
    })
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
        <Parent>Parent</Parent>
        <WrapedComponent />
      </div>
    )
  }
}