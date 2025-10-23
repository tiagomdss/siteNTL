<template>
  <div>
    <!-- Hero Section with Liquid Glass Effect -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <!-- Background Image -->
      <div class="absolute inset-0 overflow-hidden">
        <img src="/img/inicial.jpg" alt="Background" class="w-full h-full object-cover opacity-20" />
        <div class="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-900/70 to-dark-900"></div>
      </div>
      
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="text-center lg:text-left">
            <div class="inline-block glass px-4 py-2 rounded-full mb-6">
              <span class="text-sm font-medium text-primary-400">✨ Inovação em Tecnologia</span>
            </div>
            
            <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Soluções sob medida para a
              <span class="gradient-text block mt-2">performance</span>
              de sua empresa
            </h1>
            
            <p class="text-xl text-gray-200 mb-8 max-w-2xl">
              Há mais de 30 anos acreditamos que uma instituição de sucesso resulta da harmonização entre tecnologia de ponta e a excelência do capital humano.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button class="btn-liquid">
                Fale Conosco
              </button>
              <button class="glass px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                Saiba Mais
              </button>
            </div>
          </div>

          <!-- 3D Visual Element -->
          <div class="relative">
            <div class="glass-strong p-8 rounded-3xl float">
              <div class="grid grid-cols-2 gap-4">
                <div class="card-liquid p-6 text-center">
                  <div class="text-4xl font-bold gradient-text mb-2">30+</div>
                  <div class="text-sm text-gray-200">Anos de Experiência</div>
                </div>
                <div class="card-liquid p-6 text-center">
                  <div class="text-4xl font-bold gradient-text mb-2">100+</div>
                  <div class="text-sm text-gray-200">Projetos Entregues</div>
                </div>
                <div class="card-liquid p-6 text-center">
                  <div class="text-4xl font-bold gradient-text mb-2">50+</div>
                  <div class="text-sm text-gray-200">Clientes Ativos</div>
                </div>
                <div class="card-liquid p-6 text-center">
                  <div class="text-4xl font-bold gradient-text mb-2">24/7</div>
                  <div class="text-sm text-gray-200">Suporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- A Empresa Section -->
    <section id="empresa" class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block glass px-4 py-2 rounded-full mb-4">
            <span class="text-sm font-medium text-primary-400">✨ Sobre Nós</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
            A <span class="gradient-text">Empresa</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="glass-strong p-8 rounded-3xl">
            <p class="text-gray-100 leading-relaxed mb-6">
              A NTL é uma empresa que há mais de 30 anos acredita que uma instituição de sucesso resulta da harmonização entre tecnologia de ponta disponível e a excelência do seu capital humano.
            </p>
            <p class="text-gray-100 leading-relaxed mb-6">
              Reconhecida no segmento de soluções em tecnologia da informação e com o passar do tempo foi estendendo sua atuação para área de recursos humanos, especializando-se na alocação de mão-de-obra e formação de equipes especializadas para diversas áreas corporativas.
            </p>
            <p class="text-gray-100 leading-relaxed">
              É inevitável que com toda experiência adquirida, a empresa utilize seu laboratório de engenharia de desenvolvimento de sistemas para criar soluções que favoreçam a usabilidade do software que pode ser acoplado a um pacote de serviços customizados.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="card-liquid p-6 hover:scale-105 transition-transform duration-300">
              <div class="text-primary-400 mb-4">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2 text-white">Experiência</h3>
              <p class="text-sm text-gray-200">Mais de 30 anos de sucesso no planejamento e execução de projetos</p>
            </div>

            <div class="card-liquid p-6 hover:scale-105 transition-transform duration-300">
              <div class="text-primary-400 mb-4">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2 text-white">Capacidade</h3>
              <p class="text-sm text-gray-200">Capacidade técnica comprovada por empresas de grande relevância</p>
            </div>

            <div class="card-liquid p-6 hover:scale-105 transition-transform duration-300">
              <div class="text-primary-400 mb-4">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2 text-white">Vanguardismo</h3>
              <p class="text-sm text-gray-200">Construção de soluções tecnológicas para melhoria de produtividade</p>
            </div>

            <div class="card-liquid p-6 hover:scale-105 transition-transform duration-300">
              <div class="text-primary-400 mb-4">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2 text-white">Expertise Certificada</h3>
              <p class="text-sm text-gray-200">Gerenciamento de projetos com versatilidade para qualquer porte</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Missão Section -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="glass-strong p-12 rounded-3xl max-w-4xl mx-auto text-center">
          <div class="inline-block glass px-4 py-2 rounded-full mb-6">
            <span class="text-sm font-medium text-primary-400">🎯 Nossa Missão</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
            Apoiar e ser fator de <span class="gradient-text">sucesso</span>
          </h2>
          <p class="text-xl text-gray-100 leading-relaxed">
            Apoiar e ser fator de sucesso no desenvolvimento dos processos de TI de nossos clientes. Oferecer aos nossos clientes um ambiente mais propício para o desenvolvimento dos seus negócios, com produtos de tecnologia e soluções específicas aplicadas às melhores práticas.
          </p>
        </div>
      </div>
    </section>

    <!-- Soluções Section -->
    <section id="solucoes" class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block glass px-4 py-2 rounded-full mb-4">
            <span class="text-sm font-medium text-primary-400">🛠️ O que fazemos</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
            Nossas <span class="gradient-text">Soluções</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(solution, index) in solutions" 
            :key="index"
            class="card-liquid p-8 group cursor-pointer"
          >
            <div class="text-primary-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="solution.icon"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-white">{{ solution.title }}</h3>
            <p class="text-gray-200 mb-6">{{ solution.description }}</p>
            <ul class="space-y-2">
              <li v-for="(item, i) in solution.items" :key="i" class="flex items-start gap-2 text-sm text-gray-100">
                <svg class="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Clientes Section -->
    <section id="clientes" class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block glass px-4 py-2 rounded-full mb-4">
            <span class="text-sm font-medium text-primary-400">🤝 Nossos Parceiros</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span class="gradient-text">Clientes</span> que Confiam
          </h2>
          <p class="text-gray-200 max-w-2xl mx-auto">
            Empresas de grande relevância que escolheram a NTL como parceira tecnológica
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          <div class="card-liquid p-6 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300">
            <img src="/img/iphan.png" alt="IPHAN" class="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
          <div class="card-liquid p-6 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300">
            <img src="/img/microsoft.png" alt="Microsoft" class="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
          <div class="card-liquid p-6 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300">
            <img src="/img/hp.png" alt="HP" class="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
          <div class="card-liquid p-6 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300">
            <img src="/img/Michelin.png" alt="Michelin" class="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
          <div class="card-liquid p-6 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300">
            <img src="/img/positivo.png" alt="Positivo" class="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
          <div class="card-liquid p-6 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300">
            <img src="/img/prefeitura.png" alt="Prefeitura" class="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
          <div class="card-liquid p-6 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300">
            <img src="/img/govbr.png" alt="Governo Federal" class="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
          <div class="card-liquid p-6 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300">
            <img src="/img/PRF.png" alt="PRF" class="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
          <div class="card-liquid p-6 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300">
            <img src="/img/ans.png" alt="ANS" class="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
          <div class="card-liquid p-6 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300">
            <img src="/img/pjerj.png" alt="PJERJ" class="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
          <div class="card-liquid p-6 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300">
            <img src="/img/defesa civil.png" alt="Defesa Civil" class="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
          <div class="card-liquid p-6 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300">
            <img src="/img/eletrobras.png" alt="Eletrobras" class="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </section>

    <!-- Projetos Section -->
    <section id="projetos" class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block glass px-4 py-2 rounded-full mb-4">
            <span class="text-sm font-medium text-primary-400">💼 Projetos Realizados</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span class="gradient-text">Projetos</span> Realizados
          </h2>
          <p class="text-gray-200 max-w-2xl mx-auto">
            Conheça os principais projetos que desenvolvemos com excelência
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          <div 
            v-for="(projeto, index) in projetosSimples" 
            :key="index"
            class="card-liquid p-6 text-center group"
          >
            <div class="mb-4 flex justify-center">
              <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="projeto.icon"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-bold mb-2 text-white">{{ projeto.titulo }}</h3>
            <p class="text-sm text-gray-300">{{ projeto.subtitulo }}</p>
          </div>
        </div>

        <div class="text-center mb-8">
          <NuxtLink to="/projetos" class="btn-liquid inline-block">
            Saiba Mais Sobre Nossos Projetos
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Sistema NEEO Section -->
    <section class="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block glass px-4 py-2 rounded-full mb-4">
            <span class="text-sm font-medium text-primary-400">🚀 Sistema NEEO</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
            Sistema <span class="gradient-text">Manager NEEO</span>
          </h2>
          <p class="text-gray-200 max-w-2xl mx-auto">
            Gestão completa de Recursos Humanos na nuvem
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div 
            v-for="(modulo, index) in modulosNEEO" 
            :key="index"
            class="card-liquid p-6 group hover:scale-105 transition-all duration-300"
          >
            <h3 class="text-xl font-bold mb-4 text-white">{{ modulo.titulo }}</h3>
            
            <ul class="space-y-2">
              <li v-for="(item, i) in modulo.items" :key="i" class="flex items-start gap-2 text-gray-300 text-sm">
                <span class="text-primary-400 mt-1">•</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-16">
          <div class="glass-strong p-8 md:p-12 rounded-3xl text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20"></div>
            <div class="relative z-10">
              <h3 class="text-3xl md:text-4xl font-bold mb-4 text-white">
                Transforme sua Gestão de RH
              </h3>
              <p class="text-gray-200 mb-8 text-lg max-w-2xl mx-auto">
                Descubra como o Sistema Manager NEEO pode revolucionar a gestão de pessoas da sua empresa
              </p>
              <a 
                href="https://manager.ntl.com.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-lg rounded-full hover:scale-110 transition-all duration-300 shadow-2xl shadow-primary-500/50 hover:shadow-primary-500/80"
              >
                <span>Conhecer o Sistema NEEO</span>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="glass-strong p-12 rounded-3xl text-center relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20"></div>
          <div class="relative z-10">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
              Pronto para <span class="gradient-text">inovar</span>?
            </h2>
            <p class="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos transformar sua empresa com nossas soluções tecnológicas.
            </p>
            <button class="btn-liquid glow">
              Fale com Nossos Especialistas
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const projetosSimples = [
  {
    titulo: 'Tecnologia da Informação - TIC',
    subtitulo: 'Infraestrutura de TI, Serviço e assistências técnicas',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    titulo: 'Teleatendimentos',
    subtitulo: 'Service desk, Call center',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
  },
  {
    titulo: 'Apoio Administrativo',
    subtitulo: 'Facilities, Terceirização',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    titulo: 'Fábrica de softwares',
    subtitulo: 'Programação e análise de sistemas, Soluções específicas',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  },
  {
    titulo: 'Transformação Digital',
    subtitulo: 'Pequenas e médias empresas, Gestão e operação "Digital" na internet',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  }
]

