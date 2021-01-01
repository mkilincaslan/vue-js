<template>
    <div class="container">
        <div class="loading" v-show="sellButtonClicked">
            <div class="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="row">
            <div class="col-6 offset-3 pt-3 card mt-5 shadow">
                <div class="card-body">
                    <h3>Product Sell</h3>
                    <hr>
                    <div class="form-group">
                        <label>Product Name</label>
                        <select class="form-control" v-model="selectedProduct.key" @change="selectProduct">
                            <option selected disabled>Choose an element</option>
                            <option
                                v-for="product in getProducts"
                                :disabled="product.piece < 0" 
                                :key="product.key"
                                :value="product.key"
                                >
                                    {{ product.title }}
                            </option>
                        </select>
                    </div>
                    <transition name="fade" mode="out-in">
                        <div class="card mb-2 border border-danger" v-show="selectedProduct.key">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <div class="mb-3">
                                            <span class="badge badge-info">Stock : {{ selectedProduct.piece }} </span>
                                            <span class="badge badge-primary">Price : {{ selectedProduct.price | currency }} </span>
                                        </div>
                                        <p class="border border-warning p-2 text-secondary"> {{ selectedProduct.description }} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                    <div class="form-group">
                        <label>Piece</label>
                        <input type="text" v-model="productPiece" class="form-control" placeholder="Ürün adetini giriniz..">
                    </div>
                    <hr>
                    <button class="btn btn-primary" :disabled="BTNDisable"  @click="sellProduct">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        data() {
            return {
                selectedProduct: {
                    key: null,
                },
                productPiece: 0,
                sellButtonClicked: false,
            }
        },
        computed: {
            ...mapGetters(["getProducts"]),
            // check if any data is empty or null
            // herhangi bir verinin boş ve tanımlanmamış olduğunu kontrol etme
            BTNDisable() {
                return (this.selectedProduct.key !== null && this.productPiece > 0) ? false : true;
            }
        },
        methods: {
            selectProduct(){
                this.selectedProduct = this.$store.getters.getProductInfo(this.selectedProduct.key);
            },
            sellProduct() {
                this.sellButtonClicked = true;
                const product = {
                    key: this.selectedProduct.key,
                    piece: this.productPiece,
                };

                this.$store.dispatch("sellProduct", product);
            }
        },
        beforeRouteLeave (to, from, next) {
            const { sellButtonClicked } = this;
            if ((this.selectedProduct.key !== null || this.productPiece > 0) && !sellButtonClicked) {
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

<style scoped>
    .border-danger {
        border-style: dashed !important;
    }
</style>