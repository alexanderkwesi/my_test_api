const express = require('express');
import {Request, Response} from 'express';
const apps = express();
apps.use(express.json());
const responseData = {
  message: 'Hello, world!',
  date: new Date()
};
apps.get('/data', (request:Request, response:Response) => {
  response.json(responseData.message);
});
// Start the server
const PORT = 5500;
apps.listen(PORT, () => console.log(`Server running on port ${PORT}`));
