import { View, Text, Image, FlatList, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import { useClerk, useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
export default function Profile() {
  const navigation = useNavigation();
  // const param = useRoute().params;
  // const [business, setbusiness] = useState(param?.business)

  const { signOut } = useClerk();
  const onLogoutPress = () => {
    signOut();  // Call the signOut method to log out the user
  };
  const { user } = useUser();


  const onMsgBtnClick = ()=>{
    Linking.openURL('mailto:support@gmail.com?subject= I am looking for your service&body=Hi There')
  }
  // const profileManu = [
  //   {
  //     id: 1,
  //     name: "Home",
  //     icon: "home"
  //   },
  //   {
  //     id: 2,
  //     name: "My Booking",
  //     icon: "bookmark-sharp"
  //   },
  //   {
  //     id: 3,
  //     name: "Contact Us",
  //     icon: "mail"
  //   },
  //   {
  //     id: 4,
  //     name: "Logout",
  //     icon: "log-out"
  //   }
  // ]
  return (
    <View>
      <View style={{ padding: 20, paddingTop: 30, backgroundColor: Colors.PRIMARY }}>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 30, color: Colors.WHITE }}>Profile</Text>
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={{ uri: user.imageUrl }} style={{ width: 90, height: 90, borderRadius: 99 }} />
          <Text style={{ fontSize: 20, fontFamily: 'outfit-medium', color: Colors.WHITE, marginTop: 8, }}>{user.fullName}</Text>
          <Text style={{ fontSize: 16, fontFamily: 'outfit-medium', color: Colors.WHITE, marginTop: 6, }}>{user.primaryEmailAddress.emailAddress}</Text>
        </View>

      </View>
      <View style={{ paddingTop: 50, marginLeft: 20, }}>

        <TouchableOpacity
          onPress={()=>navigation.push('Home')}
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 20, }}>
          <Ionicons name="home" size={36} color={Colors.PRIMARY} />
          <Text style={{ fontSize: 20, fontFamily: 'outfit' }}>Home</Text>

        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => navigation.push('booking')}
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 20, }}>
          <Ionicons name="bookmark-sharp" size={36} color={Colors.PRIMARY} />
          <Text style={{ fontSize: 20, fontFamily: 'outfit' }}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>onMsgBtnClick()}
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 20, }}>
          <Ionicons name="mail" size={36} color={Colors.PRIMARY} />
          <Text style={{ fontSize: 20, fontFamily: 'outfit' }}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onLogoutPress()}
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 20, }}>
          <Ionicons name='log-out' size={36} color={Colors.PRIMARY} />
          <Text style={{ fontSize: 20, fontFamily: 'outfit' }}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}