// mssql usa CommonJS - usando createRequire para compatibilidade ESM
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const sql = require('mssql')

const dbConfig = {
  user: process.env.DB_USER || 'sa',
  password: process.env.DB_PASSWORD || '',
  server: process.env.DB_SERVER || '',
  port: Number(process.env.DB_PORT) || 1433,
  database: process.env.DB_NAME || 'stc',
  options: {
    encrypt: false,
    trustServerCertificate: true
  },
  requestTimeout: 15000,
  connectionTimeout: 10000
}

export default defineEventHandler(async () => {
  let pool: any = null

  try {
    pool = await sql.connect(dbConfig)

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
      ORDER BY v.dataCadastro DESC
    `)

    return result.recordset.map((vaga: any) => ({
      codigo: vaga.codigo,
      nomeVaga: vaga.nomeVaga,
      salario: vaga.salario ? Number(vaga.salario) : null,
      requisitos: vaga.requisitos ?? null,
      quantidadeVaga: vaga.quantidadeVaga ?? null,
      pcd: vaga.pcd ?? false,
      dataCadastro: vaga.dataCadastro ? new Date(vaga.dataCadastro).toISOString() : null,
      cargo: vaga.cargo ?? null
    }))
  } catch (error: any) {
    console.error('[API /vagas] Erro ao buscar vagas do STC:', error.message)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erro ao buscar vagas do banco de dados'
    })
  } finally {
    if (pool) {
      try { await pool.close() } catch {}
    }
  }
})
