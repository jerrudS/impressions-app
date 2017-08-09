import React from 'react'
import { Item, Input, Header, Content, Container, List, ListItem, Text } from 'native-base'

export default class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { match: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(event.nativeEvent.text)
    const value = event.nativeEvent.text
    this.setState({ match: value })
  }

  getMatches() {
    const { match } = this.state
    return this.props.users.filter(each => {
      return each.first_name.toLowerCase().includes(match.toLowerCase())
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
              return <ListItem key={i}><Text>{each.first_name}</Text></ListItem>
            })
          }
        </List>
      </Content>
    );
  }
}
