<template>
    <span class="tag">
        <span class="content">{{ tag }}</span>
        <span class="close" @click='tags.splice(indis, 1)'>X</span>
    </span>
</template>
<script>
    export default {
        name: 'Tag',
        props: ['tag', 'tags', 'indis']
    }
</script>
<style scoped>
    .tag {
        background-color: #fbbd08;
        padding: 10px;
        color: #000;
        cursor: default;
        font-size: 14px;
        margin: 0 5px;
    }

    .tag .close {
        font-size: 12px;
        cursor: pointer;
        padding: 0 3px;
    }
    
</style>