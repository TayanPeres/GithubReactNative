import React, { Component } from 'react'
import createNavigator from './routes'
import { AsyncStorage } from 'react-native'

export default class Index extends Component {
  state = {
    userChecked: false,
    userLogged : false,
  }

  async componentDidMount(){
    const username = await AsyncStorage.getItem('@Githuber:username')
    
    this.setState({
      userChecked: true,
      userLogged: !!username
    })
   }

  render() {
    const { userChecked, userLogged} = this.state
    if (!userChecked) return null
    const Routes = createNavigator(userLogged)

    return <Routes />
  }
}
