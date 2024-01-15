import { View, Text, Image,TouchableOpacity, StyleSheet, ScrollView, Modal, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute ,useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import BusinessPhotos from './BusinessPhotos';
import BusinessAboutMe from './BusinessAboutMe';
import BookingModal from './BookingModal';
export default function BusinessDetailScreen() {
    const navigation = useNavigation()
    const param = useRoute().params;
    const [business, setbusiness] = useState(param?.business)
    const [showModal, setshowModal] = useState(false)
    const onMsgBtnClick = ()=>{
      Linking.openURL('mailto:'+business?.email+'?subject= I am looking for your service&body=Hi There')
    }
  return (
    <View style={{height:'100%'}}>
    <ScrollView>
      <Image source={{uri:business?.images[0]?.url}} style={{width:'100%',height:300}} />
      <TouchableOpacity style={styles.backBtn}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back-sharp" size={30} color={Colors.WHITE} />
              
            </TouchableOpacity>
            <View style={styles.infoContainer}>
            <Text style={{ fontSize: 25, fontFamily: "outfit-bold" }}>{business.name}</Text>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:5,}}>
            <Text style={{ fontSize: 20, fontFamily: "outfit-medium",color:Colors.PRIMARY }}>{business.contactPerson} </Text>
              <Text style={{ fontSize: 14, fontFamily: "outfit-medium" ,backgroundColor:Colors.PRIMARY_LIGHT,color:Colors.PRIMARY,borderRadius:5,alignSelf:'flex-start',padding:5,}}>{business.name}</Text>
            </View>
              <Text style={{ fontSize: 18, fontFamily: "outfit",color:Colors.GRAY }}><Ionicons name="location-sharp" size={20} color={Colors.PRIMARY} style={{marginRight:10}} />{business.address}</Text>
              <View style={{borderWidth:0.2,marginVertical:15,color:Colors.LIGHT_Gray}}></View>

              <BusinessAboutMe business={business}/>
            <View style={{borderWidth:0.2,marginVertical:15,color:Colors.LIGHT_Gray}}></View>
            <BusinessPhotos business={business}/>
            </View>
            
    </ScrollView>
    <View style={{display:'flex',flexDirection:'row',gap:10,margin:5,}}>
    <TouchableOpacity
    onPress={()=>onMsgBtnClick()}
    style={styles.msgBtn}
    >
        <Text style={{
            textAlign:'center',
            color:Colors.PRIMARY,
            fontFamily:'outfit-medium',
            }}>Messsage</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={()=>setshowModal(true)}
    style={styles.bookingBtn}
    >
        <Text style={{
            textAlign:'center',
            color:Colors.WHITE,
            fontFamily:'outfit-medium',
            }}>Booking</Text>
    </TouchableOpacity>
    </View>
    <Modal
    animationType='slide'
    visible={showModal}
    >
     <View style={{padding:20,}}>
     <BookingModal
     businessId={business.id}
     hideModal={()=>setshowModal(false)}/>
     </View>
    </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
    backBtn:{
        position:'absolute',
        padding:20,

    },
    infoContainer:{
        display:'flex',
        gap:7,
        padding:20,
    },
    msgBtn:{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderWidth:1,
        borderColor:Colors.PRIMARY,
        borderRadius:99,
        flex:1,
    },
    bookingBtn:{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderWidth:1,
        borderColor:Colors.PRIMARY,
        
        borderRadius:99,
        flex:1,
    }
})