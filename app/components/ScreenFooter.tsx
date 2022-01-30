import React from 'react';
import {Linking, Platform, StyleSheet, Text, View} from 'react-native';

const HOME_URL = 'https://github.com/LonelyCpp/react-native-wordle';

const ScreenFooter = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.subtitle}
        accessibilityRole="link"
        // @ts-ignore (web only prop)
        href={HOME_URL}
        onPress={
          Platform.OS !== 'web' ? () => Linking.openURL(HOME_URL) : undefined
        }>
        (source)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    color: '#5998c5',
    fontWeight: '400',
    fontSize: 12,
  },
});

export default ScreenFooter;
