<template>
    <div class="tag-container">
        <app-tag v-for="(tag, indis) in tags" :key="tag" :tag='tag' :tags='tags' :indis='indis'/>
        <input 
            type="text" 
            @keydown.enter="createTag"
            @keydown.backspace="removeTag"
        />
    </div>
</template>

<script>
    import Tag from './Tag';
    export default {
        name: 'Tags',
        data() {
            return {
                tags: ['vuejs', 'nodejs', 'react']
            }
        },
        components: {
            appTag: Tag,
        },
        methods: {
            createTag(event) {
                let tag = event.target;
                if (tag.value !== '') {
                    if (this.tags.find(e => e.trim().toLowerCase() === tag.value.trim().toLowerCase())) {
                        this.$emit('setError', 'This tag is already added!');
                    } else {
                        this.$emit('setError', false);
                        this.tags.push(tag.value);
                        tag.value = '';
                    }
                }
            },
            removeTag(event) {
                if (event.target.value === '') {
                    this.tags.splice(this.tags.length - 1, 1);
                }
            }
        }
    }
</script>

<style scoped>
    input {
        outline: none;
        height: 30px;
        width: 100px;
    }
    .tag-container {
        padding: 20px;
    }
</style>