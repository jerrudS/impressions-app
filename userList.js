import React from 'react'
import { Header, Content, Container, List, ListItem, Text } from 'native-base'

export default class UserList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Content>
        <List>
          {
            this.props.users.map((each, i) => {
              return <ListItem data-id={each.id} key={i}><Text>{each.first_name}</Text></ListItem>
            })
          }
        </List>
      </Content>
    );
  }
}
