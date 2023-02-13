<template>



<div id="offer" >
<div id="offer2" class="card" >
  <img :src="comp.img" class="card-img-top">
  <div id="price"  class="card-body">
    <h5 class="card-title">{{comp.name}}</h5>
    <p class="card-text">{{ comp.info }}</p>
    <h4 class="card-price">{{comp.price}}</h4>
    <a id="button" @click="addproduct(comp.name); $store.commit('increment')" class="btn">lägg till kundvagn</a>


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

#offer2 {
    background-color: #29363F;
}
#price {
    color: white;
}

#button {
    background-color: #E50007CC;
    color: white;
}


.card-text {
    font-family: 'Inter';
font-style: normal;
font-weight: 10;
font-size: 15px;
line-height: 18px;


}





</style>
