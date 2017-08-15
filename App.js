import React from 'react'
import { StyleProvider, View, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import UserList from './userList.js'
import getTheme from './native-base-theme/components'
import commonColors from './native-base-theme/variables/commonColor'
import { StackNavigator } from 'react-navigation'
import ReviewPage from './reviewPage.js'
import Submitted from './submitted.js'
import Signup from './signup.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      users: []
    }
  }

  static navigationOptions = {
    title: 'Impressions',
    headerStyle: { backgroundColor: 'tomato' }
  }

  async componentDidMount() {
    const res = await fetch('https://impressions-app.herokuapp.com/users')
    const json = await res.json()
    this.setState({ users: json })
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <StyleProvider style={getTheme(commonColors)}>
        <Container>
          <Content>
            <UserList navigate= { navigate } users={ this.state.users }/>
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}

const ImpressionsApp = StackNavigator({
  Home: { screen: Signup },
  Select: { screen: App },
  Review: { screen: ReviewPage },
  Submitted: { screen: Submitted }
})

export default ImpressionsApp
