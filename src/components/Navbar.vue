<template>
    <div id="Navbar">
       <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <router-link class="logo mr-auto text-dark text-uppercase" to="/"> E-Commerse Site </router-link>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li><router-link to="/"> Home</router-link></li>
           <li><router-link to="/about"> About</router-link></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          
          <li class="drop-down"><a href="">Drop Down</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="drop-down"><a href="#">Deep Drop Down</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
         <li><router-link to="/about"> Contact</router-link></li>

        </ul>
      </nav><!-- .nav-menu -->
      <router-link to="/register" class="get-started-btn scrollto">Register</router-link>
      <router-link to="/login" class="get-started-btn scrollto">Login</router-link>

    </div>
  </header><!-- End Header -->
     
    </div>
</template>

<script>
 
export default {
    name: 'Navbar',
}
</script>

<style scoped>
#Navbar{
      padding-left: 15px;
    padding-right: 15px;
      padding-top: 50px;
    padding-bottom: 20px;
   
}
</style>