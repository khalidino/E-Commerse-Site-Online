<template>
  <div id="App" class="Body-Content">
      <Navbar />
      <div class="container">
        <router-view> </router-view>
      </div>
      <Footer />
  </div>
  
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}

</script>
<style>

 
</style>
