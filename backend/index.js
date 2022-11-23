import express from "express";
import { MongoClient, ObjectId } from "mongodb";

// const URL = 'mongodb://127.0.0.1:27017';
const URL = 'mongodb+srv://admin:x4fspn5Id8kKjFWy@cluster0.z1puxok.mongodb.net/';
const DB_NAME = 'ocean_jornada_fullstack_novembro_2022';


const client = await MongoClient.connect(URL);

const bancoDados = client.db(DB_NAME);
const collection = bancoDados.collection('itens');

const app = express();
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Hello World');
});

// [GET] /items - Read all
app.get('/items', async (_, res) => {
  const documentos = await collection.find().toArray();
  res.send(documentos);
});

// [GET] /items/:id - Read by Id
app.get('/items/:id', async (req, res) => {
  const id = new ObjectId(req.params.id);
  res.send(await collection.findOne({ _id: id }));
});

// [POST] /items - Create item
app.post('/items', async (req, res) => {
  await collection.insertOne(req.body);
  res.send('Item successfully created!');
});

// [PUT] /items/:id - Update item
app.put('/items/:id', async (req, res) => {
  const newItem = { 
      nome: req.body.nome || 'Name was not provided',
      imagemURL: req.body.imagemURL || 'No image'
    };
  const id_to_update = new ObjectId(req.params.id);
  await collection.updateOne({_id: id_to_update}, {$set: newItem});
  res.send(`Item updated: '${newItem.nome}'`);
});

// [DELETE] /items/:id - Delete item
app.delete('/items/:id', async (req, res) => {
  const id_to_delete = new ObjectId(req.params.id);
  await collection.deleteOne({ _id: id_to_delete });
  res.send('Item successfully deleted!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on http://localhost:3000/...');
});
