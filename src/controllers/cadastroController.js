import { Estudante } from '../../src/models/schemas/cadastroAlunos/estudante.js';

export const cadastrarEstudante = async (req, res) => {
  const dataForm = req.body;

  if (!dataForm) {
    return res
      .status(400)
      .json({ error: 'Dados do formulário não foram fornecidos.' });
  }

  try {
    const response = await Estudante.create({
      turno: dataForm.turno,
      modalidade: dataForm.modalidade,
      ano_letivo: dataForm.ano_letivo,
      nome: dataForm.nome,
      data_nascimento: dataForm.data_nascimento,
      certidao_tipo: dataForm.certidao_tipo,
      certidao_numero: dataForm.certidao_numero,
      cpf: dataForm.cpf,
      rg: dataForm.rg,
      orgao_emissor: dataForm.orgao_emissor,
      naturalidade: dataForm.naturalidade,
      uf_naturalidade: dataForm.uf_naturalidade,
      etnia: dataForm.etnia,
      endereco: dataForm.endereco,
      numero_endereco: dataForm.numero_endereco,
      bairro: dataForm.bairro,
      cep: dataForm.cep,
      ponto_referencia: dataForm.ponto_referencia,
      cidade: dataForm.cidade,
      uf_endereco: dataForm.uf_endereco,
      pais: dataForm.pais,
      telefone: dataForm.telefone,
      cartao_sus: dataForm.cartao_sus,
      nis_estudante: dataForm.nis_estudante,
      bolsa_familia: dataForm.bolsa_familia,
      mae_nome: dataForm.mae_nome,
      mae_telefone: dataForm.mae_telefone,
      mae_grau_instrucao: dataForm.mae_grau_instrucao,
      mae_profissao: dataForm.mae_profissao,
      mae_nis: dataForm.mae_nis,
      mae_cpf: dataForm.mae_cpf,
      mae_rg: dataForm.mae_rg,
      pai_nome: dataForm.pai_nome,
      pai_telefone: dataForm.pai_telefone,
      pai_grau_instrucao: dataForm.pai_grau_instrucao,
      pai_profissao: dataForm.pai_profissao,
      pai_nis: dataForm.pai_nis,
      pai_cpf: dataForm.pai_cpf,
      pai_rg: dataForm.pai_rg,
      responsavel_nome: dataForm.responsavel_nome,
      responsavel_telefone: dataForm.responsavel_telefone,
      responsavel_grau_instrucao: dataForm.responsavel_grau_instrucao,
      responsavel_profissao: dataForm.responsavel_profissao,
      responsavel_cpf: dataForm.responsavel_cpf,
      responsavel_rg: dataForm.responsavel_rg,
      responsavel_grau_parentesco: dataForm.responsavel_grau_parentesco,
      nome_escola_anterior: dataForm.nome_escola_anterior,
      endereco_escola_anterior: dataForm.endereco_escola_anterior,
      numero_escola_anterior: dataForm.numero_escola_anterior,
      bairro_escola_anterior: dataForm.bairro_escola_anterior,
      cep_escola_anterior: dataForm.cep_escola_anterior,
      cidade_escola_anterior: dataForm.cidade_escola_anterior,
      uf_escola_anterior: dataForm.uf_escola_anterior,
      telefone_escola_anterior: dataForm.telefone_escola_anterior,
      ultimo_ano_letivo: dataForm.ultimo_ano_letivo,
      ano_serie: dataForm.ano_serie,
      egresso_brasil_alfabetizado: dataForm.egresso_brasil_alfabetizado,
      outro_programa: dataForm.outro_programa,
      deficiencias: dataForm.deficiencias,
      renda_familiar: dataForm.renda_familiar,
      transporte_rural: dataForm.transporte_rural,
    });

    // Envie uma resposta de sucesso
    res
      .status(201)
      .json({ message: 'Estudante cadastrado com sucesso.', data: response });
  } catch (error) {
    console.log('Erro ao cadastrar estudante:', error);
    res.status(500).json({ error: 'Erro ao cadastrar estudante.' });
  }
};
