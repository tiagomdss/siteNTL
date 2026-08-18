// @ts-ignore - mssql é CJS e é tratado como externo pelo Nitro
import sql from 'mssql'

const getConfig = () => ({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER || '',
  port: Number(process.env.DB_PORT) || 1433,
  database: process.env.DB_NAME || 'stc',
  options: {
    encrypt: false,
    trustServerCertificate: true
  },
  requestTimeout: 20000,
  connectionTimeout: 15000
})

export default defineEventHandler(async () => {
  let pool: any = null

  try {
    pool = await sql.connect(getConfig())

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

    return result.recordset.map((vaga: any) => ({
      codigo: Number(vaga.codigo),
      nomeVaga: String(vaga.nomeVaga ?? 'Oportunidade NTL'),
      salario: vaga.salario == null ? null : Number(vaga.salario),
      requisitos: vaga.requisitos == null ? null : String(vaga.requisitos),
      quantidadeVaga: vaga.quantidadeVaga == null ? 1 : Number(vaga.quantidadeVaga),
      pcd: Boolean(vaga.pcd),
      dataCadastro: vaga.dataCadastro ? new Date(vaga.dataCadastro).toISOString() : null,
      cargo: vaga.cargo == null ? null : String(vaga.cargo)
    }))
  } catch (error: any) {
    console.error('[API /vagas] Falha ao consultar STC:', error?.message)

    throw createError({
      statusCode: 503,
      statusMessage: 'O serviço de vagas está temporariamente indisponível.'
    })
  } finally {
    if (pool) {
      try { await pool.close() } catch {}
    }
  }
})
