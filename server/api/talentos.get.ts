import { getStcPool } from '../utils/stc'

const CACHE_TTL = 5 * 60_000
let cachedResponse: { url: string | null; source: string } | null = null
let cachedAt = 0

const buildTalentUrl = (base: string | null | undefined) => {
  if (!base) return null
  const clean = base.trim().replace(/\/+$/, '')
  if (!/^https?:\/\//i.test(clean)) return null
  return `${clean}/recrutamento_trabalheConosco.php`
}

export default defineEventHandler(async (event) => {
  setHeader(event, 'Cache-Control', 'public, s-maxage=300, stale-while-revalidate=1800')

  if (cachedResponse && Date.now() - cachedAt < CACHE_TTL) {
    return cachedResponse
  }

  try {
    const pool = await getStcPool()
    const result = await pool.request().query(`
      SELECT TOP 1 linkVagas
      FROM stc.parametro
      WHERE linkVagas IS NOT NULL
    `)

    const baseUrl = result.recordset?.[0]?.linkVagas ?? null
    cachedResponse = {
      url: buildTalentUrl(baseUrl),
      source: 'stc.parametro'
    }
    cachedAt = Date.now()

    return cachedResponse
  } catch (error: any) {
    console.error('[API /talentos] Erro:', error?.message)

    if (cachedResponse) return cachedResponse

    return {
      url: null,
      source: 'unavailable'
    }
  }
})
