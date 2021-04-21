import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { Body, Card, CardItem, Container, Content, Header, Text } from 'native-base'
import Todo from './Todo'
// const Todo=()=>{
//     return(
//         <Container style={styles.container}>
//         <Content>
//           <Card>
//             <CardItem>
//               <Body>
//                 <Text>
//                    //Your text here
//                 </Text>
//               </Body>
//             </CardItem>
//           </Card>
//         </Content>
//       </Container>
//     )
// }

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#1a355b"/>
            <Todo />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding:5

    }
})
