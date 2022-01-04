<template>
  <div class="bg-gradient-to-b md:bg-gradient-to-r from-app-yellow to-app-yellow-700 min-h-screen
   md:h-screen px-10 py-10 md:p-20 lg:px-40 relative">
    <div class="border-4 border-black rounded-lg md:h-full mx-auto relative">
      <Home />
    </div>
    <div class="absolute left-0 bottom-3 origin-top-left transform -rotate-90 rounded-b-md
     bg-black text-white px-2 pb-1 text-xs md:text-sm">
      © Qavaliae 2022
    </div>
  </div>
</template>

<script>
import Home from './components/pages/Home.vue'
export default {
  name: 'App',
  components: {
    Home,
  },
  mounted() {
    document.title = "Evolutionae"
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@1,700&family=Righteous&display=swap');
</style>
