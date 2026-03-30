<template>
  <div class="min-h-screen pt-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
    <!-- Hero Section -->
    <section class="py-12 md:py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gray-100 dark:bg-dark-900 z-0"></div>
      <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/5 to-transparent dark:from-primary-500/10 dark:to-transparent z-0"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div class="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 flex items-center gap-2 w-fit">
              <span class="w-2 h-2 rounded-full bg-blue-500"></span>
              Estamos Contratando
            </div>
            
            <h1 class="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              CONSTRUA O <br />
              <span class="text-blue-600 dark:text-blue-500">FUTURO</span> COM A <br />
              NTL
            </h1>
            
            <p class="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-xl">
              Ambiente inovador, desafios técnicos complexos e uma cultura focada no crescimento acelerado. Confira nossas vagas e faça parte dessa transformação digital.
            </p>
            
            <div class="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 font-medium">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                Trabalho Remoto & Híbrido
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                Plano de Saúde Premium
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                Bônus Anual
              </div>
            </div>
          </div>
          
          <div class="order-1 lg:order-2 relative">
            <div class="bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl relative aspect-video group">
              <img src="/img/inicial.jpg" alt="Team NTL" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-6 w-full flex items-end justify-between">
                <div>
                  <h3 class="text-white font-bold text-lg">Time de Engenharia</h3>
                  <p class="text-gray-300 text-sm">São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Search & Filter -->
    <section class="py-8 sticky top-20 z-40 bg-gray-50/95 dark:bg-gray-950/95 backdrop-blur-md border-y border-gray-200 dark:border-white/5">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1 relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input 
              type="text" 
              class="block w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
              placeholder="Buscar por cargo, requisitos ou palavra-chave..."
              v-model="searchQuery"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Vagas List -->
    <section class="py-12 md:py-20">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Vagas Disponíveis</h2>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            <span v-if="!pending">Mostrando {{ filteredJobs.length }} de {{ (jobs ?? []).length }} vagas</span>
            <span v-else>Carregando...</span>
          </span>
        </div>

        <!-- Error State -->
        <div v-if="error" class="text-center py-16">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
            <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Erro ao carregar vagas</h3>
          <p class="text-gray-500 dark:text-gray-400 mb-4">Não foi possível conectar ao banco de dados.</p>
          <button @click="refresh()" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">Tentar novamente</button>
        </div>

        <!-- Loading Skeletons -->
        <div v-else-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="i in 6" :key="i" class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 animate-pulse">
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
            <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-6"></div>
            <div class="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>

        <!-- Jobs Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="job in filteredJobs" 
            :key="job.codigo"
            class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden flex flex-col"
          >
            <!-- Header -->
            <div class="flex justify-between items-start mb-4">
              <span class="inline-block px-2 py-1 rounded text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                {{ job.cargo || 'Geral' }}
              </span>
              <span class="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 shrink-0 ml-2">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                {{ formatDate(job.dataCadastro) }}
              </span>
            </div>

            <!-- Title — clicável para ver detalhes -->
            <h3
              class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer hover:underline underline-offset-2"
              @click="openDetails(job)"
            >
              {{ job.nomeVaga }}
            </h3>

            <!-- Info -->
            <div class="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {{ formatSalario(job.salario) }}
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                {{ job.quantidadeVaga }} vaga{{ job.quantidadeVaga !== 1 ? 's' : '' }}
              </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-5 flex-1">
              <span v-if="job.pcd" class="px-2 py-1 rounded text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-semibold">PCD</span>
            </div>

            <!-- Actions -->
            <div class="flex gap-3">
              <button @click="openDetails(job)" class="flex-1 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold py-2 px-3 rounded-lg transition-colors text-sm">
                Ver Detalhes
              </button>
              <button @click="openApply(job)" class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-lg transition-colors text-sm">
                Candidatar-se
              </button>
            </div>

          </div>

          <!-- Empty State -->
          <div v-if="filteredJobs.length === 0" class="col-span-3 text-center py-16">
            <svg class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p class="text-gray-500 dark:text-gray-400 text-lg">Nenhuma vaga encontrada para "<strong>{{ searchQuery }}</strong>".</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Spontaneous Application -->
    <section class="py-12 md:py-20 bg-gray-900 text-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12">Não encontrou a vaga ideal?</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div class="lg:col-span-2 space-y-8">
            <p class="text-gray-300 text-lg">
              Estamos sempre em busca de talentos excepcionais. Cadastre seu currículo em nosso banco de talentos e entraremos em contato assim que surgir uma oportunidade com o seu perfil.
            </p>
            
            <div class="space-y-6">
              <div class="flex gap-4">
                <div class="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <h4 class="font-bold text-lg mb-1">Cultura de Aprendizado</h4>
                  <p class="text-gray-400 text-sm">Workshops mensais e budget para cursos.</p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </div>
                <div>
                  <h4 class="font-bold text-lg mb-1">Ambiente Inclusivo</h4>
                  <p class="text-gray-400 text-sm">Valorizamos a diversidade e o respeito.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-3 bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-xl font-bold">Candidatura Espontânea</h3>
              <span class="text-xs text-gray-500">*Campos obrigatórios</span>
            </div>
            
            <form class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label class="block text-sm text-gray-300">Nome Completo *</label>
                  <input type="text" class="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Seu nome" />
                </div>
                <div class="space-y-2">
                  <label class="block text-sm text-gray-300">Email Profissional *</label>
                  <input type="email" class="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="seu@email.com" />
                </div>
              </div>
              
              <div class="space-y-2">
                <label class="block text-sm text-gray-300">Currículo (PDF ou DOCX) *</label>
                <div class="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center bg-gray-900/50 hover:bg-gray-900 transition-colors cursor-pointer">
                  <svg class="w-8 h-8 mx-auto text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p class="text-sm font-medium">Clique para selecionar ou arraste aqui</p>
                  <p class="text-xs text-gray-500 mt-1">Máximo 10MB</p>
                </div>
              </div>
              
              <div class="pt-4 flex justify-end">
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-blue-900/20">
                  Enviar Candidatura
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== MODAL DETALHES DA VAGA ===== -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showDetails" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" @click.self="closeDetails">
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

          <div class="relative bg-white dark:bg-gray-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700">
            <!-- Header -->
            <div class="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 rounded-t-2xl z-10">
              <div class="flex justify-between items-start gap-4">
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                      {{ detailJob?.cargo || 'Geral' }}
                    </span>
                    <span v-if="detailJob?.pcd" class="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">PCD</span>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white leading-tight">{{ detailJob?.nomeVaga }}</h3>
                </div>
                <button @click="closeDetails" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
            </div>

            <!-- Body -->
            <div class="p-6 space-y-6">
              <!-- Info chips -->
              <div class="flex flex-wrap gap-3 text-sm">
                <div class="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2">
                  <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span class="font-medium text-gray-700 dark:text-gray-200">{{ formatSalario(detailJob?.salario ?? null) }}</span>
                </div>
                <div class="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2">
                  <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span class="font-medium text-gray-700 dark:text-gray-200">{{ detailJob?.quantidadeVaga }} vaga{{ detailJob?.quantidadeVaga !== 1 ? 's' : '' }}</span>
                </div>
                <div class="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2">
                  <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <span class="font-medium text-gray-700 dark:text-gray-200">Publicada em {{ formatDateFull(detailJob?.dataCadastro ?? null) }}</span>
                </div>
              </div>

              <!-- Descrição / Requisitos -->
              <div v-if="detailJob?.requisitos">
                <h4 class="text-base font-bold text-gray-900 dark:text-white mb-3">Descrição e Requisitos</h4>
                <div class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-200 dark:border-gray-700">{{ detailJob.requisitos }}</div>
              </div>

              <!-- Actions -->
              <div class="flex gap-3 pt-2">
                <button @click="closeDetails" class="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-semibold py-3 rounded-xl transition-colors">
                  Fechar
                </button>
                <button @click="switchToApply" class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-blue-600/20">
                  Candidatar-se
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- ===== MODAL CANDIDATURA ===== -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showApply" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" @click.self="closeApply">
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

          <div class="relative bg-white dark:bg-gray-900 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700">
            <!-- Header -->
            <div class="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 rounded-t-2xl flex justify-between items-center z-10">
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">Candidatar-se</h3>
                <p v-if="selectedJob" class="text-sm text-blue-600 dark:text-blue-400 mt-0.5 truncate max-w-xs">{{ selectedJob.nomeVaga }}</p>
              </div>
              <button @click="closeApply" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <!-- Form -->
            <form class="p-6 space-y-5" @submit.prevent="submitApplication">
              <div class="flex justify-end">
                <span class="text-xs text-gray-500 dark:text-gray-400">* Campos obrigatórios</span>
              </div>

              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome Completo *</label>
                <input v-model="form.name" type="text" required class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Seu nome" />
              </div>

              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Profissional *</label>
                <input v-model="form.email" type="email" required class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="seu@email.com" />
              </div>

              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">LinkedIn URL</label>
                <input v-model="form.linkedin" type="text" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="linkedin.com/in/voce" />
              </div>

              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Currículo (PDF ou DOCX) *</label>
                <div
                  class="border-2 border-dashed rounded-xl p-6 text-center transition-colors cursor-pointer"
                  :class="isDragging ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-600 bg-gray-50/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800'"
                  @click="fileInput?.click()"
                  @dragover.prevent="isDragging = true"
                  @dragleave.prevent="isDragging = false"
                  @drop.prevent="handleDrop"
                >
                  <input ref="fileInput" type="file" accept=".pdf,.docx" class="hidden" @change="handleFileSelect" />
                  <template v-if="!form.file">
                    <svg class="w-8 h-8 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p class="text-sm font-medium text-gray-600 dark:text-gray-300">Clique para selecionar ou arraste aqui</p>
                    <p class="text-xs text-gray-500 mt-1">Máximo 10MB — PDF ou DOCX</p>
                  </template>
                  <template v-else>
                    <div class="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                      <span class="text-sm font-medium">{{ form.file.name }}</span>
                      <button type="button" @click.stop="form.file = null" class="ml-2 text-red-500 hover:text-red-600">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                      </button>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">{{ (form.file.size / 1024 / 1024).toFixed(2) }} MB</p>
                  </template>
                </div>
              </div>

              <div class="pt-2">
                <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-blue-600/20">
                  Enviar Candidatura
                </button>
              </div>
            </form>
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
  quantidadeVaga: number | null
  pcd: boolean | null
  dataCadastro: string | null
  cargo: string | null
}

