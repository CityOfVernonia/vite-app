import * as url from 'url';
import path from 'path';
import fs from 'fs-extra';
import chalk from 'chalk';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

(async () => {
  // copy calcite components
  const calciteSrc = path.resolve(__dirname, './../node_modules/@esri/calcite-components/dist/calcite/assets');
  // cannot be flat directory must be `calcite/assets`
  const calciteDest = path.resolve(__dirname, './../src/public/calcite/assets');
  if (!calciteSrc) {
    console.log(chalk.red.bold('@esri/calcite-components must be installed'));
    return;
  }
  if (calciteDest) {
    await fs.remove(calciteDest);
  }
  await fs.ensureDir(calciteDest);
  await fs.copy(calciteSrc, calciteDest);
  console.log(chalk.green('@esri/calcite-components copied'));
}).call();
