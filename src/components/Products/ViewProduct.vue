
<template>
  <div>
          <hr>
       <h4 class="text-primary"> Product List -- </h4>
        <hr>
            <table class="container table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in products" v-bind:key="item">
                  <td>{{item.pro_id}}</td>
                  <td>{{item.pro_name}}</td> 
                  <td>${{item.pro_price}}</td>
                  <td>{{item.pro_desc}}</td>
                  <td>{{item.pro_status}}</td>
                </tr>

              </tbody>
            </table>
  </div>
</template>

<script>
 import { db} from '../firebase';
export default {
  name: 'ViewProduct',
   data() {
    return {
      products: [],
      
    }
  },
  mounted()
  {
      db.collection('Products').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              this.products.push(doc.data());
          });
});
  }
};
</script>

<style>
</style>