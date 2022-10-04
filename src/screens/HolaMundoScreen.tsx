import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class HolaMundoScreen extends Component {
  render() {
    return (
        <View style={{
            flex: 1,        
            justifyContent: 'center',
          }}>
            <Text style={{
              fontSize: 50,
              textAlign: 'center',
            }}>
              App test test
            </Text>
        </View>
    )
  }
}

export default HolaMundoScreen;