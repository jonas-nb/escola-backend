import { Estudante } from '../../src/models/schemas/cadastroAlunos/estudante.js';

export const AlunoPage = async (req, res) => {
  const { id } = req.params;
  const data = await Estudante.findByPk(id);

  if (!data) {
    res.status(404).json({ error: 'Nenhum aluno encontrado.' });
  }
  console.log(data);

  res.json(data);
};
