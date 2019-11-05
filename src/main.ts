import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import { messages } from "./config";
import './style.scss';
import { createRouter } from './router'
import { createStore } from './store'

Vue.use(VueI18n)
Vue.config.productionTip = false

// Ready translated locale messages

// Create VueI18n instance with options
export const i18n = new VueI18n({
  locale: "fr", // set locale
  fallbackLocale: "en",
  messages
});

// Create a Vue instance with `i18n` option
new Vue({ i18n }).$mount('#app')


export async function createApp({
  beforeApp = (arg100: any) => { },
  afterApp = (arg200: any) => { }
} = {}) {
  const router = createRouter()
  const store = createStore()


  await beforeApp({
    router,
    store,

  })

  const app = new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
  })

  const result = {
    app,
    router,
    store,

  }

  await afterApp(result)

  return result
}
