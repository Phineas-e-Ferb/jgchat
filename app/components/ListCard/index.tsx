import React from 'react'
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

type ListCardType = {
    username: string,
    secondaryInfo: string,
    isChatCard: boolean,
    onPress: () => void
}

const ListCard = ({username, secondaryInfo, isChatCard, onPress} : ListCardType) => {
    return (
        <TouchableOpacity style={styles.listCardContainer} onPress={onPress}>
            <View style={styles.userInfo}>
                <Image style={styles.userPic} source={{uri: 'https://criadoresid.com/wp-content/uploads/2016/10/Captura-de-Tela-2020-03-16-a%CC%80s-13.59.50.png'}}/>
                <View style={styles.textContainer}>
                    <Text style={styles.usernameText}>{username}</Text>
                    <Text style={styles.secondaryInfoText}>{secondaryInfo}</Text>
                </View>
            </View>
            {isChatCard}
        </TouchableOpacity>
    )
}

export default ListCard