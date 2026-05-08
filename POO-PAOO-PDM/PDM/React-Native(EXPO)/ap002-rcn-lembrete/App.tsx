import {
  Button,
  Pressable,
  StyleSheet,
  Text, 
  TextInput,
  View 
} from 'react-native';
import { useState } from 'react'

interface Lembrete{
  id: string;
  texto: string;
}

export default function App() {
  const [lembrete, setLembrete] = useState('')
  const [lembretes, setLembretes] = useState <Lembrete[]> ([])

  const adicionar = () => {
    const novoLembrete : Lembrete = {id: Date.now().toString(), texto: lembrete}
    setLembretes(lembretesAtual => [novoLembrete, ...lembretesAtual])
    setLembrete('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input} 
        placeholder='Digite um lembrete...'
        value={lembrete}
        onChangeText={setLembrete}
      />
      <Pressable
        style={styles.button}>
        <Text
          style={styles.buttonText}>
          Salvar lembrete
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '80%',
    backgroundColor: '#0096F3',
    padding: 12,
    borderRadius: 4
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    textAlign: 'center',
    borderRadius: 4
  }
});