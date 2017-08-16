import React from 'react'
import { Card, CardItem, Content, Text } from 'native-base'

export default class Submitted extends React.Component {
  static navigationOptions = {
    title: 'Impressions',
    headerStyle: { backgroundColor: 'tomato' }
  }

  render() {
    return (
      <Content>
        <Card>
          <CardItem>
            <Text>Thank you for your review!</Text>
          </CardItem>
        </Card>
      </Content>
    )
  }
}
