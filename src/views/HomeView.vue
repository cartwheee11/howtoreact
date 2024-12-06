<template>
  <section class="container">
    <h2>{{ randomEmotion }}</h2><br>
    <p>{{ desc }}</p><br>
    <p><button @click="update">Повторить</button></p>
  </section>
</template>

<script>


// import wiki from 'wikijs';
import * as api from '../api.js';
const emotionsJSON = import("../assets/emotions.json");
// const emotions = emotionsJSON;


export default {
  data: () => {
    return {
      emotions: [],
      randomEmotion: 'loading...',
      desc: ''
    }
  },

  async mounted() {
    this.update();
  },

  watch: {
    randomEmotion() {
      this.desc = 'Загрузка...'
      this.getWiki();
    }
  },

  methods: {
    async getWiki() {
      const response = await api.getWiki(this.randomEmotion);
      const result = JSON.parse(response)
      if(!result) {
        this.desc = 'К сожалению, нам не удалось найти описание данной эмоции на Википедии'
      }
      this.desc = result;
    },

    async update() {
      // const emotions = JSON.parse((await emotionsJSON)).default
      const emotions = (await emotionsJSON).default
      // console.log(emotions.default)
      async function rand() {
        const rand = Math.floor(Math.random() * emotions.length)
        return emotions[rand]
      }

      this.randomEmotion = await rand();
    }
  }
}
</script>

<style scoped>
  .container {
    margin: 0 auto;
    max-width: 700px;
    padding: 30px 15px;
  }

  button {
    color: white;
    background-color: black;
    border: none;
    padding: 10px 20px;
    border-radius: 100px;
    font-size: 18px;
  }

  button:hover {
    opacity: 0.8;
    cursor: pointer;
  }
</style>
