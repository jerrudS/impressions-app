import React from 'react'
import { Card, CardItem, Body, Item, Input, Content, List, ListItem, Text } from 'native-base'

export default class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      match: '',
      user: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handlePress = this.handlePress.bind(this)
  }

  handleChange(event) {
    const { text } = event.nativeEvent
    this.setState({ match: text })
  }

  getMatches() {
    const { match } = this.state
    return this.props.users.filter(each => {
      const name = each.first_name + ' ' + each.last_name
      return name.toLowerCase().includes(match.toLowerCase()) + each.last_name.toLowerCase().includes(match.toLowerCase())
    })
  }

  async handlePress(each) {
    const user = each
    const res = await fetch('http://localhost:3007/reviews' + '?' + 'id=' + user.id)
    const reviews = await res.json()
    return this.props.navigate('Review', { user, reviews })
  }

  render() {
    return (
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>Select a person to review:</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Item rounded>
              <Input onChange={this.handleChange} placeholder='Enter Name Here'/>
            </Item>
          </CardItem>
          <List>
            {
              this.getMatches().map((each, i) => {
                return <ListItem onPress={() => this.handlePress(each)} key={i}><Text>{each.first_name + ' ' + each.last_name}</Text></ListItem>
              })
            }
          </List>
        </Card>
      </Content>
    )
  }
}
