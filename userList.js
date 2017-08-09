import React from 'react'
import { Item, Input, Content, List, ListItem, Text } from 'native-base'

export default class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { match: '' }
    this.handleChange = this.handleChange.bind(this)
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

  render() {
    return (
      <Content>
        <Text>Select a person to review:</Text>
        <Item rounded>
          <Input onChange={this.handleChange} placeholder='Enter Name Here'/>
        </Item>
        <List>
          {
            this.getMatches().map((each, i) => {
              return <ListItem onPress={() => this.props.navigate('Chat')} data-id={each.id} key={i}><Text>{each.first_name + ' ' + each.last_name}</Text></ListItem>
            })
          }
        </List>
      </Content>
    )
  }
}
