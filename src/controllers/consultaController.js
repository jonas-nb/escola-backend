import { Estudante } from '../../src/models/schemas/cadastroAlunos/estudante.js';

export const consultaTodosAluno = async (req, res) => {
  const data = await Estudante.findAll({ order: [['nome', 'ASC']] });

  if (!data) {
    res.status(404).json({ error: 'Nenhum aluno encontrado.' });
  }

  res.json(data);
};
