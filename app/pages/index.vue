<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center pt-20 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img src="/img/inicial.jpg" alt="Background" class="w-full h-full object-cover opacity-10 dark:opacity-30" />
        <div class="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/95 to-gray-50/40 dark:from-gray-950 dark:via-gray-900/95 dark:to-gray-900/40"></div>
      </div>
      
      <!-- Content -->
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl">
          <div class="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            SOLUÇÕES EM TECNOLOGIA
          </div>
          
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            Soluções sob medida para a
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 block">performance</span>
            de sua empresa.
          </h1>
          
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Tecnologia de ponta e excelência humana unidas para transformar o futuro do seu negócio.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="px-8 py-4 bg-[#FF6B00] hover:bg-[#ff8534] text-white rounded-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-500/20 dark:shadow-orange-900/20">
              Conheça nossas soluções
            </button>
            
            <a href="#empresa" class="px-8 py-4 bg-white/50 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-lg font-bold transition-all backdrop-blur-sm flex items-center justify-center gap-2 group">
              Fale com um especialista
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- A Empresa Section -->
    <section id="empresa" class="py-24 bg-white dark:bg-gray-950 transition-colors">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <!-- Text Content -->
          <div>
            <div class="flex items-center gap-2 mb-6">
              <span class="w-10 h-0.5 bg-[#FF6B00]"></span>
              <span class="text-[#FF6B00] font-bold uppercase text-sm tracking-wider">A EMPRESA</span>
            </div>
            
            <h2 class="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white leading-tight">
              Harmonização entre <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">tecnologia</span> e capital humano.
            </h2>
            
            <div class="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                A NTL é uma empresa que há mais de 30 anos acredita que uma instituição de sucesso resulta da harmonização entre tecnologia de ponta disponível e a excelência do seu capital humano.
              </p>
              <p>
                Reconhecida no segmento de soluções em tecnologia da informação, estendeu sua atuação para área de recursos humanos, especializando-se na alocação de mão-de-obra e formação de equipes especializadas.
              </p>
              
              <div class="border-l-4 border-[#FF6B00] pl-6 py-2 my-8 italic text-gray-700 dark:text-gray-300 text-lg">
                "A NTL - Nova Tecnologia é essencialmente uma empresa de serviços."
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-lg dark:shadow-none">
                <h4 class="text-[#FF6B00] font-bold mb-2">Missão</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Apoiar e ser fator de sucesso no desenvolvimento de nossos clientes, oferecendo um ambiente propício para o desenvolvimento.</p>
              </div>
              <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-lg dark:shadow-none">
                <h4 class="text-blue-600 dark:text-blue-500 font-bold mb-2">Qualidade</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Compromisso com a satisfação dos clientes, aperfeiçoamento e relação com fornecedores e colaboradores comprometidos.</p>
              </div>
            </div>
          </div>
          
          <!-- Grid Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-6 md:mt-12">
              <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#FF6B00]/50 transition-colors group shadow-lg dark:shadow-none">
                <div class="w-12 h-12 bg-[#FF6B00]/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <h3 class="text-gray-900 dark:text-white font-bold text-xl mb-3">Experiência</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">Mais de 30 anos de sucesso no planejamento e execução de projetos.</p>
              </div>
              
              <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 transition-colors group shadow-lg dark:shadow-none">
                <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 class="text-gray-900 dark:text-white font-bold text-xl mb-3">Vanguardismo</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">Soluções tecnológicas com método de produtividade.</p>
              </div>
            </div>
            
            <div class="space-y-6">
              <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 transition-colors group shadow-lg dark:shadow-none">
                <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 class="text-gray-900 dark:text-white font-bold text-xl mb-3">Capacidade</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">Capacidade técnica comprovada por empresas de grande relevância.</p>
              </div>
              
              <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#FF6B00]/50 transition-colors group shadow-lg dark:shadow-none">
                <div class="w-12 h-12 bg-[#FF6B00]/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <h3 class="text-gray-900 dark:text-white font-bold text-xl mb-3">Exatidão</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">Práticas de gerenciamento de projetos para minimizar riscos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Timeline Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Nossa História
          </h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Uma trajetória marcada por inovação e conquistas constantes.</p>
        </div>
        
        <div class="relative">
          <!-- Navigation Buttons -->
          <button @click="scrollTimeline('left')" class="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-20 w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#ff8534] transition-all hover:scale-110 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          
          <button @click="scrollTimeline('right')" class="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-20 w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#ff8534] transition-all hover:scale-110 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          <!-- Timeline Container -->
          <div ref="timelineScroll" class="overflow-x-auto hide-scrollbar pb-12 pt-12 relative" style="scroll-behavior: smooth;">
            <div class="inline-flex min-w-full relative px-12">
              <!-- Central Line -->
              <div class="absolute top-1/2 left-0 w-full h-1 bg-gray-300 dark:bg-gray-700 rounded-full -translate-y-1/2"></div>
              
              <!-- Events -->
              <div v-for="(event, index) in timelineEvents" :key="index" class="relative group flex flex-col items-center flex-shrink-0 w-64 mx-4">
                
                <!-- Dot on Line -->
                <div class="absolute top-1/2 left-1/2 w-4 h-4 bg-[#FF6B00] rounded-full -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-gray-50 dark:border-gray-900 group-hover:scale-150 transition-transform duration-300"></div>

                <!-- Content Top (Even indices) -->
                <div v-if="index % 2 === 0" class="mb-12 text-center transform hover:-translate-y-2 transition-transform duration-300 w-full px-2">
                  <span class="text-3xl font-black text-gray-400/20 dark:text-white/20 block mb-2">{{ event.year }}</span>
                  <h4 class="text-gray-900 dark:text-white font-bold text-lg mb-1 leading-tight">{{ event.title }}</h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400">{{ event.description }}</p>
                </div>
                
                <!-- Spacer for Top (Odd indices) -->
                <div v-else class="mb-12 w-full h-24"></div>

                <!-- Content Bottom (Odd indices) -->
                <div v-if="index % 2 !== 0" class="mt-12 text-center transform hover:translate-y-2 transition-transform duration-300 w-full px-2">
                   <h4 class="text-gray-900 dark:text-white font-bold text-lg mb-1 leading-tight">{{ event.title }}</h4>
                   <span class="text-3xl font-black text-gray-400/20 dark:text-white/20 block mt-2">{{ event.year }}</span>
                   <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ event.description }}</p>
                </div>

                 <!-- Spacer for Bottom (Even indices) -->
                <div v-else class="mt-12 w-full h-24"></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Soluções Estratégicas -->
    <section id="solucoes" class="py-24 bg-white dark:bg-gray-950 transition-colors">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Soluções Estratégicas
          </h2>
          <p class="text-gray-600 dark:text-gray-400">Tecnologia aplicada para maximizar resultados.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(solucao, i) in solutions" :key="i" class="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-800/50 transition-all group shadow-sm dark:shadow-none">
            <div class="w-12 h-12 bg-transparent rounded-lg flex items-center justify-start mb-6 text-[#FF6B00]">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="solucao.icon"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ solucao.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">{{ solucao.description }}</p>
            
            <ul class="space-y-3">
              <li v-for="(feature, idx) in solucao.items" :key="idx" class="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                <svg class="w-5 h-5 text-[#FF6B00] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Sistema NEEO - Flagship Section -->
    <section class="py-24 bg-gray-50 dark:bg-[#0a0f1c] border-y border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors">
      <!-- Background Elements -->
      <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF6B00]/5 to-transparent pointer-events-none"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-4 bg-[#FF6B00]/10 px-4 py-2 rounded-full border border-[#FF6B00]/20">
             <svg class="w-4 h-4 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
             <span class="text-[#FF6B00] text-xs font-bold uppercase tracking-wider">Sistema NEEO</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Sistema Manager NEEO
          </h2>
          <p class="text-gray-600 dark:text-gray-400">Gestão completa de Recursos Humanos na nuvem</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <!-- Contratação -->
          <div class="space-y-4">
            <h3 class="text-gray-900 dark:text-white font-bold text-lg border-b border-gray-200 dark:border-gray-800 pb-2">Contratação</h3>
            <ul class="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Recrutamento</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Sindicatos</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Documentos</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Validação VT</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Exames médicos</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Benefícios</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Outros</li>
            </ul>
          </div>

          <!-- Gestão -->
          <div class="space-y-4">
            <h3 class="text-gray-900 dark:text-white font-bold text-lg border-b border-gray-200 dark:border-gray-800 pb-2">Gestão</h3>
            <ul class="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Ponto/Presença</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Avaliação de desempenho</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Uniformes/EPI/Equipamentos</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Diário de bordo</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Outros</li>
            </ul>
          </div>

          <!-- Folha -->
          <div class="space-y-4">
            <h3 class="text-gray-900 dark:text-white font-bold text-lg border-b border-gray-200 dark:border-gray-800 pb-2">Folha</h3>
            <ul class="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Licenças</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Afastados</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Horas extras</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Plantões</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Escalas</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Banco de horas</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Outros</li>
            </ul>
          </div>

          <!-- Benefícios -->
          <div class="space-y-4">
            <h3 class="text-gray-900 dark:text-white font-bold text-lg border-b border-gray-200 dark:border-gray-800 pb-2">Benefícios</h3>
            <ul class="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>VA/VR/VT</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Saúde/Seguros</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Interfaces com operadoras</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Auditoria</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-[#FF6B00] rounded-full"></span>Outros</li>
            </ul>
          </div>
        </div>

        <!-- CTA Banner -->
        <div class="bg-gradient-to-r from-orange-50 to-white dark:from-orange-900/40 dark:to-gray-900 border border-[#FF6B00]/20 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden group shadow-lg">
          <div class="absolute inset-0 bg-[#FF6B00]/5 group-hover:bg-[#FF6B00]/10 transition-colors"></div>
          <div class="relative z-10">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Transforme sua Gestão de RH</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">Descubra como o Sistema Manager NEEO pode revolucionar a gestão de pessoas da sua empresa.</p>
            <a href="http://45.232.21.53:31064/" target="_blank" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF6B00] hover:bg-[#ff8534] text-white rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-900/40">
              Conhecer o Sistema NEEO
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Clientes -->
    <section id="clientes" class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
            <span class="text-[#FF6B00]">Confiança</span> que construímos
          </h2>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
           <!-- Client Icons -->
           <div class="flex flex-col items-center justify-center p-4 h-24 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#FF6B00]/30 transition-all duration-300 group cursor-pointer shadow-sm dark:shadow-none">
             <img src="/img/iphan.png" class="h-10 w-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300" />
           </div>
           <div class="flex flex-col items-center justify-center p-4 h-24 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#FF6B00]/30 transition-all duration-300 group cursor-pointer shadow-sm dark:shadow-none">
             <img src="/img/microsoft.png" class="h-8 w-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300" />
           </div>
           <div class="flex flex-col items-center justify-center p-4 h-24 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#FF6B00]/30 transition-all duration-300 group cursor-pointer shadow-sm dark:shadow-none">
             <img src="/img/hp.png" class="h-10 w-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300" />
           </div>
           <div class="flex flex-col items-center justify-center p-4 h-24 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#FF6B00]/30 transition-all duration-300 group cursor-pointer shadow-sm dark:shadow-none">
             <img src="/img/Michelin.png" class="h-10 w-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300" />
           </div>
           <div class="flex flex-col items-center justify-center p-4 h-24 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#FF6B00]/30 transition-all duration-300 group cursor-pointer shadow-sm dark:shadow-none">
             <img src="/img/positivo.png" class="h-8 w-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300" />
           </div>
           <div class="flex flex-col items-center justify-center p-4 h-24 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#FF6B00]/30 transition-all duration-300 group cursor-pointer shadow-sm dark:shadow-none">
             <img src="/img/prefeitura.png" class="h-10 w-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300" />
           </div>
           <div class="flex flex-col items-center justify-center p-4 h-24 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#FF6B00]/30 transition-all duration-300 group cursor-pointer shadow-sm dark:shadow-none">
             <img src="/img/govbr.png" class="h-8 w-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300" />
           </div>
           <div class="flex flex-col items-center justify-center p-4 h-24 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#FF6B00]/30 transition-all duration-300 group cursor-pointer shadow-sm dark:shadow-none">
             <img src="/img/PRF.png" class="h-12 w-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300" />
           </div>
           <div class="flex flex-col items-center justify-center p-4 h-24 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#FF6B00]/30 transition-all duration-300 group cursor-pointer shadow-sm dark:shadow-none">
             <img src="/img/ans.png" class="h-10 w-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300" />
           </div>
           <div class="flex flex-col items-center justify-center p-4 h-24 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#FF6B00]/30 transition-all duration-300 group cursor-pointer shadow-sm dark:shadow-none">
             <img src="/img/pjerj.png" class="h-10 w-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300" />
           </div>
           <div class="flex flex-col items-center justify-center p-4 h-24 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#FF6B00]/30 transition-all duration-300 group cursor-pointer shadow-sm dark:shadow-none">
             <img src="/img/defesa civil.png" class="h-12 w-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300" />
           </div>
           <div class="flex flex-col items-center justify-center p-4 h-24 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#FF6B00]/30 transition-all duration-300 group cursor-pointer shadow-sm dark:shadow-none">
             <img src="/img/eletrobras.png" class="h-10 w-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300" />
           </div>
        </div>
      </div>
    </section>

    <!-- Projetos Realizados -->
    <section id="projetos" class="py-24 bg-white dark:bg-gray-950 transition-colors">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-end mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Projetos Realizados</h2>
          <NuxtLink to="/projetos" class="text-blue-600 dark:text-blue-500 text-sm font-bold hover:text-blue-700 dark:hover:text-blue-400">Ver todos</NuxtLink>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div v-for="(projeto, i) in projetosNovos" :key="i" class="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-8 flex flex-col items-center text-center hover:border-[#FF6B00]/50 transition-all group h-full shadow-sm dark:shadow-none">
            <div class="mb-6 text-gray-400 group-hover:text-[#FF6B00] transition-colors">
               <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="projeto.icon"></path></svg>
            </div>
            <h3 class="text-gray-900 dark:text-white font-bold text-lg mb-4">{{ projeto.title }}</h3>
            <div class="space-y-1">
              <p v-for="(line, idx) in projeto.lines" :key="idx" class="text-gray-600 dark:text-gray-400 text-sm font-medium">{{ line }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Carreiras Section -->
    <section class="py-20 bg-white dark:bg-gray-900 transition-colors border-t border-gray-200 dark:border-white/5">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="bg-[#FF6B00] rounded-2xl p-8 md:p-12 relative overflow-hidden group shadow-2xl shadow-orange-500/20">
            <div class="absolute top-0 right-0 p-4 opacity-10">
               <svg class="w-64 h-64 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            
            <div class="relative z-10">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <div class="flex items-center gap-3 mb-4">
                    <div class="bg-white/20 p-2 rounded-lg">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <span class="text-white font-bold uppercase tracking-wide">Carreiras NTL</span>
                  </div>
                  
                  <h3 class="text-3xl md:text-4xl font-bold text-white mb-4">
                    Construa sua jornada de <br/> sucesso conosco
                  </h3>
                  <p class="text-white/80 mb-8 max-w-lg">
                    Estamos sempre em busca de novos talentos. Confira nossas vagas abertas e venha fazer parte do time.
                  </p>

                  <NuxtLink to="/vagas" class="bg-white text-[#FF6B00] font-bold py-3 px-8 rounded-lg inline-flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg">
                     Ver vagas disponíveis
                     <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                   </NuxtLink>
                </div>

                <!-- Mini Vagas List -->
                <div class="space-y-4 w-full md:w-auto min-w-[300px]">
                  <div class="flex justify-between items-center bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer border border-white/10">
                    <div>
                      <h4 class="text-white font-bold">Desenvolvedor Mobile</h4>
                      <p class="text-white/70 text-sm">Rio de Janeiro, RJ</p>
                    </div>
                    <svg class="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                  <div class="flex justify-between items-center bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer border border-white/10">
                    <div>
                      <h4 class="text-white font-bold">Analista de Suporte</h4>
                      <p class="text-white/70 text-sm">Remoto</p>
                    </div>
                    <svg class="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contato Section (Separated & Simplified) -->
    <section class="py-24 bg-gray-50 dark:bg-black transition-colors">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Vamos Conversar?
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          Estamos prontos para entender sua necessidade e oferecer a melhor solução tecnológica para sua empresa.
        </p>
        
        <NuxtLink to="/contato" class="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl shadow-primary-600/30">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          Falar com um especialista
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const solutions = [
  {
    title: 'Tecnologia da Informação',
    description: 'Outsourcing específico até total em infraestrutura e suporte',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    items: ['Suporte a usuários e hardware', 'Administração de rede', 'Gestão de Service Desk', 'Gerenciamento de segurança']
  },
  {
    title: 'Facilities',
    description: 'Outsourcing seletivo e alocação de pessoal especializado',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    items: ['Pessoal especializado', 'Recrutamento e seleção', 'Departamento Pessoal', 'Gestão completa na Web']
  },
  {
    title: 'Transformação Digital',
    description: 'Conceito 3x5 para empresas digitais',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    items: ['Virtualização de Servidores', 'Hospedagem em nuvem', 'Digitalização de documentos', 'Infraestrutura escalável']
  },
  {
    title: 'Home Office',
    description: 'Suporte completo para trabalho remoto',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    items: ['Suporte aos usuários remotos', 'Acesso seguro (VPN)', 'Gerenciamento de inventário', 'Controle de horas/produção']
  },
  {
    title: 'Desenvolvimento',
    description: 'Aplicações na nuvem ou local',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    items: ['Análise e programação', 'Suporte a sistemas legados', 'Portais Web', 'Aplicações customizadas']
  },
  {
    title: 'NEEO',
    description: 'Sistema de Rotinas Administrativas',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    items: ['Banco de currículo', 'Contratação na web', 'Ponto Web', 'Contra cheque Web']
  }
]

const timelineScroll = ref<HTMLElement | null>(null)

const scrollTimeline = (direction: 'left' | 'right') => {
  if (timelineScroll.value) {
    const scrollAmount = 300
    if (direction === 'left') {
      timelineScroll.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    } else {
      timelineScroll.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }
}

const timelineEvents = [
  { year: '1988', title: 'Fundação', description: 'Início da jornada' },
  { year: '1990', title: 'Atuação Nacional', description: 'Expansão para todo o país' },
  { year: '1993', title: 'Parceria Multinacional', description: 'Aliança estratégica global' },
  { year: '1995', title: 'Linux', description: 'Adoção de tecnologias open source' },
  { year: '1996', title: 'Antares', description: 'Antares Internet Provider' },
  { year: '1997', title: 'ISO 9000', description: 'Certificação de qualidade' },
  { year: '2001', title: 'Parceria Microsoft', description: 'Novas competências tecnológicas' },
  { year: '2002', title: 'PMI', description: 'Excelência em gestão de projetos' },
  { year: '2003/04', title: 'Revista Exame', description: 'Reconhecimento de mercado' },
  { year: '2009', title: 'ITIL', description: 'Melhores práticas em TI' },
  { year: '2010', title: 'NTL Facilities', description: 'Nascimento da divisão Facilities' },
  { year: '2011', title: 'Fábrica Software', description: 'Desenvolvimento de sistemas' },
  { year: '2014', title: 'Soluções Custom.', description: 'Foco total no cliente' },
  { year: '2018', title: 'Transf. Digital', description: 'Modernização de processos' },
  { year: '2019', title: 'NEEO', description: 'Lançamento do Sistema NEEO' },
  { year: '2020', title: 'Tudo na Web', description: 'Migração completa para nuvem' },
  { year: '2021', title: 'Mkt Digital', description: 'Nova estratégia de comunicação' },
  { year: '2023', title: '35 Anos', description: 'Celebração de um legado' },
]

const projetosNovos = [
  {
    title: 'Tecnologia da Informação - TIC',
    lines: ['Infraestrutura de TI', 'Serviço e assistências técnicas'],
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    title: 'Teleatendimentos',
    lines: ['Service desk', 'Call center'],
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
  },
  {
    title: 'Apoio Administrativo',
    lines: ['Facilities', 'Terceirização'],
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Fábrica de softwares',
    lines: ['Programação e análise de sistemas', 'Soluções específicas'],
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  },
  {
    title: 'Transformação Digital',
    lines: ['Pequenas e médias empresas', 'Gestão e operação "Digital" na internet'],
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  }
]
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.text-transparent {
  -webkit-text-fill-color: transparent;
}
</style>
