<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import {ref, onMounted} from "vue"
import axios from 'axios'
import ApexCharts from "apexcharts";
import VueApexCharts from "vue3-apexcharts";


DataTable.use(DataTablesCore);
const url='http://localhost:3000/api/'
const columns=[{data:'nom_micro_red'},{data:'meta_fisica', className:'meta' },{data:'medida'},{data:'trazador', className:'trazador'}]
const opciones={responsive:true, autowidth:false, language:{search:'Buscar', decimal:'.',thousands:',', lengthMenu:'Mostrando _MENU_ registros por pagina', zeroRecords:'No hay registros que mostrar', info:'Mostrando _START_ a _END_ de _TOTAL_ registros', infoEmpty:'Mostrando registros del 0 al 0 de un total de 0 registros',
infoFiltered:'(filtrado de un total de _MAX_ registros)',paginate:{firts:'Primero', previous:'Anterior', next:'Siguiente', last:'Ultimo'}} }

let cod_prg=''
let cod_prd=''
let cod_sub=''
let programas=ref([])
let productos=ref([])
let sub_productos=ref([])
let metas=ref([])
let categ=ref([])
let datos=ref([])
let chartOptions=ref([])
let series=([])
let cat1=([])
let dat1=([])
let traz=''
let tit=''


async function get_programas(){
  try {
      const response = await axios.get(url+'programas')
      programas.value = response.data
    } catch (e) {
      error.value = e
    }
}

async function get_productos(){
  try {
      const response = await axios.get(url+'productos/'+cod_prg)
      productos.value = response.data
    } catch (e) {
      error.value = e
    }
}


async function get_sub_productos(){
  try {
      const response = await axios.get(url+'sub_productos/'+cod_prg+'/'+cod_prd)
      sub_productos.value = response.data
    } catch (e) {
      error.value = e
    }
}

chartOptions= {
        chart: {
          id: "vuechart-example",
        },
        plotOptions: {
              bar: {
                borderRadius: 5,
                horizontal: true,
              }
            },
            dataLabels: {
              enabled: true,
              barHeight: '100%',
              style: {
                fontSize: '14px',
              }
            },
        xaxis: {
          categories: [],
        },
      }

series= [
        {
          name: "Micro Red",
          data: [],
        },
      ]

async function get_metas_subproducto_MR(){
  try {
      const response = await axios.get(url+'metas_subproducto_MR/'+cod_prg+'/'+cod_prd+'/'+cod_sub)
      metas.value = response.data
      if(metas.value.length>0){
        traz=metas.value[0].trazador
        tit=metas.value[0].sub_finalidad

      }
      categ.value=metas.value.map(function(element){
        return element.nom_micro_red
      })
      datos.value=metas.value.map(function(element){
        return parseInt(element.meta_fisica)
      })
    } catch (e) {
      error.value = e
    }
    cat1=Object.values(categ.value);
    dat1=Object.values(datos.value);
    chartOptions.categories=cat1;
    series.data=dat1;
    chartOptions= {
        xaxis: {
          categories: cat1,
        },
      }
    series= [
        {
          data: dat1,
        },
      ]


}




onMounted(()=>{
  get_programas()
})



</script>

<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
        <div class="sel">
          <select @change="get_productos()" v-model="cod_prg" class="form-select form-select-md mb-3">
            <option value="" disabled selected>Seleccione un programa</option>
            <option v-for="prg in programas" :value="prg.cod_programa">
              {{ prg.programa }}
            </option>
          </select>

          <select v-model="cod_prd" @change="get_sub_productos()" class="form-select form-select-md mb-3">
            <option value="" disabled selected>Seleccione un producto</option>
            <option v-for="prd in productos" :value="prd.cod_producto">
              {{ prd.producto }}
            </option>
          </select>

          <select v-model="cod_sub" @change="get_metas_subproducto_MR()" class="form-select form-select-md mb-3">
            <option value="" disabled selected>Seleccione un sub producto</option>
            <option v-for="sub in sub_productos" :value="sub.cod_sub_finalidad">
              {{ sub.sub_finalidad }}
            </option>
          </select>
        </div>
      </div>
    </div>


    <div class="container-fluid">
      <div class="row">
        <div v-show="tit!=''" class="col-md-12">
          <h4 class="trazador">{{ tit }}</h4>
        </div>
        <div class="col-md-6">
          <div class="tab">
            <DataTable :data="metas" :columns="columns" :options="opciones" class=" hover cell-border table compact table-striped display">
              <thead>
                <tr>
                  <th style=" width: 30%;">Micro Red</th>  
                  <th style=" width: 25%; text-align: center;">Meta Fisica</th>
                  <th style=" width: 40%;">Unidad de Medida</th>  
                  <th style=" width: 5%;">Trazador</th>  
                </tr>
            </thead>
            </DataTable>
          </div>
        </div>


        <div v-show="tit!=''" class="col-md-6">
          <div>
            <VueApexCharts width="100%" height="600"
            type="bar"
            :options="chartOptions"
            :series="series"
            />
      
          </div>
        </div>
      </div>
    </div>

    

  </div>




  </main>
</template>

<style scope>
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
  font-size: 12px;
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


</style>
