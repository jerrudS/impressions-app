import React from 'react'
import { Card, CardItem, Content, Text, Button, Image } from 'native-base'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  static navigationOptions = {
    headerStyle: { backgroundColor: 'tomato' }
  }

  handleCreate() {
    const { navigate } = this.props.navigation
    return navigate('Signup')
  }

  handleLogin() {
    const { navigate } = this.props.navigation
    return navigate('Login')
  }

  render() {
    return (
      <Content>
        <Card>
          <CardItem style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 32, fontFamily: 'Hoefler Text'}}>Impressions</Text>
          </CardItem>
          <CardItem style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 18, fontFamily: 'Hoefler Text'}}>Let the reviewing begin...</Text>
          </CardItem>
          <CardItem style={{justifyContent: 'center'}}>
            <Button onPress={ this.handleCreate } primary><Text>Create Account</Text></Button>
          </CardItem>
          <CardItem style={{justifyContent: 'center'}}>
            <Button onPress={ this.handleLogin } primary><Text>Login</Text></Button>
          </CardItem>
        </Card>
      </Content>
    )
  }
}