const modulosNEEO = [
  {
    titulo: 'Contratação',
    items: [
      'Recrutamento',
      'Sindicatos',
      'Documentos',
      'Validação VT',
      'Exames médicos',
      'Benefícios',
      'Outros'
    ]
  },
  {
    titulo: 'Gestão',
    items: [
      'Ponto/Presença',
      'Avaliação de desempenho',
      'Uniformes/EPI/Equipamentos',
      'Diário de bordo',
      'Outros'
    ]
  },
  {
    titulo: 'Folha',
    items: [
      'Licenças',
      'Afastados',
      'Horas extras',
      'Plantões',
      'Escalas',
      'Banco de horas',
      'Outros'
    ]
  },
  {
    titulo: 'Benefícios',
    items: [
      'VA/VR/VT',
      'Saúde/Seguros',
      'Interfaces com operadoras (RioCard, Ticket, Sodexo e outros)',
      'Auditoria',
      'Outros'
    ]
  },
  {
    titulo: 'Férias',
    items: [
      'Gestão de datas',
      'Aviso de férias',
      'Melhores datas',
      'Coberturas',
      'Controle anti-dobras',
      'Outros'
    ]
  },
  {
    titulo: 'Comunicação',
    items: [
      'Central de atendimento',
      'Contracheque',
      'Informe de rendimentos',
      'Comunicados',
      'Outros'
    ]
  },
  {
    titulo: 'Documentos',
    items: [
      'Gestão de documentos',
      'Busca inteligente',
      'Central de Downloads',
      'Outros'
    ]
  }
]

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
      },
      {
        titulo: 'Projetos e serviços diversos - IMAC',
        icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
        clientes: [
          {
            nome: 'HP - Petrobrás Distribuidora S.A.',
            detalhes: [
              'Instalação de impressoras laser e jato de tinta HP e impressoras matriciais Epson totalizando 724 equipamentos',
              'Instalação de drivers de impressora em estação dos usuários',
              'Treinamento de usuários',
              'Atuação em 90 cidades em 26 estados mais o DF'
            ]
          },
          {
            nome: 'HP – Companhia Energética de Minas Gerais S.A.',
            detalhes: [
              'Instalação de Servidores Novell e Windows',
              'Instalação e configuração de switch Cisco',
              'Instalação de roteadores Cisco',
              'Substituição de cabeamento de rede Ring por placa de rede Ethernet no prédio sede',
              'Instalação de placa de rede Ethernet em outras localidades',
              'Atuação em 36 cidades no estado de Minas Gerais'
            ]
          },
          {
            nome: 'EMC2 – Petróleo Brasileiro S.A. (Petrobras)',
            detalhes: [
              'Upgrade do parque de equipamentos EMC (hardware e software)',
              'Reconfiguração da rede de armazenamento (SAN)',
              'Levantamento e validação da integridade dos sistemas de backup corporativo e dados do cliente Petrobras (Macaé)'
            ]
          },
          {
            nome: 'Torino – Uno Educação',
            detalhes: [
              'Instalação e configuração de projetores',
              'Instalação e configuração de Apple TV',
              'Instalação e configuração de servidores, switches e roteadores Apple',
              'Atuação em todo estado do Rio de Janeiro',
              'Treinamento de usuários'
            ]
          },
          {
            nome: 'Positivo – Financiadora de Estudos e Projetos',
            detalhes: [
              'Configuração e instalação de 600 desktops'
            ]
          }
        ]
      },
      {
        titulo: 'Central de chamados e operações - Service Desk',
        icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
        clientes: [
          {
            nome: 'Parceiro de Serviços HP de 1993 a 2012',
            detalhes: [
              '70 posições 24 x 7',
              'Atendimento a diversos níveis de serviço (SLA)',
              'Atendimento de solicitações de incidentes de hardware e software e requisições',
              'Clientes atendidos: Michelin, Light, Sadia, Souza Cruz, Unilever, Eaton, GVT, HP, Lucent, Telefônica'
            ]
          },
          {
            nome: 'Instituto do Patrimônio Histórico e Artístico',
            detalhes: [
              '3 posições',
              'Atendimento de solicitações de incidentes de software e hardware e requisições',
              'Utilização da metodologia Itil',
              'Total de usuários: aproximadamente 300 usuários',
              'Total de Solicitações: média de 500 solicitações/mês'
            ]
          },
          {
            nome: 'Laboratório Nacional de Computação Científica',
            detalhes: [
              '2 Posições',
              'Atendimento de solicitações de incidentes de hardware e software e requisições',
              'Utilização da metodologia Itil',
              'Total de Usuários: 710',
              'Total de solicitações: média de 760 solicitações/mês'
            ]
          },
          {
            nome: 'Conselho Regional de Serviço Social - RJ',
            detalhes: [
              '1 Posição',
              'Atendimento de solicitações de incidentes de hardware e software e requisições',
              'Utilização da metodologia Itil',
              'Total de usuários: aproximadamente 50 usuários'
            ]
          },
          {
            nome: 'Conselho Regional de Economia - RJ',
            detalhes: [
              '1 Posição',
              'Atendimento de solicitações de incidentes de hardware e software e requisições',
              'Utilização da metodologia Itil',
              'Total de usuários: aproximadamente 50 usuários'
            ]
          },
          {
            nome: 'IBM',
            detalhes: [
              'Outsourcing no cliente Souza Cruz',
              '8 Posições',
              'Atendimento de solicitações de incidentes de hardware e software e requisições',
              'Utilização da metodologia Itil',
              'Total de usuários: aproximadamente 3000 usuários'
            ]
          }
        ]
      }
    ]
  },
  {
    titulo: 'Teleatendimentos',
    subtitulo: 'Service desk, Call center',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    items: [
      {
        titulo: 'Teleatendimentos',
        icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
        clientes: [
          { nome: 'IBGE - Instituto Brasileiro de Geografia e Estatística', detalhes: null },
          { nome: 'HNMD - Hospital Naval Marcílio Dias', detalhes: null },
          { nome: 'HAAF - Hospital de Aeronáutica dos Afonsos', detalhes: null },
          { nome: 'MPRJ - Ministério Público do Estado do Rio de Janeiro', detalhes: null },
          { 
            nome: 'Defensoria Pública do Rio de Janeiro', 
            detalhes: [
              '2 Supervisores',
              '13 Teleatendentes'
            ]
          },
          { nome: 'Fundação Oswaldo Cruz (Fiocruz)', detalhes: null }
        ]
      },
      {
        titulo: 'Service Desk',
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        clientes: [
          { nome: 'Parceiro de Serviços HP de 1993 a 2012', detalhes: null },
          { nome: 'Instituto do Patrimônio Histórico e Artístico', detalhes: null },
          { nome: 'Laboratório Nacional de Computação Científica', detalhes: null },
          { nome: 'Conselho Regional de Serviço Social - RJ', detalhes: null },
          { nome: 'Conselho Regional de Economia - RJ', detalhes: null },
          { nome: 'IBM', detalhes: null }
        ]
      }
    ]
  },
  {
    titulo: 'Apoio Administrativo',
    subtitulo: 'Facilities, Terceirização',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    items: [
      {
        titulo: 'Tribunal de Justiça do Estado do Rio de Janeiro',
        icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
        clientes: [
          {
            nome: 'Tribunal de Justiça do Estado do Rio de Janeiro',
            detalhes: [
              'Prestação de Serviços, com cessão de mão de obra, de planejamento e monitoramento do fluxo logístico de suprimentos e bens patrimoniais',
              'Locação no cliente com a seguinte equipe: 144 assistentes de compras, 106 auxiliares de almoxarifados, 4 operadores de empilhadeiras',
              'Viagem por todo o estado do Rio de Janeiro',
              'Atendimento em horário diferenciado',
              'Total de profissionais alocados: 254'
            ]
          },
          {
            nome: 'UFRRJ - Universidade Federal Rural do Estado do Rio de Janeiro Campus Nova Iguaçu',
            detalhes: [
              'Prestação de serviços, com cessão de mão de obra, de apoio administrativo e operacional com cessão de mão de obra',
              'Locação no cliente com a seguinte equipe: 1 auxiliar de almoxarife, 6 auxiliares de escritório, 1 auxiliar de jardinagem, 2 auxiliares de manutenção predial, 2 carregadores, 2 operadores de roçadeira, 4 recepcionistas',
              'Total de profissionais alocados: 18'
            ]
          },
          {
            nome: 'UFRRJ - Universidade Federal Rural do Estado do Rio de Janeiro Campus Seropédica',
            detalhes: [
              'Prestação de serviços, com cessão de mão de obra, de apoio administrativo e operacional com cessão de mão de obra',
              'Locação no cliente com a seguinte equipe: 5 almoxarifes, 55 assistentes de logística, 2 auxiliares de almoxarifado, 8 compradores',
              'Total de profissionais alocados: 70'
            ]
          },
          {
            nome: 'Johnson Controls BE do Brasil',
            detalhes: [
              'Prestação de serviços, com cessão de mão de obra, de mensageria motorizada e não motorizada, operação de central de cópias, administração de malotes, abastecimento de equipamentos de impressão e arrumação de salas',
              'Equipe alocada nas instalações da HP – Hewlett Packard: HP – Barueri: 12 auxiliares administrativos, HP – Campinas: 7 auxiliares administrativos, HP – São Paulo: 3 auxiliares administrativos',
              'Desenvolvimento de uma solução específica para o gerenciamento de toda a operação: Recebimento de correspondência, distribuição interna de documentos e correspondência, administração de malotes, abastecimento de equipamentos de impressão e arrumação de salas',
              'Total de profissionais alocados: 22'
            ]
          },
          {
            nome: 'Nuclebrás Equipamentos Pesados S.A.',
            detalhes: [
              'Prestação de serviços, com cessão de mão de obra, de protocolo, distribuição de documentos, portaria, operação de máquinas reprográficas, serviços gráficos e eventuais de telefonia',
              'Locação no cliente com a seguinte equipe: 3 contínuos, 1 supervisor, 4 auxiliares de escritório, 2 porteiros, 1 gráfico',
              'Total de profissionais alocados: 11'
            ]
          },
          {
            nome: 'Casa da Moeda do Brasil',
            detalhes: [
              'Prestação de serviços de mensageria, com cessão de mão de obra e não motorizada, para execução de distribuição interna de documentos e entrega de processos e encomendas',
              'Locação no cliente com a seguinte equipe: 1 supervisor, 3 mensageiros',
              'Disponibilização de equipamentos de informática para o desenvolvimento das atividades',
              'Disponibilização de carro elétrico para deslocamento no parque da fábrica',
              'Desenvolvimento de uma solução específica para gerenciar a distribuição interna dos documentos e entrega de processos e encomendas',
              'Elaboração de relatórios mensais demonstrando o fluxo diário de documentação',
              'Total de profissionais alocados: 4'
            ]
          },
          {
            nome: 'Universidade Federal do Estado do Rio de Janeiro',
            detalhes: [
              'Prestação de serviços, com cessão de mão de obra, de copeiragem hospitalar e administrativa em diversas unidades da universidade',
              'Locação no cliente com a seguinte equipe: 75 copeiras hospitalar, 39 copeiras administrativas',
              'Unidades atendidas: Ilha do Fundão, Centro do Rio de Janeiro, Laranjeiras, Botafogo, Lagoa',
              'Total de profissionais alocados: 114'
            ]
          },
          {
            nome: 'Universidade Federal do ABC',
            detalhes: [
              'Prestação de serviços, com cessão de mão de obra, de recepção',
              'Locação no cliente com a seguinte equipe: 7 recepcionistas, 1 encarregado',
              'Total de profissionais alocados: 8'
            ]
          },
          {
            nome: 'Departamento Nacional de Infraestrutura e Transporte - SP',
            detalhes: [
              'Prestação de serviços, com cessão de mão de obra, de suporte técnico operacional',
              'Locação no cliente com a seguinte equipe: 6 auxiliares administrativo, 2 recepcionistas/telefonistas, 2 copeiras, 1 operador de máquina copiadora, 1 auxiliar de serviços gerais',
              'Total de profissionais alocados: 12'
            ]
          },
          {
            nome: 'Centro de Pesquisa de Energia Elétrica',
            detalhes: [
              'Prestação de serviços, com cessão de mão de obra, de secretariado executivo',
              'Locação no cliente com a seguinte equipe: 1 secretária executiva sênior, 2 secretárias executiva pleno, 5 secretárias executiva júnior',
              'Total de profissionais alocados: 8'
            ]
          },
          {
            nome: 'Secretaria de Infraestrutura e Obras do Rio de Janeiro',
            detalhes: [
              'Prestação de serviços, com cessão de mão de obra, de apoio de atividades administrativas, técnicas e operacionais',
              'Locação no cliente com a seguinte equipe: 4 bombeiros civil, 2 encarregados de controle vertical, 10 ascensoristas, 1 operador de áudio, 5 porteiros, 2 encarregados de recepção, 8 recepcionistas, 4 auxiliares administrativo, 2 copeiras',
              'Total de profissionais alocados: 38'
            ]
          },
          {
            nome: 'Empresa de Obras Públicas do Estado do Rio de Janeiro',
            detalhes: [
              'Prestação de serviços, com cessão de mão de obra, de cozinha, copeiragem e recepção',
              'Locação no cliente com a seguinte equipe: 4 auxiliares de copa, 3 recepcionistas, 1 garçom',
              'Total de profissionais alocados: 8'
            ]
          },
          {
            nome: 'Centro Paula Souza',
            detalhes: [
              'Prestação de serviços de auxiliar de serviço operacional de áudio com cessão de mão de obra',
              'Locação no cliente com a seguinte equipe: 2 auxiliares de serviço operacional de áudio e vídeo',
              'Total de recursos alocados: 2'
            ]
          }
        ]
      }
    ]
  },
  {
    titulo: 'Fábrica de softwares',
    subtitulo: 'Programação e análise de sistemas, Soluções específicas',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    items: [
      {
        titulo: 'Desenvolvimento de Sistemas',
        icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
        clientes: [
          {
            nome: 'Defesa Civil - Secretaria de Defesa Civil do Estado do Rio de Janeiro',
            detalhes: [
              'Análise e desenvolvimento de sistemas específico do CBMERJ',
              'Desenvolvimento e manutenção do portal corporativos',
              'Repaginação e manutenção no legado',
              '1 Gerente',
              '1 Supervisor',
              '1 analista de requisitos',
              'Programadores'
            ]
          },
          {
            nome: 'Centro de Pesquisa de Energia Elétrica',
            detalhes: [
              'Desenvolvimento de sistemas',
              'Proprietário nas mais recentes tecnologias',
              '48 Analista e programadores'
            ]
          },
          {
            nome: 'Tribunal de Justiça do Estado do Rio de Janeiro',
            detalhes: [
              'Fábrica de software',
              '23 analistas, programadores, gerentes e supervisores',
              'Total de profissionais alocados: 254'
            ]
          },
          {
            nome: 'IBGE - Instituto Brasileiro de Geografia e Estatística',
            detalhes: [
              'Fábrica de software',
              '22 analista e programadores'
            ]
          },
          {
            nome: 'Tribunal Regional Federal da 3ª Região',
            detalhes: [
              'Fábrica de software',
              '14 analista e programadores'
            ]
          }
        ]
      }
    ]
  },
  {
    titulo: 'Transformação Digital',
    subtitulo: 'Pequenas e médias empresas, Gestão e operação "Digital" na internet',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    items: [
      {
        titulo: 'NTL Nova tecnologia',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        clientes: [
          {
            nome: 'Sistema NEEO (Resumo abaixo)',
            detalhes: [
              'ARQUIVO de muitas caixas "box" para arquivo DIGITAL',
              'IMPRESSORAS reduzidas para uma (para impressão esporádica ou para digitalizar)',
              'COMPUTADORES SERVIDORES desativados: todos em "nuvem"',
              'BACKUP LOCAL para backup seguríssimo em "nuvem"',
              'REDE de computadores revitalizada com operação wi-fi',
              'OPERAÇÃO PRESENCIAL para operação remota, híbrida ou como preferir',
              'PROCESSOS COM DOCUMENTOS EM PAPEL para fluxo digital gerenciado',
              'FINANCEIRO COM DOCUMENTOS EM PAPEL para fluxo digital integrados às operações e setores',
              'CONTABILIDADE COM DOCUMENTOS EM PAPEL para integração digital (sem papel)',
              'LEVANTAMENTOS SEM FIM para pesquisas inteligentes e imediatas',
              'MUITOS EQUIPAMENTOS E MUITOS FIOS para o essencial e poucos fios',
              'GESTÃO DE PESSOAL PAPELADA COM MUITA PAPELADA para gestão digital automática e integrada',
              'GESTÃO DE PESSOAL COM MUITOS DOCUMENTOS EM PAPEL para operação pelo celular e integração com Portais Governamentais e de Benefícios',
              'GESTÃO DE PESSOAL PERDENDO PRAZOS para alertas automáticos, sem erros e sem perdas de prazos',
              'ATENDIMENTO MUITO RUIM AOS FUNCIONÁRIOS para atendimento efetivos em poucos minutos acabando com a mastifação',
              'ASSISTÊNCIA TÉCNICA E SUPORTE SOFRÍVEL para serviços satisfatórios',
              'PROCESSOS OPERACIONAIS COMPLEXOS para desenvolvimentos de sistemas específicos',
              'DEPARTAMENTO PESSOAL COM OPERAÇÃO PRESENCIAL para operação na internet (digital) Com o SISTEMA NEEO'
            ]
          }
        ]
      },
      {
        titulo: 'Módulos do Sistema NEEO',
        icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
        clientes: [
          { 
            nome: 'Contratação', 
            detalhes: [
              'Recrutamento', 
              'Sindicatos', 
              'Documentos', 
              'Validação VT', 
              'Exames médicos', 
              'Benefícios', 
              'Outros'
            ] 
          },
          { 
            nome: 'Gestão', 
            detalhes: [
              'Ponto/Presença',
              'Avaliação de desempenho',
              'Uniformes/EPI/Equipamentos',
              'Diário de bordo',
              'Outros'
            ]
          },
          { 
            nome: 'Folha', 
            detalhes: [
              'Licenças',
              'Afastados',
              'Horas extras',
              'Plantões',
              'Escalas',
              'Banco de horas',
              'Outros'
            ]
          },
          { 
            nome: 'Benefícios', 
            detalhes: [
              'VA/VR/VT',
              'Saúde/Seguros',
              'Interfaces com operadoras (RioCard, Ticket, Sodexo e outros)',
              'Auditoria',
              'Outros'
            ]
          },
          { 
            nome: 'Férias', 
            detalhes: [
              'Gestão de datas',
              'Aviso de férias',
              'Melhores datas',
              'Coberturas',
              'Controle anti-dobras',
              'Outros'
            ]
          },
          { 
            nome: 'Comunicação', 
            detalhes: [
              'Central de atendimento',
              'Contracheque',
              'Informe de rendimentos',
              'Comunicados',
              'Outros'
            ]
          },
          { 
            nome: 'Documentos', 
            detalhes: [
              'Gestão de documentos',
              'Busca inteligente',
              'Central de Downloads',
              'Outros'
            ]
          }
        ]
      }
    ]
  }
]

