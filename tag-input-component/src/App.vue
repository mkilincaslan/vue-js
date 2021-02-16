<template>
    <div class="tag-container">
        <span class="tag" v-for="(tag, i) in tags" :key="tag">
            <span class="content">{{ tag }}</span>
            <span class="close" @click='tags.splice(i, 1)'>X</span>
        </span>
        <input 
            type="text" 
            @keydown.enter="createTag"
            @keydown.backspace="removeTag"
        />
        <div class="error" v-show="error">
            <span>{{ error }}</span>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            error: null,
            tags: ['vuejs', 'nodejs', 'react']
        }
    },
    methods: {
        createTag(event) {
            let tag = event.target;
            if (tag.value !== '') {
                if (this.tags.find(e => e.trim().toLowerCase() === tag.value.trim().toLowerCase())) {
                    this.error = 'This tag is already added!';
                } else {
                    this.error = null;
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

<style>
    body {
        font-family: sans-serif;
    }
    .tag-container {
        border: 1px solid #ccc;
        padding: 20px;
    }

    .tag {
        background-color: #fbbd08;
        padding: 10px;
        color: #000;
        cursor: default;
        font-size: 14px;
        margin: 0 5px;
    }

    input {
        outline: none;
        height: 30px;
        width: 100px;
    }

    .error {
        font-size: 12px;
        color: red;
        margin: 5px;
    }

    .tag .close {
        font-size: 12px;
        cursor: pointer;
        padding: 0 3px;
    }

</style>
