import React from 'react'
import { Card, CardItem, Content, Text, Item, Input, Button } from 'native-base'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      username: '',
      password: '',
      verify: []
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
      username: this.state.username,
      password: this.state.password
    }
    const res = await fetch('https://impressions-app.herokuapp.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
    const status = res.status
    const data = await res.json()
    this.setState({ verify: data })
    if (status === 200) {
      const { navigate } = this.props.navigation
      const data = this.state
      return navigate('Select', { data })
    }
    else if (status === 400) {
      alert('User Name and Password required')
    }
    else if (status === 404) {
      alert('User Name does not exist')
    }
    else if (status === 401) {
      alert('Password did not match')
    }
    else {
      alert('Try Again')
    }
  }

  render() {
    return (
      <Content>
        <Card>
          <CardItem style={{justifyContent: 'center'}}>
            <Text>Login</Text>
          </CardItem>
          <CardItem>
            <Text>User Name:</Text>
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
