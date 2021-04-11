import { Relatorio } from './Relatorio';
import { TipoCapitulo } from './TipoCapitulo';
import { ContentType } from './ContentType';
import { Usuario } from './Usuario';

export interface Capitulo {
    codigoCapitulo: number,
    nomeCapitulo: string,
    relatorio: Relatorio,
    tipoCapitulo: TipoCapitulo,
    contentType: ContentType,
    codigoCapituloPai: number,
    indicadorTrava: number,
    usuarioTrava: Usuario,
    dataHoraTrava: string,
    ordenacao: string
}