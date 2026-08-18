<template>
  <div class="min-h-screen bg-white pt-20 dark:bg-[#06182f]">
    <section class="relative overflow-hidden border-b border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-[#051426]">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(52,127,246,.16),transparent_38%)]" />
      <div class="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-300">Experiência em campo</p>
        <h1 class="mt-4 max-w-4xl text-5xl font-bold leading-[1.04] tracking-[-0.045em] text-[#071b35] dark:text-white sm:text-6xl">
          Projetos que mostram a escala da NTL.
        </h1>
        <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Uma seleção do histórico de operações em tecnologia, desenvolvimento, service desk, teleatendimento e apoio administrativo para organizações públicas e privadas.
        </p>
      </div>
    </section>

    <section class="py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="grid gap-5 lg:grid-cols-2">
          <article v-for="area in projectAreas" :key="area.title" class="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
            <div class="flex items-start justify-between gap-6">
              <div>
                <p class="text-xs font-bold uppercase tracking-[0.16em] text-primary-600 dark:text-primary-300">{{ area.eyebrow }}</p>
                <h2 class="mt-3 text-2xl font-bold text-[#071b35] dark:text-white sm:text-3xl">{{ area.title }}</h2>
              </div>
              <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#0b2345] text-sm font-black text-white dark:bg-white dark:text-[#071b35]">{{ area.code }}</div>
            </div>

            <p class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ area.description }}</p>

            <div class="mt-6 space-y-3">
              <details v-for="project in area.projects" :key="project.name" class="group rounded-2xl border border-slate-200 bg-slate-50 p-4 open:bg-white dark:border-white/10 dark:bg-white/5 dark:open:bg-white/[.07]">
                <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#071b35] dark:text-white">
                  <span>{{ project.name }}</span>
                  <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-500 transition group-open:rotate-45 dark:border-white/10 dark:text-slate-300">+</span>
                </summary>
                <div class="mt-4 border-t border-slate-200 pt-4 dark:border-white/10">
                  <ul class="space-y-2">
                    <li v-for="item in project.items" :key="item" class="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="border-y border-slate-200 bg-slate-50 py-16 dark:border-white/10 dark:bg-[#051426] sm:py-20">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-300">Capacidade multidisciplinar</p>
            <h2 class="mt-4 text-4xl font-bold tracking-[-0.035em] text-[#071b35] dark:text-white">Do usuário ao datacenter. Do processo ao software.</h2>
          </div>
          <div class="grid gap-3 sm:grid-cols-2">
            <div v-for="item in capabilities" :key="item" class="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">{{ item }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="overflow-hidden rounded-[2rem] bg-[#0b2345] px-6 py-12 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-primary-200">Próximo projeto</p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Conte o desafio. A NTL desenha a operação.</h2>
            <p class="mt-4 max-w-2xl text-base leading-7 text-slate-200">Podemos combinar tecnologia, pessoas e processos de acordo com o escopo, a criticidade e o nível de serviço necessário.</p>
          </div>
          <NuxtLink to="/contato" class="mt-7 inline-flex shrink-0 rounded-full bg-white px-7 py-4 font-bold text-[#071b35] transition hover:-translate-y-0.5 lg:mt-0">Fale com nossos especialistas</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Projetos e Cases | NTL - Nova Tecnologia',
  meta: [
    { name: 'description', content: 'Conheça projetos e experiências da NTL em tecnologia, software, service desk, teleatendimento e facilities.' }
  ]
})

