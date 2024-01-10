import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItemCate from './BusinessListItemCate';

export default function BusinessListByCategoryScreen() {
    const [businessList, setbusinessList] = useState([]);
    const navigation = useNavigation();
    const param = useRoute().params;

    useEffect(() => {
        param && getBusinessListByCategory();
    }, [param])

    const getBusinessListByCategory = () => {
        GlobalApi.GetBusinessListBYCategory(param.category).then(resp => {
            console.log(resp.businessLists + "hellllooooooo")
            setbusinessList(resp.businessLists)
        })
    }

    return (
        <View style={{ padding: 20, paddingTop: 30 }}>
            <TouchableOpacity style={{ display: 'flex', flexDirection: "row", gap: 10, alignItems: "center" }}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back-sharp" size={30} color="black" />
                <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>{param?.category}</Text>
            </TouchableOpacity>

            <FlatList
                data={businessList}
                renderItem={({ item, index }) => (
                    <BusinessListItemCate business={item} />
                )}
            />
        </View>
    )
}
