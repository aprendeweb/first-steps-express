module.exports = {
  makeLog: (req, res, next) => {
    console.log('Hello from middleware');
    next();
  },
};
