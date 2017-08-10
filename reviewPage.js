import React from 'react'
import { Icon, Card, CardItem, Item, Input, Content, List, ListItem, Text } from 'native-base'

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
            <CardItem>
              <Item regular>
                <Input placeholder='Add a review here'></Input>
              </Item>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text>Reviews</Text>
            </CardItem>
          </Card>
        </Card>
      </Content>
    )
  }
}
