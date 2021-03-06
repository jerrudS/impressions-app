import React from 'react'
import { Button, Form, Icon, Card, CardItem, Item, Input, Content, List, ListItem, Text } from 'native-base'
import Stars from 'react-native-stars-rating'

export default class ReviewPage extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      rating: '',
      review: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static navigationOptions = {
    title: 'Impressions',
    headerStyle: { backgroundColor: 'tomato' }
  }

  async handleSubmit(event) {
    event.preventDefault()
    const userData = this.props.navigation.state.params.user
    const token = this.props.navigation.state.params.token
    const inputData =
    {
      review: this.state.review,
      rating: this.state.rating,
      userid: userData.id
    }
    const data = this.state
    if (!data.review) {
      alert('Review required')
    }
    else if (!data.rating) {
      alert('Rating required')
    }
    else {
      const res = await fetch('https://impressions-app.herokuapp.com/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer' + ' ' + token
         },
        body: JSON.stringify(inputData)
      })
      const { navigate } = this.props.navigation
      return navigate('Submitted')
    }
  }

  render() {
    const userData = this.props.navigation.state.params.user
    const reviewData = this.props.navigation.state.params.reviews
    const rating = this.props.navigation.state.params.reviews[0]
    return (
      <Content>
        <Card>
          <Card>
            <CardItem style={{justifyContent: 'center'}}>
              <Text style={{fontSize: 32}}>{ userData.firstname + ' ' + userData.lastname }</Text>
            </CardItem>
            <CardItem style={{justifyContent: 'center'}}>
              <Text>Rating:</Text>
            </CardItem>
            <CardItem style={{justifyContent: 'center'}}>
              <Text style={{fontSize: 18}}>{ Number(rating[0].avg).toFixed(2) }</Text>
            </CardItem>
          </Card>
          <Card>
            <Form>
              <CardItem style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Stars
                  isActive={true}
                  rateMax={5}
                  isHalfStarEnabled={false}
                  onStarPress={(rating) => this.setState({rating})}
                  rate={0}
                  size={60}
                  />
              </CardItem>
              <CardItem>
                <Text>Review:</Text>
              </CardItem>
              <CardItem>
                <Item regular>
                  <Input onChangeText={(review) => this.setState({review})} placeholder='Add a review here'></Input>
                </Item>
              </CardItem>
              <CardItem style={{justifyContent: 'center'}}>
                <Button onPress={ this.handleSubmit } type="submit" primary>
                  <Text>Submit</Text>
                </Button>
              </CardItem>
            </Form>
          </Card>
          <Card>
            <CardItem>
              <Text>{ userData.firstname }'s Reviews:</Text>
            </CardItem>
            <List>
              {
                reviewData[1].map((each, i) => {
                  return <ListItem key={i}><Text>{each.review}</Text></ListItem>
                })
              }
            </List>
          </Card>
        </Card>
      </Content>
    )
  }
}
