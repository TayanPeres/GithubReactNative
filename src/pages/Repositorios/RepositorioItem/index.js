import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity,
  Linking  } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import propTypes from 'prop-types'
import api from '../../../servicos/api'



const RepositorioItem = ({ repository }) => (

    <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(repository.html_url)}>
      <Text style={styles.title}>{repository.full_name}</Text>

      <View style={styles.infoContainer}>
      <Icon name="star" size={12} style={styles.infoIcon} />
        <Text style={styles.infoText}>{repository.stargazers_count}</Text>
      </View>

      <View style={styles.info}>
        <Icon name="code-fork" size={12} style={styles.infoIcon} />
        <Text style={styles.infoText}>{repository.forks_count}</Text>
      </View>
      <View style={styles.info}>
        <Icon name="eye" size={12} style={styles.infoIcon} />
        <Text style={styles.infoText}>{repository.watchers_count}</Text>
      </View>
    </TouchableOpacity>
)

RepositorioItem.PropTypes = {
  repository: propTypes.shape({
    full_name: propTypes.string,
    stargazers_count: propTypes.number,
    forks_count: propTypes.number,
    watchers_count: propTypes.number,

  }).isRequired
}

export default RepositorioItem
