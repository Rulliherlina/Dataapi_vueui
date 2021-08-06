<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add Data Diri</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama Lengkap</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="data.nama" />
      <div class="alert alert-danger" v-if="validation.nama">
        {{ validation.nama[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Tanggal Lahir</label>
    <input type="date" class="form-control" id="inputPassword4"
    v-model="data.tanggal_lahir"/>
    <div class="alert alert-danger" v-if="validation.tanggal_lahir">
        {{ validation.tanggal_lahir[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">No Telepon</label>
    <input type="number" class="form-control" id="inputPassword4"
    v-model="data.no_tlp"/>
    <div class="alert alert-danger" v-if="validation.no_tlp">
        {{ validation.no_tlp[0] }}
      </div>
  </div>
   </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { reactive, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const friend = reactive({
      nama: '',
      tanggal_lahir'',
      no_tlp: ''
      
    })
    const validation = ref([])

    const router = useRouter()

})
    function store(){
      let nama = data.nama
      let tanggal_lahir = data.tanggal_lahir
      let no_tlp = data.no_tlp
     

      axios.post('http://127.0.0.1:8000/api/datas', {
        nama: nama,
        tanggal_lahir: tanggal_lahir,
        no_tlp: no_tlp
      }).then(() => {
        router.push({
          name:'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      data,
      validation,
      router, 
      store,
    }
  },
}
</script>