const searchQuery = ref('')

// Modal detalhes
const showDetails = ref(false)
const detailJob = ref<Vaga | null>(null)

// Modal candidatura
const showApply = ref(false)
const selectedJob = ref<Vaga | null>(null)

const isDragging = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

// Busca vagas reais do banco STC
const { data: jobs, pending, error, refresh } = await useFetch<Vaga[]>('/api/vagas', {
  default: () => []
})

const filteredJobs = computed(() => {
  const lista = jobs.value ?? []
  if (!searchQuery.value) return lista
  const q = searchQuery.value.toLowerCase()
  return lista.filter(job =>
    job.nomeVaga.toLowerCase().includes(q) ||
    (job.cargo ?? '').toLowerCase().includes(q) ||
    (job.requisitos ?? '').toLowerCase().includes(q)
  )
})

const formatSalario = (salario: number | null) => {
  if (!salario) return 'A combinar'
  return salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

// Exibe "há X dias" ou "há X meses"
const formatDate = (dateStr: string | null) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return ''
  const diff = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24))
  if (diff === 0) return 'Hoje'
  if (diff === 1) return '1 dia atrás'
  if (diff < 30) return `${diff} dias atrás`
  if (diff < 60) return '1 mês atrás'
  return `${Math.floor(diff / 30)} meses atrás`
}

