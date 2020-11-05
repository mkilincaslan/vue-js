<template>
    <div class="container">
        <div class="row">
            <div class="col-6 offset-3 pt-3 card mt-5 shadow">
                <div class="card-body">
                    <h3>Product Operations</h3>
                    <hr>
                    <div class="form-group">
                        <label>Product Name</label>
                        <input type="text" class="form-control" placeholder="Please enter the product name..">
                    </div>
                    <div class="form-group">
                        <label>Piece</label>
                        <input type="text" class="form-control" placeholder="Please enter the product piece..">
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="text" class="form-control" placeholder="Please enter the product price..">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea cols="30" rows="5" placeholder="Please enter the product description..."
                                class="form-control"></textarea>
                    </div>
                    <hr>
                    <button class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>