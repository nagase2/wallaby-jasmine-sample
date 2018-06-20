import * as fs from 'fs';
import * as path from 'path';
fs.readFile(path.join(__dirname, './sample.json'), 'utf8', (error, data) => {
        console.log("file loaded.")
        console.log(data);

    })