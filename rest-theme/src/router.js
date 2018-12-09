import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

Vue.use(require('vue-resource'));
Vue.use(VueRouter);

Vue.config.debug = true

const Home = Vue.component('Home', Posts);
import Posts from './pages/posts.vue';
// const Home = Vue.component('Home', Page);
Vue.component('Blog', Posts);

import Archive from './pages/archive.vue';
Vue.component('Archive', Archive);

import ArchiveDate from './pages/archive-date.vue';
Vue.component('ArchiveDate', ArchiveDate);

import Author from './pages/author.vue';
Vue.component('Author', Author);

import Search from './pages/search.vue';
Vue.component('Search', Search);

import Post from './pages/post.vue';
Vue.component('Post', Post);

import Atrakcje from './pages/atrakcje.vue';
Vue.component('Atrakcje', Atrakcje);

import Page from './pages/page.vue';
Vue.component('Page', Page);

import PageContent from './pages/pageContent.vue';
    Vue.component('page-content', PageContent);

var router = new VueRouter({
  mode: 'history',
  base: wp.base_path,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };  // scroll to top on-router-link click
  }
});

router.addRoutes([ {
    path: '/',
    component: Home
}]);

// router.addRoutes([ {
//     path: '/atrakcje',
//     component: Atrakcje
// }]);

// Convert the Routes made in PHP/Wordpress into actual Component Objects
// for (var key in wp.routes) {
//     let route = wp.routes[key];
//     let component_name = route.component;
//     wp.routes[key].component = Vue.component( component_name );

//     if( typeof(wp.routes[key].component) == "undefined" ) console.log("Developer: Please create component named " + component_name );
// }
// router.addRoutes( wp.routes );

wp.routes.map((route)=>{
    let component_name = route.component;
    route.component = Vue.component( component_name );
    console.log(route);
    if( typeof(route.component) == "undefined" ) console.log("Developer: Please create component named " + component_name );
});
console.log(wp.components);
router.addRoutes( wp.routes );

export default router;
