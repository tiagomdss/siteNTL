// @ts-ignore - mssql é CJS e é tratado como externo pelo Nitro
import sql from 'mssql'

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER || '',
  port: Number(process.env.DB_PORT) || 1433,
  database: process.env.DB_NAME || 'stc',
  options: {
    encrypt: false,
    trustServerCertificate: true
  },
  requestTimeout: 8000,
  connectionTimeout: 5000,
  pool: {
    max: 8,
    min: 0,
    idleTimeoutMillis: 30000
  }
}

let poolPromise: Promise<any> | null = null

export const getStcPool = async () => {
  if (!poolPromise) {
    const pool = new sql.ConnectionPool(config as any)
    poolPromise = pool.connect().catch((error: unknown) => {
      poolPromise = null
      throw error
    })

    pool.on('error', () => {
      poolPromise = null
    })
  }

  return poolPromise
}
