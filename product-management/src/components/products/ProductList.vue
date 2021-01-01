<template>
    <div class="container">
        <div class="row">
            <div class="col-12 mb-5 card mt-5 shadow">
                <div class="card-body">
                    <h3>Product List</h3>
                    <hr>
                    <table class="table table-hover table-striped table-bordered" v-if="getProducts.length > 0">
                        <thead>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Piece</th>
                        <th>Price</th>
                        <th>Description</th>
                        </thead>
                        <tbody>
                        <tr v-for="product in getProducts" :key="product.key">
                            <td class="align-middle text-center"><span class="badge badge-info"> {{ product.key }} </span></td>
                            <td class="align-middle text-center"> {{ product.title }} </td>
                            <td class="align-middle text-center"> {{ product.piece }} </td>
                            <td style="width: 120px;"> {{ product.price }} </td>
                            <td class="align-middle"> {{ product.description}} </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="alert alert-warning" v-else>
                        <strong>Could not find any record</strong>
                        <br>
                        <small>You can use the product operations menu for add to product
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters(["getProducts"])
        }
    }
</script>

<style>

</style>