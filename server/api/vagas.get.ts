import { getStcPool } from '../utils/stc'

const CACHE_TTL = 60_000
let cachedVagas: any[] | null = null
let cachedAt = 0

export default defineEventHandler(async (event) => {
  setHeader(event, 'Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300')

  if (cachedVagas && Date.now() - cachedAt < CACHE_TTL) {
    return cachedVagas
  }

  try {
    const pool = await getStcPool()
    const result = await pool.request().query(`
      SELECT
        v.codigo,
        v.nomeVaga,
        v.salario,
        v.requisitos,
        v.quantidadeVaga,
        v.pcd,
        v.dataCadastro,
        c.descricao AS cargo
      FROM stc.vagas v
      LEFT JOIN stc.cargo c ON v.cargo = c.codigo
      WHERE v.ativo = 1
      ORDER BY v.dataCadastro DESC, v.codigo DESC
    `)

    cachedVagas = result.recordset.map((vaga: any) => ({
      codigo: Number(vaga.codigo),
      nomeVaga: String(vaga.nomeVaga ?? 'Oportunidade NTL'),
      salario: vaga.salario == null ? null : Number(vaga.salario),
      requisitos: vaga.requisitos == null ? null : String(vaga.requisitos),
      quantidadeVaga: vaga.quantidadeVaga == null ? 1 : Number(vaga.quantidadeVaga),
      pcd: Boolean(vaga.pcd),
      dataCadastro: vaga.dataCadastro ? new Date(vaga.dataCadastro).toISOString() : null,
      cargo: vaga.cargo == null ? null : String(vaga.cargo)
    }))
    cachedAt = Date.now()

    return cachedVagas
  } catch (error: any) {
    console.error('[API /vagas] Falha ao consultar STC:', error?.message)

    if (cachedVagas) return cachedVagas

    throw createError({
      statusCode: 503,
      statusMessage: 'O serviço de vagas está temporariamente indisponível.'
    })
  }
})
