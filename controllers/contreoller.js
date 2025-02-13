/*Esercizio
Milestone 1
Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers.
All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).
Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.
Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.
Se tutto funziona, passiamo alla prossima milestone

Milestone 2
Per iniziare, creiamo una cartella data in cui creare un file che contenga ed esporti l’array di posts che trovate in allegato. Importiamo questo file in cima al controller.
Ora passiamo ad implementare le logiche delle nostre CRUD:
Index dovrà restituire la lista dei post in formato JSON
Show dovrà restituire un singolo post in formato JSON
Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.*/

const { title } = require("process");
const dati = require("../data/dati");

function index(req, res) {
  let oggettoFiltrato = dati;

  if (req.query.tags) {
    oggettoFiltrato = dati.filter((post) => post.tags.includes(req.query.tags));
  }

  res.json(oggettoFiltrato);
}

function show(req, res) {
  const oggettoTrovato = post.find((a) => a.id === parseInt(req.params.id));

  if (!oggettoTrovato) {
    return res.json({
      error: "Not found",
      message: "Post non trovato",
    });
  }

  res.json(oggettoTrovato);
}
function store(req, res) {
  const newId = dati[dati.length - 1].id + 1;

  const newDati = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags
  };

  dati.push(newDati);

  console.log(dati);

  res.status(201);
  res.json(newDati);
}

function update(req, res) {
  const id = parseInt(req.params.id);

  const aggiorno = dati.find((a) => a.id === id);

  if (!aggiorno) {
    res.status(404);

    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  aggiorno.title = req.body.title;
  aggiorno.content = req.body.content;
  aggiorno.image = req.body.image;
  aggiorno.tags = req.body.tags;

  console.log(dati);

  res.json(aggiorno);
}
function destroy(req, res) {
  const id = parseInt(req.params.id);

  const elimina = dati.find((a) => a.id === id);

  if (!elimina) {
    res.status(404);

    return res.json({
      status: 404,
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  dati.splice(dati.indexOf(elimina), 1);

  res.sendStatus(204);
}
// esportiamo tutto
module.exports = { index, show, store, update, destroy };
