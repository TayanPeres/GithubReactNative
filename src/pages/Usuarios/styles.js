import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
   // backgroundColor: colors.white,
    padding: metrics.baseMargin * 2,
    justifyContent: 'center',
    alignItems: 'center'

  },
  ava: {
    width: 150,
    height: 150,
    marginTop: metrics.baseMargin * 25,
    borderRadius: metrics.baseRadius,
  },
  name: {
    marginTop: metrics.baseMargin * 41,
    color: colors.darkTransparent,
    height: 20,
  },
  login: {
    color: colors.darkTransparent,
    height: 20,
  },
  location: {
  //  marginTop: 1,
    color: colors.darkTransparent,
    height: 20,
  },
  contInfo: {
    backgroundColor: colors.secundary,
  }
})

export default styles