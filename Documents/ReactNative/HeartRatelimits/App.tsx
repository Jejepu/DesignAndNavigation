import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
const [age, setAge] = useState<string>("")

const ageAsNumber: number = Number(age)
const safeAge = age !=='' && Number.isFinite(ageAsNumber)

const lowerLimit = safeAge ? (220 - ageAsNumber)*0.65 : 0
const upperLimit = safeAge ? (220 - ageAsNumber)*0.85 : 0

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput style={styles.input}
      placeholder='0'
      keyboardType='number-pad'
      value={age}
      onChangeText={setAge}
      ></TextInput>
      <Text>Lower limit: {lowerLimit.toFixed(2)} bpm</Text>
      <Text>Upper limit: {upperLimit.toFixed(2)} bpm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: 32,
    marginBottom: 16
  },
  input: {
    height: 40,
    width: 70,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});
