<template>
  <div class="overflow-x-hidden bg-white dark:bg-[#06182f]">
    <!-- HERO -->
    <section class="relative flex min-h-[92vh] items-center overflow-hidden pt-20">
      <div class="absolute inset-0">
        <img src="/img/inicial.jpg" alt="Equipe e tecnologia NTL" class="h-full w-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/55 dark:from-[#06182f] dark:via-[#06182f]/96 dark:to-[#06182f]/65" />
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(52,127,246,.16),transparent_38%)]" />
      </div>

      <div class="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
        <div class="max-w-3xl">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0b2345]/15 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0b2345] shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-primary-200">
            <span class="h-2 w-2 rounded-full bg-primary-500" />
            Tecnologia, serviços e pessoas desde 1988
          </div>

          <h1 class="text-balance text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-[#071b35] dark:text-white sm:text-6xl lg:text-7xl xl:text-[5.35rem]">
            Performance para operações que
            <span class="text-primary-600 dark:text-primary-300">não podem parar.</span>
          </h1>

          <p class="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            A NTL une experiência, tecnologia e capital humano para entregar infraestrutura, software, atendimento, facilities e transformação digital sob medida.
          </p>

          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#solucoes" class="inline-flex items-center justify-center rounded-full bg-[#0b2345] px-7 py-4 font-bold text-white shadow-xl shadow-[#071b35]/15 transition hover:-translate-y-0.5 hover:bg-[#12345d] dark:bg-white dark:text-[#071b35] dark:hover:bg-slate-100">
              Conheça nossas soluções
            </a>
            <NuxtLink to="/contato" class="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-7 py-4 font-bold text-[#0b2345] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#0b2345] dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white">
              Fale com um especialista
              <span aria-hidden="true">↗</span>
            </NuxtLink>
          </div>

          <div class="mt-11 grid max-w-2xl grid-cols-3 gap-3 border-t border-slate-200 pt-7 dark:border-white/10">
            <div>
              <strong class="block text-2xl font-bold text-[#071b35] dark:text-white sm:text-3xl">{{ yearsOfHistory }}+</strong>
              <span class="mt-1 block text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">anos de história</span>
            </div>
            <div>
              <strong class="block text-2xl font-bold text-[#071b35] dark:text-white sm:text-3xl">Brasil</strong>
              <span class="mt-1 block text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">atuação nacional</span>
            </div>
            <div>
              <strong class="block text-2xl font-bold text-[#071b35] dark:text-white sm:text-3xl">Full service</strong>
              <span class="mt-1 block text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">soluções integradas</span>
            </div>
          </div>
        </div>

        <!-- Vagas em tempo real -->
        <div class="lg:justify-self-end">
          <div class="relative mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/88 p-2 shadow-[0_30px_90px_-30px_rgba(7,27,53,.45)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0b2345]/88 lg:mx-0">
            <div class="rounded-[1.6rem] border border-slate-200/80 bg-white p-5 dark:border-white/10 dark:bg-[#071b35] sm:p-6">
              <div class="flex items-center justify-between gap-4">
                <div>
                  <div class="flex items-center gap-2">
                    <span class="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                    <p class="text-sm font-bold text-[#071b35] dark:text-white">Oportunidades NTL</p>
                  </div>
                  <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">Dados sincronizados com o STC</p>
                </div>
                <NuxtLink to="/vagas" class="text-xs font-bold text-primary-600 hover:underline dark:text-primary-300">Ver todas</NuxtLink>
              </div>

              <div class="mt-5 divide-y divide-slate-100 dark:divide-white/10">
                <template v-if="vagasPending">
                  <div v-for="i in 4" :key="i" class="flex animate-pulse items-center gap-3 py-4">
                    <div class="h-10 w-10 rounded-xl bg-slate-100 dark:bg-white/10" />
                    <div class="flex-1">
                      <div class="h-3.5 w-3/4 rounded bg-slate-100 dark:bg-white/10" />
                      <div class="mt-2 h-3 w-1/2 rounded bg-slate-100 dark:bg-white/10" />
                    </div>
                  </div>
                </template>

                <div v-else-if="!vagasHome.length" class="py-10 text-center">
                  <p class="font-semibold text-slate-700 dark:text-slate-200">Nenhuma vaga ativa agora.</p>
                  <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Seu currículo ainda pode entrar no nosso banco de talentos.</p>
                </div>

                <NuxtLink
                  v-for="vaga in vagasHome"
                  v-else
                  :key="vaga.codigo"
                  to="/vagas"
                  class="group flex items-center gap-3 py-4"
                >
                  <div class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary-700 transition group-hover:bg-primary-100 dark:bg-primary-500/10 dark:text-primary-300">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="truncate text-sm font-bold text-slate-800 transition group-hover:text-primary-700 dark:text-white dark:group-hover:text-primary-300">{{ vaga.nomeVaga }}</p>
                    <p class="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">{{ vaga.cargo || 'Oportunidade NTL' }}</p>
                  </div>
                  <span class="text-slate-300 transition group-hover:translate-x-1 group-hover:text-primary-500 dark:text-slate-600">→</span>
                </NuxtLink>
              </div>

              <a
                v-if="talentosUrl"
                :href="talentosUrl"
                target="_blank"
                rel="noopener"
                class="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b2345] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#12345d] dark:bg-white dark:text-[#071b35]"
              >
                Cadastrar currículo no banco de talentos
                <span aria-hidden="true">↗</span>
              </a>
              <NuxtLink v-else to="/vagas" class="mt-4 flex w-full items-center justify-center rounded-xl bg-[#0b2345] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#12345d] dark:bg-white dark:text-[#071b35]">
                Conhecer oportunidades
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CLIENTES / PROVA SOCIAL -->
    <section id="clientes" class="border-y border-slate-200 bg-slate-50 py-10 dark:border-white/10 dark:bg-[#051426]">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-300">Experiência comprovada</p>
            <h2 class="mt-2 text-2xl font-bold tracking-tight text-[#071b35] dark:text-white">Organizações atendidas ao longo da nossa história</h2>
          </div>
          <p class="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">Projetos para empresas privadas e instituições públicas, em diferentes escalas e níveis de serviço.</p>
        </div>

        <div class="client-marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div class="flex w-max animate-marquee items-center gap-4 hover:[animation-play-state:paused]">
            <div v-for="(client, index) in clientsLoop" :key="`${client.name}-${index}`" class="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <img :src="client.logo" :alt="client.name" class="max-h-11 max-w-[125px] object-contain grayscale transition duration-300 hover:grayscale-0 dark:brightness-110" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EMPRESA -->
    <section id="empresa" class="py-20 sm:py-24 lg:py-32">
      <div class="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div class="lg:sticky lg:top-28 lg:self-start">
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-300">A NTL</p>
          <h2 class="mt-4 text-4xl font-bold leading-tight tracking-[-0.035em] text-[#071b35] dark:text-white sm:text-5xl">
            Tecnologia de ponta com excelência humana.
          </h2>
          <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            A NTL nasceu em 1988 e evoluiu acompanhando cada grande transformação do mercado de tecnologia. Hoje atua como empresa full service, combinando engenharia de sistemas, infraestrutura, atendimento, facilities, terceirização e gestão digital.
          </p>
          <NuxtLink to="/contato" class="mt-8 inline-flex items-center gap-2 font-bold text-[#0b2345] transition hover:gap-3 dark:text-primary-300">
            Converse sobre seu projeto <span>→</span>
          </NuxtLink>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <article v-for="item in differentials" :key="item.title" class="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:bg-white hover:shadow-ntl dark:border-white/10 dark:bg-white/5 dark:hover:border-primary-400/30 dark:hover:bg-white/[.07]">
            <div class="grid h-11 w-11 place-items-center rounded-xl bg-[#0b2345] text-sm font-black text-white dark:bg-white dark:text-[#071b35]">{{ item.number }}</div>
            <h3 class="mt-6 text-xl font-bold text-[#071b35] dark:text-white">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ item.text }}</p>
          </article>

          <article class="rounded-[1.75rem] bg-[#0b2345] p-7 text-white sm:col-span-2 dark:bg-primary-950">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-primary-200">Nossa missão</p>
            <p class="mt-4 text-xl font-semibold leading-8 sm:text-2xl">
              Apoiar e ser fator de sucesso nas operações dos clientes, aplicando tecnologia, boas práticas e soluções específicas para gerar resultados sustentáveis.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- SOLUÇÕES CARROSSEL -->
    <section id="solucoes" class="bg-[#071b35] py-20 text-white sm:py-24 lg:py-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div class="max-w-3xl">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-primary-300">Soluções</p>
            <h2 class="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">Uma operação, várias frentes. Um só parceiro.</h2>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Estruturamos a combinação certa de pessoas, processos e tecnologia para cada cenário.</p>
          </div>
          <div class="hidden gap-2 md:flex">
            <button class="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition hover:bg-white hover:text-[#071b35]" aria-label="Solução anterior" @click="scrollSolutions('left')">←</button>
            <button class="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition hover:bg-white hover:text-[#071b35]" aria-label="Próxima solução" @click="scrollSolutions('right')">→</button>
          </div>
        </div>

        <div ref="solutionsScroll" class="hide-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <article v-for="(solution, index) in solutions" :key="solution.title" class="group min-h-[360px] w-[84vw] max-w-[370px] shrink-0 snap-start rounded-[1.75rem] border border-white/10 bg-white/[.06] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[.1] sm:w-[360px]">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold tracking-[0.18em] text-primary-300">0{{ index + 1 }}</span>
              <div class="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-lg">{{ solution.icon }}</div>
            </div>
            <h3 class="mt-10 text-2xl font-bold">{{ solution.title }}</h3>
            <p class="mt-4 min-h-[72px] text-sm leading-7 text-slate-300">{{ solution.description }}</p>
            <ul class="mt-7 space-y-3 border-t border-white/10 pt-6">
              <li v-for="item in solution.items" :key="item" class="flex gap-3 text-sm text-slate-200">
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-300" />
                {{ item }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- PROJETOS -->
    <section class="py-20 sm:py-24 lg:py-32">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-300">Projetos e escala</p>
            <h2 class="mt-4 text-4xl font-bold tracking-[-0.035em] text-[#071b35] dark:text-white sm:text-5xl">Experiência que sai do discurso.</h2>
          </div>
          <p class="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Ao longo da história, a NTL operou projetos de suporte, service desk, desenvolvimento, infraestrutura e alocação de equipes para organizações de diferentes portes.</p>
        </div>

        <div class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <article v-for="project in projectHighlights" :key="project.title" class="rounded-[1.6rem] border border-slate-200 p-6 dark:border-white/10 dark:bg-white/5">
            <span class="text-xs font-bold uppercase tracking-[0.16em] text-primary-600 dark:text-primary-300">{{ project.area }}</span>
            <h3 class="mt-5 text-xl font-bold text-[#071b35] dark:text-white">{{ project.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ project.text }}</p>
          </article>
        </div>

        <div class="mt-8 text-center">
          <NuxtLink to="/projetos" class="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-bold text-[#0b2345] transition hover:border-[#0b2345] hover:bg-[#0b2345] hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-[#071b35]">
            Ver projetos e cases <span>→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- TIMELINE -->
    <section class="border-y border-slate-200 bg-slate-50 py-20 dark:border-white/10 dark:bg-[#051426] sm:py-24">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div class="max-w-3xl">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-300">Linha do tempo</p>
            <h2 class="mt-4 text-4xl font-bold tracking-[-0.035em] text-[#071b35] dark:text-white sm:text-5xl">{{ yearsOfHistory }} anos evoluindo com a tecnologia.</h2>
            <p class="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">Da microinformática à nuvem e às operações digitais: cada etapa ampliou nossa capacidade de resolver problemas reais.</p>
          </div>
          <div class="hidden gap-2 md:flex">
            <button class="grid h-11 w-11 place-items-center rounded-full border border-slate-300 text-[#0b2345] transition hover:bg-[#0b2345] hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-[#071b35]" aria-label="Marco anterior" @click="scrollTimeline('left')">←</button>
            <button class="grid h-11 w-11 place-items-center rounded-full border border-slate-300 text-[#0b2345] transition hover:bg-[#0b2345] hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-[#071b35]" aria-label="Próximo marco" @click="scrollTimeline('right')">→</button>
          </div>
        </div>

        <div ref="timelineScroll" class="hide-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <article v-for="event in timelineEvents" :key="`${event.year}-${event.title}`" class="relative min-h-[220px] w-[78vw] max-w-[300px] shrink-0 snap-start rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div class="flex items-center gap-3">
              <span class="h-2.5 w-2.5 rounded-full bg-primary-500" />
              <span class="text-sm font-black text-primary-600 dark:text-primary-300">{{ event.year }}</span>
            </div>
            <h3 class="mt-7 text-xl font-bold text-[#071b35] dark:text-white">{{ event.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ event.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- VAGAS CTA -->
    <section class="py-20 sm:py-24 lg:py-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="relative overflow-hidden rounded-[2rem] bg-[#0b2345] px-6 py-12 text-white shadow-ntl-dark sm:px-10 lg:grid lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:px-14 lg:py-16">
          <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />
          <div class="relative">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-primary-200">Faça parte</p>
            <h2 class="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">Talento também é tecnologia.</h2>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-200">Confira vagas abertas em tempo real ou mantenha seu currículo no banco de talentos da NTL para futuras oportunidades.</p>
          </div>
          <div class="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col lg:items-stretch lg:pl-12">
            <NuxtLink to="/vagas" class="rounded-full bg-white px-6 py-4 text-center font-bold text-[#071b35] transition hover:-translate-y-0.5">Ver vagas abertas</NuxtLink>
            <a v-if="talentosUrl" :href="talentosUrl" target="_blank" rel="noopener" class="rounded-full border border-white/25 px-6 py-4 text-center font-bold text-white transition hover:bg-white/10">Cadastrar currículo ↗</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface VagaHome {
  codigo: number
  nomeVaga: string
  cargo: string | null
}

interface TalentosResponse {
  url: string | null
  source: string
}

const yearsOfHistory = new Date().getFullYear() - 1988

const { data: vagasData, pending: vagasPending } = await useFetch<VagaHome[]>('/api/vagas', {
  default: () => []
})

const { data: talentosData } = await useFetch<TalentosResponse>('/api/talentos', {
  default: () => ({ url: null, source: 'unavailable' })
})

const vagasHome = computed(() => (vagasData.value ?? []).slice(0, 4))
const talentosUrl = computed(() => talentosData.value?.url ?? null)

const solutionsScroll = ref<HTMLElement | null>(null)
const timelineScroll = ref<HTMLElement | null>(null)

const scrollElement = (element: HTMLElement | null, direction: 'left' | 'right', amount: number) => {
  if (!element) return
  element.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
}

const scrollSolutions = (direction: 'left' | 'right') => scrollElement(solutionsScroll.value, direction, 390)
const scrollTimeline = (direction: 'left' | 'right') => scrollElement(timelineScroll.value, direction, 320)

const differentials = [
  { number: '01', title: 'Experiência', text: 'Décadas planejando, executando e controlando projetos de tecnologia, atendimento e facilities.' },
  { number: '02', title: 'Capacidade', text: 'Equipes e processos preparados para ambientes críticos, contratos de escala e diferentes níveis de serviço.' },
  { number: '03', title: 'Vanguardismo', text: 'Adoção contínua de novas tecnologias, metodologias e modelos de operação para aumentar produtividade.' },
  { number: '04', title: 'Proximidade', text: 'Soluções desenhadas de acordo com a realidade do cliente, sem perder governança, segurança e qualidade.' }
]

const solutions = [
  {
    title: 'Tecnologia da Informação',
    description: 'Operação, sustentação e evolução de ambientes de TI com visão de serviço e continuidade.',
    icon: 'TI',
    items: ['Suporte a usuários e hardware', 'Administração de redes e servidores', 'Service Desk e operação', 'Segurança e gestão de serviços']
  },
  {
    title: 'Fábrica de Software',
    description: 'Sistemas sob medida, manutenção de legados e desenvolvimento para web, nuvem e ambientes corporativos.',
    icon: '</>',
    items: ['Análise e desenvolvimento', 'Aplicações customizadas', 'Portais e integrações', 'Modernização de sistemas legados']
  },
  {
    title: 'Transformação Digital',
    description: 'Processos, infraestrutura e aplicações organizados para uma operação realmente digital.',
    icon: 'DX',
    items: ['Cloud e virtualização', 'Paperless e digitalização', 'Operação híbrida e remota', 'Integração de processos e sistemas']
  },
  {
    title: 'Teleatendimento',
    description: 'Centrais de atendimento, service desk e operações dimensionadas para diferentes SLAs e escalas.',
    icon: '24h',
    items: ['Call center', 'Service desk', 'Operações 24x7', 'Gestão por indicadores e SLA']
  },
  {
    title: 'Facilities',
    description: 'Alocação e gestão de profissionais especializados para atividades administrativas e operacionais.',
    icon: 'RH',
    items: ['Recrutamento e seleção', 'Alocação de equipes', 'Gestão operacional', 'Apoio administrativo']
  },
  {
    title: 'NEEO',
    description: 'Gestão digital de rotinas administrativas e de pessoas para apoiar operações distribuídas.',
    icon: 'N',
    items: ['Banco de currículos', 'Contratação na web', 'Ponto e documentos', 'Visão gerencial da operação']
  }
]

const clients = [
  { name: 'HP', logo: '/img/hp.png' },
  { name: 'Microsoft', logo: '/img/microsoft.png' },
  { name: 'Michelin', logo: '/img/Michelin.png' },
  { name: 'ANS', logo: '/img/ans.png' },
  { name: 'IPHAN', logo: '/img/iphan.png' },
  { name: 'TJERJ', logo: '/img/pjerj.png' },
  { name: 'Positivo', logo: '/img/positivo.png' },
  { name: 'UFRRJ', logo: '/img/ufrrj.png' },
  { name: 'Eletrobras', logo: '/img/eletrobras.png' },
  { name: 'Defesa Civil', logo: '/img/defesa civil.png' }
]

const clientsLoop = [...clients, ...clients]

const projectHighlights = [
  { area: 'Fábrica de software', title: 'TJERJ', text: 'Projetos com equipes de análise, programação, gestão e supervisão para desenvolvimento de sistemas.' },
  { area: 'Desenvolvimento', title: 'TRF da 3ª Região', text: 'Atuação com fábrica de software e profissionais de análise e desenvolvimento.' },
  { area: 'Tecnologia', title: 'Defesa Civil RJ', text: 'Suporte ao parque de microinformática, infraestrutura e desenvolvimento de sistemas específicos.' },
  { area: 'Service Desk', title: 'Operações de escala', text: 'Histórico de centrais com múltiplos níveis de serviço, inclusive operações contínuas e ambientes críticos.' }
]

const timelineEvents = [
  { year: '1988', title: 'Fundação', description: 'Nasce a NTL - Nova Tecnologia, iniciando uma trajetória voltada a serviços e tecnologia.' },
  { year: '1990', title: 'Atuação nacional', description: 'A empresa amplia sua capacidade de atendimento para projetos em diferentes regiões do Brasil.' },
  { year: '1993', title: 'Parcerias multinacionais', description: 'Início de parcerias e projetos com grandes fabricantes e empresas globais de tecnologia.' },
  { year: '1995', title: 'Linux', description: 'Domínio de ambientes Linux para suporte e desenvolvimento de aplicações.' },
  { year: '1996', title: 'Antares Internet Provider', description: 'A NTL participa da expansão inicial da internet comercial no Brasil.' },
  { year: '1997', title: 'ISO 9000', description: 'Certificação de qualidade e consolidação de processos estruturados de operação.' },
  { year: '2001', title: 'Parceria Microsoft', description: 'Ampliação de competências em ambientes e tecnologias Microsoft.' },
  { year: '2002', title: 'PMI', description: 'Gestão de projetos fortalecida com práticas e metodologia de gerenciamento.' },
  { year: '2003/04', title: 'Reconhecimento nacional', description: 'NTL figura entre integradores de destaque no mercado brasileiro de tecnologia.' },
  { year: '2009', title: 'ITIL', description: 'Adoção e consolidação de melhores práticas para gestão de serviços de TI.' },
  { year: '2010', title: 'NTL Facilities', description: 'Expansão da atuação para facilities, administração e alocação de pessoal.' },
  { year: '2011', title: 'Fábrica de Software', description: 'Criação da Divisão de Engenharia de Sistemas para desenvolvimento de soluções sob medida.' },
  { year: '2014', title: 'Soluções customizadas', description: 'Foco ampliado em projetos específicos, integrando serviços e tecnologia.' },
  { year: '2018', title: 'Transformação Digital', description: 'Nova frente para apoiar clientes na digitalização de infraestrutura, processos e operação.' },
  { year: '2019', title: 'NEEO', description: 'Consolidação da plataforma de rotinas administrativas e gestão operacional.' },
  { year: '2020', title: 'Tudo na Web', description: 'Operações preparadas para nuvem e trabalho remoto, mantendo a continuidade durante a pandemia.' },
  { year: '2021', title: 'Nova fase digital', description: 'Reorganização interna, novos produtos e fortalecimento da comunicação B2B.' },
  { year: '2023', title: '35 anos', description: 'Marco de 35 anos de inovação, serviços e parcerias de longo prazo.' },
  { year: '2026', title: 'Experiência renovada', description: 'Modernização da presença digital da NTL, conectando o site institucional aos sistemas e dados da operação.' }
]
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

@media (prefers-reduced-motion: reduce) {
  .client-marquee > div {
    animation: none !important;
    transform: none !important;
  }
}
</style>
