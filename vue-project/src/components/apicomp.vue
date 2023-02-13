<template>



<div id="offer" >
<div class="card" style="width: 18rem;">
  <img :src="comp.img" class="card-img-top">
  <div id="price"  class="card-body">
    <h5 class="card-title">{{comp.name}}</h5>
    <p class="card-text">{{ comp.info }}</p>
    <h4 class="card-price">{{comp.price}}</h4>
    <a @click="addproduct(comp.name); $store.commit('increment')" class="btn btn-primary">lägg till kundvagn</a>

    
  </div>
</div>

</div>




</template>

<script>


export default {




    props: {
        comp:{
            required: true,
            type: Object
        }
    },

    methods: {
        addproduct(value) {
            this.$emit("addedproduct", value)
        },

    }
}



</script>

<style>




</style>
