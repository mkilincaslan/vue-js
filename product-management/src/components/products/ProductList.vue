<template>
    <div class="container">
        <div class="row">
            <div class="col-12 mb-5 card mt-5 shadow">
                <div class="card-body">
                    <h3>Product List</h3>
                    <hr>
                    <table class="table table-hover table-striped table-bordered">
                        <thead>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Piece</th>
                        <th>Price</th>
                        <th>Description</th>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="align-middle text-center"><span class="badge badge-info"> E564fghdE563df </span></td>
                            <td class="align-middle text-center"> Deneme </td>
                            <td class="align-middle text-center"> 1 </td>
                            <td style="width: 120px;"> 10,000</td>
                            <td class="align-middle"> Örnek Açıklama</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="alert alert-warning">
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
export default {

}
</script>

<style>

</style>