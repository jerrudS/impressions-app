import React from 'react'
import { StyleProvider, View, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import UserList from './userList.js'
import getTheme from './native-base-theme/components'
import commonColors from './native-base-theme/variables/commonColor'
import { StackNavigator } from 'react-navigation'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
  }

  static navigationOptions = {
    title: 'Impressions',
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:3006/users')
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
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>
    )
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }

  render() {
    return <Text>Hello, Navigation!</Text>
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: App },
  Chat: { screen: HomeScreen }
})

export default SimpleApp
