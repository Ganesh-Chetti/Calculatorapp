import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString()); // Use eval cautiously
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    ['C', '(', ')', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=', ''],
  ];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.inputText}>{input}</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {buttons.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((button, buttonIndex) => (
                <TouchableOpacity
                  key={buttonIndex}
                  style={[
                    styles.button,
                    button === '=' && styles.equalsButton,
                  ]}
                  onPress={() => handlePress(button)}
                >
                  <Text style={styles.buttonText}>{button}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
        <Text style={styles.footer}>Calc by [YourName]</Text>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  resultContainer: {
    flex: 2,
    backgroundColor: '#282C34',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
  },
  inputText: {
    fontSize: 30,
    color: 'white',
  },
  resultText: {
    fontSize: 40,
    color: 'limegreen',
  },
  buttonContainer: {
    flex: 5,
    backgroundColor: '#f5f5f5',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 5,
  },
  button: {
    flex: 1,
    margin: 5,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
  },
  equalsButton: {
    backgroundColor: 'green',
  },
  footer: {
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
    color: '#888',
  },
});
