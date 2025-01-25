import {Request, Response, NextFunction} from "express";

const roleMiddleware = (role: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (req.user?.role != role) {
            res.status(403).json({message: 'you do not have permission to access this resource'});
            console.log(typeof req.user?.role);
            console.log(typeof role);
            return;
        }
        next();
    }
}

export default roleMiddleware;