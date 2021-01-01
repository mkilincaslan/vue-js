<template>
    <div class="container">
        <div class="loading" v-show="saveButtonClicked">
            <div class="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
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
                    <button class="btn btn-primary" :disabled="BTNDisable" @click="saveProduct">Save</button>
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
                    title: "",
                    description: "",
                    price: null,
                    piece: null,
                },
                saveButtonClicked: false,
            }
        },
        computed: {
            // check if any data is empty or null
            // herhangi bir verinin boş ve tanımlanmamış olduğunu kontrol etme
            BTNDisable() {
                let { title, description, price, piece } = this.product;
                return (title.length > 0 && description.length > 0 && price > 0 && piece > 0) ? false : true;
            }
        },
        methods: {
            saveProduct() {
                this.saveButtonClicked = true;
                this.$store.dispatch('saveProduct', { product: this.product });
            }
        },
        beforeRouteLeave (to, from, next) {
            const { title, description, price, piece } = this.product;
            const { saveButtonClicked } = this;
            if ((title.length > 0 || description.length > 0 || price > 0 || piece > 0) && !saveButtonClicked) {
                if (confirm('There are unsaved data!!! Still do you want to EXIT?')) {
                    next();
                } else {
                    next(false);
                }
            } else {
                next();
            }
        }
    }
</script>

<style>

</style>