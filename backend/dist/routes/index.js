import { Router } from 'express';
import userRouter from './user-routes.js';
import chatRoutes from './chat-routes.js';
const appRouter = Router();
appRouter.use("/user", userRouter);
appRouter.use("/chats", chatRoutes);
export default appRouter;
//# sourceMappingURL=index.js.map