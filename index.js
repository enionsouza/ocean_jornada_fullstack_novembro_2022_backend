import express from "express";

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

const items = ['Café Pelé', 'Café Pilão', 'Nescafé', 'Melita', "Café do Norte"];

// [GET] /items - Read all
app.get('/items', (req, res) => {
  res.send(items.filter((item) => item != null));
});

// [GET] /items/:id - Read by Id
app.get('/items/:id', (req, res) => {
  res.send(items[req.params.id - 1]);
});

// [POST] /items - Create item
app.post('/items', (req, res) => {
  try {
    items.push(req.body.item);
    res.send(`Item '${req.body.item}' criado!`);
  } catch (error) {
    console.log(error);
    res.send(`Error: ${error}`);
  }
});

// [PUT] /items/:id - Update item
app.put('/items/:id', (req, res) => {
  const id = req.params.id - 1;
  const novoItem = req.body.item;
  items[id] = novoItem;
  res.send(`Item alterado para '${id + 1}: ${novoItem}'`);
});

// [DELETE] /items/:id - Delete item
app.delete('/items/:id', (req, res) => {
  const id = req.params.id - 1;
  delete items[id];
  res.send('Item excluído da base de dados');
});

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000/...');
});
