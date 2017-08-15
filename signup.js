import React from 'react'
import { Card, CardItem, Content, Text, Item, Input, Button } from 'native-base'

export default class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      firstname: [],
      lastname: [],
      username: [],
      password: [],
      email: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static navigationOptions = {
    title: 'Impressions',
    headerStyle: { backgroundColor: 'tomato' }
  }

  async handleSubmit(event) {
    event.preventDefault()
    const userData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    const res = await fetch('http://localhost:3040/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
    return this.setState({ text: res })
  }

  render() {
    return (
      <Content>
        <Card>
          <CardItem style={{justifyContent: 'center'}}>
            <Text>Sign Up</Text>
          </CardItem>
          <CardItem>
            <Text>First Name:</Text>
          </CardItem>
          <CardItem>
            <Item regular>
              <Input onChangeText={firstname => this.setState({firstname})}></Input>
            </Item>
          </CardItem>
          <CardItem>
            <Text>Last Name:</Text>
          </CardItem>
          <CardItem>
            <Item regular>
              <Input onChangeText={lastname => this.setState({lastname})}></Input>
            </Item>
          </CardItem>
          <CardItem>
            <Text>Create User Name:</Text>
          </CardItem>
          <CardItem>
            <Item regular>
              <Input onChangeText={username => this.setState({username})}></Input>
            </Item>
          </CardItem>
          <CardItem>
            <Text>Password:</Text>
          </CardItem>
          <CardItem>
            <Item regular>
              <Input secureTextEntry={true} onChangeText={password => this.setState({password})}></Input>
            </Item>
          </CardItem>
          <CardItem>
            <Text>Email:</Text>
          </CardItem>
          <CardItem>
            <Item regular>
              <Input onChangeText={email => this.setState({email})}></Input>
            </Item>
          </CardItem>
          <CardItem style={{justifyContent: 'center'}}>
            <Button onPress={ this.handleSubmit } type="submit" primary>
              <Text>Submit</Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    )
  }
}
