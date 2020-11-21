<template>
    <div class="container body">
       <div class="row">
<div class="col-md-3 col-lg-3 ">

</div>
<div class="col-md-6 col-lg-6 ">
    <hr>
    <h3 class="text-center text-primary">Registeration Form </h3>
    <hr>
<form class="border p-2">
 
  <div class="form-group ">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" required class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
   </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" required class="form-control" v-model="password" id="exampleInputPassword1" placeholder="Password">
  </div>
 
  <button type="button" @click="register" class="btn btn-primary">Register</button>
</form>
</div>

<div class="col-md-3 col-lg-3  ">

</div>
       </div>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Register',
    data()
    {
        return {
        
            email: "",
            password: ""
        };
    },
    methods:
    {
        register: function()
        {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
  .then((user) => {
     console.log(user.data);

     this.email = "";
     this.password = "";
 
  })
  .catch((error) => {
    alert(error);
  });
 
        }
    }
}
</script>

<style scoped>

</style>