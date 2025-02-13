const express = require('express')
const router = express.Router()
const { index, show, store, update, destroy } = require("../controllers/contreoller")

//res.type('json').send(post)    -forma intera-


  // completo (index)
  router.get('/', index );
    // mostra
   router.get("/:id", show );
    // creazione
   router.post('/', store );
    // aggiornare
   router.put('/:id', update );
    // eliminare
   router.delete('/:id', destroy );

    module.exports = router

    