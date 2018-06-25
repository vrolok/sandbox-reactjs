import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2em;
  color: lime;
`
let Profile = props => (
  <div>
    <Title>
      { props.name } Age: { props.age }
    </Title>
    <p>{ props.bio }</p>
    <h3>Hobbies:</h3>
    <ul>
      { props.hobbies.map(hobby => <li>{ hobby }</li>) }
    </ul>
  </div>
)

export default Profile