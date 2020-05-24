import React, { Component } from 'react'
import { Text, View, AsyncStorage, Image,
  TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import api from '../../servicos/api'
//import styles from '../../components/Header/styles'
import styles from './styles'


export default class Usuario extends Component {
  state = {
    data: [],
    user: {}
  }
  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username')
    const { data } = await api.get(`/users/${username}`)
   //buscar todos os repositorios const response = await api.get(`/users/${username}/repos`)
    this.setState({ user: data })
  }

  render() {
    const { user } = this.state
    return (
      <View>
       <Header title="Usuários" />

       <View style={styles.container}>
       <TouchableOpacity style={styles.button}
       onPress={() => this.props.navigation.navigate('Repositorios')}>
       

       <Image style={styles.ava} source={{uri: user.avatar_url}} />
       </TouchableOpacity>
       <Text style={styles.name}>Nome: {user.name}</Text>
       <Text style={styles.login}>Login: {user.login}</Text>
       <Text style={styles.location}>Localização: {user.location}</Text>
      </View>
      </View>
    )
  }
}

