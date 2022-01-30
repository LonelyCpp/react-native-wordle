import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ScreenFooter from './app/components/ScreenFooter';
import ScreenHeader from './app/components/ScreenHeader';
import GameScreen from './app/GameScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScreenHeader />
        <GameScreen />
        <ScreenFooter />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