const projectAreas = [
  {
    eyebrow: 'Tecnologia da Informação',
    title: 'Infraestrutura e suporte',
    code: 'TI',
    description: 'Suporte de usuários, parque de microinformática, redes, instalações e sustentação de ambientes corporativos.',
    projects: [
      { name: 'HP - parceria de serviços', items: ['Histórico de mais de duzentos contratos de serviços', 'Atendimento em território nacional', 'Operações com diferentes níveis de serviço e escalas', 'Suporte de hardware e software para grandes clientes corporativos'] },
      { name: 'Defesa Civil do Estado do Rio de Janeiro', items: ['Suporte ao parque de microinformática', 'Suporte de hardware e software aos usuários', 'Sustentação da infraestrutura tecnológica local'] },
      { name: 'INCA', items: ['Suporte ao parque de microinformática', 'Atendimento de hardware aos usuários', 'Técnicos alocados e cobertura de peças'] },
      { name: 'ANS', items: ['Cabeamento de rede de dados e voz', 'Instalação e movimentação de pontos', 'Manutenção de telefonia e infraestrutura de rede'] }
    ]
  },
  {
    eyebrow: 'Gestão de serviços',
    title: 'Service Desk',
    code: 'SD',
    description: 'Centrais de atendimento estruturadas para incidentes, requisições, SLAs e ambientes com grande volume de usuários.',
    projects: [
      { name: 'Operação HP', items: ['70 posições em operação 24x7', 'Atendimento a diferentes níveis de serviço', 'Incidentes de hardware, software e requisições'] },
      { name: 'IPHAN', items: ['Atendimento a incidentes e requisições', 'Uso de práticas ITIL', 'Operação para aproximadamente 300 usuários'] },
      { name: 'LNCC', items: ['Suporte de hardware e software', 'Uso de práticas ITIL', 'Atendimento a centenas de usuários e solicitações mensais'] },
      { name: 'IBM / Souza Cruz', items: ['Outsourcing de atendimento', 'Operação com práticas ITIL', 'Suporte a ambiente com milhares de usuários'] }
    ]
  },
  {
    eyebrow: 'Centrais de atendimento',
    title: 'Teleatendimento',
    code: 'TA',
    description: 'Equipes de atendimento e supervisão dimensionadas para operações públicas e privadas, incluindo escalas contínuas.',
    projects: [
      { name: 'MPRJ', items: ['Operação de teleatendimento com equipe dedicada', 'Estrutura de supervisão e atendimento'] },
      { name: 'Fiocruz', items: ['Equipe de supervisão', 'Dezenas de posições de atendimento'] },
      { name: 'Hospital Naval Marcílio Dias', items: ['Supervisão dedicada', 'Teleatendimento em escala 24x7'] },
      { name: 'IBGE', items: ['Estrutura de supervisão para equipes de atendimento', 'Operação vinculada a projetos de grande alcance'] }
    ]
  },
  {
    eyebrow: 'Engenharia de sistemas',
    title: 'Fábrica de Software',
    code: '</>',
    description: 'Análise, desenvolvimento, sustentação e modernização de sistemas com equipes multidisciplinares.',
    projects: [
      { name: 'TJERJ', items: ['Fábrica de software', 'Equipes com analistas, programadores, gerentes e supervisores'] },
      { name: 'TRF da 3ª Região', items: ['Fábrica de software', 'Equipe de análise e desenvolvimento de sistemas'] },
      { name: 'IBGE', items: ['Fábrica de software', 'Analistas e programadores dedicados'] },
      { name: 'Defesa Civil RJ', items: ['Análise e desenvolvimento de sistemas específicos', 'Desenvolvimento e manutenção de portal corporativo', 'Manutenção e evolução de sistemas legados'] }
    ]
  },
  {
    eyebrow: 'Facilities',
    title: 'Apoio administrativo',
    code: 'FA',
    description: 'Gestão e cessão de mão de obra para atividades administrativas, operacionais, recepção e apoio especializado.',
    projects: [
      { name: 'TJERJ', items: ['Planejamento e monitoramento de fluxo logístico', 'Equipes de compras, almoxarifado e operação', 'Atuação em diferentes localidades do estado'] },
      { name: 'UFRRJ', items: ['Apoio administrativo e operacional', 'Perfis de escritório, manutenção, recepção e suporte', 'Relatórios de acompanhamento da operação'] },
      { name: 'Universidade Federal do ABC', items: ['Prestação de serviços de recepção', 'Equipe com recepcionistas e encarregado'] },
      { name: 'Secretaria de Infraestrutura e Obras do RJ', items: ['Atividades administrativas, técnicas e operacionais', 'Equipes multidisciplinares de apoio e atendimento'] }
    ]
  },
  {
    eyebrow: 'Operação digital',
    title: 'Transformação Digital e NEEO',
    code: 'DX',
    description: 'Digitalização de rotinas, infraestrutura em nuvem, gestão de pessoas e integração de processos corporativos.',
    projects: [
      { name: 'Infraestrutura digital', items: ['Virtualização de servidores', 'Hospedagem e compartilhamento em nuvem', 'Backup hierarquizado e infraestrutura escalável'] },
      { name: 'Processos digitais', items: ['Operação sem papel', 'Digitalização de documentos', 'Adequação de processos à cultura digital'] },
      { name: 'NEEO', items: ['Banco de currículos', 'Contratação na web', 'Ponto e documentos na web', 'Gestão e visualização gerencial da operação'] }
    ]
  }
]

const capabilities = [
  'Suporte e sustentação de TI',
  'Service Desk e teleatendimento',
  'Fábrica e manutenção de software',
  'Cloud, virtualização e infraestrutura',
  'Facilities e alocação de equipes',
  'Digitalização e gestão operacional'
]
</script>
