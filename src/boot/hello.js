import { boot } from 'quasar/wrappers';
import hello from 'hellojs';

export default boot(({ app }) => {
  hello.init({
    // facebook: '2811171012510083',
    google: '1083283151291-03gkneh0jglifgg1ndn99vv5q44d6aav.apps.googleusercontent.com',
  }, { redirect_uri: 'http://localhost:8080/' });

  app.config.globalProperties.$hello = hello;
});