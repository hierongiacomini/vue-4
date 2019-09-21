<script>
  import navbar from '@/components/navbar.vue';
  export default {
    components: {
      navbar
    }
  };
</script>

<template>
  <div>
      <navbar/>
    <main>
      <RouterView />
    </main>
  </div>
</template>
