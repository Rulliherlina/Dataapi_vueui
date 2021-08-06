<template>
<div class="home">
<!--<img alt="Vue logo" src="../assets/logo.png"> 
<Slider />-->
<hr class="my-3">
<router-link class="btn btn-primary" to="/createdata">Add Data Diris</router-link>

<Carddata :data="data" />

<table class="table">
<thead>
<tr>
<th scope="col">Nama</th>
<th scope="col">Tanggal Lahir</th>
<th scope="col">No. Tlp</th>
<th scope="col">Aksi</th>
</tr>
</thead>
<tbody>
<tr v-for="(data, index) in data" :key="index">
<td>{{ data.nama }}</td>
<td>{{ data.tgl_lahir}}</td>
<td>{{ data.no_tlp }}</td>
<td>
<router-link class="btn btn-success" :to="{name:'Editdata', params:{id:data.id}}">Edit</router-link>
<button @click.prevent="dataDelete(data.id)" class="btn btn-danger">Delete</button>
</td>
</tr>
</tbody>
</table>
</div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
// import Slider from "@/components/Slider.vue";
import Carddata from "@/components/Carddata.vue";
import { ref, onMounted } from 'vue';

export default {
name: "Home",
components: {
Carddata,
},
setup(){
let data = ref([])

onMounted(() => {
axios.get('http://127.0.0.1:8000/api/data')
.then(response => {
data.value = response.data.data
})
.catch(error => {
console.log(error)
})
})

function dataDelete(id){
axios.delete(`http://127.0.0.1:8000/api/data/${id}`)
.then(()=>{
let z = this.data.map(data => data.id).indexOf(id);
this.data.splice(z, 1)
}).catch(error => {
console.log(error)
})
}

return {
data,
dataDelete
}
}
};
</script>