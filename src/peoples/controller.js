const fs = require('fs');
const { dbFilePath } = require('../../config');

module.exports = {
  getAllPeoples: (req, res) => {
    const data = JSON.parse(fs.readFileSync(dbFilePath));
    const { peoples } = data;
    res.json(peoples);
  },
  createPoeple: (req, res) => {
    const { code, name, age } = req.body;
    const data = JSON.parse(fs.readFileSync(dbFilePath));
    const { peoples } = data;
    peoples.push({ code, name, age });
    fs.writeFileSync(dbFilePath, JSON.stringify(data));
    res.send(`${name} added`);
  },
  deletePoeple: (req, res) => {
    const { code } = req.params;
    const data = JSON.parse(fs.readFileSync(dbFilePath));
    const { peoples } = data;

    for (const [i, people] of peoples.entries()) {
      if (+code === people.code) peoples.splice(i, 1);
    }
    fs.writeFileSync(dbFilePath, JSON.stringify(data));
    res.send(`${code} removed`);
  },
  updatePoeple: (req, res) => {
    const { code } = req.params;
    const { name, age } = req.body;
    const data = JSON.parse(fs.readFileSync(dbFilePath));
    const { peoples } = data;
    for (const people of peoples) {
      if (+code === people.code) {
        people.name = name;
        people.age = age;
      }
    }
    fs.writeFileSync(dbFilePath, JSON.stringify(data));
    res.send(`${name} updated`);
  },
};
