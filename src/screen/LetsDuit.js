import React, { Component } from 'react';
import { Row, Col } from 'react-native-responsive-grid-system';
import NumberFormat from 'react-number-format';
import { Alert, StyleSheet, View, Image, TouchableHighlight, ScrollView, ToastAndroid, StatusBar } from 'react-native';
import { Container, Content, Text, Card, CardItem, CheckBox, Item, Input, Textarea } from 'native-base';
import GradientButton from 'react-native-gradient-buttons';

export default class LetsDuit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bidInput: '',
      coverLetterInput: '',
      showToast: false,
      dataTask: [
        {
          userName: 'Andrew Lim',
          taskTitle: 'Cleaning my house and garage while babysit my child',
          budget: '1000',
          taskStatus: 'Open',
          offers: '3',
          questions: '3',
          postStatus: '8',
          location: '68100, Batu Caves, Gombak, Selangor, Malaysia',
          userPic: require('../assets/user1.png'),
          taskDetail: 'I need some one to clean my garage. I need some one to babysit my childrens lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        }
      ]
    };
  }

  showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Bid Successful! Waiting for Requester approval',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      150
    );
  };

  render() {
    const { dataTask } = this.state
    return (
      <Container style={styles.container}>
        <View>
          <StatusBar barStyle='dark-content' hidden={false} backgroundColor="#fff" translucent={false} />
        </View>
        <Content style={styles.content} showsVerticalScrollIndicator={false}>
          {dataTask && dataTask.map((item, i) => (
            <Row key={i}>
              <Col xs={12}>
                <Text style={[styles.taskTitle, styles.textCenter]}>{item.taskTitle}</Text>
                <Text style={[styles.textCenter, styles.budget]}>
                  Task Budget :
                  <NumberFormat
                    value={item.budget}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={' RM '}
                    renderText={
                      value =>
                        <Text style={{
                          fontSize: 20,
                          fontWeight: 'bold',
                          color: '#5cb85c',
                        }}>{value}</Text>
                    }
                  />
                </Text>
              </Col>
            </Row>
          ))
          }
          {/* Form */}
          <View style={{ marginTop: 40 }}>
            {/* bid price form */}
            <Row rowStyles={{ marginBottom: 20 }}>
              <Col xs={4} colStyles={{ justifyContent: 'center' }}>
                <Text style={{
                  fontSize: 16,
                  fontWeight: 'bold'
                }}>
                  Bid Price (RM)<Text style={{ color: '#ff3232' }}>*</Text>  :
                </Text>
              </Col>
              <Col xs={8}>
                <Item regular style={{ height: 45, borderRadius: 15 }}>
                  <Input
                    returnKeyType={'done'}
                    keyboardType={'numeric'}
                    placeholderTextColor={'#b9b9b9'}
                    placeholder="Enter your bid amount..."
                    style={{ marginLeft: 5, fontSize: 16 }}
                  />
                </Item>
              </Col>
            </Row>
            {/* cover letter form */}
            <Row rowStyles={{ marginBottom: 20 }}>
              <Col xs={12} colStyles={{ justifyContent: 'center' }}>
                <Text style={{
                  fontSize: 16,
                  marginBottom: 5,
                  fontWeight: 'bold'
                }}>
                  Cover Letter<Text style={{ color: '#ff3232' }}> *</Text> :
                </Text>
              </Col>
              <Col xs={12}>
                <Textarea
                  rowSpan={5}
                  bordered
                  returnKeyType={'none'}
                  keyboardType={'default'}
                  placeholderTextColor={'#b9b9b9'}
                  placeholder="Looks like you have made a bid price, How about giving some justification as you cover letter for your bid price? Let's start with your expertise introduction."
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
                    **How about some pictures attachment to help your requester to understand better on your request? (optional)
                  </Text>
                </Card>
              </Col>
            </Row>
            {/* Bid Price Details */}
            <Card style={[styles.cardContainer, { marginBottom: 20 }]}>
              <CardItem header bordered style={styles.cardHeader}>
                <Text style={{ color: '#000', fontWeight: 'bold' }}>Bid Price Details</Text>
              </CardItem>
              <CardItem style={styles.cardContent}>
                <Row>
                  <Col xs={6}>
                    <Row rowStyles={{ flexDirection: 'column', marginBottom: 5 }}>
                      <Text style={{ fontSize: 14, color: '#737373' }}>Your Bid Price:</Text>
                      <Text style={{ fontSize: 18, paddingTop: 5, color: '#5cb85c' }}>RM 1,000.00</Text>
                    </Row>
                    <Row rowStyles={{ flexDirection: 'column', marginTop: 5 }}>
                      <Text style={{ fontSize: 14, color: '#737373' }}>Task2Bid Fee:</Text>
                      <Text style={{ fontSize: 18, paddingTop: 5, color: '#ff3232' }}>RM 180.00</Text>
                    </Row>
                  </Col>
                  <Col xs={6}>
                    <Row rowStyles={{
                      backgroundColor: '#ccf5cc',
                      flexDirection: 'column',
                      flex: 1,
                      justifyContent: 'center',
                      borderRadius: 15
                    }}>
                      <Col xs={12}>
                        <Text style={{ fontSize: 14, color: '#737373', textAlign: 'center' }}>Your Earning:</Text>
                      </Col>
                      <Col xs={12}>
                        <Text style={{
                          fontSize: 20,
                          paddingTop: 5,
                          textAlign: 'center',
                          fontWeight: 'bold',
                          color: '#5cb85c',
                        }}>
                          RM 820.00
                        </Text>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardItem>
            </Card>
            {/* Task contract */}
            <Row rowStyles={{
              flexDirection: 'column',
            }}>
              <Col xs={12}>
                <TouchableHighlight
                  activeOpacity={1}
                  underlayColor="#f2f2f2"
                  style={{ width: 150, height: 25 }}
                  onPress={() => Alert.alert('Task Contract!', 'Open task contract')}
                >
                  <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#6666ff',
                    paddingLeft: 10
                  }}>
                    TASK CONTRACT
                  </Text>
                </TouchableHighlight>
              </Col>
              <Row xs={12} rowStyles={{
                marginTop: 10,
                justifyContent: 'center',
                flexDirection: 'column',
                flex: 1,
              }}>
                <Col xs={1} colStyles={{ marginRight: 10 }}>
                  <CheckBox checked={false} color="#ff3232" style={{ borderRadius: 5 }} />
                </Col>
                <Col xs={10}>
                  <Text style={{ fontSize: 14 }}>
                    By clicking "BID NOW", you are indicating that you have read and agree to the Task Contract
                  </Text>
                </Col>
              </Row>
            </Row>
          </View>

          <GradientButton
            style={{ marginVertical: 40, marginHorizontal: 10 }}
            textStyle={{ fontSize: 16 }}
            gradientBegin='#f5ba57'
            gradientEnd="#00cd00"
            gradientDirection="vertical"
            height={45}
            radius={15}
            impact
            impactStyle='Light'
            onPressAction={this.showToastWithGravityAndOffset}
          >
            BID NOW
          </GradientButton>
        </Content>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  taskTitle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  textCenter: {
    textAlign: 'center',
    alignSelf: 'center'
  },
  budget: {
    paddingVertical: 10
  },
  cardContainer: {
    borderRadius: 15,
    marginTop: 10,
    minHeight: 80,
    paddingBottom: 5
  },
  cardHeader: {
    borderRadius: 15,
    height: 40,
    justifyContent: 'center'
  },
  cardContent: {
    borderRadius: 15,
    marginHorizontal: 10,
    paddingBottom: 15
  },
  thumbnail: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
    marginRight: 10,
  },
})