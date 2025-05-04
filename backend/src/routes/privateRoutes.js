// File: routes/privateRoutes.js
// Fichero que define las rutas de las partidas privadas
const express = require('express');
const { createPrivateGame, getPrivateGame, joinPrivateGame, deletePrivateGame, getPlayers, isReady, getAllPlayers, getLink, uploadValues, 
      getValues, getPrivateGamesUnfinished, getGameWithCode, deleteUserFromPrivateGame,
      startPrivateGame, pausePrivateGame } = require('../controllers/privateGames');
const router = express.Router();

router.post('/create', createPrivateGame);
router.post('/getPrivateGame', getPrivateGame);
router.post('/join', joinPrivateGame);
router.delete('/delete/:id', deletePrivateGame);
router.get('/players/:gameId', getPlayers);
router.post('/ready', isReady);
router.get('/allPlayers/:gameId', getAllPlayers);
router.get('/link/:gameId', getLink);
router.post('/uploadValues/:gameId', uploadValues)
router.get('/getValues/:gameId', getValues); 
router.get('/unfinished/:userId', getPrivateGamesUnfinished);
router.get('/getGameWithCode/:gameCode', getGameWithCode);
router.delete('/deleteUserFromPrivate/:gameId/:userId', deleteUserFromPrivateGame); // No se si es necesario, pero lo dejo por si acaso
router.post('/startPrivateGame', startPrivateGame);
router.post('/pausePrivateGame', pausePrivateGame); // No se si es necesario, pero lo dejo por si acaso

module.exports = router;
