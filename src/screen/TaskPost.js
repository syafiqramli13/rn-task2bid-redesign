import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Row, Col } from 'react-native-responsive-grid-system';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Modal from 'react-native-modal';
import { Alert, StyleSheet, View, Image, TouchableHighlight, ScrollView, ToastAndroid, StatusBar } from 'react-native';
import {
  Container,
  Content,
  Picker,
  Card,
  CardItem,
  Icon,
  Text,
  Textarea,
  Item,
  Input,
  CheckBox,
  Button,
  List,
  ListItem,
} from 'native-base';

export default class TaskPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      errors: false,
      selected: undefined,
      active: false,
      submitModalVisible: false,
    };
  }

  goToTaskList = () => {
    Actions.TaskList();
  }

  toggleSubmitModal(isVisible) {
    this.setState({ submitModalVisible: isVisible });
  }

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'flex-end',
      alignSelf: 'center'
    }
  };

  onValueChange(value) {
    this.setState({
      selected: value
    });
  };

  onNextStep = () => {
    console.log('called next step');
  };

  onPrevStep = () => {
    console.log('called previous step');
  };

  showToastSaveDraft = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Successfuly Save as draft!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      150
    );
  };
  showToastPostTask = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Successfuly Post Task!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      150
    );
  };

  render() {
    const buttonStyle = {
      backgroundColor: '#f2f2f2',
      textAlign: 'center',
      borderRadius: 15,
      marginHorizontal: 0,
      width: 100
    };
    const buttonFinishTextStyle = {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      color: '#00cd00',
    };
    const buttonNextTextStyle = {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      color: '#ff3232',
    };
    const buttonPreviousTextStyle = {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      color: '#808080',
    };
    const progressStepsStyle = {
      activeStepIconBorderColor: '#00cd00',
      activeStepIconColor: '#fff',
      activeLabelColor: '#00cd00',
      activeStepNumColor: '#000',
      completedStepIconColor: '#00cd00',
      completedLabelColor: '#93d28e',
      completedProgressBarColor: '#00cd00',
      completedCheckColor: '#fff',
      topOffset: 20,
      marginBottom: 60,
    };
    const { submitModalVisible } = this.state

    return (
      <Container style={styles.container}>
        <View>
          <StatusBar barStyle='dark-content' hidden={false} backgroundColor="#fff" translucent={false} />
        </View>
        <Content style={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.category}>Category : Gift Delivery</Text>
          <ProgressSteps  {...progressStepsStyle}>
            <ProgressStep
              label="Description"
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              scrollViewProps={this.defaultScrollViewProps}
              nextBtnTextStyle={buttonNextTextStyle}
              nextBtnStyle={buttonStyle}
            >
              <View style={{}}>
                <Text style={styles.formTitle}>
                  What would you like to post today?
                </Text>
                {/* task title form */}
                <Row rowStyles={{ marginBottom: 50 }}>
                  <Col xs={12} colStyles={{ justifyContent: 'center' }}>
                    <Text style={styles.formLabel}>
                      Give a title for your task :
                  </Text>
                  </Col>
                  <Col xs={12}>
                    <Item regular style={{ height: 45, borderRadius: 15, marginTop: 5 }}>
                      <Input
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        placeholderTextColor={'#b9b9b9'}
                        placeholder="e.g: Need cleaner for my double story house"
                        style={{ marginLeft: 5, fontSize: 16 }}
                      />
                    </Item>
                  </Col>
                </Row>
                {/* details task form */}
                <Row rowStyles={{ marginBottom: 50 }}>
                  <Col xs={12} colStyles={{ justifyContent: 'center' }}>
                    <Text style={styles.formLabel}>
                      Write some details about your task :
                  </Text>
                  </Col>
                  <Col xs={12}>
                    <Textarea
                      rowSpan={5}
                      bordered
                      returnKeyType={'none'}
                      keyboardType={'default'}
                      placeholderTextColor={'#b9b9b9'}
                      placeholder="Give a little description on how your task will be. Do you have any special requirement?"
                      style={{ paddingLeft: 15, fontSize: 16, borderRadius: 15 }}
                    />
                  </Col>
                </Row>
              </View>
            </ProgressStep>

            <ProgressStep
              label="Due Date"
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              scrollViewProps={this.defaultScrollViewProps}
              previousBtnTextStyle={buttonPreviousTextStyle}
              nextBtnTextStyle={buttonNextTextStyle}
              nextBtnStyle={buttonStyle}
              previousBtnStyle={buttonStyle}
            >
              <View style={{}}>
                <Text style={styles.formTitle}>
                  When does your task need to be done?
                </Text>
                {/* Date form */}
                <Row rowStyles={{ marginBottom: 50 }}>
                  <Col xs={2} colStyles={{ justifyContent: 'center' }}>
                    <Text style={styles.formLabel}>
                      Date :
                    </Text>
                  </Col>
                  <Col xs={10}>
                    <Item regular style={{ height: 45, borderRadius: 15, marginTop: 5 }}>
                      <Input
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        placeholderTextColor={'#b9b9b9'}
                        placeholder="Give a date to be done (dd/mmm/yyyy)"
                        style={{ marginLeft: 5, fontSize: 16 }}
                      />
                    </Item>
                  </Col>
                </Row>
                <Row rowStyles={{ marginBottom: 40 }}>
                  <Col xs={1} colStyles={{ marginRight: 10 }}>
                    <CheckBox checked={false} color="#ff3232" style={{ borderRadius: 5 }} />
                  </Col>
                  <Col xs={10}>
                    <Text style={{ fontSize: 16 }}>
                      I am OK with the task done anytime.
                    </Text>
                  </Col>
                </Row>
                {/* Time form */}
                <Row rowStyles={{ marginBottom: 50 }}>
                  <Col xs={2} colStyles={{ justifyContent: 'center' }}>
                    <Text style={styles.formLabel}>
                      Time :
                    </Text>
                  </Col>
                  <Col xs={10}>
                    <Item regular style={{ height: 45, borderRadius: 15, marginTop: 5 }}>
                      <Input
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        placeholderTextColor={'#b9b9b9'}
                        placeholder="Give a time to be done (hh:mm)"
                        style={{ marginLeft: 5, fontSize: 16 }}
                      />
                    </Item>
                  </Col>
                </Row>
              </View>
            </ProgressStep>

            <ProgressStep
              label="Location"
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              scrollViewProps={this.defaultScrollViewProps}
              previousBtnTextStyle={buttonPreviousTextStyle}
              nextBtnTextStyle={buttonNextTextStyle}
              nextBtnStyle={buttonStyle}
              previousBtnStyle={buttonStyle}
            >
              <View style={{}}>
                <Text style={styles.formTitle}>
                  Where does your task need to be done?
                </Text>
                {/* Location form */}
                <Row rowStyles={{ marginBottom: 10 }}>
                  <Col xs={3} colStyles={{ justifyContent: 'center' }}>
                    <Text style={styles.formLabel}>
                      Address :
                    </Text>
                  </Col>
                  <Col xs={9}>
                    <Item regular style={{ borderRadius: 15, marginTop: 5 }}>
                      <Input
                        multiline
                        numberOfLines={2}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        placeholderTextColor={'#b9b9b9'}
                        placeholder="No. 12345, Road 43, Kajang, Selangor.."
                        style={{ marginLeft: 5, fontSize: 16 }}
                      />
                    </Item>
                  </Col>
                </Row>
                <Row rowStyles={{ marginBottom: 10 }}>
                  <Col xs={3} />
                  <Col xs={1} colStyles={{ marginRight: 10 }}>
                    <CheckBox checked={false} color="#ff3232" style={{ borderRadius: 5 }} />
                  </Col>
                  <Col xs={7}>
                    <Text style={{ fontSize: 16 }}>
                      Remote
                    </Text>
                  </Col>
                </Row>
                {/* Map API */}
                <View>
                  <Image style={styles.map} source={require('../assets/map.jpg')} />
                </View>
              </View>
            </ProgressStep>

            <ProgressStep
              label="Budget"
              onSubmit={() => { this.toggleSubmitModal(true) }}
              onPrevious={this.onPrevStep}
              scrollViewProps={this.defaultScrollViewProps}
              previousBtnTextStyle={buttonPreviousTextStyle}
              finishBtnText={'Proceed'}
              nextBtnTextStyle={buttonFinishTextStyle}
              nextBtnStyle={buttonStyle}
              previousBtnStyle={buttonStyle}
            >
              <View style={{}}>
                <Text style={styles.formTitle}>
                  How about suggesting a task budget?
                </Text>
                {/* Budget form */}
                <Row rowStyles={{ marginBottom: 30 }}>
                  <Col xs={12} colStyles={{ justifyContent: 'center' }}>
                    <Text style={styles.formLabel}>
                      What is your budget (RM) on this task? :
                    </Text>
                  </Col>
                  <Col xs={12} colStyles={{ flexDirection: 'row' }}>
                    <Col xs={5}>
                      <Item picker regular style={{ height: 45, borderRadius: 15, marginTop: 5 }}>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          style={{ width: undefined, height: 45, borderRadius: 15 }}
                          placeholder="Select your Payment"
                          placeholderStyle={{ color: "#bfc6ea" }}
                          placeholderIconColor="#007aff"
                          selectedValue={this.state.selected}
                          onValueChange={this.onValueChange.bind(this)}
                        >
                          <Picker.Item label="Cash" value="key0" />
                          <Picker.Item label="Wallet" value="key1" />
                          <Picker.Item label="ATM Card" value="key2" />
                          <Picker.Item label="Debit Card" value="key3" />
                          <Picker.Item label="Credit Card" value="key4" />
                        </Picker>
                      </Item>
                    </Col>
                    <Col xs={7}>
                      <Item regular style={{ height: 45, borderRadius: 15, marginTop: 5 }}>
                        <Input
                          returnKeyType={'done'}
                          keyboardType={'numeric'}
                          placeholderTextColor={'#b9b9b9'}
                          placeholder="Enter your budget amount..."
                          style={{ marginLeft: 5, fontSize: 16 }}
                        />
                      </Item>
                    </Col>
                  </Col>
                </Row>
                {/* Attachment form */}
                <Row rowStyles={{ marginBottom: 30 }}>
                  <Col xs={12} colStyles={{ justifyContent: 'center' }}>
                    <Text style={styles.formLabel}>
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
                                <Image style={styles.thumbnail} source={require('../assets/clean1.jpg')} />
                              </Col>
                              <Col>
                                <Image style={styles.thumbnail} source={require('../assets/clean2.jpg')} />
                              </Col>
                              <Col>
                                <Image style={styles.thumbnail} source={require('../assets/clean3.jpg')} />
                              </Col>
                              <Col>
                                <Image style={styles.thumbnail} source={require('../assets/babysit1.jpg')} />
                              </Col>
                              <Col>
                                <Image style={styles.thumbnail} source={require('../assets/babysit2.jpg')} />
                              </Col>
                            </Row>
                          </ScrollView>
                        </Col>
                      </CardItem>
                      <Text note style={{ textAlign: 'center', paddingHorizontal: 20, paddingBottom: 10 }}>
                        * How about some pictures attachment to help your requester to understand better on your request? (optional)
                      </Text>
                    </Card>
                  </Col>
                </Row>
                <Row rowStyles={{ marginBottom: 40 }}>
                  <Col xs={12}>
                    <Text note style={{ color: '#ff3232' }}>
                      ** Please propose a fair budget that you are happy to pay your doer. Remember that the doer may propose a new budget based on your budget.
                    </Text>
                  </Col>
                </Row>
              </View>
            </ProgressStep>
          </ProgressSteps>
        </Content>

        {/* Submit Modal */}
        <Modal
          isVisible={submitModalVisible}
          transparent={true}
          avoidKeyboard={true}
          hasBackdrop={true}
          statusBarTranslucent={false}
          onRequestClose={() => { this.toggleSubmitModal(!submitModalVisible) }}
          onBackButtonPress={() => { this.toggleSubmitModal(!submitModalVisible) }}
          onBackdropPress={() => { this.toggleSubmitModal(!submitModalVisible) }}
          onSwipeComplete={() => { this.toggleSubmitModal(!submitModalVisible) }}
          swipeDirection={['up', 'down', 'left', 'right']}
          style={{ marginHorizontal: 5 }}
        >
          <View style={styles.modalView}>
            <Row rowStyles={{ alignSelf: 'center' }}>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginVertical: 10 }}>
                Post Summary
              </Text>
            </Row>
            <List>
              <ListItem>
                <Col xs={3} colStyles={styles.listTitle}>
                  <Text style={styles.listTextTitle}>
                    Task Title
                  </Text>
                </Col>
                <Col xs={9}>
                  <Text style={styles.listTextContent}>
                    Cleaning my house and garage while babysit my child
                  </Text>
                </Col>
              </ListItem>
              <ListItem>
                <Col xs={3} colStyles={styles.listTitle}>
                  <Text style={styles.listTextTitle}>
                    Task Details
                  </Text>
                </Col>
                <Col xs={9}>
                  <Text style={styles.listTextContent}>
                    I need some one to clean my garage. I need some one to babysit my childrens lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  </Text>
                </Col>
              </ListItem>
              <ListItem>
                <Col xs={3} colStyles={styles.listTitle}>
                  <Text style={styles.listTextTitle}>
                    Date
                  </Text>
                </Col>
                <Col xs={9}>
                  <Text style={styles.listTextContent}>
                    25 Dec 2020
                  </Text>
                </Col>
              </ListItem>
              <ListItem>
                <Col xs={3} colStyles={styles.listTitle}>
                  <Text style={styles.listTextTitle}>
                    Time
                  </Text>
                </Col>
                <Col xs={9}>
                  <Text style={styles.listTextContent}>
                    12:00 PM
                  </Text>
                </Col>
              </ListItem>
              <ListItem>
                <Col xs={3} colStyles={styles.listTitle}>
                  <Text style={styles.listTextTitle}>
                    Location
                  </Text>
                </Col>
                <Col xs={9}>
                  <Text style={styles.listTextContent}>
                    68100, Batu Caves, Gombak, Selangor, Malaysia
                  </Text>
                </Col>
              </ListItem>
              <ListItem>
                <Col xs={3} colStyles={styles.listTitle}>
                  <Text style={styles.listTextTitle}>
                    Budget
                  </Text>
                </Col>
                <Col xs={9}>
                  <Text style={styles.listTextContent}>
                    Cash : RM 1,000
                  </Text>
                </Col>
              </ListItem>
              <ListItem style={{ borderColor: 'transparent' }}>
                <Col xs={3} colStyles={styles.listTitle}>
                  <Text style={styles.listTextTitle}>
                    Attachment
                  </Text>
                </Col>
                <Col xs={9}>
                  <ScrollView horizontal>
                    <Row>
                      <Col>
                        <Image style={styles.thumbnail} source={require('../assets/clean1.jpg')} />
                      </Col>
                      <Col>
                        <Image style={styles.thumbnail} source={require('../assets/clean2.jpg')} />
                      </Col>
                      <Col>
                        <Image style={styles.thumbnail} source={require('../assets/clean3.jpg')} />
                      </Col>
                      <Col>
                        <Image style={styles.thumbnail} source={require('../assets/babysit1.jpg')} />
                      </Col>
                      <Col>
                        <Image style={styles.thumbnail} source={require('../assets/babysit2.jpg')} />
                      </Col>
                    </Row>
                  </ScrollView>
                </Col>
              </ListItem>
              <View>
                <Row rowStyles={{ marginTop: 20 }}>
                  <Col xs={6}>
                    <Button block style={{
                      backgroundColor: '#808080',
                      borderRadius: 15,
                      marginHorizontal: 10
                    }}
                      onPressIn={this.showToastSaveDraft}
                      onPressOut={() => { this.toggleSubmitModal(!submitModalVisible) }}
                      onPress={this.goToTaskList}
                    >
                      <Icon name='documents-outline' style={{ fontSize: 18, color: '#fff', marginRight: 0 }} />
                      <Text style={{ fontWeight: 'bold' }}>
                        Save Draft
                      </Text>
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button block style={{
                      backgroundColor: '#ff3232',
                      borderRadius: 15,
                      marginHorizontal: 10
                    }}
                      onPressIn={this.showToastPostTask}
                      onPressOut={() => { this.toggleSubmitModal(!submitModalVisible) }}
                      onPress={this.goToTaskList}
                    >
                      <Icon name='paper-plane-outline' style={{ fontSize: 18, color: '#fff', marginRight: 0 }} />
                      <Text style={{ fontWeight: 'bold' }}>
                        Post Now
                      </Text>
                    </Button>
                  </Col>
                </Row>
                <Text note style={{
                  textAlign: 'center',
                  textDecorationLine: 'underline',
                  paddingVertical: 20,
                  color: '#ff3232'
                }}>
                  Slide anywhere to cancel
                  </Text>
              </View>
            </List>
          </View>
        </Modal>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  category: {
    textAlign: 'center',
    fontSize: 26,
    marginVertical: 20
  },
  formTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 40,
    fontWeight: 'bold'
  },
  formLabel: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  map: {
    height: 500,
    width: 'auto',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 15,
  },
  thumbnail: {
    height: 60,
    width: 60,
    resizeMode: 'cover',
    marginRight: 10,
  },
  cardContent: {
    borderRadius: 15,
    marginHorizontal: 10,
    paddingBottom: 15
  },
  cardContainer: {
    borderRadius: 15,
    marginTop: 10,
    minHeight: 80,
    paddingBottom: 5
  },
  modalView: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
  },
  list: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  listItem: {
    marginBottom: 5,
  },
  listTitle: {
    alignSelf: 'flex-start',
    marginRight: 10
  },
  listTextTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start'
  },
  listTextContent: {
    fontSize: 14,
    textAlign: 'justify',
    alignSelf: 'flex-start'
  }
})