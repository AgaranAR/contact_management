const express = require('express')
const PORT = 5000;
const app = express();
app.use("/api/contacts", require("./routes/contactroutes"));
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});