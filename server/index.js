const express = require("express");
require("./db/config")
const internNode = require("./db/schema")
const cors = require("cors")
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.post("/intern", async (req, resp) => {
    try {
        const newData = new internNode(req.body);
        const result = await newData.save();
        resp.send(result);
    } catch (err) {
        resp.status(400).send(err);
    }
})

app.get("/intern", async (req, resp) => {
    try {
        const getData = await internNode.find({});
        resp.send(getData);

    } catch (err) {
        resp.status(400).send(err);
    }
})

app.listen(port, () => {
    console.log(`Run on port ${port} succesfully!`);
})