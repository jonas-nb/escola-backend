import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const Auth = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    res.status(401).json({ Erro: 'without Authorization' });
  }

  const [type, myToken] = token.split(' ');
  console.log(myToken);

  JWT.verify(myToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ message: 'Token inválido' }); // Essa é a linha 15
    }
    req.decoded = decoded;
    next();
  });
};
