<template>
    <v-container>
      <v-row>
        <v-col>
          <h1>Imagen de la Tierra</h1>
          <div v-if="loading">Cargando...</div>
          <div v-if="error">{{ error }}</div>
          <div v-if="info && !loading && !error" class="image-container">
            <img :src="info.url" alt="Imagen de la Tierra"/>
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
          const response = await axios.get('https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=WwInPmY5CNKmL9LOFXvad3vcaSXcVi5V4hu6FQiA');
          this.info = response.data;
        } 
        catch (error) {
          this.error = 'Error al cargar la imagen del día.';
        } 
        finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  
  .image-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  </style>
  