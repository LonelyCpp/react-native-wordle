import React from 'react';
import {Linking, Platform, StyleSheet, Text, View} from 'react-native';

const HOME_URL = 'https://github.com/LonelyCpp/react-native-wordle';

const SourceLink = () => {
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
        (github)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 12,
    top: 16,
  },
  subtitle: {
    color: '#5998c5',
    fontWeight: '400',
    fontSize: 16,
  },
});

export default SourceLink;
