<script setup>
import ApexCharts from "apexcharts";
import VueApexCharts from "vue3-apexcharts";

import {computed} from 'vue' 
const props =defineProps({
    categ:Array,
    dat:Array
})
console.log('pros categ:',props.categ)
let options=computed(()=>{
    return [
        {
            chart:{id:'grafico'},
            xaxis: {
                categories: props.categ
            },
            plotOptions: {
              bar: {
                borderRadius: 10,
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              }
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                return val + "%";
              },
              offsetY: -20,
              style: {
                fontSize: '12px',
                colors: ["#304758"]
              }
            },
        }
    ]
})

let series= computed(()=>{
    return [
        {
            name:'grafico',
            data:props.dat
        }
    ]
})

</script>
<template>
    <VueApexCharts width="500" type="bar" :options="options" :series="series" />
</template>

