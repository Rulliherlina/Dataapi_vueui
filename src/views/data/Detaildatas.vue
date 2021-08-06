<template>
    <div class="card text-center mt-4" v-for="b in friend" :key="b.id">
  <div class="card-header">
    Detail Data Diri
  </div>
  <div class="card-body">
    <h5 class="card-title">{{b.nama}}</h5>
    <p class="card-text">{{b.tanggal_lahir}}</p>
    <p class="card-text">{{b.no_tlp}}</p>
  </div>
  <div class="card-footer">
    <router-link class="btn btn-success" :to="{name:'Editdatas', params:{id:b.id}}">Edit</router-link>
        <button @click.prevent="dataDelete(b.id)" class="btn btn-danger">Delete</button>
  </div>
</div>

</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
      let data = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/datas/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama);

        data.value = response.data.data;
        
      }).catch(error =>{
        console.log(error.response.data);
      });
    });

    function dataDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/datas/${id}`)
      .then(()=>{
        router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }

    
    return {
      data,
      router, 
      dataDelete,
      route
    }
  },
}
</script>