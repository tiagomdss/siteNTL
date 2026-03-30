// @ts-ignore - mssql é CJS, o Nitro trata como externo (externals config)
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

export default defineEventHandler(async (event) => {
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
    // Loga o erro real nos logs do Vercel para facilitar debug
    console.error('[API /vagas] Erro:', error.message)
    console.error('[API /vagas] Stack:', error.stack)
    console.error('[API /vagas] Config server:', process.env.DB_SERVER, 'port:', process.env.DB_PORT)

    throw createError({
      statusCode: 500,
      statusMessage: `Erro ao buscar vagas: ${error.message}`
    })
  } finally {
    if (pool) {
      try { await pool.close() } catch {}
    }
  }
})
