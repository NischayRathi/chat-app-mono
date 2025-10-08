import axios from "axios"
import { BACKEND_URL } from "../app/config"
import { ChatRoomClient } from "./ChatRoomClient";

async function getChats(roomId: string){
    try {
        const response = await axios.get(`${BACKEND_URL}/chats/${roomId}`);
        return response.data.messages;
    } catch (error) {
        // Room doesn't exist yet or no messages
        return [];
    }
}

export async function ChatRoom({id}:{
    id: string
}){
    const messages = await getChats(id);

    return <ChatRoomClient id={id} messages={messages}/>
}