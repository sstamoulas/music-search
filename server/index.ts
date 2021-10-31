const cors = require('cors');
const express = require('express')

const app = express();
const router = express.Router();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');

  console.log(req.method)

  if('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
});

app.use(cors());
app.use(express.json());

router.get('/', (req, res) => {
  console.log('here')
  res.send('Hello World')
});
router.get('/users', (req, res) => res.send([]));
router.post('/users', (req, res) => res.send({ body: req.body}));

app.listen(4201, `127.0.0.1`, function() {
  console.log(`Server now listening on 4201`);
});