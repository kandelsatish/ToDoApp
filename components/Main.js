import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import App from '../App'
import GlobalState from './GlobalState'
export default function Main() {
  return (
    <GlobalState>
      <NavigationContainer>
        <App/>
      </NavigationContainer>
     </GlobalState>

  )
}
