<template>
  <div class="overflow-x-hidden min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative py-24 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-white/5 transition-colors">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/95 to-gray-50/40 dark:from-gray-950 dark:via-gray-900/95 dark:to-gray-900/40"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 mb-6 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
          <span class="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">PORTFÓLIO COMPLETO</span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Nossos <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">Projetos</span>
        </h1>
        
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Explore detalhadamente como entregamos inovação e resultados através de nossas áreas de atuação.
        </p>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-24">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 gap-16">
          <div v-for="(projeto, i) in projetos" :key="i" class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12 hover:border-blue-500/30 transition-all shadow-xl dark:shadow-none flex flex-col md:flex-row gap-12 items-start">
            
            <!-- Icon/Header -->
            <div class="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
              <div class="w-20 h-20 bg-blue-500/10 dark:bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-500">
                 <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="projeto.icon"></path></svg>
              </div>
              <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ projeto.title }}</h3>
              <p class="text-gray-500 dark:text-gray-400">{{ projeto.description || 'Soluções especializadas para sua empresa.' }}</p>
            </div>

            <!-- Details List -->
            <div class="w-full md:w-2/3">
              <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">Áreas de Atuação</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="(line, idx) in projeto.lines" :key="idx" class="flex items-start gap-3 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors">
                  <svg class="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span class="text-gray-700 dark:text-gray-300 font-medium">{{ line }}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="py-24 bg-gray-900 relative overflow-hidden">
      <div class="absolute inset-0 bg-[#FF6B00]/10"></div>
      <div class="container mx-auto px-6 text-center relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">Tem um projeto em mente?</h2>
        <NuxtLink to="/contato" class="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B00] hover:bg-[#ff8534] text-white rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-900/20">
          Fale com nossos especialistas
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const projetos = [
  {
    title: 'Tecnologia da Informação - TIC',
    description: 'Gestão completa e integrada para sua infraestrutura tecnológica.',
    lines: ['Gestão de Infraestrutura de TI', 'Serviço e assistências técnicas', 'Monitoramento 24/7 de ambientes', 'Segurança da Informação e Cyber Security', 'Consultoria em Cloud Computing', 'Virtualização de Servidores'],
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    title: 'Teleatendimentos',
    description: 'Comunicação eficiente e omnichannel para seus clientes.',
    lines: ['Service desk especializado (N1, N2, N3)', 'Call center receptivo e ativo', 'Atendimento via Chat e WhatsApp', 'Sistemas de CRM integrados', 'Auditoria de qualidade de atendimento'],
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
  },
  {
    title: 'Apoio Administrativo',
    description: 'Otimização de processos e foco no seu core business.',
    lines: ['Facilities Management', 'Terceirização de processos (BPO)', 'Gestão eletrônica de documentos (GED)', 'Alocação de profissionais administrativos', 'Limpeza e conservação predial'],
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Fábrica de Softwares',
    description: 'Desenvolvimento ágil e soluções digitais sob medida.',
    lines: ['Programação e análise de sistemas', 'Desenvolvimento de Apps Mobile', 'Integração de APIs e Microsserviços', 'Modernização de sistemas legados', 'QA e Testes Automatizados'],
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  },
  {
    title: 'Transformação Digital',
    description: 'Conduzindo sua empresa para a era digital.',
    lines: ['Consultoria para PMEs', 'Gestão e operação "Digital"', 'Migração para ambientes Nuvem', 'Automação de processos (RPA)', 'Marketing Digital e Presença Online'],
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  }
]

useHead({
  title: 'Projetos Realizados - NTL Nova Tecnologia',
  meta: [
    { name: 'description', content: 'Conheça os projetos realizados pela NTL em Tecnologia da Informação, Facilities e Transformação Digital.' }
  ]
})
</script>

<style scoped>
.text-transparent {
  -webkit-text-fill-color: transparent;
}
</style>
