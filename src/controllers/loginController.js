import { User } from '../../src/models/user.js';
import dotenv from 'dotenv';
import JWT from 'jsonwebtoken';
dotenv.config();

export const logIn = async (req, res) => {
  const { user, pass } = req.body;

  console.log(user, pass);

  //virify request
  if (!user || !pass) {
    res.status(401).json({ Error: 'without authorization' });
  }

  //verify database
  const userDatabase = await User.findByPk(1);
  if (!userDatabase) {
    res.status(401).json({ Error: 'Internal server' });
  }

  //match password
  try {
    if (
      user === userDatabase.dataValues.name &&
      pass === userDatabase.dataValues.pass
    ) {
      //generate token
      const payload = {
        userId: userDatabase.dataValues.id,
        userName: userDatabase.dataValues.name,
      };
      const secretKey = process.env.JWT_SECRET_KEY;

      const token = JWT.sign(payload, secretKey, { expiresIn: '1h' });

      res.json({ token });
    } else {
      res.status(401).json({ Error: 'without authorization' });
    }
  } catch (error) {
    res.status(401).json({ Error: 'without authorization' });
  }
};

export const teste = async (req, res) => {
  res.json({ validator: true });
};
