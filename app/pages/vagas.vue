<template>
  <div class="min-h-screen pt-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
    <!-- Hero Section -->
    <section class="py-12 md:py-20 relative overflow-hidden">
      <!-- Background elements -->
      <div class="absolute inset-0 bg-gray-100 dark:bg-dark-900 z-0"></div>
      <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/5 to-transparent dark:from-primary-500/10 dark:to-transparent z-0"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
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
          
          <!-- Image Card -->
          <div class="order-1 lg:order-2 relative">
            <div class="bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl relative aspect-video group">
               <!-- Placeholder image if actual image not available, referencing locally just in case user has one, else using a generic or solid color via style -->
               <img src="/img/inicial.jpg" alt="Team NTL" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
               
               <div class="absolute bottom-0 left-0 p-6 w-full flex items-end justify-between">
                 <div>
                   <h3 class="text-white font-bold text-lg">Time de Engenharia</h3>
                   <p class="text-gray-300 text-sm">São Paulo, SP</p>
                 </div>
                 <button class="bg-white/20 hover:bg-white text-white hover:text-gray-900 rounded-full p-2 transition-all backdrop-blur-sm">
                   <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                 </button>
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
          <!-- Search Bar -->
          <div class="flex-1 relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input 
              type="text" 
              class="block w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
              placeholder="Buscar por cargo, tecnologia ou palavra-chave..."
              v-model="searchQuery"
            />
          </div>
          
          <!-- Filters -->
          <div class="flex gap-4">
             <div class="relative min-w-[200px]">
               <select class="block w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all">
                 <option>Todos Departamentos</option>
                 <option>Engenharia</option>
                 <option>Design</option>
                 <option>Produto</option>
               </select>
               <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                 <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
               </div>
             </div>
             
             <div class="relative min-w-[200px]">
               <select class="block w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all">
                 <option>Todas Localizações</option>
                 <option>Remoto</option>
                 <option>São Paulo</option>
                 <option>Rio de Janeiro</option>
               </select>
               <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                 <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vagas List -->
    <section class="py-12 md:py-20">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Vagas Disponíveis</h2>
          <span class="text-sm text-gray-500 dark:text-gray-400">Mostrando {{ filteredJobs.length }} de {{ jobs.length }} vagas</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(job, index) in filteredJobs" 
            :key="index"
            class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden"
          >
            <!-- Header -->
            <div class="flex justify-between items-start mb-4">
              <span class="inline-block px-2 py-1 rounded text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                {{ job.department }}
              </span>
              <span class="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {{ job.postedTime }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ job.title }}
            </h3>

            <!-- Info -->
            <div class="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-400">
               <div class="flex items-center gap-2">
                 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 {{ job.salary }}
               </div>
               <div class="flex items-center gap-2">
                 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                 {{ job.location }}
               </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-8">
              <span 
                v-for="tag in job.tags" 
                :key="tag"
                class="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Actions -->
            <div class="flex gap-4">
              <button @click="openModal(job)" class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Candidatar-se
              </button>
              <button class="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
              </button>
            </div>

            <!-- New/Hiring Label if applicable -->
            <div v-if="job.isNew" class="absolute top-4 right-4 bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-xs font-bold px-2 py-1 rounded">
              NOVO
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
           <button class="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium">
             Carregar Mais Vagas
           </button>
        </div>
      </div>
    </section>

    <!-- Spontaneous Application -->
    <section class="py-12 md:py-20 bg-gray-900 text-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12">Não encontrou a vaga ideal?</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <!-- Text -->
          <div class="lg:col-span-2 space-y-8">
             <p class="text-gray-300 text-lg">
               Estamos sempre em busca de talentos excepcionais. Cadastro seu currículo em nosso banco de talentos e entraremos em contato assim que surgir uma oportunidade com o seu perfil.
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

          <!-- Form -->
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
               
               <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div class="space-y-2">
                   <label class="block text-sm text-gray-300">LinkedIn URL</label>
                   <input type="text" class="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="linkedin.com/in/voce" />
                 </div>
                 <div class="space-y-2">
                   <label class="block text-sm text-gray-300">Área de Interesse *</label>
                   <select class="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none">
                     <option>Selecione...</option>
                     <option>Engenharia</option>
                     <option>Produto</option>
                     <option>Design</option>
                     <option>Vendas</option>
                   </select>
                 </div>
               </div>
               
               <div class="space-y-2">
                 <label class="block text-sm text-gray-300">Currículo (PDF ou DOCX) *</label>
                 <div class="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center bg-gray-900/50 hover:bg-gray-900 transition-colors cursor-pointer">
                   <svg class="w-8 h-8 mx-auto text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                   <p class="text-sm font-medium">Clique para selecionar ou arraste aqui</p>
                   <p class="text-xs text-gray-500 mt-1">Maximum 10MB</p>
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

    <Teleport to="body">
    <Transition name="modal">
      <div v-if="showModal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" @click.self="closeModal">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <!-- Modal Content -->
        <div class="relative bg-white dark:bg-gray-900 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700">
          <!-- Header -->
          <div class="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 rounded-t-2xl flex justify-between items-center z-10">
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Candidatar-se</h3>
              <p v-if="selectedJob" class="text-sm text-blue-600 dark:text-blue-400 mt-0.5">{{ selectedJob.title }}</p>
            </div>
            <button @click="closeModal" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <!-- Form -->
          <form class="p-6 space-y-5" @submit.prevent="submitApplication">
            <div class="flex justify-end">
              <span class="text-xs text-gray-500 dark:text-gray-400">* Campos obrigatórios</span>
            </div>

            <!-- Nome Completo -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome Completo *</label>
              <input v-model="form.name" type="text" required class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Seu nome" />
            </div>

            <!-- Email Profissional -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Profissional *</label>
              <input v-model="form.email" type="email" required class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="seu@email.com" />
            </div>

            <!-- LinkedIn URL -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">LinkedIn URL</label>
              <input v-model="form.linkedin" type="text" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="linkedin.com/in/voce" />
            </div>

            <!-- Área de Interesse -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Área de Interesse *</label>
              <div class="relative">
                <select v-model="form.area" required class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none transition-all">
                  <option value="" disabled>Selecione...</option>
                  <option>Engenharia</option>
                  <option>Produto</option>
                  <option>Design</option>
                  <option>Vendas</option>
                  <option>Infraestrutura</option>
                  <option>Administrativo</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <!-- Currículo Upload -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Currículo (PDF ou DOCX) *</label>
              <div
                class="border-2 border-dashed rounded-xl p-6 text-center transition-colors cursor-pointer"
                :class="isDragging ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-600 bg-gray-50/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800'"
                @click="$refs.fileInput.click()"
                @dragover.prevent="isDragging = true"
                @dragleave.prevent="isDragging = false"
                @drop.prevent="handleDrop"
              >
                <input ref="fileInput" type="file" accept=".pdf,.docx" class="hidden" @change="handleFileSelect" />
                <template v-if="!form.file">
                  <svg class="w-8 h-8 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-300">Clique para selecionar ou arraste aqui</p>
                  <p class="text-xs text-gray-500 mt-1">Maximum 10MB</p>
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

            <!-- Submit -->
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
const searchQuery = ref('')
const showModal = ref(false)
const selectedJob = ref<any>(null)
const isDragging = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

