import { createApp } from 'vue'
import App from './App.vue';
import BaseDialogue from './components/UI/BaseDialogue.vue'
import BaseCard from './components/UI/BaseCard'

const app = createApp(App)

app.component('base-dialogue', BaseDialogue);
app.component('base-card', BaseCard);

app.mount('#app')


