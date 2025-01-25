import {Strategy as JwtStrategy, ExtractJwt, StrategyOptions} from 'passport-jwt';
import {PassportStatic} from 'passport';
import dotenv from "dotenv";

dotenv.config();

export const passportConfig = (passport: PassportStatic) => {
    const opts: StrategyOptions = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.KEY_SECRET || 'defaultSecret' as string,
    };

    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            console.log(jwt_payload);
            return done(null, jwt_payload);
        })
    );
}