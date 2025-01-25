import {Response, Request} from "express";
import dotenv from "dotenv";
import twilio from "twilio";

const number = "+521"

dotenv.config();
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendMessage = async (req: Request, res: Response) => {
    const {to, body} = req.body;
    try {
        await client.messages.create({
            from: process.env.TWILIO_PHONE_NUMBER,
            body,
            to,
        });
        res.json({message: 'Message sent'});
    } catch (error) {
        res.status(500).json({message: 'Error sending messageaaaa', error});
    }
}

export {sendMessage};