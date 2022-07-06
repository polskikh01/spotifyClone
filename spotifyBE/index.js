const express = require('express');
const app = express();

const userRouter = require('./routes/user.routes');

const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use('/api', userRouter);

app.listen(PORT, () => {
    console.log(`Starting on port: ${PORT}`)
})
