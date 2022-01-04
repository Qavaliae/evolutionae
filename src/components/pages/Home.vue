<template>
  <div class="page--home md:h-full md:grid grid-cols-2">
    <div class="md:grid grid-flow-col grid-rows-6 p-10 bg-app-yellow-700">

      <div class="logo">
        <div class="uppercase font-bold italic text-3xl mt-4 mb-1">evolutionae</div>
        <div class="rounded-lg h-2 w-28 bg-app-yellow">
          <div class="rounded-lg w-1/2 h-full bg-black"></div>
        </div>
      </div>

      <div class="headline row-span-4 text-5xl md:text-6xl lg:text-7xl flex items-center my-7">
        Track your goals.
      </div>

    </div>

    <div class="streaks-panel bg-cover" :style="`background-image: url(${img.snow})`">
      <div class="p-10 relative flex items-center h-full w-full bg-white bg-opacity-50">
        <div class="plug hidden md:block absolute rounded-full rounded-r-none h-10 w-5
        left-0 top-1/2 transform -translate-x-full -translate-y-1/2">
        </div>
        <ul class="streaks w-full">
          <li class="streak my-10" v-for="streak in streaks" :key="streak.code">
            <div class="flex items-baseline">
              <div class="text-md flex-grow">{{streak.label}}</div>
              <div class="text-xs text-gray-500">
                {{formatDate(streak.period.start)}}
                <svg class="w-3 h-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
                {{formatDate(streak.period.end)}}
              </div>
            </div>
            <div class="h-9 rounded-lg mt-2" style="background: #FEDCAD">
              <div class="h-9 rounded-lg"
               :style="{background: '#35cd72', width: computeProgress(streak) + '%'}">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { streaks } from '@/assets/data.json'
import moment from 'moment'

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      streaks,
      img: {
        snow: require('@/assets/snow-trails.jpg')
      }
    }
  },
  methods: {
    formatDate(d) {
      return moment(d).format('DD MMM YYYY')
    },

    computeProgress(streak) {
      const start = moment(streak.period.start)
      const end = moment(streak.period.end)

      const total = start.diff(end, 'days')
      const elapsed = start.diff(moment(), 'days')

      let progress = (elapsed / total) * 100
      if (progress < 0) {
        progress = 0
      } else if (progress > 100) {
        progress = 100
      }

      return progress
    }
  }
}
</script>

<style lang="scss">
  .page--home {
    font-family: Righteous;
    .logo {
      font-family: Courier Prime;
    }
    .plug {
      background: #bfcfdc;
    }
  }
</style>
