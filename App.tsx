import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {GameEngine} from 'react-native-game-engine';
import entities from './Entities';
import Physics from './physics';
import Physics2 from './physics2';

const App = () => {
  // useEffect(() => {
  //   console.log('.......');
  // }, [Physics]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <GameEngine
        style={styles.gameEngine}
        entities={entities()}
        systems={[Physics]}
        running={true}>
        <StatusBar hidden />
      </GameEngine>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  gameEngine: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'steelblue',
  },
});
