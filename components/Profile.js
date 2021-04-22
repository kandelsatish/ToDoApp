import { Container, Content, List, ListItem,Switch } from 'native-base'
import React,{useEffect,useState} from 'react'
import {View,Text,StyleSheet, Touchable, TouchableOpacity} from 'react-native'
export default function Profile() {
 
    return (
        <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text style={{color:'#1a355b',fontWeight:'bold',fontSize:20}}>Account</Text>
            </ListItem>                    
            <ListItem>
              <Text style={style.text}>My Todo App</Text>
            </ListItem>
            <ListItem>
              <Text style={style.text}>kandelsatish123@gmail.com</Text>
            </ListItem>
            <ListItem>
              <Text style={style.text}>Total remaining taska 23</Text>
            </ListItem>
            <ListItem>
                <TouchableOpacity>
              <Text style={style.text}>Log Out</Text>
              </TouchableOpacity>
            </ListItem>

            <ListItem itemDivider>
              <Text style={{color:'#1a355b',fontWeight:'bold',fontSize:20}}>Theme</Text>
            </ListItem>  
            <ListItem style={{justifyContent:'space-between'}}>
              <Text style={style.text}>Light Theme</Text>
              <Switch value={false} />
            </ListItem>
          </List>
        </Content>
      </Container>
    )
}

const style=StyleSheet.create({
    text:{
        fontSize:18,
    }
})
