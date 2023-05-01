<script setup>

</script>

<template>
    <section class="wrapper bg-soft-primary">
      <div class="container pt-5 pt-lg-6 pt-xl-6 pt-xxl-5 pb-lg-5 pb-xl-5 pb-xxl-0">
        <div class="row gx-md-8 gx-xl-12 gy-10 align-items-center text-center text-lg-start">

          <div class="col-lg-6" data-cues="slideInDown" data-group="page-title" data-delay="900">
            <div class="mb-4 text-primary">Let's Discuss Your Project </div>
            
            <h1 class="display-1 mb-5 mx-md-10 mx-lg-0" data-cue="slideInDown" data-group="page-title" data-delay="600" data-show="true" style="animation-name: slideInDown; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;">Nice To Meet <span style="color:#F07A25;"> You </span> </h1>
                
            <p class="lead fs-24 lh-sm mb-7 pe-xxl-15">You need to get positive results when you spend hard <br class="d-none d-md-block d-lg-none" /> earned revenue and time on any marketing effort.
              Great returns on marketing and promotions.  </p>
             
             
              <div class="d-inline-flex me-2"><a href="#" class="btn btn-lg btn-grape rounded"> Start Your Project </a></div>
          
          </div>
          <!--/column -->
          <div class="col-10 col-md-7 col-lg-6" data-cue="zoomIn" data-show="true" style="animation-name: zoomIn; animation-duration: 1700ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
            <img class="img-fluid" src="@/assets/img/contactus.png" data-cue="fadeIn" data-delay="300" alt="" />
          </div>
          <!--/column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
      <figure><img src="@/assets/img/g.png" alt=""></figure>
    </section>
    <!-- /section -->
    <section class="wrapper p-50">
      <div class="container">
        <div class="row ">
          <div class="col-md-11 offset-md-1 col-xxl-11 offset-xxl-1">
            <div class="row">


              <div class="col-md-6">
                <div class="contactform"> 
                
                <form class="contact-form needs-validation" method="post" action="./assets/php/contact.php" novalidate="">
                  <div class="messages"></div>

                  
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-floating mb-4">
                        <input id="form_name" type="text" name="name" class="form-control" placeholder="Jane" required="">
                        <label for="form_name">Full Name *</label>
                        <div class="valid-feedback"> Looks good! </div>
                        <div class="invalid-feedback"> Please enter your first name. </div>
                      </div>
                    </div>
                 
                      <div class="col-md-12">
                        <div class="form-floating mb-4">
                          <input id="form_email" type="email" name="email" class="form-control" placeholder="jane.doe@example.com" required="">
                          <label for="form_email">Email *</label>
                          <div class="valid-feedback"> Looks good! </div>
                          <div class="invalid-feedback"> Please provide a valid email address. </div>
                        </div>
                      </div>
                      <!-- /column -->
  
  
                         <!-- /column -->
                    <div class="col-md-12">
                      <div class="form-floating mb-4">
                        <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Doe" required="">
                        <label for="form_lastname">Contact Number</label>
                        <div class="valid-feedback"> Looks good! </div>
                        <div class="invalid-feedback"> Please enter your last name. </div>
                      </div>
                    </div>
  
                      <!-- /column -->
  
  
                        <!-- /column -->
                        <div class="col-md-12">
                          <div class="form-floating mb-4">
                            <input id="form_name" type="text" name="name" class="form-control" placeholder="Jane" required="">
                            <label for="form_name">Country</label>
                            <div class="valid-feedback"> Looks good! </div>
                            <div class="invalid-feedback"> Please enter your first name. </div>
                          </div>
                        </div>
                    <!-- /column -->
  
  
                    <div class="col-md-12">
                      <div class="form-select-wrapper mb-4">
                        <select class="form-select" id="form-select" name="department" required="">
                          <option selected="" disabled="" value="">Select Services</option>
                          <option value="Sales">Sales</option>
                          <option value="Marketing">Website Design</option>
                          <option value="Customer Support">Wordpress Development</option>
                        </select>
                        <div class="valid-feedback">Custome Webiste Development </div>
                        <div class="invalid-feedback"> Geaphic Design </div>
                      </div>
                    </div>
                    <!-- /column -->
  
                    <!-- /column -->
                    <div class="col-md-12">
                      <div class="form-select-wrapper mb-4">
                        <select class="form-select" id="form-select" name="department" required="">
                          <option selected="" disabled="" value="">Select a department</option>
                          <option value="Sales">Sales</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Customer Support">Customer Support</option>
                          <option value="Customer Support">Website Development Team</option>
                        </select>
                        <div class="valid-feedback"> Looks good! </div>
                        <div class="invalid-feedback"> Please select a department. </div>
                      </div>
                    </div>
                    <!-- /column -->
                    <div class="col-12">
                      <div class="form-floating mb-4">
                        <textarea id="form_message" name="message" class="form-control" placeholder="Your message" style="height: 150px" required=""></textarea>
                        <label for="form_message">Message *</label>
                        <div class="valid-feedback"> Looks good! </div>
                        <div class="invalid-feedback"> Please enter your messsage. </div>
                      </div>
                    </div>
                    <!-- /column -->
                    <div class="col-12">
                      <div class="form-check mb-4">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required="">
                        <label class="form-check-label" for="invalidCheck"> I agree to <a href="#" class="hover">terms and policy</a>. </label>
                        <div class="invalid-feedback"> You must agree before submitting. </div>
                      </div>
                    </div>
                    <!-- /column -->
                    <div class="col-12">
                      <input type="submit" class="btn btn-primary rounded-pill btn-send mb-3" value="Send message">
                      <p class="text-muted"><strong>*</strong> These fields are required.</p>
                    </div>
                    <!-- /column -->
                  </div>
                  <!-- /.row -->
                </form>
              </div>
              </div>





              <div class="col-md-6">
                <h3 class="display-3">Feel Free To <span class="text-primary"> Contact Us </span></h3>
                
                  <ul class="feeldfree">
                  <li> You have an idea to create a Website. </li>
                  <li>You want to get your website developed with latest features.</li>
                  <li>You are looking for a price proposal for your project.</li>
                  <li>You have any query related to Mobile/Web design and development.</li>
                  <li>You want a website/app that increase your business ROI. </li>
                  <li> You are impressed by our portfolio and want our services.</li>
                  </ul>
                 
                  <div class="mt-8">
                    <div class="d-flex flex-row">
                      <div>
                        <div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-location-pin-alt"></i> </div>
                      </div>
                      <div class="align-self-start justify-content-start">
                        <h5 class="mb-1">Address</h5>
                        <address>Moonshine St. 14/05 Light City, <br class="d-none d-md-block">London, United Kingdom</address>
                      </div>
                    </div>
                    <!--/div -->
                    <div class="d-flex flex-row">
                      <div>
                        <div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-phone-volume"></i> </div>
                      </div>
                      <div>
                        <h5 class="mb-1">Phone</h5>
                        <p>00 (123) 456 78 90 <br>00 (987) 654 32 10</p>
                      </div>
                    </div>
                    <!--/div -->
                    <div class="d-flex flex-row">
                      <div>
                        <div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-envelope"></i> </div>
                      </div>
                      <div>
                        <h5 class="mb-1">E-mail</h5>
                        <p class="mb-0"><a href="mailto:sandbox@email.com" class="link-body">sandbox@email.com</a></p>
                        <p class="mb-0"><a href="mailto:help@sandbox.com" class="link-body">help@sandbox.com</a></p>
                      </div>
                    </div>
                    <!--/div -->
                  </div>
                  
                  
                  
               

                </div>



              </div>

            </div>
        
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
    </section>
    <!-- /section -->
</template>

<style>

</style>