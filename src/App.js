import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet, LogBox } from 'react-native';
import { Text, Input } from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import TaskList from './screen/TaskList';
import TaskPost from './screen/TaskPost';
import TaskDetailsOpen from './screen/TaskDetailsOpen';
import TaskDetailsAssigned from './screen/TaskDetailsAssigned';
import TaskDetailsCompleted from './screen/TaskDetailsCompleted';
import TaskDetailsReviewed from './screen/TaskDetailsReviewed';
import LetsDuit from './screen/LetsDuit';

LogBox.ignoreAllLogs();
if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <Router navigationBarStyle={styles.topNavbar}>
        <Scene key="root">
          <Scene
            key="TaskList"
            component={TaskList}
            initial={true}
            left={() => null}
            title="Task List"
            titleStyle={styles.title}
            tintColor='#fff'
          />
          <Scene
            key="TaskPost"
            component={TaskPost}
            left={() => null}
            back={() => true}
            right={() => true}
            title="Task Post"
            titleStyle={styles.blackTitle}
            navigationBarStyle={styles.whiteNavbar}
            tintColor='#000'
          />
          <Scene
            key="TaskDetailsOpen"
            component={TaskDetailsOpen}
            left={() => null}
            back={() => true}
            right={() => true}
            title="Task Details"
            titleStyle={styles.title}
            tintColor='#fff'
          />
          <Scene
            key="TaskDetailsAssigned"
            component={TaskDetailsAssigned}
            left={() => null}
            back={() => true}
            right={() => true}
            title="Task Details"
            titleStyle={styles.title}
            tintColor='#fff'
          />
          <Scene
            key="TaskDetailsCompleted"
            component={TaskDetailsCompleted}
            left={() => null}
            back={() => true}
            right={() => true}
            title="Task Details"
            titleStyle={styles.title}
            tintColor='#fff'
          />
          <Scene
            key="TaskDetailsReviewed"
            component={TaskDetailsReviewed}
            left={() => null}
            back={() => true}
            right={() => true}
            title="Task Details"
            titleStyle={styles.title}
            tintColor='#fff'
          />
          <Scene
            key="LetsDuit"
            component={LetsDuit}
            left={() => null}
            back={() => true}
            right={() => true}
            title="Lets Duit"
            titleStyle={styles.blackTitle}
            navigationBarStyle={styles.whiteNavbar}
            tintColor='#000'
          />
        </Scene>
      </Router >
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    flex: 1,
    color: '#fff'
  },
  topNavbar: {
    backgroundColor: '#ff3232',
    color: '#fff'
  },
  whiteNavbar: {
    backgroundColor: '#fff',
  },
  blackTitle: {
    textAlign: 'center',
    color: '#000',
    flex: 1,
  }
})