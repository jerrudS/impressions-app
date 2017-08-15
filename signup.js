import React from 'react'
import { Card, CardItem, Content, Text, Item, Input, Button } from 'native-base'

export default class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      first_name: [],
      last_name: [],
      user_name: [],
      password: [],
      email: []
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
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      user_name: this.state.user_name,
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
              <Input onChangeText={first_name => this.setState({first_name})}></Input>
            </Item>
          </CardItem>
          <CardItem>
            <Text>Last Name:</Text>
          </CardItem>
          <CardItem>
            <Item regular>
              <Input onChangeText={last_name => this.setState({last_name})}></Input>
            </Item>
          </CardItem>
          <CardItem>
            <Text>Create User Name:</Text>
          </CardItem>
          <CardItem>
            <Item regular>
              <Input onChangeText={user_name => this.setState({user_name})}></Input>
            </Item>
          </CardItem>
          <CardItem>
            <Text>Password:</Text>
          </CardItem>
          <CardItem>
            <Item regular>
              <Input></Input>
            </Item>
          </CardItem>
          <CardItem>
            <Text>Confirm Password:</Text>
          </CardItem>
          <CardItem>
            <Item regular>
              <Input onChangeText={password => this.setState({password})}></Input>
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
