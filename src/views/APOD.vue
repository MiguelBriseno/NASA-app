<template>
  <v-container>
    <v-row>
      <v-col>
        <div v-if="loading">Cargando...</div>
        <div v-if="error">{{ error }}</div>
        <div v-if="info && !loading && !error">
          <h2>{{ info.title }}</h2>
          <img :src="info.url" :alt="info.title" v-if="info.media_type === 'image'"/>
          <p>{{ info.explanation }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      info: null,
      loading: true,
      error: null,
    };
  },
  async created() {
    await this.getImageDay();
  },
  methods: {
    async getImageDay() {
      try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=WwInPmY5CNKmL9LOFXvad3vcaSXcVi5V4hu6FQiA');
        this.info = response.data;
      } 
      catch (error) {
        this.error = 'Error al cargar la imagen del día.';
      } 
      finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
/* Añade cualquier estilo personalizado aquí si es necesario */
</style>
