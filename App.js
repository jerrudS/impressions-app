import React from 'react'
import { StyleProvider, View, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import UserList from './userList.js'
import getTheme from './native-base-theme/components'
import commonColors from './native-base-theme/variables/commonColor'
import { StackNavigator } from 'react-navigation'
import ReviewPage from './reviewPage.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      users: [],
      reviews: []
    }
  }

  static navigationOptions = {
    title: 'Impressions',
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:3007/users')
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

const ImpressionsApp = StackNavigator({
  Home: { screen: App },
  Review: { screen: ReviewPage }
})

export default ImpressionsApp
