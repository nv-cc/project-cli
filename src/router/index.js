import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history',
  routes,
});
