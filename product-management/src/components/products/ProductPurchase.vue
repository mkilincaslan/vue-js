<template>
    <div class="container">
        <div class="row">
            <div class="col-6 offset-3 pt-3 card mt-5 shadow">
                <div class="card-body">
                    <h3>Product Operations</h3>
                    <hr>
                    <div class="form-group">
                        <label>Product Name</label>
                        <input v-model="product.title" type="text" class="form-control" placeholder="Please enter the product name..">
                    </div>
                    <div class="form-group">
                        <label>Piece</label>
                        <input v-model="product.piece" type="number" class="form-control" placeholder="Please enter the product piece..">
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input v-model="product.price" type="number" class="form-control" placeholder="Please enter the product price..">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea v-model="product.description" cols="30" rows="5" placeholder="Please enter the product description..."
                                class="form-control"></textarea>
                    </div>
                    <hr>
                    <button class="btn btn-primary" @click="saveProduct">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                product: {
                    title: null,
                    description: null,
                    price: null,
                    piece: null,
                }
            }
        },
        methods: {
            saveProduct() {
                this.$store.dispatch('saveProduct', { product: this.product });
            }
        }
    }
</script>

<style>

</style>