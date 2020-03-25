const express =  require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

//quando estiver em produção
// app.use(cors({
//     origin: meuapp.com.br
// }));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);