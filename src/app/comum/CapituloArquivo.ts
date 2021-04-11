import { Usuario } from './Usuario';

export interface CapituloArquivo {
    codigoCapitulo: number,
    numeroVersaoArquivo: number,
    usuarioCriacaoArquivo: Usuario,
    dataHoraCriacaoArquivo: string,
    comentarioCriacaoArquivo: string,
    tamanhoArquivo: number,
    arquivo: string
}