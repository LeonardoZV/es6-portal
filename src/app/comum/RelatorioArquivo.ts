import { Usuario } from './Usuario';

export interface RelatorioArquivo {
    codigoRelatorio: number,
    numeroVersaoArquivo: number,
    usuarioCriacaoArquivo: Usuario,
    dataHoraCriacaoArquivo: string,
    comentarioCriacaoArquivo: string,
    tamanhoArquivo: string,
    arquivo1: string
}