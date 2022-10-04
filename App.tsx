import React, { Component } from 'react'
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import HolaMundoScreen from './src/screens/HolaMundoScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { TareaScreen } from './src/screens/TareaScreen';

export class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#28425B',}}>
        {/* <CounterScreen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionesScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        <TareaScreen />
      </SafeAreaView>
    )
  }
}

export default App;