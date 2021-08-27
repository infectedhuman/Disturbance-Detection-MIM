import  * as React  from "react";
import { View, Text, Image} from "react-native";
import { ChatListItemProps } from "../../types";
import styles from "./style";
import moment from "moment";
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props
  const user = chatRoom.users[1]
  const colorScheme = useColorScheme();
  return(
    <View style={styles.container}>

        <View style={styles.leftContainer}>

          <Image source={{uri: user.imageUri}} style={styles.avatar}/>

          <View style={styles.midContainer}>

            <View style={styles.upperContainer}>
              <Text numberOfLines={1} ellipsizeMode={'tail'} style={[styles.username,{color: Colors[colorScheme].text}]}>{user.name}</Text>
              <Text style={styles.time}>
                {moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}
              </Text>
            </View>

            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
          </View>

        </View>
    </View>
  )
}

export default ChatListItem;
