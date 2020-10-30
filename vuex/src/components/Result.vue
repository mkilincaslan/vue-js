<template>
    <div>
        <p class="counter-container"> Sayaç : {{ counter }}</p>
        <p class="counter-container"> 2 * Sayaç: {{ doubleCounter }}</p>
    </div>
</template>
<script>
    import { mapGetters } from "vuex";
    export default {
        // props : ["counter"], // Without vuex

        // First way to get store variables - beginner
        // computed: {
        //     counter() {
        //         return this.$store.getters.getCounter;
        //     },
        //     doubleCounter() {
        //         return this.$store.getters.getDoubleCounter;
        //     }
        // }

        // Second way to get store variables - intermediate -- mapGetters ile tüm store yapımızı daha kolay alabiliyoruz
        // computed: mapGetters([
        //     "getDoubleCounter",
        //     "getCounter"
        // ])

        // Second way with keys - Anahtar kullanarak mapGetters faydalanma
        // computed: mapGetters({
        //     counter: 'getCounter',
        //     doubleCounter: 'getDoubleCounter',
        // })

        // Third way to get store variables with custom computed functions -- Kendi computed fonksiyonlarımız ile kullanma yöntemi
        computed: {
            ...mapGetters({
                counter: 'getCounter',
                doubleCounter: 'getDoubleCounter',
            }),
            customText() {
                return "";
            }
        },
    }

</script>
<style scoped>
    .counter-container{
        border: 1px solid #aa7f08;
        padding: 10px 5px;
        background-color: #fbbd08;
        font-size: 20px;
        color: #000;
    }
</style>
