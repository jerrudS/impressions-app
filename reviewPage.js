import React from 'react'
import { Button, Form, Icon, Card, CardItem, Item, Input, Content, List, ListItem, Text } from 'native-base'

export default class ReviewPage extends React.Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: 'Impressions',
  }

  render() {
    const userData = this.props.navigation.state.params.user
    return (
      <Content>
        <Card>
          <CardItem style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 32}}>{ userData.first_name + ' ' + userData.last_name }</Text>
          </CardItem>
          <CardItem style={{justifyContent: 'center'}}>
            <Text>Rating:</Text>
          </CardItem>
          <CardItem style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 12}}>{ userData.rating }</Text>
          </CardItem>
          <Card>
            <CardItem style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Icon name='star' style={{fontSize: 40, color: 'orange'}}/>
              <Icon name='star' style={{fontSize: 40, color: 'orange'}}/>
              <Icon name='star' style={{fontSize: 40, color: 'orange'}}/>
              <Icon name='star' style={{fontSize: 40, color: 'orange'}}/>
              <Icon name='star' style={{fontSize: 40, color: 'orange'}}/>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text>Review:</Text>
            </CardItem>
            <Form>
              <CardItem>
                <Item regular>
                  <Input placeholder='Add a review here'></Input>
                </Item>
              </CardItem>
              <CardItem style={{justifyContent: 'center'}}>
                <Button primary>
                  <Text>Submit</Text>
                </Button>
              </CardItem>
            </Form>
          </Card>
          <Card>
            <CardItem>
              <Text>{ userData.first_name }'s Reviews:</Text>
            </CardItem>
            <List>
              <ListItem><Text>{ userData.review }</Text></ListItem>
            </List>
          </Card>
        </Card>
      </Content>
    )
  }
}