import express from 'express'
import dotenv from 'dotenv'
import passport from 'passport'
import {passportConfig} from "./auth";
import authRouter from "./src/routes/auth";
import userRouter from "./src/routes/user";
import messageRouter from "./src/routes/message";
import roleMiddleware from "./src/middlewares/roleMiddleware";

dotenv.config()
passportConfig(passport)

const app = express()
const PORT = process.env.PORT

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


app.get('/', (req, res) => {
    res.json({ message: 'Hello World' })
});

app.use('/auth', authRouter);
app.use('/users',passport.authenticate('jwt', {session: false}), userRouter);
app.use('/sms',passport.authenticate('jwt', {session: false}),roleMiddleware('1'), messageRouter);

