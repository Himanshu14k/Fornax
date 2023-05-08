import React from 'react';
import {View, Switch} from 'react-native';
import {connect} from 'react-redux';
import {themeMode} from '../../../States/Actions/DarkThemeActions/actions';

const SwitchComponent = props => {
  return (
    <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
      <Switch
        onValueChange={props.themeMode}
        thumbColor={props.status ? '#00d9ff' : 'grey'}
        value={props.status}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    status: state.themeR.status,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    themeMode: () => dispatch(themeMode()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SwitchComponent);
