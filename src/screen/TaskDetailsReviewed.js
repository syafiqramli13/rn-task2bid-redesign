import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Row, Col } from 'react-native-responsive-grid-system';
import SegmentedControlTab from "react-native-segmented-control-tab";
import NumberFormat from 'react-number-format';
import ViewMoreText from 'react-native-view-more-text';
import StarRating from '../components/starRating';
import Modal from 'react-native-modal';
import {
  Alert,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  StatusBar,
  ToastAndroid
}
  from 'react-native';
import {
  Container,
  Content,
  Button,
  Icon,
  Text,
  Badge,
  Card,
  CardItem,
  Textarea,
  Fab
} from 'native-base';

export default class TaskDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      reportModalVisible: false,
      questionModalVisible: false,
      active: false,
      dataTask: [
        {
          userName: 'Syafiq Ramli',
          taskTitle: 'Babysitter for weekdays',
          budget: '120',
          taskStatus: 'Reviewed',
          offers: '3',
          questions: '3',
          postStatus: '8',
          location: '68100, Batu Caves, Gombak, Selangor, Malaysia',
          userPic: require('../assets/user4.png'),
          taskDetail: 'I need some one to clean my garage. I need some one to babysit my childrens lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
          dueDate: '7th Dec 2020',
          dueTime: '12:00 pm',
          attachment1: require('../assets/clean1.jpg'),
          attachment2: require('../assets/clean2.jpg'),
          attachment3: require('../assets/clean3.jpg'),
          attachment4: require('../assets/babysit1.jpg'),
          attachment5: require('../assets/babysit2.jpg'),
          doerName: 'Hafiz Aiman',
          doerOffer: 'I can do the task. I like cleaning house. Experienced babysit for 3 years.  I can do the task. I like cleaning house. Experienced babysit for 3 years.',
          doerOfferDate: '23 October, 2020',
          doerRate: 'Thank you for the support',
          doerRateDate: '23 October, 2020',
          doerPic: require('../assets/user4.png'),
          requesterRate: 'Neat and clean workmanship. Recommended. Tq',
          requesterReplyDate: '26 October, 2020',
          questionerName: 'Lyna Smith',
          questionerQuestion: 'How old are your kids?',
          questionDate: '24 October, 2020',
          questionerPic: require('../assets/user3.png'),
          questionerReply: 'Kindly check your inbox, I drop you a message. tq'
        }
      ]
    };
  }

  goToLetsDuit = () => {
    Actions.LetsDuit();
  }
  goToTaskPost = () => {
    Actions.TaskPost();
  }
  goToTaskList = () => {
    Actions.TaskList();
  }

  toggleReportModal(isVisible) {
    this.setState({ reportModalVisible: isVisible });
  }

  toggleQuestionModal(isVisible) {
    this.setState({ questionModalVisible: isVisible });
  }

  handleSingleIndexSelect = (index) => {
    this.setState(prevState => ({ ...prevState, selectedIndex: index }))
  }

  showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Send Successful!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      150
    );
  };

  renderViewMore(onPress) {
    return (
      <Text onPress={onPress} style={styles.viewMore}>View more</Text>
    )
  }
  renderViewLess(onPress) {
    return (
      <Text onPress={onPress} style={styles.viewMore}>View less</Text>
    )
  }

  renderViewMoreOffer(onPress) {
    return (
      <Text onPress={onPress} style={styles.viewMoreOffer}>View more</Text>
    )
  }
  renderViewLessOffer(onPress) {
    return (
      <Text onPress={onPress} style={styles.viewMoreOffer}>View less</Text>
    )
  }

  render() {
    const { dataTask, selectedIndex, questionModalVisible, reportModalVisible } = this.state
    return (
      <Container style={styles.container}>
        <View>
          <StatusBar barStyle='light-content' hidden={false} backgroundColor="#ff3232" translucent={false} />
        </View>

        <Content style={styles.content} showsVerticalScrollIndicator={false}>
          {dataTask && dataTask.map((item, i) => (
            <Card key={i} style={styles.cardContainer}>
              <CardItem bordered style={styles.cardItem}>
                <Row>
                  <Col xs={12}>
                    <Text style={styles.taskTitle} numberOfLines={3} >
                      {item.taskTitle}
                    </Text>
                  </Col>
                </Row>
              </CardItem>
              <CardItem style={styles.cardItem}>
                <Row>
                  <Col xs={3}>
                    <TouchableHighlight
                      activeOpacity={1}
                      underlayColor="#f2f2f2"
                      onPress={() => Alert.alert('User detail clicked!', 'Route to user details information')}
                    >
                      <Image style={{
                        height: 45,
                        width: 45,
                        resizeMode: 'contain',
                        alignSelf: 'center'
                      }}
                        source={item.userPic} />
                    </TouchableHighlight>
                  </Col>
                  <Col xs={6}>
                    <Text>
                      Posted by :
                    </Text>
                    <Text style={{ color: '#666666', fontSize: 14, }}>
                      {item.userName}
                    </Text>
                  </Col>
                  <Col xs={3}>
                    <Badge style={{
                      width: 70,
                      height: 20,
                      alignSelf: 'flex-end',
                      backgroundColor: '#808080'
                    }}>
                      <Text style={{ fontSize: 12 }}>{item.taskStatus}</Text>
                    </Badge>
                    <Text style={styles.postStatus}>{item.postStatus} hours ago</Text>
                  </Col>
                </Row>
              </CardItem>
            </Card>
          ))}
          {dataTask && dataTask.map((item, i) => (
            <View key={i} style={{ paddingTop: 20 }}>
              <SegmentedControlTab
                values={['Description', `Task Reviewed`, `Task Completed`]}
                selectedIndex={selectedIndex}
                borderRadius={15}
                tabStyle={styles.tabStyle}
                tabsContainerStyle={styles.tabsContainerStyle}
                tabTextStyle={styles.tabTextStyle}
                activeTabStyle={styles.activeTabStyle}
                firstTabStyle={styles.firstTabStyle}
                lastTabStyle={styles.lastTabStyle}
                onTabPress={this.handleSingleIndexSelect}
              />
              {selectedIndex === 0
                &&
                <View style={{ marginBottom: 70 }}>
                  <Card style={styles.cardContainer}>
                    <CardItem header bordered style={styles.cardHeader}>
                      <Text style={styles.cardHeaderText}>
                        {/* Task Descriptions */}
                        What to be done?
                      </Text>
                    </CardItem>
                    <CardItem style={styles.cardContent}>
                      <ViewMoreText
                        numberOfLines={3}
                        renderViewMore={this.renderViewMore}
                        renderViewLess={this.renderViewLess}
                        textStyle={{}}
                      >
                        <Text style={{ color: '#737373', fontSize: 14 }}>
                          {item.taskDetail}
                        </Text>
                      </ViewMoreText>
                    </CardItem>
                  </Card>

                  <Card style={styles.cardContainer}>
                    <CardItem header bordered style={styles.cardHeader}>
                      <Text style={styles.cardHeaderText}>
                        {/* Due date */}
                        When to be done?
                      </Text>
                    </CardItem>
                    <CardItem style={styles.cardContent}>
                      <Row>
                        <Col xs={6}>
                          <Text style={{ paddingBottom: 5 }}>Due Date :</Text>
                          <View style={{ flexDirection: 'row' }}>
                            <Icon name='calendar-outline' style={{
                              color: '#737373',
                              fontSize: 14,
                              width: 14,
                              marginRight: 10,
                            }} />
                            <Text style={{
                              color: '#737373',
                              fontSize: 14,
                            }}>
                              {item.dueDate}
                            </Text>
                          </View>
                        </Col>
                        <Col xs={6}>
                          <Text style={{ paddingBottom: 5 }}>Time :</Text>
                          <View style={{ flexDirection: 'row' }}>
                            <Icon name='time-outline' style={{
                              color: '#737373',
                              fontSize: 14,
                              width: 14,
                              marginRight: 10,
                            }} />
                            <Text style={{
                              color: '#737373',
                              fontSize: 14,
                            }}>
                              {item.dueTime}
                            </Text>
                          </View>
                        </Col>
                      </Row>
                    </CardItem>
                  </Card>

                  <Card style={styles.cardContainer}>
                    <CardItem header bordered style={styles.cardHeader}>
                      <Text style={styles.cardHeaderText}>
                        {/* Due date */}
                        Where to be done?
                      </Text>
                    </CardItem>
                    <CardItem style={styles.cardContent}>
                      <Row>
                        <Col xs={8}>
                          <Text style={{ paddingBottom: 5 }}>Location :</Text>
                          <View style={{ flexDirection: 'row' }}>
                            <Icon name="location-outline" style={styles.budget} />
                            <Text numberOfLines={3} style={{
                              color: '#5cb85c',
                              fontSize: 14,
                            }}>
                              {item.location}
                            </Text>
                          </View>
                        </Col>
                        <Col xs={1} />
                        <Col xs={3}>
                          <TouchableHighlight
                            activeOpacity={1}
                            underlayColor="#f2f2f2"
                            onPress={() => Alert.alert('Location clicked!', 'Route to open map location')}
                            style={{ top: 25, height: 40 }}
                          >
                            <Text style={{
                              fontSize: 14,
                              color: '#737373',
                              textAlign: 'center',
                              textDecorationLine: 'underline'
                            }}>
                              Open map
                            </Text>
                          </TouchableHighlight>
                        </Col>
                      </Row>
                    </CardItem>
                  </Card>
                  {/* Attachment */}
                  <Card style={styles.cardContainer}>
                    <CardItem header bordered style={styles.cardHeader}>
                      <Text style={styles.cardHeaderText}>
                        Attachments
                      </Text>
                    </CardItem>
                    <CardItem style={{ borderRadius: 15 }} >
                      <ScrollView horizontal>
                        <Row>
                          <Col>
                            <Image style={styles.thumbnail} source={item.attachment1} />
                          </Col>
                          <Col>
                            <Image style={styles.thumbnail} source={item.attachment2} />
                          </Col>
                          <Col>
                            <Image style={styles.thumbnail} source={item.attachment3} />
                          </Col>
                          <Col>
                            <Image style={styles.thumbnail} source={item.attachment4} />
                          </Col>
                          <Col>
                            <Image style={styles.thumbnail} source={item.attachment5} />
                          </Col>
                        </Row>
                      </ScrollView>
                    </CardItem>
                  </Card>
                </View>
              }
              {selectedIndex === 1
                &&
                <View style={{ marginBottom: 70 }}>
                  <Card style={styles.cardContainer}>
                    <CardItem header bordered style={styles.cardHeader}>
                      <Row>
                        <Col xs={11}>
                          <Text style={styles.cardHeaderText}>
                            Task Reviewed
                          </Text>
                        </Col>
                        <Col xs={1}>
                        </Col>
                      </Row>
                    </CardItem>
                    <View style={{ marginHorizontal: 10 }}>

                      {/* Doer offer with no attachment */}
                      <Card style={styles.cardReplyContainer}>
                        <CardItem style={styles.cardContent}>
                          <Row>
                            <Col xs={1}>
                              <TouchableHighlight
                                activeOpacity={1}
                                underlayColor="#f2f2f2"
                                onPress={() => Alert.alert('User clicked!', 'Route to user details information')}
                              >
                                <Image style={{
                                  height: 30,
                                  width: 25,
                                  resizeMode: 'contain',
                                  alignSelf: 'center',
                                  justifyContent: 'center'
                                }}
                                  source={item.doerPic} />
                              </TouchableHighlight>
                            </Col>
                            <Col xs={11}>
                              <Row rowStyles={{ marginBottom: 5 }}>
                                <Row>
                                  <Col xs={8}>
                                    <TouchableHighlight
                                      activeOpacity={1}
                                      underlayColor="#f2f2f2"
                                      onPress={() => Alert.alert('User clicked!', 'Route to user details information')}
                                    >
                                      <Text numberOfLines={1} style={{ marginLeft: 10, fontSize: 16 }}>
                                        {item.doerName}
                                        <Text style={{ fontSize: 12, color: '#ff3232' }}>  (Doer)</Text>
                                      </Text>
                                    </TouchableHighlight>
                                  </Col>
                                  <Col xs={4}>
                                  </Col>
                                </Row>
                                <Row>
                                  <Text note style={{ fontSize: 10, marginLeft: 10, textAlign: 'right' }}>
                                    {item.doerRateDate}
                                  </Text>
                                </Row>
                              </Row>
                              <Row>
                                <Col xs={3}>
                                  <Text note style={{ marginLeft: 10 }}>Rated :</Text>
                                </Col>
                                <Col xs={4}>
                                  <StarRating />
                                </Col>
                                <Col xs={5} />
                              </Row>
                              <Row>
                                <Col xs={3}>
                                  <Text note style={{ marginLeft: 10 }}>Said :</Text>
                                </Col>
                                <Col xs={9}>
                                  <ViewMoreText
                                    numberOfLines={2}
                                    renderViewMore={this.renderViewMoreOffer}
                                    renderViewLess={this.renderViewLessOffer}
                                    textStyle={{ marginLeft: 10 }}
                                  >
                                    <Text style={{ color: '#737373', fontSize: 14, textAlign: 'justify' }}>
                                      {item.doerRate}
                                    </Text>
                                  </ViewMoreText>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </CardItem>
                        {/* Requester Reply */}
                        <CardItem style={styles.cardReply}>
                          <Row
                            rowStyles={styles.rowStylesReply}
                          >
                            <Col xs={2} colStyle={{}}>
                              <Icon name='reply-outline' type='MaterialCommunityIcons'
                                style={{
                                  fontSize: 16,
                                  color: '#ff3232',
                                  transform: [{ rotateY: '180deg' }],
                                  textAlign: 'center',
                                  marginTop: 5
                                }}
                              />
                            </Col>
                            <Col xs={1}>
                              <TouchableHighlight
                                activeOpacity={1}
                                underlayColor="#f2f2f2"
                                onPress={() => Alert.alert('User clicked!', 'Route to user details information')}
                              >
                                <Image style={{
                                  height: 30,
                                  width: 25,
                                  resizeMode: 'contain',
                                  alignSelf: 'center',
                                  justifyContent: 'center'
                                }}
                                  source={item.userPic} />
                              </TouchableHighlight>
                            </Col>
                            <Col xs={9}>
                              <Row rowStyles={{ marginBottom: 5 }}>
                                <Row>
                                  <Col xs={12}>
                                    <TouchableHighlight
                                      activeOpacity={1}
                                      underlayColor="#f2f2f2"
                                      onPress={() => Alert.alert('User detail clicked!', 'Route to user details information')}
                                    >
                                      <Text numberOfLines={1} style={{ marginLeft: 10, fontSize: 16 }}>
                                        {item.userName}
                                        <Text style={{ fontSize: 12, color: '#ff3232' }}>  (Requester)</Text>
                                      </Text>
                                    </TouchableHighlight>
                                  </Col>
                                </Row>
                                <Row>
                                  <Text note style={{ fontSize: 10, marginLeft: 10, textAlign: 'right' }}>
                                    {item.requesterReplyDate}
                                  </Text>
                                </Row>
                              </Row>
                              <Row>
                                <Col xs={4}>
                                  <Text note style={{ marginLeft: 10 }}>Rated :</Text>
                                </Col>
                                <Col xs={4}>
                                  <StarRating />
                                </Col>
                                <Col xs={3} />
                              </Row>
                              <Row>
                                <Col xs={3}>
                                  <Text note style={{ marginLeft: 10 }}>Said :</Text>
                                </Col>
                                <Col xs={9}>
                                  <ViewMoreText
                                    numberOfLines={2}
                                    renderViewMore={this.renderViewMoreOffer}
                                    renderViewLess={this.renderViewLessOffer}
                                    textStyle={{ marginLeft: 10 }}
                                  >
                                    <Text style={{ color: '#737373', fontSize: 14, textAlign: 'justify' }}>
                                      {item.requesterRate}
                                    </Text>
                                  </ViewMoreText>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </CardItem>
                      </Card>
                    </View>
                  </Card>
                </View>
              }
              {selectedIndex === 2
                &&
                <View style={{ marginBottom: 70 }}>
                  <Card style={styles.cardContainer}>
                    <CardItem header bordered style={styles.cardHeader}>
                      <Row>
                        <Col xs={11}>
                          <Text style={styles.cardHeaderText}>
                            Task Completed
                          </Text>
                        </Col>
                        <Col xs={1}>
                        </Col>
                      </Row>
                    </CardItem>
                    <View style={{ marginHorizontal: 10 }}>
                      {/* Doer offer with attachment & requester reply */}
                      <Card style={styles.cardReplyContainer}>
                        {/* Doer offer */}
                        <CardItem style={styles.cardContent}>
                          <Row>
                            <Col xs={1}>
                              <TouchableHighlight
                                activeOpacity={1}
                                underlayColor="#f2f2f2"
                                onPress={() => Alert.alert('User clicked!', 'Route to user details information')}
                              >
                                <Image style={{
                                  height: 30,
                                  width: 25,
                                  resizeMode: 'contain',
                                  alignSelf: 'center',
                                  justifyContent: 'center'
                                }}
                                  source={item.doerPic} />
                              </TouchableHighlight>
                            </Col>
                            <Col xs={11}>
                              <Row rowStyles={{ marginBottom: 5 }}>
                                <Row>
                                  <Col xs={8}>
                                    <TouchableHighlight
                                      activeOpacity={1}
                                      underlayColor="#f2f2f2"
                                      onPress={() => Alert.alert('User clicked!', 'Route to user details information')}
                                    >
                                      <Text numberOfLines={1} style={{ marginLeft: 10, fontSize: 16 }}>
                                        {item.doerName}
                                        <Text style={{ fontSize: 12, color: '#ff3232' }}>  (Doer)</Text>
                                      </Text>
                                    </TouchableHighlight>
                                  </Col>
                                  <Col xs={4}>
                                    <StarRating />
                                  </Col>
                                </Row>
                                <Row>
                                  <Text note style={{ fontSize: 10, marginLeft: 10, textAlign: 'right' }}>
                                    {item.doerOfferDate}
                                  </Text>
                                </Row>
                              </Row>
                              <Row>
                                <Col xs={12}>
                                  <ViewMoreText
                                    numberOfLines={2}
                                    renderViewMore={this.renderViewMoreOffer}
                                    renderViewLess={this.renderViewLessOffer}
                                    textStyle={{ marginLeft: 10 }}
                                  >
                                    <Text style={{ color: '#737373', fontSize: 14, marginLeft: 10, textAlign: 'justify' }}>
                                      {item.doerOffer}
                                    </Text>
                                  </ViewMoreText>
                                </Col>
                              </Row>
                              <Row rowStyles={{ marginTop: 10, marginLeft: 10 }}>
                                <ScrollView horizontal>
                                  <Row>
                                    <Col>
                                      <Image style={styles.thumbnailDoer} source={item.attachment1} />
                                    </Col>
                                    <Col>
                                      <Image style={styles.thumbnailDoer} source={item.attachment2} />
                                    </Col>
                                    <Col>
                                      <Image style={styles.thumbnailDoer} source={item.attachment3} />
                                    </Col>
                                    <Col>
                                      <Image style={styles.thumbnailDoer} source={item.attachment4} />
                                    </Col>
                                    <Col>
                                      <Image style={styles.thumbnailDoer} source={item.attachment5} />
                                    </Col>
                                  </Row>
                                </ScrollView>
                              </Row>
                            </Col>
                          </Row>
                        </CardItem>
                      </Card>
                    </View>
                  </Card>
                </View>
              }
            </View>
          ))
          }

        </Content>

        {/* Bottom nav */}
        {dataTask && dataTask.map((item, i) => (
          <View key={i} style={styles.bottomNav}>
            <Row>
              <Col xs={5}>
                <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                  <Row>
                    <Text style={{
                      fontSize: 14,
                      textAlign: 'center',
                      color: '#737373',
                      paddingBottom: 2
                    }}
                    >
                      Task Budget :
                    </Text>
                  </Row>
                  <Row>
                    <NumberFormat
                      value={item.budget}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'RM '}
                      renderText={
                        value =>
                          <View style={{ flexDirection: 'row' }}>
                            <Icon name="wallet-outline" style={{
                              fontSize: 20,
                              paddingRight: 10,
                              color: '#5cb85c'
                            }} />
                            <Text style={{
                              fontSize: 20,
                              fontWeight: 'bold',
                              color: '#5cb85c',
                            }}>{value}</Text>
                          </View>
                      }
                    />
                  </Row>
                </View>
              </Col>
              <Col xs={7}>
                {/* Lets Duit Button */}
                <Button block disabled style={{
                  marginRight: 10,
                  backgroundColor: '#808080',
                  borderRadius: 15
                }}
                >
                  <Text style={{ fontWeight: 'bold' }}>Reviewed</Text>
                </Button>
              </Col>
            </Row>

            {/* Report Modal */}
            <Modal
              isVisible={reportModalVisible}
              transparent={true}
              avoidKeyboard={false}
              hasBackdrop={true}
              statusBarTranslucent={false}
              onRequestClose={() => { this.toggleReportModal(!reportModalVisible) }}
              onBackButtonPress={() => { this.toggleReportModal(!reportModalVisible) }}
              onBackdropPress={() => { this.toggleReportModal(!reportModalVisible) }}
              onSwipeComplete={() => { this.toggleReportModal(!reportModalVisible) }}
              swipeDirection={['up', 'down', 'left', 'right']}
              style={{ marginHorizontal: 5 }}
            >
              <View style={styles.modalView}>
                <Row rowStyles={{ marginBottom: 20 }}>
                  <Col xs={10} colStyle={{ justifyContent: 'center' }}>
                    <Text style={{
                      textAlign: 'center',
                      paddingLeft: 50,
                      fontSize: 18,
                      fontWeight: 'bold'
                    }}
                    >
                      Report Task
                    </Text>
                  </Col>
                  <Col xs={2}>
                    <TouchableHighlight
                      activeOpacity={1}
                      underlayColor="#f2f2f2"
                      onPress={() => {
                        this.toggleReportModal(!reportModalVisible)
                      }}
                      style={{ width: 25, alignSelf: 'flex-end' }}
                    >
                      <Icon name='close' style={{ color: '#ff3232', width: 25 }} />
                    </TouchableHighlight>
                  </Col>
                </Row>
                <Row rowStyles={{ marginBottom: 20 }}>
                  <Col xs={12} colStyles={{ justifyContent: 'center' }}>
                    <Text style={{
                      fontSize: 16,
                      marginBottom: 5,
                      paddingLeft: 5,
                      fontWeight: 'bold'
                    }}>
                      Your report :
                    </Text>
                  </Col>
                  <Col xs={12}>
                    <Textarea
                      rowSpan={5}
                      bordered
                      returnKeyType={'none'}
                      keyboardType={'default'}
                      placeholderTextColor={'#b9b9b9'}
                      placeholder="Tell something about this task or leave a tip for others."
                      style={{ paddingLeft: 15, fontSize: 16, borderRadius: 15 }}
                    />
                  </Col>
                </Row>
                <View style={{ position: 'absolute', bottom: 10, alignSelf: 'center' }}>
                  <Button style={{
                    backgroundColor: '#ff3232',
                    borderRadius: 15,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    width: 300
                  }}
                    onPressIn={this.showToastWithGravityAndOffset}
                    onPress={() => { this.toggleReportModal(!reportModalVisible) }}
                  >
                    <Icon name='paper-plane-outline' style={{ fontSize: 18, color: '#fff', marginRight: 0 }} />
                    <Text style={{ fontWeight: 'bold' }}>
                      Send
                    </Text>
                  </Button>
                  <Text note style={{
                    textAlign: 'center',
                    textDecorationLine: 'underline',
                    paddingVertical: 15,
                    color: '#ff3232'
                  }}>
                    Slide anywhere to cancel
                  </Text>
                </View>
              </View>
            </Modal>

            {/* Question Modal */}
            <Modal
              isVisible={questionModalVisible}
              transparent={true}
              avoidKeyboard={true}
              hasBackdrop={true}
              statusBarTranslucent={false}
              onRequestClose={() => { this.toggleQuestionModal(!questionModalVisible) }}
              onBackButtonPress={() => { this.toggleQuestionModal(!questionModalVisible) }}
              onBackdropPress={() => { this.toggleQuestionModal(!questionModalVisible) }}
              onSwipeComplete={() => { this.toggleQuestionModal(!questionModalVisible) }}
              swipeDirection={['up', 'down', 'left', 'right']}
              style={{ marginHorizontal: 5 }}
            >
              <View style={styles.modalView}>
                <Row rowStyles={{ marginBottom: 20 }}>
                  <Col xs={10} colStyle={{ justifyContent: 'center' }}>
                    <Text style={{
                      textAlign: 'center',
                      paddingLeft: 50,
                      fontSize: 18,
                      fontWeight: 'bold'
                    }}
                    >
                      Leave a Question
                    </Text>
                  </Col>
                  <Col xs={2}>
                    <TouchableHighlight
                      activeOpacity={1}
                      underlayColor="#f2f2f2"
                      onPress={() => {
                        this.toggleQuestionModal(!questionModalVisible)
                      }}
                      style={{ width: 25, alignSelf: 'flex-end' }}
                    >
                      <Icon name='close' style={{ color: '#ff3232', width: 25 }} />
                    </TouchableHighlight>
                  </Col>
                </Row>
                <Row rowStyles={{ marginBottom: 20 }}>
                  <Col xs={12} colStyles={{ justifyContent: 'center' }}>
                    <Text style={{
                      fontSize: 16,
                      marginBottom: 5,
                      paddingLeft: 5,
                      fontWeight: 'bold'
                    }}>
                      Your question :
                    </Text>
                  </Col>
                  <Col xs={12}>
                    <Textarea
                      rowSpan={5}
                      bordered
                      returnKeyType={'none'}
                      keyboardType={'default'}
                      placeholderTextColor={'#b9b9b9'}
                      placeholder="Ask something about this task for more details."
                      style={{ paddingLeft: 15, fontSize: 16, borderRadius: 15 }}
                    />
                  </Col>
                </Row>
                {/* attachment form */}
                <Row rowStyles={{ marginBottom: 10, }}>
                  <Col xs={12}>
                    <Text style={{
                      fontSize: 16,
                      marginBottom: 5,
                      fontWeight: 'bold'
                    }}>
                      Attachment :
                </Text>
                  </Col>
                  <Col xs={12}>
                    <Card style={[styles.cardContainer, { elevation: 1 }]}>
                      <CardItem style={[styles.cardContent, { marginLeft: 0, marginRight: 5 }]} >
                        <Col xs={4}>
                          <TouchableHighlight
                            activeOpacity={1}
                            underlayColor="#f2f2f2"
                            style={{ width: 80 }}
                            onPress={() => Alert.alert('Upload image!', 'Upload image from galery or camera')}>
                            <Image style={[styles.thumbnail, { borderRadius: 5, marginRight: 0 }]}
                              source={require('../assets/capture.jpg')} />
                          </TouchableHighlight>
                        </Col>
                        <Col xs={8}>
                          <ScrollView horizontal>
                            <Row>
                              <Col>
                                <Image style={styles.thumbnail} source={item.attachment1} />
                              </Col>
                              <Col>
                                <Image style={styles.thumbnail} source={item.attachment2} />
                              </Col>
                              <Col>
                                <Image style={styles.thumbnail} source={item.attachment3} />
                              </Col>
                              <Col>
                                <Image style={styles.thumbnail} source={item.attachment4} />
                              </Col>
                              <Col>
                                <Image style={styles.thumbnail} source={item.attachment5} />
                              </Col>
                            </Row>
                          </ScrollView>
                        </Col>
                      </CardItem>
                    </Card>
                  </Col>
                </Row>
                <View style={{ position: 'absolute', bottom: 10, alignSelf: 'center' }}>
                  <Button style={{
                    backgroundColor: '#ff3232',
                    borderRadius: 15,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    width: 300
                  }}
                    onPressIn={this.showToastWithGravityAndOffset}
                    onPress={() => { this.toggleQuestionModal(!questionModalVisible) }}
                  >
                    <Icon name='paper-plane-outline' style={{ fontSize: 18, color: '#fff', marginRight: 0 }} />
                    <Text style={{ fontWeight: 'bold' }}>
                      Send
                    </Text>
                  </Button>
                  <Text note style={{
                    textAlign: 'center',
                    textDecorationLine: 'underline',
                    paddingVertical: 15,
                    color: '#ff3232'
                  }}>
                    Slide anywhere to cancel
                  </Text>
                </View>
              </View>
            </Modal>
          </View>
        ))
        }

        {/* FABs  */}
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ bottom: 90, right: 18 }}
          style={{
            borderRadius: 30,
            backgroundColor: '#ff3232',
            borderColor: '#ff3232',
            borderWidth: 1,
            height: 50,
            width: 50,
            elevation: 5,
          }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="ellipsis-vertical-outline" style={{ fontSize: 26, color: '#fff' }} />
          <Button style={{ backgroundColor: '#ff3232' }}
            onPress={() => Alert.alert('Set up Alert Clicked!', 'Set up Alert')}>
            <Icon name="bell-alert-outline" type='MaterialCommunityIcons' />
            <View style={{ right: 50, position: 'absolute' }}>
              <Text style={{
                fontSize: 14,
                fontWeight: 'bold',
                height: 26,
                padding: 5,
                borderRadius: 10,
                backgroundColor: 'rgba(0,0,0,0.8)'
              }}>
                Set up Alerts
                </Text>
            </View>
          </Button>
          <Button style={{ backgroundColor: '#ff3232' }}
            onPress={this.goToTaskPost}>
            <Icon name="pencil-plus-outline" type='MaterialCommunityIcons' />
            <View style={{ right: 50, position: 'absolute' }}>
              <Text style={{
                fontSize: 14,
                fontWeight: 'bold',
                height: 26,
                padding: 5,
                borderRadius: 10,
                backgroundColor: 'rgba(0,0,0,0.8)'
              }}>
                Post a Similar Task
                </Text>
            </View>
          </Button>
          <Button style={{ backgroundColor: '#ff3232' }}
            onPress={() => Alert.alert('Share Task!', 'Share task')}>
            <Icon name="share-social-outline" type='Ionicons' />
            <View style={{ right: 50, position: 'absolute' }}>
              <Text style={{
                fontSize: 14,
                fontWeight: 'bold',
                height: 26,
                padding: 5,
                borderRadius: 10,
                backgroundColor: 'rgba(0,0,0,0.8)'
              }}>
                Share Task
                </Text>
            </View>
          </Button>
          <Button style={{ backgroundColor: '#ff3232' }}
            onPress={() => { this.toggleReportModal(true) }}>
            <Icon name="flag-outline" type='Ionicons' />
            <View style={{ right: 50, position: 'absolute' }}>
              <Text style={{
                fontSize: 14,
                fontWeight: 'bold',
                height: 26,
                padding: 5,
                borderRadius: 10,
                backgroundColor: 'rgba(0,0,0,0.8)'
              }}>
                Report Task
                </Text>
            </View>
          </Button>
        </Fab>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffcccc'
  },
  content: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  rowStyles: {
    paddingTop: 15
  },
  icon: {
    fontSize: 20,
    color: '#8c8c8c',
    marginLeft: 10
  },
  modalView: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    flexDirection: 'column',
  },
  cardContainer: {
    borderRadius: 15,
    minHeight: 80,
    paddingBottom: 5
  },
  cardItem: {
    borderRadius: 15,
  },
  cardHeader: {
    borderRadius: 15,
    height: 40,
  },
  cardHeaderText: {
    color: '#000',
    fontWeight: 'bold'
  },
  cardContent: {
    borderRadius: 15,
    marginHorizontal: 10,
    paddingBottom: 15,
  },
  rowStylesReply: {
    backgroundColor: '#f8f8f8',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    paddingVertical: 10,
    paddingRight: 5,
    marginBottom: 5,
  },
  cardReplyContainer: {
    borderRadius: 15,
    marginTop: 10,
    minHeight: 80,
    elevation: 0,
  },
  cardReply: {
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 15,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  taskStatus: {
    width: 70,
    height: 20,
    alignSelf: 'flex-end',
    backgroundColor: '#808080'
  },
  budget: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5cb85c',
    paddingTop: 2,
    width: 20
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
  },
  tabsContainerStyle: {
    height: 40,
    backgroundColor: 'transparent',
    marginBottom: 5
  },
  tabContent: {
    color: '#444444',
    borderRadius: 15,
    backgroundColor: '#fff',
    fontSize: 18,
    margin: 24,
    width: 300,
    height: 250,
    alignSelf: 'center'
  },
  tabStyle: {
    borderColor: 'transparent',
    borderRadius: 15,
    borderEndWidth: 1,
    borderStartWidth: 1,
    borderTopRightRadius: 15,
    marginRight: 5,
    shadowColor: "#000",
    elevation: 5,
  },
  activeTabStyle: {
    backgroundColor: '#ff3232',
    borderColor: '#ff3232',
    borderWidth: 1
  },
  tabTextStyle: {
    color: '#D52C43',
    fontSize: 14
  },
  firstTabStyle: {
    //custom styles
  },
  lastTabStyle: {
    //custom styles
  },
  bottomNav: {
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopColor: '#808080',
    borderRightColor: '#808080',
    borderLeftColor: '#808080',
    borderTopWidth: 1,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
    elevation: 16,
  },
  viewMore: {
    fontSize: 14,
    color: '#ff3232',
    textAlign: 'center',
    paddingTop: 2
  },
  viewMoreOffer: {
    fontSize: 14,
    color: '#ff3232',
    paddingTop: 2,
    marginLeft: 10
  },
  thumbnail: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
    marginRight: 10,
  },
  thumbnailDoer: {
    height: 40,
    width: 40,
    resizeMode: 'cover',
    marginRight: 10,
  }
})