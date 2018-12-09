<style>

</style>

<template>
<div class="page-wrapper">
    <main class="content">       
      <!-- <div v-if="page.acf.template !== 'kontakt'">  
        <div class="page" v-if="(error)">
            <h2>Not Found</h2>
          </div>
        <article class="page" v-else="(!error)">
          <h1 class="entry-title">{{ page.title.rendered }}</h1>
          <h2>{{page.acf.template}}</h2>
          <div class="entry-content" v-html="page.content.rendered">
          </div>
        </article>   
      </div> -->
      <page-content :slug="slug"></page-content>
    </main>

</div>
</template>

<script>
    import WordpressService from '../services/wordpress';

    import Vue from 'vue/dist/vue.js'
    import PageContent from './pageContent.vue';
    Vue.component('page-content', PageContent);


    export default {
        props: ['post_slug'],

        data() {
            return {
                loading: true,
                slug: this.post_slug,
                error: false,
                page: {
                    id: 0,
                    slug: '',
                    title: { rendered: '' },
                    content: { rendered: '' },
                    acf: {template: ''}
                }
            }
        },

        mounted() {
            this.getPage();
        },

        methods: {

            getPage: function() { 
                console.log(this.post_slug);
                const wpPromisedResult = WordpressService.getPageBySlug( this.post_slug );
                wpPromisedResult.then(result => {
                      console.log("PageSlug Found!", result.posts, result.totalPages);
                      this.loading = false;

                      if( result.posts.length == 0){
                          this.error = true; //alternate content control too
                          console.log("PageSlug Found, no data");
                      }else{
                          this.page = result.posts[0];
                          console.log(this.page.acf.template);
                      }

                  })
                  .catch(err => {
                    this.error = true;

                    console.log("PageSlug Error!", wpPromisedResult);
                  });
            }// getPage

        }

    }
</script>
