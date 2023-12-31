 const express = require('express');
 const app = express()
 const port = 8000


 app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.flushHeaders();
 res.write(`data: ${new Date().toLocaleTimeString()}\n\n`);
    const sendEvent = setInterval(() => {
        res.write(`data: {note: this is sse test , date: ${new Date().toLocaleTimeString()}}\n\n`);
    }, 15000);

    res.on('close', () => {
        clearInterval(sendEvent);
        res.end();
    });
});

app.listen(8000, () => console.log(`SSE server running at http://localhost:${port}`));
