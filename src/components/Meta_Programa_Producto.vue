<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import {ref, onMounted} from "vue"
import axios from 'axios'

defineProps({
  cod_prg: {
    type: String,
    required: true
  },
  cod_prd: {
    type: String,
    required: true
  }
})

DataTable.use(DataTablesCore);
const url='http://localhost:3000/api/'
const columns=[{data:'actividad'},{data:'sub_finalidad'},{data:'trazador', className:'trazador'},{data:'meta_fisica', className:'meta' }]
const opciones={responsive:true, autowidth:false, language:{search:'Buscar', decimal:'.',thousands:',', lengthMenu:'Mostrando _MENU_ registros por pagina', zeroRecords:'No hay registros que mostrar', info:'Mostrando _START_ a _END_ de _TOTAL_ registros', infoEmpty:'Mostrando registros del 0 al 0 de un total de 0 registros',
infoFiltered:'(filtrado de un total de _MAX_ registros)',paginate:{firts:'Primero', previous:'Anterior', next:'Siguiente', last:'Ultimo'}} }

let metas=ref([])

async function get_metas_producto(){
  try {
      console.log(cod_prg)
      const response = await axios.get(url+'metas_producto/'+cod_prg+'/'+cod_prd)
      metas.value = response.data
      console.log('datos de componente:',metas.value)
    } catch (e) {
      error.value = e
    }
}

onMounted(()=>{
  get_metas_producto()
})
</script>

<template>
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="tab">
                <DataTable :data="metas" :columns="columns" :options="opciones" class=" hover cell-border table compact table-striped display">
                  <thead>
                    <tr>
                        <th style=" width: 35%;">Actividad</th>
                        <th style=" width: 40%;">Sub Producto</th>
                        <th style=" width: 5%;">Trazador</th>
                        <th style=" width: 20%; text-align: center;">Meta Fisica</th>
                    </tr>
                </thead>
                </DataTable>
              </div>
          
        </div>
      </div>
    </div>
    </main>
  </template>
  
  <style>
  @import 'datatables.net-dt';
  @import 'bootstrap';
  @import 'datatables.net-bs5';
  
  .meta{
    text-align: right;
  }
  
  .trazador{
    text-align: center;
  }
  
  .sel{
    width: 700px;
    
  }
  
  .tab{
    width: 100%;
    margin-top: 20px;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 1px 2px 8px 3px #756F6E;
    background-color: rgb(241, 244, 247);
    color: rgb(3, 15, 24);
    overflow:visible ;
  }
  /*
  table.dataTable {
    width: 100%;
  }
  table.dataTable.display thead {
    background-color: #09306a;
    color: aliceblue;
  }
  
  table.dataTable.display tbody tr.odd {
    background-color: #a8e3f5;
  }
  
  
  table.dataTable.display tbody tr.even {
    background-color: #FDFDFD;
  }
  */
  
  </style>
  