const form = reactive({
  name: '',
  email: '',
  linkedin: '',
  area: '',
  file: null as File | null
})

const openModal = (job: any) => {
  selectedJob.value = job
  form.area = job.department
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  document.body.style.overflow = ''
}

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
  alert(`Candidatura enviada com sucesso para a vaga de ${selectedJob.value?.title}!`)
  closeModal()
  // Reset form
  form.name = ''
  form.email = ''
  form.linkedin = ''
  form.area = ''
  form.file = null
}

const jobs = [
  {
    title: 'Desenvolvedor Java Sênior',
    department: 'TI',
    salary: 'R$ 12.000 - R$ 15.000',
    location: '100% Remoto',
    postedTime: '2 dias',
    tags: ['Java 17', 'SpringBoot', 'AWS'],
    isNew: false
  },
  {
    title: 'Product Designer Pleno',
    department: 'Design',
    salary: 'A combinar',
    location: 'Híbrido - São Paulo',
    postedTime: 'Novo',
    tags: ['Figma', 'Design System', 'UX Research'],
    isNew: true
  },
  {
    title: 'Dev Mobile (Android)',
    department: 'Mobile',
    salary: 'Competitivo',
    location: 'Rio de Janeiro, RJ',
    postedTime: '1 semana',
    tags: ['Kotlin', 'Jetpack Compose', 'MVVM'],
    isNew: false
  },
  {
    title: 'Analista de Suporte TIC',
    department: 'Infra',
    salary: 'R$ 4.000 - R$ 5.500',
    location: 'Presencial - SP',
    postedTime: '3 dias',
    tags: ['Linux', 'Redes', 'Service Desk'],
    isNew: false
  },
  {
    title: 'Assistente Administrativo',
    department: 'Admin',
    salary: 'R$ 2.500 + Benefícios',
    location: 'Híbrido - SP',
    postedTime: '5 dias',
    tags: ['Excel Avançado', 'SAP', 'Inglês Intermediário'],
    isNew: false
  },
  {
    title: 'Tech Lead (Backend)',
    department: 'Liderança',
    salary: 'R$ 18.000 - R$ 22.000',
    location: '100% Remoto',
    postedTime: 'Hoje',
    tags: ['Arquitetura', 'Node.js', 'Mentoria'],
    isNew: false
  }
]

const filteredJobs = computed(() => {
  if (!searchQuery.value) return jobs
  const lowerQuery = searchQuery.value.toLowerCase()
  return jobs.filter(job => 
    job.title.toLowerCase().includes(lowerQuery) || 
    job.department.toLowerCase().includes(lowerQuery) ||
    job.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
})
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
