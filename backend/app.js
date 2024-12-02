import express from 'express'
import { dbConnect } from './dbConnect.js';
import { router } from './router.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';
const app = express();
dbConnect();
app.use(cors());

const port = 1231;
app.use(fileUpload());
app.use(express.json());
app.use("/signup", router);

app.listen(port, () => {
    console.log(`server runnning on port ${port}`);
})