import {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={String(contador)}
        editable={false}
        keyboardType="numeric"
      />
      <Pressable
        style={styles.botao}
        onPress={() => setContador(valorAtual => valorAtual + 1)}>
        <Text style={styles.textoBotao}>OK</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 24,
  },
  input: {
    width: 160,
    height: 56,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#111',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  botao: {
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
