import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'

export default function BusinessPhotos({business}) {
  return (
    <View>
      <Heading props={"Photos"} />
      <FlatList
      data={business.images}
      numColumns={2}
      renderItem={({item})=>(
        <Image source={{uri:item.url}}
        style={{width:'50%',height:200,flex:1,borderRadius:5,margin:5,}}
        />
      )}
      />
    </View>
  )
}