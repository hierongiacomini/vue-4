<script>
  import navbar from '@/components/navbar.vue'
  export default {
    data(){
      return{
        
      }
    }
    //
  };
</script>

<template>
  <RouterView />
</template>

<style>
body{
    font-family: 'Segoe UI';
    background-color:#F4F4F4;
}

body, header, nav, div, a, p, input{
    box-sizing: border-box;
    margin: 0;
    padding:0;
}
</style>