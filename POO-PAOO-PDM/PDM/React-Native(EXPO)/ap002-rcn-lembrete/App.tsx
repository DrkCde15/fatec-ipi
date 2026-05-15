import {
  Pressable,
  StyleSheet,
  Text, 
  TextInput,
  View,
  FlatList
} from 'react-native'
import { useState } from 'react'
import{ AntDesign } from '@expo/vector-icons'

interface Lembrete{
  id: string;
  texto: string;
}

export default function App() {
  const [lembrete, setLembrete] = useState({id: '', texto: ''})
  const [lembretes, setLembretes] = useState <Lembrete[]> ([])
  const [emModoDeEdicao, setEmModoDeEdicao] = useState(false)

  const adicionar = () => {
    const novoLembrete : Lembrete = {id: Date.now().toString(), texto: lembrete.texto}
    setLembretes(lembretesAtual => [novoLembrete, ...lembretesAtual])
    setLembrete({id: '', texto: ''})
  }

  const remover = (lembrete: Lembrete) => {
    setLembretes(lembretesAtual => 
      (lembretesAtual.filter((item) => item.id !== lembrete.id)))
  }

  const atualizar = (lembrete: Lembrete) => {
    const lembretesAtualizados = lembretes.map(item => {
      if(item.id === lembrete.id){
        return lembrete
      }
      return item
    })
    setLembretes(lembretesAtualizados)
    setLembrete({id: '', texto: ''})
    setEmModoDeEdicao(false)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input} 
        placeholder='Digite um lembrete...'
        value={lembrete.texto}
        onChangeText={(novoTexto) => setLembrete({id: lembrete.id, texto: novoTexto})}
      />
      <Pressable
        onPress={() => emModoDeEdicao ? atualizar(lembrete) : adicionar()}
        style={styles.button}>
        <Text
          style={styles.buttonText}>
          {emModoDeEdicao ? 'Atualizar lembrete' : 'Salvar lembrete'}
        </Text>
      </Pressable>
      <FlatList
        style={styles.list}
        data={lembretes}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>
              {item.texto}
            </Text>
            <View style={styles.listItemButtons}>
              <Pressable onPress={() => remover(item)}>
                <AntDesign 
                name="delete" 
                size={20} 
                color="red" />
              </Pressable>
              <Pressable onPress={() => {
                setLembrete({id: item.id, texto: item.texto});
                setEmModoDeEdicao(true);
              }}>
                <AntDesign 
                name="edit" 
                size={20} 
                color="blue" />
              </Pressable>
            </View>
          </View>
        )}
      />
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
    paddingVertical: 60
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    textAlign: 'center',
    borderRadius: 4
  },
  list: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    width: '80%',
    marginTop: 12,
    padding: 8
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
    listItemButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '30%'
  },
  listItemText: {
    textAlign: 'center',
    width: '70%'
  }
});
