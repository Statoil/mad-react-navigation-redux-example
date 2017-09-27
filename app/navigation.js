import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Placeholder from './components/containers/Placeholder';
import SecondPlaceholder from './components/containers/SecondPlaceholder';


const AppNavigator = StackNavigator({
  Home: { screen: Placeholder },
  Away: { screen: SecondPlaceholder },
});

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

export const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

class App extends Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(App);
