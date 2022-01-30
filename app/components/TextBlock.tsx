import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export enum TextBlockState {
  GUESS = 'guess',
  CORRECT = 'correct',
  POSSIBLE = 'possible',
  INCORRECT = 'incorrect',
}

const ColorMap: Record<TextBlockState, string> = {
  [TextBlockState.GUESS]: 'transparent',
  [TextBlockState.CORRECT]: '#76b041',
  [TextBlockState.POSSIBLE]: '#FFC914',
  [TextBlockState.INCORRECT]: '#8b939c',
};

interface TextBlockProps {
  text: string;
  state: TextBlockState;
}

const TextBlock = (props: TextBlockProps) => {
  const {text, state} = props;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: ColorMap[state],
        },
      ]}>
      <Text style={styles.text}>{text.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TextBlock;
