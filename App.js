import React from 'react'
import { StyleProvider, View, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import UserList from './userList.js'
import getTheme from './native-base-theme/components'
import commonColors from './native-base-theme/variables/commonColor'
import { StackNavigator } from 'react-navigation'
import ReviewPage from './reviewPage.js'
import Submitted from './submitted.js'
import Signup from './signup.js'
import Login from './login.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      users: [],
      token: ''
    }
  }

  static navigationOptions = {
    title: 'Impressions',
    headerStyle: { backgroundColor: 'tomato' }
  }

  async componentDidMount() {
    const verify = this.props.navigation.state.params.data.verify
    const token = verify.myToken
    const res = await fetch('https://impressions-app.herokuapp.com/users', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer' + ' ' + verify.myToken,
      }
    })
    const data = await res.json()
    return this.setState({ users: data, token: token })
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <StyleProvider style={getTheme(commonColors)}>
        <Container>
          <Content>
            <UserList navigate= { navigate } token= { this.state.token } users={ this.state.users }/>
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}

const ImpressionsApp = StackNavigator({
  Home: { screen: Signup },
  Login: { screen: Login },
  Select: { screen: App },
  Review: { screen: ReviewPage },
  Submitted: { screen: Submitted }
})

export default ImpressionsApp
