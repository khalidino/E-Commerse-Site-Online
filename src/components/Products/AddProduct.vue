<template>
    <div id="AddProduct">
        <hr>
       <h4 class="text-primary"> Add New Product</h4>
        <hr>
           <div class="form-group">
               <label>ID </label>
               <input type="text" class="form-control" v-model="product.pro_id" placeholder="Enter Product ID">
           </div>
            <div class="form-group">
               <label>Name </label>
               <input type="text" class="form-control" v-model="product.pro_name" placeholder="Enter Product Name">
           </div>
            <div class="form-group">
               <label>Price </label>
               <input type="text" class="form-control" v-model="product.pro_price" placeholder="Enter Product Price">
           </div>
            <div class="form-group">
               <label>Description </label>
               <input type="text" class="form-control" v-model="product.pro_desc" placeholder="Enter Product Description">
           </div>
            <div class="form-group">
               <label>Status </label>
               <input type="text" class="form-control" v-model="product.pro_status" placeholder="Enter Product Status">
           </div>

            <div class="form-group">
                <button class="btn btn-success" @click="SaveData" type="submit"> Save Data </button>
                <span id="Successfully"> </span>
           </div>
    </div>
</template>

<script>
 import { db} from '../firebase';
export default {
    name: 'AddProduct',
      data() {
    return {
      product: {
        pro_id: null,
        pro_name: null,
        pro_price: null,
        pro_desc: null,
        pro_status: null
      }
    }
  },
      methods: {
    SaveData() {
 
      db.collection("Products").add(this.product)

      .then((docRef) =>  {
          alert("Successfully Added New Product | Happy Congratulation!: ", docRef.id);
           this.product.pro_id= "",
        this.product.pro_name= "",
        this.product.pro_price= "",
        this.product.pro_desc= "",
        this.product.pro_status= ""
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
    },
}}
</script>

<style scoped>

</style>