<template>
  <v-app>
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col cols="12">
          <v-navigation-drawer app permanent>
            <v-list density="compact" nav>
              <v-list-item prepend-icon="mdi-monitor-dashboard" title="Home" to="/"></v-list-item>
              <v-list-item prepend-icon="mdi-telescope" title="APOD" to="/apod"></v-list-item>
              <v-list-item prepend-icon="mdi-earth" title="EARTH" to="/earth"></v-list-item>
            </v-list>
          </v-navigation-drawer>
          <v-main>
            <router-view />
          </v-main>
          <AppFooter />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
</script>

<style>
/* Añade cualquier estilo personalizado aquí si es necesario */
</style>
