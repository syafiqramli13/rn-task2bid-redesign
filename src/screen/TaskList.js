import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Image, StatusBar, View } from 'react-native';
import { Container, Content, Button, Icon, Text, Badge, Card, CardItem } from 'native-base';
import { Row, Col } from 'react-native-responsive-grid-system';
import NumberFormat from 'react-number-format';
import dataTask from '../data/data';



export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTask: [],
    };
  }

  goToTaskPost = () => {
    Actions.TaskPost();
  }
  goToTaskDetailsOpen = () => {
    Actions.TaskDetailsOpen();
  }
  goToTaskDetailsAssigned = () => {
    Actions.TaskDetailsAssigned();
  }
  goToTaskDetailsCompleted = () => {
    Actions.TaskDetailsCompleted();
  }
  goToTaskDetailsReviewed = () => {
    Actions.TaskDetailsReviewed();
  }

  componentDidMount() {
    this.setState({
      taskList: dataTask
    });
  }

  render() {
    const { taskList } = this.state;
    return (
      <Container style={styles.container}>
        <View>
          <StatusBar barStyle='light-content' hidden={false} backgroundColor="#ff3232" translucent={false} />
        </View>
        <Content showsVerticalScrollIndicator={false} style={styles.content}>
          {taskList && taskList.map((item, i) => (
            <Card key={i} style={styles.cardContainer}>
              {/* <CardItem button onPress={[this.goToTaskDetailsOpen ]}  */}
              <CardItem button onPress={() => {
                (item.id) === '1' ? this.goToTaskDetailsOpen() :
                  (item.id) === '2' ? this.goToTaskDetailsAssigned() :
                    (item.id) === '3' ? this.goToTaskDetailsCompleted() :
                      this.goToTaskDetailsReviewed()
              }}
                style={styles.cardItem}>
                <Row>
                  <Col xs={2}>
                    <Image style={{ height: 45, width: 45, resizeMode: 'contain' }}
                      source={item.userPic} />
                  </Col>
                  <Col xs={7}>
                    <Row>
                      <Text style={styles.taskTitle} numberOfLines={2} >
                        {item.taskTitle}
                      </Text>
                    </Row>
                    <Row>
                      <Icon name="wallet-outline" style={[styles.budget, { width: 20, marginLeft: 10 }]} />
                      <NumberFormat
                        value={item.budget}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'RM '}
                        renderText={
                          value => <Text numberOfLines={1} style={styles.budget}>{value}</Text>
                        }
                      />
                    </Row>
                    <Row>
                      <Icon name="location-outline" type='Ionicons' style={[styles.budget, { width: 20, marginLeft: 10, paddingTop: 5 }]} />
                      <Text numberOfLines={1} style={{
                        color: '#5cb85c',
                        width: 130,
                        paddingTop: 5
                      }}>
                        {item.location}
                      </Text>
                    </Row>
                  </Col>
                  <Col xs={3}>
                    <Badge style={[(item.taskStatus) === 'Open' ? styles.taskStatusOpen :
                      (item.taskStatus) === 'Assigned' ? styles.taskStatusAssigned :
                        (item.taskStatus) === 'Completed' ? styles.taskStatusCompleted :
                          styles.taskStatusReviewed]}
                    >
                      <Text style={{ fontSize: 12 }}>{item.taskStatus}</Text>
                    </Badge>
                    <Text style={styles.offerStatus}>{item.offers} offers</Text>
                    <Text style={styles.postStatus}>{item.postStatus} hours ago</Text>
                  </Col>
                </Row>
              </CardItem>
            </Card>
          ))}
        </Content>

        <Button block onPress={this.goToTaskPost} style={{ backgroundColor: '#ff3232', borderRadius: 15, marginHorizontal: 20, marginBottom: 10 }}>
          <Icon name="briefcase-outline" style={{ marginRight: 8, fontSize: 16 }} />
          <Text style={{ textAlign: "center", paddingLeft: 0 }}>Post a Task</Text>
        </Button>

      </Container >

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffcccc',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  rowStyles: {
    paddingTop: 15
  },
  cardContainer: {
    borderRadius: 15,
    marginTop: 10,
  },
  cardItem: {
    borderRadius: 15,
    minHeight: 110
  },
  taskTitle: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 10
  },
  taskStatusOpen: {
    width: 70,
    height: 20,
    alignSelf: 'flex-end',
    backgroundColor: '#00cd00'
  },
  taskStatusAssigned: {
    width: 70,
    height: 20,
    alignSelf: 'flex-end',
    backgroundColor: '#ffa500'
  },
  taskStatusCompleted: {
    width: 70,
    height: 20,
    alignSelf: 'flex-end',
    backgroundColor: '#3f51b5'
  },
  taskStatusReviewed: {
    width: 70,
    height: 20,
    alignSelf: 'flex-end',
    backgroundColor: '#808080'
  },
  budget: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5cb85c',
  },
  offerStatus: {
    fontSize: 12,
    color: '#737373',
    paddingTop: 10,
    paddingRight: 6,
    alignSelf: 'flex-end'
  },
  postStatus: {
    fontSize: 12,
    color: '#737373',
    paddingTop: 5,
    paddingRight: 6,
    alignSelf: 'flex-end'
  }
})