const express = require("express");
var cors = require("cors");
const engine = require("ejs-mate");
const path = require("path");

const app = express();
app.use(cors());
//setting
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("view", path.join(__dirname, "view"));

// app.set('view')

const scgRouter = require("./routes");
//Rout
app.get("/views", (req, res) => {
    res.render("");
});

app.use("/scg", scgRouter);
app.get("/valueBC", (req, res) => {
    let a = 21;
    let j = 23;
    let k = -21;
    let valueB = [];
    let valueC = [];

    if (true) {
        let b = j - a;
        let BB = a + b;
        valueB = [...[], b];
        console.log("B =", BB);
    }
    if (true) {
        let c = k - a;
        let dd = a + c;
        valueC = [...[], c];

        console.log("C = ", c);
    }
    const array1 = valueB.concat(valueC);
    console.log("array 1", array1);

    res.json(array1);
    // console.log(valueC);
});
app.get("/", (req, res) => {
    let value = 3;
    let send = [];
    for (let index = 0; index < 14; index += 2) {
        send = [...send, value];
        value += index;
    }
    //   3   3   5, 9, 15, 23
    // -2  0   2   4  6   8
    // res.send({ send: send.toString() });
    const result = send.map((data) => {
        return data;
    });
    let x = result[0];
    let y = result[1];
    let z = result[5];

    let temp = [x, y, z];

    // res.send(temp.toString());
    res.json(temp);
    console.log(x);
});

app.listen(3000, () => {
    console.log("Start server at port 3000.");
});