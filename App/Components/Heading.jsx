import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({props,isViewAll}) {
  return (
    <View style={styles.headingContainer}>
       <Text style={styles.heading}>{props} </Text>
       {isViewAll && <Text>View All</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontFamily: "outfit-medium",
        marginBottom: 10,


    },
    headingContainer:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
  }

})
