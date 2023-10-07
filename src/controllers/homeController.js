import { Estudante } from '../../src/models/schemas/cadastroAlunos/estudante.js';

export const lastSearchedStudents = async (req, res) => {
  const data = await Estudante.findAll({ order: [['id', 'DESC']], limit: 3 });
  if (!data) {
    res.status(404).json({ error: 'Nenhum aluno encontrado.' });
  }
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor.' });
    console.log('Erro no servidor:', error);
  }
};
