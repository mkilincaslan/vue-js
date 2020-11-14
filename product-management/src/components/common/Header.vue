<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
        <router-link
            to="/"
            tag="a"
            class="navbar-brand"
        >
            Product List
        </router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link
                    active-class="active"
                    to="/product-operations"
                    tag="li"
                    class="nav-item"
                >
                    <a class="nav-link">Product Operations</a>
                </router-link>
                <router-link
                    active-class="active"
                    to="/product-sell"
                    tag="li"
                    class="nav-item"
                >
                    <a class="nav-link">Product Out</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>