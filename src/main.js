import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import 'bootstrap-icons/font/bootstrap-icons.css';


const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
