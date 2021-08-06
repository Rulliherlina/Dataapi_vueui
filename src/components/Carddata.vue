<template>
<div class="row">
<div class="col-lg-4 mt-3" v-for="(data, index) in datas" :key="index">
<div class="card">
<div class="card-header">{{data.nama}}</div>
<div class="card-body">
<h5 class="card-title">{{data.tanggal_lahir}}</h5>
<h5 class="card-title">{{data.no_tlp}}</h5>
</div>
<div class="card-footer text-muted">
<router-link class="btn btn-primary" :to="{name:'Detaildatas', params:{id:data.id}}">Detail</router-link>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
props: ["datas"],
};
</script>
