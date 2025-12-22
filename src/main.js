import { createApp } from 'vue'
import App from './App.vue'

// Импортируйте Vuetify и основные стили
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Базовые стили Vuetify
import '@mdi/font/css/materialdesignicons.css' // Иконки
import router from './router/router'
//import { createRouter, createWebHistory } from 'vue-router'

const vuetify = createVuetify({
    // Здесь можно добавить начальную тему и параметры
})



const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
