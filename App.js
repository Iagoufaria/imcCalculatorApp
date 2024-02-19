import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  const [altura, setAltura] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [resultado, setResultado] = React.useState(null);

  const onChangeAltura = (altura) => {
    setAltura(altura);
  };

  const onChangePeso = (peso) => {
    setPeso(peso);
  };

  const calcularIMC = () => {
    if (altura.trim() === '' || peso.trim() === '') {
      Alert.alert('Por favor, preencha altura e peso.');
      return;
    }

    const alturaFloat = parseFloat(altura);
    const pesoFloat = parseFloat(peso);

    if (isNaN(alturaFloat) || isNaN(pesoFloat) || alturaFloat <= 0 || pesoFloat <= 0) {
      Alert.alert('Por favor, insira valores válidos para altura e peso.');
      return;
    }

    const imc = pesoFloat / (alturaFloat * alturaFloat);
    setResultado(imc.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IMC CALCULATOR</Text>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.text1}>Altura</Text>
        <TextInput
          id='alturaValue'
          style={styles.input}
          onChangeText={onChangeAltura}
          value={altura}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
        />
        <Text style={styles.text1}>Peso</Text>
        <TextInput
          id='pesoValue'
          style={styles.input}
          onChangeText={onChangePeso}
          value={peso}
          placeholder="Ex: 86.300"
          keyboardType="numeric"
        />

        <Button title="Calcular" color={"red"} onPress={calcularIMC} />

        {resultado !== null && (
          <Text style={styles.result} id='textResult'>
            Seu IMC é: {resultado}
          </Text>
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfd7db',
    alignItems: 'center',
  },
  title: {
    color: "red",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 100,
    paddingBottom: 50,
  },
  input: {
    height: 40,
    width: 320,
    margin: 12,
    marginBottom: 40,
    backgroundColor: '#cfd7db',
    padding: 10,
    borderRadius: 20,
  },
  safeArea: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 50,
    paddingLeft: 25,
    paddingRight: 25,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  text1: {
    marginLeft: 15,
    fontSize: 20,
  },
  result: {
    color: "red",
    fontSize: 25,
    marginTop: 20,
    alignSelf: "center",
  }
});
