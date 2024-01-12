import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Heading from '../../Components/Heading'
import Colors from '../../Utils/Colors'

export default function BusinessAboutMe({business}) {
    const [readMore, setreadMore] = useState(false)

  return (
    <View>
    <Heading props={"About Me"}/>
    <Text style={{fontFamily:'outfit',fontSize:15,color:Colors.GRAY,lineHeight:25,}} numberOfLines={readMore ? 10:5}>{business.about}</Text>
    <TouchableOpacity onPress={()=>setreadMore(!readMore)}>
    <Text style={{color:Colors.PRIMARY,fontFamily:'outfit-medium'}}>{readMore ? 'Read Less':'Read More'}</Text>
    </TouchableOpacity>
</View>
  )
}