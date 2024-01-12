import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useEffect,useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from "react-native-calendar-picker";
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';
import GlobalApi from '../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import moment from 'moment';
export default function BookingModal({businessId, hideModal }) {
    const [timeList, settimeList] = useState()
    const [selectedTime, setselectedTime] = useState()
    const [selectedDate, setselectedDate] = useState()
    const [note, setnote] = useState()
    const {user} =useUser();
    useEffect(() => {
    getTime();
    }, [])
    
    const getTime =()=>{
        const timeList = []
        for(let i =8;i<=12;i++){
            timeList.push(
                {time:i+':00 AM'}
            )
            timeList.push(
                {time:i+':30 AM'}
            )
        }
        for(let i =1;i<=7;i++){
            timeList.push(
                {time:i+':00 PM'}
            )
            timeList.push(
                {time:i+':30 PM'}
            )
        }
        settimeList(timeList)
    }
    const createNewBooking =()=>{

        if(!selectedTime || !selectedDate){
            ToastAndroid.show('Please Select Date and Time',ToastAndroid.LONG)
            return;
            
        }
        const data ={
            userName:user?.fullName,
            userEmail:user?.primaryEmailAddress.emailAddress,
            time:selectedTime,
            date:moment(selectedDate).format('DD-MMM-YYYY'),
            businessId:businessId,
        }
        GlobalApi.createBooking(data).then(resp=>{
            console.log(resp)
            ToastAndroid.show('Booking Created Successfully!',ToastAndroid.LONG)
            hideModal()
        })
    }
    return (
        <ScrollView >
        <KeyboardAvoidingView>
            <TouchableOpacity style={{ marginBottom: 10, display: 'flex', flexDirection: "row", gap: 10, alignItems: "center" ,marginBottom:20}}
                onPress={() => hideModal()}
            >
                <Ionicons name="arrow-back-sharp" size={30} color="black" />
                <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>Booking</Text>
            </TouchableOpacity>
            <Heading props={"Select Date"}/>
            <View style={styles.calenderContainer}>
                <CalendarPicker
                 onDateChange={setselectedDate}
                 width={340}
                 minDate={Date.now()}
                 todayBackgroundColor={Colors.BLACK}
                 todayTextStyle={{color:Colors.WHITE}}
                 selectedDayColor={Colors.PRIMARY}
                 selectedDayTextColor={Colors.WHITE}
                 />
            </View>
            <View style={{marginTop:10,}}a>
                <Heading props={'Select Time Slot'}/>
                <FlatList
                data={timeList}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({item,index})=>(
                    <TouchableOpacity onPress={()=>setselectedTime(item.time)} style={{marginRight:10, }}>
                        <Text style={[selectedTime == item.time ? styles.selectedTime : styles.unSelectedTime]}>{item.time}</Text>
                    </TouchableOpacity>
                )}
                />
            </View>
            <View style={{marginTop:20,}}>
            <Heading props={'Any Suggestion Note'}/>
            <TextInput placeholder='Note'
            numberOfLines={4}
            multiline={true}
            style={styles.noteTextArea}
            onChange={(text)=>setnote(text)}

            />
            </View>

            {/* confirmation button  */}

            <View>
                <TouchableOpacity style={{marginTop:10,}}
                onPress={()=>createNewBooking()}
                >
                    <Text style={styles.confirmBtn}>Confirm & Book</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    calenderContainer:{
        backgroundColor:Colors.PRIMARY_LIGHT,
        borderRadius:15,
        padding:20,
    },
    selectedTime:{
        padding:10,
        borderWidth:1,
        borderColor:Colors.PRIMARY,
        borderRadius:99,
        paddingHorizontal:18,
        color:Colors.WHITE,
        backgroundColor:Colors.PRIMARY
    },
    unSelectedTime:{
        padding:10,
        borderWidth:1,
        borderColor:Colors.PRIMARY,
        borderRadius:99,
        paddingHorizontal:18,
        color:Colors.PRIMARY
    },
    noteTextArea:{
        borderWidth:1,
        borderRadius:10,
        textAlignVertical:'top',
        borderColor:Colors.PRIMARY,
        fontSize:16,
        fontFamily:'outfit',
        padding:20,
    },
    confirmBtn:{
        textAlign:'center',
        backgroundColor:Colors.PRIMARY,
        color:Colors.WHITE,
        fontFamily:'outfit-medium',
        fontSize:17,
        padding:13,

        borderRadius:99,
    }
})