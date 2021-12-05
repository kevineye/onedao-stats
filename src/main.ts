#!/usr/bin/env node
import * as express from 'express';
import { Command } from 'commander';
import { getOneDaoStats } from './stats';

const options = new Command()
  .option('-s, --server', 'run server')
  .option('-p, --port <port>', 'server port', '3000')
  .parse()
  .opts();

if (options.server) {

  const app = express();
  const port = Number(options.port);

  app.get('/onedao/stats', async (_req, res) => {
    res.json(await (getOneDaoStats()));
  });

  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/onedao/stats`);
  });

} else {

  (async () => {
    console.log(JSON.stringify(await (getOneDaoStats()), null, 2));
  })();

}
