import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Welcome from './pages/Welcome'
import Usuario from './pages/Usuarios'
import Repositorios from './pages/Repositorios'
//import RepoGit from './RepoGit'

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator({
  Welcome,
  Usuario,
  Repositorios,

}, {
  initialRouteName: userLogged ? 'Usuario' : 'Welcome'
}))

export default Routes