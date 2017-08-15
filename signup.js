import React from 'react'
import { Card, CardItem, Content, Text, Item, Input, Button } from 'native-base'

export default class Signup extends React.Component {
  static navigationOptions = {
    title: 'Impressions',
    headerStyle: { backgroundColor: 'tomato' }
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
              <Input></Input>
            </Item>
          </CardItem>
          <CardItem>
            <Text>Last Name:</Text>
          </CardItem>
          <CardItem>
            <Item regular>
              <Input></Input>
            </Item>
          </CardItem>
          <CardItem>
            <Text>Create User Name:</Text>
          </CardItem>
          <CardItem>
            <Item regular>
              <Input></Input>
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
              <Input></Input>
            </Item>
          </CardItem>
          <CardItem>
            <Text>Email:</Text>
          </CardItem>
          <CardItem>
            <Item regular>
              <Input></Input>
            </Item>
          </CardItem>
          <CardItem style={{justifyContent: 'center'}}>
            <Button type="submit" primary>
              <Text>Submit</Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    )
  }
}
