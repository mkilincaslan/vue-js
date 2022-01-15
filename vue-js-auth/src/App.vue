<template>
  <div>
    <Header />
    <div class="alert alert-warning text-center" role="alert" v-if="tokenExpiredMessage">
      Token expired!
    </div>
    <router-view />
  </div>
</template>
<script>
  import Header from "./components/Header";
  import Auth from "./pages/auth/Auth";
  import Homepage from "./pages/Homepage";
  import About from "./pages/About";
  import { mapState } from 'vuex';
  export default {
    components: {
      Header,
      Auth,
      Homepage,
      About
    },
    computed: {...mapState(['tokenExpiredMessage'])},
    created() {
      this.$store.dispatch('initAuth');
    }
  }
</script>
