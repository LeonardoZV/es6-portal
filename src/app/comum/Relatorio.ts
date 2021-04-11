import { Periodo } from './Periodo'
import { TipoRelatorio } from './TipoRelatorio'
import { Localidade } from './Localidade'
import { Usuario } from './Usuario';

export interface Relatorio {
    codigoRelatorio: number,
    nomeRelatorio: string,
    tipoRelatorio: TipoRelatorio,
    periodo: Periodo,
    localidade: Localidade,
    indicadorTrava: number,
    usuarioTrava: Usuario,
    dataHoraTrava: string
}