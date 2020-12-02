/* eslint-disable import/no-unresolved */
import jwt from 'jsonwebtoken';
import config from 'config';

module.exports = function (req, res, next) {
  try {
    const token = req.header('x-auth-token');
    const verifierdUser = jwt.verify(token, config.get('jwtSecret')
    );
    req.user = verifierdUser.user;
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: 'Server Error' });
  }
};
