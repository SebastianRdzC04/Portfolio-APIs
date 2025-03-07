import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config()
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


const sendMessage = async (data: string, to: string) => {
    const response = await client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        body: data,
        to,
    })
    return response;
}

const sendMessages = async (data: string, to: string[]) => {
    try {
        for (const phone of to) {
            await client.messages.create({
                from: process.env.TWILIO_PHONE_NUMBER,
                body: data,
                to: phone,
            });
        }
        return {message: 'Messages sent'};
    } catch (error) {
        return {message: 'Error sending messages', error};
    }
}

export {sendMessage, sendMessages};