// Exibe data completa formatada em pt-BR
const formatDateFull = (dateStr: string | null) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return ''
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

// Abre modal de detalhes
const openDetails = (job: Vaga) => {
  detailJob.value = job
  showDetails.value = true
  document.body.style.overflow = 'hidden'
}

const closeDetails = () => {
  showDetails.value = false
  if (!showApply.value) document.body.style.overflow = ''
}

// Abre modal de candidatura
const openApply = (job: Vaga) => {
  selectedJob.value = job
  form.area = job.cargo ?? ''
  showApply.value = true
  document.body.style.overflow = 'hidden'
}

const closeApply = () => {
  showApply.value = false
  if (!showDetails.value) document.body.style.overflow = ''
}

// Fecha detalhes e abre candidatura
const switchToApply = () => {
  const job = detailJob.value
  closeDetails()
  if (job) openApply(job)
}

const form = reactive({
  name: '',
  email: '',
  linkedin: '',
  area: '',
  file: null as File | null
})

const handleFileSelect = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const file = target.files[0]
    if (file.size > 10 * 1024 * 1024) {
      alert('O arquivo deve ter no máximo 10MB.')
      return
    }
    form.file = file
  }
}

const handleDrop = (e: DragEvent) => {
  isDragging.value = false
  if (e.dataTransfer?.files && e.dataTransfer.files[0]) {
    const file = e.dataTransfer.files[0]
    if (file.size > 10 * 1024 * 1024) {
      alert('O arquivo deve ter no máximo 10MB.')
      return
    }
    const ext = file.name.split('.').pop()?.toLowerCase()
    if (ext !== 'pdf' && ext !== 'docx') {
      alert('Apenas arquivos PDF ou DOCX são aceitos.')
      return
    }
    form.file = file
  }
}

const submitApplication = () => {
  if (!form.file) {
    alert('Por favor, anexe seu currículo.')
    return
  }
  alert(`Candidatura enviada com sucesso para a vaga de ${selectedJob.value?.nomeVaga}!`)
  closeApply()
  form.name = ''
  form.email = ''
  form.linkedin = ''
  form.area = ''
  form.file = null
}
</script>

<style scoped>
.modal-enter-active {
  transition: all 0.3s ease-out;
}
.modal-leave-active {
  transition: all 0.2s ease-in;
}
.modal-enter-from {
  opacity: 0;
}
.modal-enter-from > div:last-child {
  transform: scale(0.95) translateY(10px);
}
.modal-leave-to {
  opacity: 0;
}
.modal-leave-to > div:last-child {
  transform: scale(0.95) translateY(10px);
}
</style>
