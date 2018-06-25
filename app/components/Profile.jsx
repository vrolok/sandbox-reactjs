import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  color: lime;
`

export default class Profile extends Component {
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