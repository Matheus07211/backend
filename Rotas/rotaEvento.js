import {Router} from 'express';
import eventoCtrl from "../Controles/eventoCtrl.js";

const rotaEvento = new Router();
const eveCtrl = new eventoCtrl();

rotaEvento
.get('/:termo', eveCtrl.consultar)
.post('/', eveCtrl.gravar)
.put('/:codigo', eveCtrl.atualizar)
.patch('/:codigo', eveCtrl.atualizar)
.delete('/:codigo', eveCtrl.excluir);

export default rotaEvento;