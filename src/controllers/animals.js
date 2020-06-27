module.exports = {
  responseInitialRoute: (req, res) => {
    res.send('Hello from animal router');
  },
  responseBody: (req, res) => {
    res.json(req.body);
  },
};
