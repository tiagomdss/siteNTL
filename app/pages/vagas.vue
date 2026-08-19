<template>
  <div class="min-h-screen bg-white pt-20 dark:bg-[#06182f]">
    <!-- HERO -->
    <section class="relative overflow-hidden border-b border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-[#051426]">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(52,127,246,.16),transparent_36%)]" />
      <div class="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <div class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
            <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Oportunidades em tempo real
          </div>
          <h1 class="mt-6 text-5xl font-bold leading-[1.04] tracking-[-0.045em] text-[#071b35] dark:text-white sm:text-6xl">
            Construa o futuro com a NTL.
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            As vagas exibidas aqui vêm diretamente do sistema STC. Consulte os detalhes e utilize nosso banco de talentos oficial para cadastrar ou atualizar seu currículo.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a v-if="talentosUrl" :href="talentosUrl" target="_blank" rel="noopener" class="rounded-full bg-[#0b2345] px-7 py-4 text-center font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#12345d] dark:bg-white dark:text-[#071b35]">
              Acessar banco de talentos ↗
            </a>
            <a href="#vagas-abertas" class="rounded-full border border-slate-300 px-7 py-4 text-center font-bold text-[#0b2345] transition hover:border-[#0b2345] dark:border-white/20 dark:text-white dark:hover:border-white">
              Ver vagas abertas
            </a>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3 sm:gap-4">
          <div class="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-6">
            <span class="text-3xl font-black text-[#071b35] dark:text-white">{{ jobs?.length ?? 0 }}</span>
            <p class="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">vagas ativas no sistema</p>
          </div>
          <div class="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-6">
            <span class="text-3xl font-black text-[#071b35] dark:text-white">{{ totalPositions }}</span>
            <p class="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">posições disponíveis</p>
          </div>
          <div class="col-span-2 rounded-[1.5rem] bg-[#0b2345] p-5 text-white sm:p-6">
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-primary-200">Banco de talentos</p>
            <p class="mt-3 text-base leading-7 text-slate-200">Mesmo sem uma vaga ideal agora, seu currículo pode ser considerado para oportunidades futuras.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- LISTAGEM -->
    <section id="vagas-abertas" class="py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-300">Vagas abertas</p>
            <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#071b35] dark:text-white sm:text-4xl">Encontre a oportunidade certa.</h2>
          </div>
          <p v-if="!pending && !error" class="text-sm text-slate-500 dark:text-slate-400">
            {{ filteredJobs.length }} resultado{{ filteredJobs.length === 1 ? '' : 's' }} de {{ jobs?.length ?? 0 }}
          </p>
        </div>

        <div class="mt-8 grid gap-3 lg:grid-cols-[1fr_auto]">
          <label class="relative block">
            <span class="sr-only">Buscar vaga</span>
            <svg class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5.2-5.2m2.2-5.3a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" /></svg>
            <input
              v-model="searchQuery"
              type="search"
              placeholder="Buscar por vaga, cargo ou requisito..."
              class="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-slate-900 shadow-sm outline-none transition focus:border-primary-400 focus:ring-4 focus:ring-primary-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-primary-500/10"
            />
          </label>

          <button
            class="rounded-2xl border px-5 py-4 text-sm font-bold transition"
            :class="pcdOnly
              ? 'border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-500/15 dark:text-primary-200'
              : 'border-slate-200 text-slate-600 hover:border-slate-300 dark:border-white/10 dark:text-slate-300'"
            @click="pcdOnly = !pcdOnly"
          >
            {{ pcdOnly ? '✓ ' : '' }}Exclusivas / inclusivas PCD
          </button>
        </div>

        <!-- ERROR -->
        <div v-if="error" class="mt-10 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-8 text-center dark:border-amber-400/20 dark:bg-amber-400/10">
          <div class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-amber-100 text-xl dark:bg-amber-300/10">!</div>
          <h3 class="mt-4 text-lg font-bold text-slate-900 dark:text-white">O serviço de vagas está temporariamente indisponível.</h3>
          <p class="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">Você ainda pode acessar o banco de talentos ou tentar carregar a listagem novamente.</p>
          <div class="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <button class="rounded-full bg-[#0b2345] px-6 py-3 text-sm font-bold text-white dark:bg-white dark:text-[#071b35]" @click="refresh()">Tentar novamente</button>
            <a v-if="talentosUrl" :href="talentosUrl" target="_blank" rel="noopener" class="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-[#0b2345] dark:border-white/20 dark:text-white">Banco de talentos ↗</a>
          </div>
        </div>

        <!-- LOADING -->
        <div v-else-if="pending" class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <div v-for="i in 6" :key="i" class="animate-pulse rounded-[1.75rem] border border-slate-200 p-6 dark:border-white/10 dark:bg-white/5">
            <div class="h-4 w-24 rounded bg-slate-100 dark:bg-white/10" />
            <div class="mt-5 h-6 w-4/5 rounded bg-slate-100 dark:bg-white/10" />
            <div class="mt-3 h-4 w-2/3 rounded bg-slate-100 dark:bg-white/10" />
            <div class="mt-8 h-11 rounded-xl bg-slate-100 dark:bg-white/10" />
          </div>
        </div>

        <!-- GRID -->
        <div v-else-if="filteredJobs.length" class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="job in filteredJobs"
            :key="job.codigo"
            class="group flex min-h-[330px] flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-ntl dark:border-white/10 dark:bg-white/5 dark:hover:border-primary-400/30"
          >
            <div class="flex items-start justify-between gap-3">
              <span class="max-w-[70%] truncate rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-600 dark:bg-white/10 dark:text-slate-300">{{ job.cargo || 'NTL' }}</span>
              <span v-if="job.pcd" class="rounded-full bg-violet-100 px-3 py-1.5 text-[11px] font-bold text-violet-700 dark:bg-violet-400/10 dark:text-violet-300">PCD</span>
            </div>

            <h3 class="mt-6 text-xl font-bold leading-7 text-[#071b35] transition group-hover:text-primary-700 dark:text-white dark:group-hover:text-primary-300">{{ job.nomeVaga }}</h3>

            <div class="mt-5 space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <p><strong class="font-semibold text-slate-700 dark:text-slate-200">Remuneração:</strong> {{ formatSalario(job.salario) }}</p>
              <p><strong class="font-semibold text-slate-700 dark:text-slate-200">Quantidade:</strong> {{ job.quantidadeVaga }} vaga{{ job.quantidadeVaga === 1 ? '' : 's' }}</p>
              <p v-if="job.dataCadastro"><strong class="font-semibold text-slate-700 dark:text-slate-200">Publicação:</strong> {{ formatDate(job.dataCadastro) }}</p>
            </div>

            <p v-if="job.requisitos" class="mt-5 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{{ job.requisitos }}</p>
            <div v-else class="flex-1" />

            <div class="mt-auto grid grid-cols-2 gap-3 pt-6">
              <button class="rounded-xl border border-slate-300 px-4 py-3 text-sm font-bold text-[#0b2345] transition hover:border-[#0b2345] dark:border-white/20 dark:text-white dark:hover:border-white" @click="openDetails(job)">Detalhes</button>
              <a v-if="talentosUrl" :href="talentosUrl" target="_blank" rel="noopener" class="rounded-xl bg-[#0b2345] px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-[#12345d] dark:bg-white dark:text-[#071b35]">Candidatar-se ↗</a>
              <NuxtLink v-else to="/contato" class="rounded-xl bg-[#0b2345] px-4 py-3 text-center text-sm font-bold text-white dark:bg-white dark:text-[#071b35]">Contato</NuxtLink>
            </div>
          </article>
        </div>

        <!-- EMPTY -->
        <div v-else class="mt-10 rounded-[1.75rem] border border-dashed border-slate-300 px-6 py-16 text-center dark:border-white/15">
          <h3 class="text-xl font-bold text-[#071b35] dark:text-white">Nenhuma vaga encontrada.</h3>
          <p class="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500 dark:text-slate-400">Tente outra palavra-chave ou deixe seu currículo no banco de talentos para futuras oportunidades.</p>
          <a v-if="talentosUrl" :href="talentosUrl" target="_blank" rel="noopener" class="mt-6 inline-flex rounded-full bg-[#0b2345] px-6 py-3 text-sm font-bold text-white dark:bg-white dark:text-[#071b35]">Cadastrar currículo ↗</a>
        </div>
      </div>
    </section>

    <!-- BANCO DE TALENTOS -->
    <section class="border-t border-slate-200 bg-slate-50 py-16 dark:border-white/10 dark:bg-[#051426] sm:py-20">
      <div class="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-300">Candidatura espontânea</p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#071b35] dark:text-white sm:text-4xl">Seu próximo projeto pode começar aqui.</h2>
          <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">O cadastro de currículos é feito no sistema oficial de recrutamento conectado ao STC. Assim suas informações ficam centralizadas no mesmo ambiente utilizado pela NTL para gestão das oportunidades.</p>
        </div>
        <a v-if="talentosUrl" :href="talentosUrl" target="_blank" rel="noopener" class="rounded-full bg-[#0b2345] px-7 py-4 text-center font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#12345d] dark:bg-white dark:text-[#071b35]">Entrar no banco de talentos ↗</a>
        <NuxtLink v-else to="/contato" class="rounded-full bg-[#0b2345] px-7 py-4 text-center font-bold text-white dark:bg-white dark:text-[#071b35]">Falar com a NTL</NuxtLink>
      </div>
    </section>

    <!-- MODAL -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selectedJob" class="fixed inset-0 z-[100] flex items-center justify-center p-4" @click.self="closeDetails">
          <div class="absolute inset-0 bg-[#020a14]/70 backdrop-blur-sm" />
          <div class="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#071b35]">
            <div class="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-200 bg-white/95 px-6 py-5 backdrop-blur dark:border-white/10 dark:bg-[#071b35]/95">
              <div>
                <p class="text-xs font-bold uppercase tracking-[0.15em] text-primary-600 dark:text-primary-300">{{ selectedJob.cargo || 'Oportunidade NTL' }}</p>
                <h3 class="mt-2 text-2xl font-bold text-[#071b35] dark:text-white">{{ selectedJob.nomeVaga }}</h3>
              </div>
              <button class="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-500 dark:border-white/10 dark:text-slate-300" aria-label="Fechar" @click="closeDetails">×</button>
            </div>

            <div class="p-6">
              <div class="grid gap-3 sm:grid-cols-3">
                <div class="rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                  <span class="text-xs text-slate-500 dark:text-slate-400">Remuneração</span>
                  <strong class="mt-1 block text-sm text-slate-800 dark:text-white">{{ formatSalario(selectedJob.salario) }}</strong>
                </div>
                <div class="rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                  <span class="text-xs text-slate-500 dark:text-slate-400">Vagas</span>
                  <strong class="mt-1 block text-sm text-slate-800 dark:text-white">{{ selectedJob.quantidadeVaga }}</strong>
                </div>
                <div class="rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                  <span class="text-xs text-slate-500 dark:text-slate-400">Publicação</span>
                  <strong class="mt-1 block text-sm text-slate-800 dark:text-white">{{ formatDateFull(selectedJob.dataCadastro) || 'Atual' }}</strong>
                </div>
              </div>

              <div class="mt-6">
                <h4 class="font-bold text-[#071b35] dark:text-white">Descrição e requisitos</h4>
                <p v-if="selectedJob.requisitos" class="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600 dark:text-slate-300">{{ selectedJob.requisitos }}</p>
                <p v-else class="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">Os requisitos detalhados serão apresentados durante o processo seletivo.</p>
              </div>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button class="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-600 dark:border-white/20 dark:text-slate-300" @click="closeDetails">Fechar</button>
                <a v-if="talentosUrl" :href="talentosUrl" target="_blank" rel="noopener" class="rounded-full bg-[#0b2345] px-6 py-3 text-center text-sm font-bold text-white dark:bg-white dark:text-[#071b35]">Candidatar-se no sistema ↗</a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
interface Vaga {
  codigo: number
  nomeVaga: string
  salario: number | null
  requisitos: string | null
  quantidadeVaga: number
  pcd: boolean
  dataCadastro: string | null
  cargo: string | null
}

interface TalentosResponse {
  url: string | null
  source: string
}

useHead({
  title: 'Vagas | NTL - Nova Tecnologia',
  meta: [
    { name: 'description', content: 'Oportunidades profissionais e banco de talentos da NTL - Nova Tecnologia.' }
  ]
})

const searchQuery = ref('')
const pcdOnly = ref(false)
const selectedJob = ref<Vaga | null>(null)

const { data: jobs, pending, error, refresh } = await useFetch<Vaga[]>('/api/vagas', {
  default: () => []
})

const { data: talentosData } = await useFetch<TalentosResponse>('/api/talentos', {
  default: () => ({ url: null, source: 'unavailable' })
})

const talentosUrl = computed(() => talentosData.value?.url ?? null)

const totalPositions = computed(() => (jobs.value ?? []).reduce((sum, job) => sum + Math.max(1, Number(job.quantidadeVaga) || 1), 0))

const filteredJobs = computed(() => {
  const query = searchQuery.value.trim().toLocaleLowerCase('pt-BR')
  return (jobs.value ?? []).filter((job) => {
    if (pcdOnly.value && !job.pcd) return false
    if (!query) return true
    const haystack = [job.nomeVaga, job.cargo, job.requisitos].filter(Boolean).join(' ').toLocaleLowerCase('pt-BR')
    return haystack.includes(query)
  })
})

const formatSalario = (salario: number | null) => {
  if (!salario || salario <= 0) return 'A combinar'
  return salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const parseDate = (value: string | null) => {
  if (!value) return null
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? null : date
}

const formatDate = (value: string | null) => {
  const date = parseDate(value)
  if (!date) return ''
  const diff = Math.max(0, Math.floor((Date.now() - date.getTime()) / 86400000))
  if (diff === 0) return 'Hoje'
  if (diff === 1) return 'Ontem'
  if (diff < 30) return `${diff} dias atrás`
  return date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })
}

const formatDateFull = (value: string | null) => {
  const date = parseDate(value)
  return date?.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }) ?? ''
}

const openDetails = (job: Vaga) => {
  selectedJob.value = job
  if (import.meta.client) document.body.style.overflow = 'hidden'
}

const closeDetails = () => {
  selectedJob.value = null
  if (import.meta.client) document.body.style.overflow = ''
}

onBeforeUnmount(() => {
  if (import.meta.client) document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active { transition: opacity .2s ease; }
.modal-enter-from,
.modal-leave-to { opacity: 0; }
.modal-enter-active > div:last-child,
.modal-leave-active > div:last-child { transition: transform .2s ease, opacity .2s ease; }
.modal-enter-from > div:last-child,
.modal-leave-to > div:last-child { transform: translateY(8px) scale(.98); opacity: 0; }
</style>
