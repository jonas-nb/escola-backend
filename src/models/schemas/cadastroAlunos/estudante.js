import { DataTypes } from 'sequelize';
import { db } from '../../../../src/instances/pg.js';

export const Estudante = db.define(
  'Estudante',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    turno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modalidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ano_letivo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_nascimento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    certidao_tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    certidao_numero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orgao_emissor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    naturalidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uf_naturalidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    etnia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero_endereco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ponto_referencia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uf_endereco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cartao_sus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nis_estudante: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bolsa_familia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mae_nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mae_telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mae_grau_instrucao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mae_profissao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mae_nis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mae_cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mae_rg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pai_nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pai_telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pai_grau_instrucao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pai_profissao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pai_nis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pai_cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pai_rg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    responsavel_nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    responsavel_telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    responsavel_grau_instrucao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    responsavel_profissao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    responsavel_cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    responsavel_rg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    responsavel_grau_parentesco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nome_escola_anterior: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endereco_escola_anterior: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero_escola_anterior: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bairro_escola_anterior: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep_escola_anterior: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade_escola_anterior: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uf_escola_anterior: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone_escola_anterior: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ultimo_ano_letivo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ano_serie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    egresso_brasil_alfabetizado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    outro_programa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deficiencias: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Deve ser ajustado ao tipo correto
      allowNull: false,
    },
    renda_familiar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transporte_rural: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'estudante',
    schema: 'cadastro_alunos',
    timestamps: false,
  }
);
