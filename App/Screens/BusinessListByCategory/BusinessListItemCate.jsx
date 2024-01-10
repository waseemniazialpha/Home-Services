import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';

export default function BusinessListItemCate({ business }) {
  return (
    <View style={styles.cointnier}>
      <Image source={{ uri: business?.image[0]?.url }}
        style={styles.imagestyle}

      />
      <View style={styles.subcointanier}>
        <Text style={{fontFamily:"outfit", color:Colors.GARY, fontSize:15}}>{business.contactPerson}</Text>
        <Text style={{fontFamily:"outfit-bold", fontSize:19, }} >{business.name}</Text>
        <Text style={{fontFamily:"outfit", color:Colors.GARY, fontSize:16}}><Ionicons name="location-sharp" size={20} color={Colors.PRIMARY} style={{marginRight:10}} />{business.address}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cointnier: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    display:"flex",
    flexDirection:"row",
    gap:10


  },
  subcointanier:{
    display:"flex",
    gap:8


  },
  imagestyle: {
    width: 100,
    height: 100,
    borderRadius: 15,

  }
})