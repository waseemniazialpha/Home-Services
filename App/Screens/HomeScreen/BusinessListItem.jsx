import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function BusinessListItem({business}) {
  return (
    <View style={styles.container}>
      <Image source={{uri:business?.images[0]?.url}} 
      style={styles.image}
      />
      <View style={styles.infoContainer}>
      <Text style={{fontSize:17,fontFamily:'outfit-medium'}}>{business.name}</Text>
      <Text style={{fontFamily:'outfit',fontSize:13,color:Colors.GRAY}}>{business.contactPerson}</Text>
      <Text style={{fontFamily:'outfit',fontSize:12,color:Colors.PRIMARY,padding:3,backgroundColor:Colors.PRIMARY_LIGHT,alignSelf:'flex-start',borderRadius:3,paddingHorizontal:7,}}>{business.category.name}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    image:{
        width:160,
        height:100,
        borderRadius:10,
    },
    container:{
      backgroundColor:Colors.WHITE,
      padding:10,
      borderRadius:10,
    },
    infoContainer:{
      display:'flex',
      gap:3,
      padding:7,
    }
})