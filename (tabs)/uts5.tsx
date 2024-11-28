import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface FirstScreenProps {
  navigation: NavigationProp<any>; // Ganti 'any' dengan tipe yang lebih spesifik jika perlu
}

const FirstScreen: React.FC<FirstScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ini adalah layar pertama.</Text>
      <Button
        title="Pindah ke Layar Kedua"
        onPress={() => alert(' YAHAHAHAHAHA TYDACK BYSA PIN-AAH')} // Pindah ke layar kedua
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default FirstScreen;