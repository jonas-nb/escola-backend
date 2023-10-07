import { Router } from 'express';
import * as loginController from '../../src/controllers/loginController.js';
import * as cadastroController from '../../src/controllers/cadastroController.js';
import * as consultaController from '../../src/controllers/consultaController.js';
import * as homeController from '../../src/controllers/homeController.js';
import * as alunoPaginaController from '../../src/controllers/alunoPaginaController.js';
import { Auth } from '../../src/middleares/auth.js';

const router = new Router();

router.get('/', homeController.lastSearchedStudents);
router.post('/login', loginController.logIn);
router.post('/teste', Auth, loginController.teste);
router.post('/aluno/cadastro', Auth, cadastroController.cadastrarEstudante);
router.get('/aluno/lista', consultaController.consultaTodosAluno);
router.get('/aluno/:id', alunoPaginaController.AlunoPage);

export default router;
