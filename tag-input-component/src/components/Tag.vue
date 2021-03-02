<template>
    <span class="tag" :class="selectedTheme">
        <span class="content">{{ tag }}</span>
        <span class="close" @click='tags.splice(indis, 1)'>X</span>
    </span>
</template>
<script>
    export default {
        name: 'Tag',
        props: ['tag', 'tags', 'indis', 'color'],
        data() {
            return {
                selectedTheme: null
            }
        },
        created() {
            this.selectedTheme = this.color;
        },
    }
</script>
<style scoped>
    .primary {
        color: #004085;
        background-color: #cce5ff;
        border-color: #b8daff;
    }
    .success {
        background-color: #d5eddb;
        border: 1px solid #c3e6cb;
        color: #155724;
    }
    .secondary {
        color: #383d41;
        background-color: #e2e3e5;
        border-color: #d6d8db;
    }
    .info {
        color: #0c5460;
        background-color: #d1ecf1;
        border-color: #bee5eb;
    }
    .danger {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
    }
    .warning {
        color: #856404;
        background-color: #fff3cd;
        border-color: #ffeeba;
    }

    .tag {
        padding: 10px;
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