import Expo from 'expo'
import React from 'react';
import { StyleProvider, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import UserList from './userList.js'
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'
import platform from './native-base-theme/variables/platform'
import commonColors from './native-base-theme/variables/commonColor'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      users: [],
      isReady: false
    }
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:3006/users')
    const json = await res.json()
    this.setState({ users: json })
  }

  render() {
    return (
      <StyleProvider style={getTheme(commonColors)}>
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Impressions</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <UserList users={ this.state.users }/>
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
    );
  }
}
