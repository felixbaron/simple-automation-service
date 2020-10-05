const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const {
  spawn
} = require('child_process');
const logStream = fs.createWriteStream('./logs.log', {
  flags: 'a'
});


app.get('/robots/:robotName', (req, res) => {
  const ls = spawn('cmd.exe', ['/c', `${req.params.robotName}`]);
  ls.stdout.pipe(logStream, {
    end: false
  });
  ls.stderr.pipe(logStream, {
    end: false
  });

  res.send('Process spawned')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
