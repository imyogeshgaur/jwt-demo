const express = require('express');
const connectDb = require("./Db/connect")
const app = express();
app.use(express.json());
connectDb();
app.use("/api",require("./routes/userRouter"))
app.listen(8000,"localhost");
