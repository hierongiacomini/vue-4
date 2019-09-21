<template>
  <div class="homeview">
    <div class="containerhomeview">
      <postcard v-for="(post,index) in posts" :key="index" 
      :postTitle="post.title" 
      :postBody="post.body" 
      :userName="post.user.name"
      :totalReplies="post.total_replies"
      :slug="post.slug"
      data-test="thread"/>
    </div>
  </div>
</template>

<script>
import postcard from '@/components/postcard.vue';
  export default {
    beforeCreate(){
      fetch('http://localhost:1338/threads').then((res)=>res.json()).then((obj)=>{this.posts=obj.data; console.log(obj)})
      //fetch('http://localhost:8080/api/threads').then((res)=>res.json()).then((obj)=>{this.posts=obj.data; console.log(obj)})
    },
    data(){
      return {
        posts:{}
      }
    },
    computed: {
      message: () => 'Home!',
    },
    components:{
      postcard,
    }
  };
</script>

<style>
.homeview{
  margin-bottom: 100px;
}
  
</style>

