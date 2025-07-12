const express = require("express")

const app = express()

const wireFrameController = require("./controllers/wireframe_controller");
const cors = require("cors");

app.use(express.json());

app.use(cors());


const port = 4000;
app.use("/AI", wireFrameController);

app.use((req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
        return res.status(200).json({});
    }
});


app.listen(port, () => console.log("server"));