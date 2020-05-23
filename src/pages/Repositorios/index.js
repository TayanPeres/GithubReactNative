import React, { Component } from 'react'
import { View, Text, AsyncStorage, ActivityIndicator, FlatList,
   TouchableOpacity} from 'react-native'
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'
import api from '../../servicos/api'
import styles from './styles'
import RepositorioItem from './RepositorioItem'
import { WebView } from 'react-native-webview';

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />
TabIcon.PropTypes = {
  tintColor: PropTypes.string.isRequired

}


export default class Repositorios extends Component {
  
    
    state = {
      data: [],
      loading: true,
      refreshing: false,
  }
 
 async componentDidMount() {

  const username = await AsyncStorage.getItem('@Githuber:username')
  const {data} = await api.get(`/users/${username}/repos`)
  
  
  this.setState({ data, loading: false })
  
 }

 renderListItem = ({ item }) => <RepositorioItem repository={item} />

 renderList = () => {
   const { data, refreshing } = this.state 
     
      return (
        <FlatList 
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          onRefresh={this.loadRepositories}
          refreshing={refreshing}
          />
      ) 
 }
  render() {
    const { loading } = this.state
    
    return (
    <View style={styles.container}>
  <Header title="Repositórios" />
 { loading ? <ActivityIndicator style={styles.loading} />
  : this.renderList()}
 </View>
    )
  }
}