const solutions = [
  {
    title: 'Tecnologia da Informação',
    description: 'Outsourcing específico até total em infraestrutura e suporte',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    items: [
      'Suporte a usuários e hardware',
      'Administração de rede',
      'Gestão de Service Desk',
      'Gerenciamento de segurança'
    ]
  },
  {
    title: 'Facilities',
    description: 'Outsourcing seletivo e alocação de pessoal especializado',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    items: [
      'Pessoal especializado',
      'Recrutamento e seleção',
      'Departamento Pessoal',
      'Gestão completa na Web'
    ]
  },
  {
    title: 'Transformação Digital',
    description: 'Conceito 3x5 para empresas digitais',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    items: [
      'Virtualização de Servidores',
      'Hospedagem em nuvem',
      'Digitalização de documentos',
      'Infraestrutura escalável'
    ]
  },
  {
    title: 'Home Office',
    description: 'Suporte completo para trabalho remoto',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    items: [
      'Suporte aos usuários remotos',
      'Acesso seguro (VPN)',
      'Gerenciamento de inventário',
      'Controle de horas/produção'
    ]
  },
  {
    title: 'Desenvolvimento',
    description: 'Aplicações na nuvem ou local',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    items: [
      'Análise e programação',
      'Suporte a sistemas legados',
      'Portais Web',
      'Aplicações customizadas'
    ]
  },
  {
    title: 'NEEO',
    description: 'Sistema de Rotinas Administrativas',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
    items: [
      'Banco de currículo',
      'Contratação na web',
      'Ponto Web',
      'Contra cheque Web'
    ]
  }
]
</script>
