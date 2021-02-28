import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Rain from './components/Rain.vue'
import Rain2 from './components/Rain2.vue'

console.log(createRouter)
const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Rain },
    { path: '/x', component: Rain2 },
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
