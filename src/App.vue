<script setup>
  import { RouterView, RouterLink } from 'vue-router';
  import Nav from './views/Nav.vue'
  import Footer from './views/Footer.vue'
</script>

<template>

<nav class="navbar navbar-expand-lg center-nav transparent navbar-light bg-white">
        <div class="container flex-lg-row flex-nowrap align-items-center">
          <div class="navbar-brand w-100">
            <RouterLink to="/">
            <img src="@/assets/img/logo.png">
            </RouterLink>
          </div>
          <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div class="offcanvas-header d-lg-none">
              <h3 class="text-white fs-30 mb-0"> Welkin Solutions </h3>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <RouterLink class="nav-link active hover" to="/">
                    <div class="menu-item-wrap"> <span class="menu-item-title"> Home </span> </div>
                    </RouterLink>
                </li>

                <li class="nav-item">
                  <RouterLink class="nav-link hover" to="/services" >Our Services</RouterLink>
                </li>

                <li class="nav-item">
                  <RouterLink class="nav-link hover" to="/projects">Our Projects</RouterLink>
                </li>

                <li class="nav-item">
                  <RouterLink class="nav-link hover" to="/about">About Us</RouterLink>
                </li>

                <li class="nav-item">
                  <RouterLink class="nav-link hover" to="/testimonial">Testimonials</RouterLink>
                </li>


              </ul>
              <!-- /.navbar-nav -->
              <div class="offcanvas-footer d-lg-none">
                <div>
                  <RouterLink to="/contact" class="btn btn-sm btn-primary rounded">Contact Us</RouterLink>
                  <br />
                  <nav class="nav social social-white mt-4">
                    <RouterLink to=""><i class="uil uil-twitter"></i></RouterLink>
                    <RouterLink to=""><i class="uil uil-facebook-f"></i></RouterLink>
                    <RouterLink to=""><i class="uil uil-dribbble"></i></RouterLink>
                    <RouterLink to=""><i class="uil uil-instagram"></i></RouterLink>
                    <RouterLink to=""><i class="uil uil-youtube"></i></RouterLink>
                  </nav>
                  <!-- /.social -->
                </div>
              </div>
              <!-- /.offcanvas-footer -->
            </div>
            <!-- /.offcanvas-body -->
          </div>
          <!-- /.navbar-collapse -->
          <div class="navbar-other w-25 d-flex ms-auto">
            <ul class="navbar-nav flex-row align-items-center ms-auto">
              <li class="nav-item d-none d-md-block">
                <RouterLink to="/contact" class="btn btn-sm btn-primary rounded">Contact Us</RouterLink>
              </li>
              <li class="nav-item d-lg-none">
                <button class="hamburger offcanvas-nav-btn"><span></span></button>
              </li>
            </ul>
            <!-- /.navbar-nav -->
          </div>
          <!-- /.navbar-other -->
        </div>
        <!-- /.container -->
      </nav>
      <!-- /.navbar -->
      
      <RouterView />
    <Footer />
</template>

<style>

</style>