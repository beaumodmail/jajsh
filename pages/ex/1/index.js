const express = require('express');
const app = express();
const port = 3000; // You can choose any port

app.get('/', (req, res) => {
    res.redirect('http://thebeauclub.byethost15.com/videos/exclusive');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

