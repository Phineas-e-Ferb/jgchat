import { Message } from "../screens/Chat";

export default function sort_messages(message1: Message, message2: Message){
    if(message1.senderTime > message2.senderTime) return 1;
    if(message1.senderTime < message2.senderTime) return -1;
    return 0;
}