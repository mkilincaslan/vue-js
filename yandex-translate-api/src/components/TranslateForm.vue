<template>
    <form @submit="translateIt" class="well">
        <textarea cols="30" rows="5" class="form-control" placeholder="What would you like to translate..."></textarea>
        <select class="form-control">
            <option></option>
        </select>
        <br>
        <div class="text-left">
            <strong>Tespit Edilen Dil : </strong> 
        </div>
        <br>
        <button type="submit" class="btn btn-primary btn-block">Çevir Gelsin!</button>
    </form>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>