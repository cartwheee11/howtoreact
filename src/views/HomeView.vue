<template>
  <section class="container">
    <div class="desc-block">
      <h2>Ваша эмоция: <br>{{ randomEmotion.toLowerCase() }}</h2>
      <p>
        Используй ее, если не знаешь, какую эмоцию заюзать в данной весьма
        затруднительной ситуации
      </p>
      <br>
      <p>
        <button @click="update">
          Повторить
        </button>
      </p>
    </div>

    <div class="desc-block">
      <h2>{{ randomEmotion }} ✨</h2>
      <p>{{ desc }}</p>
      <br>
    </div>
  </section>
</template>

<script>
// import wiki from 'wikijs';
import * as api from "../api.js";
const emotionsJSON = import("../assets/emotions.json");
// const emotions = emotionsJSON;

export default {
  data: () => {
    return {
      emotions: [],
      randomEmotion: "loading...",
      desc: "",
    };
  },

  watch: {
    randomEmotion() {
      this.desc = "Загрузка...";
      this.getWiki();
    },
  },

  async mounted() {
    this.update("Злость");
  },

  methods: {
    async getWiki() {
      const response = await api.getWiki(this.randomEmotion);
      const result = JSON.parse(response);
      if (!result) {
        this.desc =
          "К сожалению, нам не удалось найти описание данной эмоции на Википедии";
      } this.desc = result;
    },

    async update(emotion) {
      if (!emotion) {
        this.randomEmotion = emotion;
      }

      console.log("&&&");
      const emotions = (await emotionsJSON).default;
      async function rand() {
        const rand = Math.floor(Math.random() * emotions.length);
        return emotions[rand];
      }

      this.randomEmotion = await rand();
    },
  },
};
</script>

<style scoped>
p {
  font-family: Roboto Mono;
  font-size: 18px;
}

.container {
  margin: 0 auto;
  max-width: 700px;
  padding: 30px 20px;
  padding-top: 0;
}

button {
  color: white;
  background-color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 100px;
  font-size: 20px;
}

button:hover {
  opacity: 0.8;
  cursor: pointer;
}

h1 {
  font-weight: 700;
  font-size: 40px;
  line-height: 1.25em;
  font-family: Montserrat;
  margin-bottom: 0px;
}

h2 {
  margin-top: 0;
  padding-top: 0;
  line-height: 1.2em;
  font-size: 30px;
  margin-bottom: 10px;
  font-family: Montserrat;
  font-weight: 700;
}

.desc-block {
  margin-top: 20px;
  padding: 20px;
  padding-top: 10px;
  border: 1px rgba(112, 112, 112, 0.074) solid;
  border-radius: 10px;
  box-shadow: 0px 2px 5px 0px rgba(1, 0, 0, 0.1);
}
</style>
