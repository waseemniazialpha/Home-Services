import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItemCate from './BusinessListItemCate';
import Colors from '../../Utils/Colors';
import PageHeading from '../../Components/PageHeading';

export default function BusinessListByCategoryScreen() {
    const [businessList, setbusinessList] = useState([]);
    const navigation = useNavigation();
    const param = useRoute().params;

    useEffect(() => {
        param && getBusinessListByCategory();
    }, [param])

    const getBusinessListByCategory = () => {
        GlobalApi.getBusinessListByCategory(param.category).then(resp => {
            console.log(resp.businessLists + "hellllooooooo")
            setbusinessList(resp.businessLists)
        })
    }

    return (
        <View style={{ padding: 20, paddingTop: 30 }}>
            <PageHeading title={param.category}/>

     {businessList?.length>0   ?    <FlatList
                data={businessList}
                renderItem={({ item, index }) => (
                    <BusinessListItemCate business={item} />
                )}
            />:<Text style={{fontSize:20,marginTop:'20%',textAlign:'center',color:Colors.GRAY}}>No Business Found</Text>}
        </View>
    )
}
