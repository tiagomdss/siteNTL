<template>
  <div class="min-h-screen bg-white pt-20 dark:bg-[#06182f]">
    <section class="relative overflow-hidden border-b border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-[#051426]">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(52,127,246,.16),transparent_38%)]" />
      <div class="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-300">Fale conosco</p>
        <h1 class="mt-4 max-w-4xl text-5xl font-bold leading-[1.04] tracking-[-0.045em] text-[#071b35] dark:text-white sm:text-6xl">
          Vamos entender o seu desafio.
        </h1>
        <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Conte um pouco sobre a necessidade da sua empresa. Você pode falar com a NTL por telefone, WhatsApp, e-mail ou preparar a mensagem pelo formulário abaixo.
        </p>
      </div>
    </section>

    <section class="py-16 sm:py-20 lg:py-24">
      <div class="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div class="space-y-4">
          <a href="https://wa.me/5521993259808?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20institucional." target="_blank" rel="noopener" class="group flex items-center gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/40">
            <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300">WA</div>
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">WhatsApp</p>
              <p class="mt-1 font-bold text-[#071b35] dark:text-white">+55 (21) 99325-9808</p>
            </div>
            <span class="ml-auto text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-500 dark:text-slate-600">↗</span>
          </a>

          <a href="tel:+552131507309" class="group flex items-center gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-primary-400/40">
            <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-300">☎</div>
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Telefone</p>
              <p class="mt-1 font-bold text-[#071b35] dark:text-white">+55 (21) 3150-7309</p>
            </div>
            <span class="ml-auto text-slate-300 transition group-hover:translate-x-1 group-hover:text-primary-500 dark:text-slate-600">→</span>
          </a>

          <a href="mailto:contato@ntl.com.br" class="group flex items-center gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-primary-400/40">
            <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-300">@</div>
            <div class="min-w-0">
              <p class="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">E-mail</p>
              <p class="mt-1 truncate font-bold text-[#071b35] dark:text-white">contato@ntl.com.br</p>
            </div>
            <span class="ml-auto text-slate-300 transition group-hover:translate-x-1 group-hover:text-primary-500 dark:text-slate-600">→</span>
          </a>

          <div class="rounded-[1.5rem] bg-[#0b2345] p-6 text-white">
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-primary-200">Base operacional</p>
            <h2 class="mt-3 text-xl font-bold">Rio de Janeiro, RJ</h2>
            <p class="mt-3 text-sm leading-6 text-slate-200">Atuação em projetos e contratos em diferentes regiões do Brasil.</p>
          </div>
        </div>

        <div class="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5 sm:p-8">
          <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-300">Prepare sua mensagem</p>
              <h2 class="mt-3 text-2xl font-bold text-[#071b35] dark:text-white sm:text-3xl">Fale sobre o projeto.</h2>
            </div>
            <span class="text-xs text-slate-500 dark:text-slate-400">O envio abre seu aplicativo de e-mail.</span>
          </div>

          <form class="mt-8 space-y-5" @submit.prevent="openEmailClient">
            <div class="grid gap-5 sm:grid-cols-2">
              <label class="block">
                <span class="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Nome *</span>
                <input v-model.trim="form.name" required type="text" autocomplete="name" class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-primary-400 focus:ring-4 focus:ring-primary-100 dark:border-white/10 dark:bg-[#071b35] dark:text-white dark:focus:ring-primary-500/10" placeholder="Seu nome" />
              </label>
              <label class="block">
                <span class="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">E-mail *</span>
                <input v-model.trim="form.email" required type="email" autocomplete="email" class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-primary-400 focus:ring-4 focus:ring-primary-100 dark:border-white/10 dark:bg-[#071b35] dark:text-white dark:focus:ring-primary-500/10" placeholder="voce@empresa.com.br" />
              </label>
            </div>

            <label class="block">
              <span class="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Assunto *</span>
              <select v-model="form.subject" required class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-primary-400 focus:ring-4 focus:ring-primary-100 dark:border-white/10 dark:bg-[#071b35] dark:text-white dark:focus:ring-primary-500/10">
                <option value="">Selecione</option>
                <option>Tecnologia da Informação</option>
                <option>Fábrica de Software</option>
                <option>Service Desk / Teleatendimento</option>
                <option>Facilities / Terceirização</option>
                <option>Transformação Digital</option>
                <option>Parcerias e outros assuntos</option>
              </select>
            </label>

            <label class="block">
              <span class="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Mensagem *</span>
              <textarea v-model.trim="form.message" required rows="7" class="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-primary-400 focus:ring-4 focus:ring-primary-100 dark:border-white/10 dark:bg-[#071b35] dark:text-white dark:focus:ring-primary-500/10" placeholder="Descreva o cenário, necessidade, volume ou prazo, se já souber." />
            </label>

            <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p class="text-xs leading-5 text-slate-500 dark:text-slate-400">Nenhum dado deste formulário é armazenado pelo site antes do envio.</p>
              <button type="submit" class="rounded-full bg-[#0b2345] px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#12345d] dark:bg-white dark:text-[#071b35]">Abrir e-mail preparado →</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Contato | NTL - Nova Tecnologia',
  meta: [
    { name: 'description', content: 'Entre em contato com a NTL - Nova Tecnologia por telefone, WhatsApp ou e-mail.' }
  ]
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const openEmailClient = () => {
  const subject = `[Site NTL] ${form.subject}`
  const body = [
    `Nome: ${form.name}`,
    `E-mail para retorno: ${form.email}`,
    '',
    form.message
  ].join('\n')

  const href = `mailto:contato@ntl.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  if (import.meta.client) window.location.href = href
}
</script>
