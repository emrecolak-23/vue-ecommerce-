import '../src/styles/colors.css';
import '../src/styles/variables.css';
import '../src/styles/reset.css';
import '../src/styles/utilities.css';
import '../src/styles/modal.css';

import store from './store';
import router from './router';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
