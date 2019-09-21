<template>
  <div class="container">
    <div class="home">Forum</div>
    <div class="searchcontainer">
      <input type="text" class="search-input" placeholder="pesquisar...">
      <i class="material-icons search-icon">search</i>
    </div>
  </div>
</template>

<script>
export default {
  data: ()=>({
    colorx:'#373737',
    indexActive: 0,
  }),
  methods:{
    sobe(){
        return null
    }  
  } 
}
</script>

<style scoped>
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color: #0063B1;
  }
  .home{
    font-size:1.5em;
    padding-left:10px;
    color:#F9F9F9;
  }
  .searchcontainer{
    display:flex;
    align-items: 'stretch';
    min-height: 100%;
    align-items: center;
    box-sizing: content-box;
  }
  .search-input{
    display:block;
    background-color: #d9dfe0;
    height: 25px;
    border-radius: 5px;
    align-items: 'stretch';
    border: none;
  }
  .search-input::placeholder{
    padding-left: 5%;
    padding-right: 30px;
  }
  .search-icon{
    position:relative;
    background-color: #d9dfe0; 
    left: -25px;
  }
</style>










































