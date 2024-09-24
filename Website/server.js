const express = require("express");
const app = express();
const port = 3090;


app.listen(port, () => {
    console.log(`Nakikinig ka sa port: http://localhost:${port}`);
});
