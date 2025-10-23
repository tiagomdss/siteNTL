<template>
  <div class="min-h-screen pt-24">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block glass px-4 py-2 rounded-full mb-4">
            <span class="text-sm font-medium text-primary-400">💼 Portfólio Completo</span>
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
            Nossos <span class="gradient-text">Projetos</span>
          </h1>
          <p class="text-gray-200 text-xl max-w-3xl mx-auto">
            Conheça em detalhes todos os projetos que desenvolvemos com excelência e inovação
          </p>
        </div>
      </div>
    </section>

    <!-- Projetos Detalhados -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div 
          v-for="(projeto, index) in projetos" 
          :key="index"
          class="mb-20"
        >
          <div class="glass-strong rounded-3xl p-8 md:p-12">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="projeto.icon"></path>
                </svg>
              </div>
              <div>
                <h2 class="text-3xl font-bold text-white">{{ projeto.titulo }}</h2>
                <p class="text-gray-300">{{ projeto.subtitulo }}</p>
              </div>
            </div>

            <div class="space-y-6">
              <div 
                v-for="(item, i) in projeto.items" 
                :key="i"
                class="card-liquid p-6"
              >
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
                    <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"></path>
                    </svg>
                  </div>
                  {{ item.titulo }}
                </h3>

                <div class="space-y-4">
                  <div 
                    v-for="(cliente, c) in item.clientes" 
                    :key="c"
                    class="bg-black/20 rounded-xl p-4"
                  >
                    <h4 class="font-semibold text-white mb-2">{{ cliente.nome }}</h4>
                    <ul v-if="cliente.detalhes" class="space-y-1">
                      <li 
                        v-for="(detalhe, d) in cliente.detalhes" 
                        :key="d"
                        class="text-sm text-gray-300 flex items-start gap-2"
                      >
                        <span class="text-primary-400 mt-1">•</span>
                        <span>{{ detalhe }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="glass-strong p-12 rounded-3xl text-center">
          <h2 class="text-4xl font-bold mb-6 text-white">
            Quer saber mais sobre nossos projetos?
          </h2>
          <p class="text-gray-200 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa
          </p>
          <NuxtLink to="/" class="btn-liquid inline-block">
            Voltar para Home
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const projetos = [
  {
    titulo: 'Tecnologia da Informação - TIC',
    subtitulo: 'Infraestrutura de TI, Serviço e assistências técnicas',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    items: [
      {
        titulo: 'Gestão da infraestrutura de TI',
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        clientes: [
          { nome: 'Suporte e assistências técnicas', detalhes: null },
          { nome: 'Gestão de servidores', detalhes: null }
        ]
      },
      {
        titulo: 'Melhores práticas de TI - ITIL',
        icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        clientes: [
          { 
            nome: 'Instituto do Patrimônio Histórico e Artístico', 
            detalhes: [
              'Implantação de Service Desk utilizando a metodologia ITIL',
              'Cenário encontrado: Sem ponto único de contato, Sem obrigação do registro dos chamados, Sem histórico de incidentes e requisições por usuários, Sem histórico de incidentes e requisições por equipamentos, Sem ferramenta para registro de chamados, Sem relatório de métricas, Desconhecimento no nível de satisfação dos usuários',
              'Cenário após a implantação: Ponto único de contato, Divisão da equipe em 2 níveis de atendimento (1º Nível, atendimento remoto e 2º Nível, atendimento presencial), Todas as solicitações passaram a ser registradas nos Sistema de Gerenciamento de Chamados, Confecção de relatórios mensal de desempenho, Nível de satisfação acima de 95%'
            ]
          },
          { nome: 'Laboratório Nacional de Computação Científica', detalhes: null },
          { nome: 'Defesa Civil - Secretaria de Defesa Civil do Estado do Rio de Janeiro', detalhes: null }
        ]
      }
    ]
  }
]
</script>
