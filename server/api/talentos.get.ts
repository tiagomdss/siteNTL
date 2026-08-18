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

const buildTalentUrl = (base: string | null | undefined) => {
  if (!base) return null
  const clean = base.trim().replace(/\/+$/, '')
  if (!/^https?:\/\//i.test(clean)) return null
  return `${clean}/recrutamento_trabalheConosco.php`
}

export default defineEventHandler(async () => {
  let pool: any = null

  try {
    pool = await sql.connect(getConfig())
    const result = await pool.request().query(`
      SELECT TOP 1 linkVagas
      FROM stc.parametro
      WHERE linkVagas IS NOT NULL
    `)

    const baseUrl = result.recordset?.[0]?.linkVagas ?? null

    return {
      url: buildTalentUrl(baseUrl),
      source: 'stc.parametro'
    }
  } catch (error: any) {
    console.error('[API /talentos] Erro:', error.message)

    // O site continua funcional mesmo se o sistema de recrutamento estiver indisponível.
    return {
      url: null,
      source: 'unavailable'
    }
  } finally {
    if (pool) {
      try { await pool.close() } catch {}
    }
  }
})
