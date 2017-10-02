import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { getCount } from '../../reducers/counter';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


class MeetingRoomPage extends Component {
  static navigationOptions = {
    title: 'Meeting room',
  };

  static propTypes = {
    label: PropTypes.string.isRequired,
    meetingRoom: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    showAlert: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Label: {this.props.label}</Text>
        <Text>Meeting room: {this.props.meetingRoom}</Text>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text>Counter: {this.props.count}</Text>
        <Button title="Increment" onPress={() => this.props.increment()} />
        <Button title="Show alert" onPress={() => this.props.showAlert()} />
        <Button title="Navigate away" onPress={() => this.props.navigation.navigate('Away')} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(actions.incrementCounter()),
  showAlert: () => dispatch(actions.showAlert({ title: 'Title', message: 'Message' })),
});

const mapStateToProps = (state, ownProps) => ({
  label: (ownProps.navigation.state.params || {}).label || '',
  meetingRoom: (ownProps.navigation.state.params || {}).meetingRoom || '',
  count: getCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(MeetingRoomPage);