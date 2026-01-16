<template>
  <div class="min-h-screen pt-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
    <!-- Hero Section -->
    <section class="py-12 md:py-20 bg-gray-100 dark:bg-gradient-to-b dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="text-center">
          <div class="inline-block glass px-4 py-2 rounded-full mb-4">
            <span class="text-sm font-medium text-primary-600 dark:text-primary-400">📞 Fale Conosco</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Entre em <span class="gradient-text">Contato</span>
          </h1>
          <p class="text-gray-600 dark:text-gray-200 text-lg max-w-2xl mx-auto">
            Estamos prontos para atender sua empresa. Envie uma mensagem ou utilize um de nossos canais de atendimento.
          </p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-12 md:py-20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <!-- Contact Info -->
          <div class="space-y-8">
            <div class="glass-strong rounded-3xl p-8">
              <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Informações de Contato</h3>
              
              <div class="space-y-6">
                <!-- WhatsApp -->
                <a href="https://wa.me/5521993259808" target="_blank" class="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-white/10">
                  <div class="w-12 h-12 rounded-xl bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">WhatsApp</h4>
                    <p class="text-lg font-semibold text-gray-900 dark:text-white">+55 21 99325-9808</p>
                  </div>
                </a>

                <!-- Celular -->
                <div class="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-transparent">
                  <div class="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">Celular</h4>
                    <p class="text-lg font-semibold text-gray-900 dark:text-white">+55 (21) 99325-9808</p>
                  </div>
                </div>

                <!-- Telefone -->
                <div class="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-transparent">
                  <div class="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">Telefone Fixo</h4>
                    <p class="text-lg font-semibold text-gray-900 dark:text-white">+55 (21) 3150-7309</p>
                  </div>
                </div>

                <!-- E-mail -->
                <a href="mailto:contato@ntl.com.br" class="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-white/10">
                  <div class="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">E-mail</h4>
                    <p class="text-lg font-semibold text-gray-900 dark:text-white">contato@ntl.com.br</p>
                  </div>
                </a>
              </div>
            </div>
            
            <!-- Map placeholder or extra info could go here -->
          </div>

          <!-- Contact Form -->
          <div class="glass-strong rounded-3xl p-8">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Envie uma Mensagem</h3>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Nome -->
              <div class="space-y-2">
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Seu Nome</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name"
                    class="block w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" 
                    placeholder="Como podemos lhe chamar?"
                    required
                  />
                </div>
              </div>

              <!-- Email -->
              <div class="space-y-2">
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Seu E-mail</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                    </svg>
                  </div>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email"
                    class="block w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" 
                    placeholder="email@suaempresa.com.br"
                    required
                  />
                </div>
              </div>

              <!-- Assunto -->
              <div class="space-y-2">
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Assunto</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    id="subject" 
                    v-model="form.subject"
                    class="block w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" 
                    placeholder="Sobre o que vamos conversar?"
                    required
                  />
                </div>
              </div>

              <!-- Mensagem -->
              <div class="space-y-2">
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Mensagem</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  rows="4" 
                  class="block w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none" 
                  placeholder="Descreva como podemos ajudar..."
                  required
                ></textarea>
              </div>

              <div class="pt-2">
                <button 
                  type="submit" 
                  class="btn-liquid w-full flex justify-center items-center gap-2"
                  :disabled="loading"
                >
                  <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span v-if="!loading">Enviar Mensagem</span>
                  <span v-else>Enviando...</span>
                  <svg v-if="!loading" class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
              
              <!-- Success Message -->
              <div v-if="success" class="p-4 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 flex items-center gap-3">
                <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p class="text-green-700 dark:text-green-300 font-medium">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const loading = ref(false)
const success = ref(false)

const submitForm = async () => {
  loading.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // In a real app, you would send this to your backend
  console.log('Form submitted:', form)
  
  loading.value = false
  success.value = true
  
  // Reset form
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    success.value = false
  }, 5000)
}
</script>
