import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Search from './search.js'
import UserList from './userList.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
  }
  async componentDidMount() {
    const res = await fetch('http://localhost:3006/users')
    const json = await res.json()
    this.setState({ users: json })
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {/* <Search /> */}
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
    );
  }
}
