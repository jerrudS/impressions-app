import React from 'react'
import { Item, Input, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Search extends React.Component {
  render() {
    return (
      <Content>
        <Text>Select a person to review:</Text>
        <Item rounded>
          <Input placeholder='Enter Name Here'/>
        </Item>
      </Content>
    )
  }
}
