<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <p v-for="user in users" :key="user.id"></p>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <RouterLink class="nav-link" to="/">Hem</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>

        <li class="nav-item">
            <RouterLink class="nav-link" to="/user/kontakt">kontakt</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link" to="/user/user">user</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link" to="/user/user">user</RouterLink>
        </li>

      </ul>



      <button @click="$store.commit('oncrement')" id="remove" type="button" class="btn btn-danger">ta bort produkt</button>
      <p id="kundvagn">kundvagn: {{ $store.state.counter }}</p>


    </div>
  </div>
</nav>




    <RouterView/>
</template>

<script>


export default {



  props: {
        comp:{
            required: true,
            type: Object
        }
    },
}


</script>


<style>

#kundvagn{
    font-size: 20px;
    font-weight: 500;
    position: relative;
    top: 20px;
    right: 50px;
}

#remove {
    position: relative;
    top: 13px;
    right: 60px;
}

</style>
