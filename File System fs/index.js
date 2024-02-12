const fsPromises = require('fs').promises;
const path = require('path');

const fileOperations = async () => {
    try {
        console.log("Reading file...");
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'read.txt'), 'utf8');
        console.log("Data read:", data);

        console.log("Deleting read.txt...");
        await fsPromises.unlink(path.join(__dirname, 'files', 'read.txt'));

        console.log("Writing data to write.txt...");
        await fsPromises.writeFile(path.join(__dirname, 'files', 'write.txt'), data);

        console.log("Appending to write.txt...");
        await fsPromises.appendFile(path.join(__dirname, 'files', 'write.txt'), "\n\n +1");

        console.log("Renaming write.txt to newwrite.txt...");
        await fsPromises.rename(path.join(__dirname, 'files', 'write.txt'), path.join(__dirname, 'files', 'newwrite.txt'));

        console.log("Reading newwrite.txt...");
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'newwrite.txt'), 'utf8');
        console.log("New data:", newData);
    } catch (err) {
        console.error("Error:", err);
    }
}

fileOperations();
