import { View, Text } from 'react-native'
import React from 'react'
import { style  } from './style'
import { url } from '../../util/url'

export default function NewHome() {
    fetch(`${url}`)
  return (
    <View style={style.parent}>
      <Text>index page</Text>
    </View>
  )
}