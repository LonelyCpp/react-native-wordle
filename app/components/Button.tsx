import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface ButtonProps {
  cta: string;
  onPress(): void;
}

const Button = (props: ButtonProps) => {
  const {cta, onPress} = props;

  const [isPressedIn, setIsPressedIn] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setIsPressedIn(true)}
      onPressOut={() => setIsPressedIn(false)}>
      <View style={[styles.button, isPressedIn && styles.active]}>
        <Text style={styles.cta}>{cta}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#fff',
  },
  cta: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  active: {
    elevation: 2,
  },
});

export default Button;
