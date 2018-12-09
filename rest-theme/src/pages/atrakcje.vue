<style>

</style>

<template>
<div class="page-wrapper">

    <main class="content">
        <h1 class="page-title">Atrakcje</h1>

        <div class="posts-wrapper">
            <div v-for="post in posts" :post="post" :key="post.id"></div>
        </div>
    </main>

</div>
</template>

<script>
    import WordpressService from '../services/wordpress';
    import Vue from 'vue/dist/vue.js'

    export default {
        data() {
            return {
                loading: true,
                error: false,
                posts: []
            }
        },

        mounted() {
            this.getPosts();
        },

        methods: {
            getPosts: function() {
                const wpPromisedResult = WordpressService.getAtrakcje();
                wpPromisedResult.then(result => {
                      console.log("PostSlug Found!", result.posts, result.totalPages);
                      this.loading = false;
                      console.log(result);

                      if( result.posts.length == 0){
                          this.error = true; //alternate content control too
                          console.log("PostSlug Found, no data");
                      }else{
                          this.posts = result.posts;
                          console.log(this.posts);
                      }

                  })
                  .catch(err => {
                    this.error = true;

                    console.log("PostSlug Error!", wpPromisedResult);
                  });
            },

            // getPosts:function(){

            //     Vue.http.get('http://www.vuetheme.pl/wp-json/wp/v2/atrakcje')
            //       .then(response => {

            //           console.log(response);
            //           if( typeof response.data !== 'object') reject( response );

            //           let responseData = {posts: response.data, totalPages: 1};
            //           // resolve( responseData );

            //           console.log(responseData);

            //       });
            // }



        },




    }
</script>
