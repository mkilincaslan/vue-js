<template>
    <ul class="nav nav-pills">
        <router-link
            active-class="active"
            exact
            to="/"
            tag="li"
        >
            <a>Home</a>
        </router-link>
        <router-link 
            active-class="active"
            to="/users"
            tag="li"
        >
            <a>Users</a>
        </router-link>
    </ul>
</template>

<script>
export default {
    name: "Header"
}
</script>
