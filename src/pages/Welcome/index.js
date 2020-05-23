import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, StatusBar,
AsyncStorage, ActivityIndicator } from 'react-native'
import styles from './styles'
import api from '../../servicos/api'
import PropTypes from 'prop-types'

export default class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }
  state = {
    username: '',
    loading: false,
    error: false
  }
  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`)
    return user
  }
  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username)
  }
  signIn = async () => {
    const { username } = this.state
    const { navigation } = this.props
    this.setState({loading: true })

    try {
      await this.checkUserExists(username)
      await this.saveUser(username)

      navigation.navigate('Usuario')
      
    } catch (err) {
      this.setState({ loading: false, error: true})
    }

  }
  render() {
    const { username, loading, error } = this.state

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
       <Text style={styles.title}>Bem-Vindo</Text>
        <Text style={styles.text}>
          Para continuar precisamos que você informe seu usuário no github.
       </Text>

       { error && <Text style={styles.error}>Usuário inexistente.</Text>}
       <View style={styles.form}>
         <TextInput 
           style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text})}
            />

        <TouchableOpacity style={styles.button} onPress={this.signIn}>
          {loading ? ( 
            <ActivityIndicator size="small" color="#FFF" /> 
             ) : (
           <Text style={styles.buttonText}>Prosseguir</Text>
              )}
        </TouchableOpacity>    
        </View>
      </View>
    )
  }
}
