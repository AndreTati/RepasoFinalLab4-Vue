<template>
    <div>
        <b-container>
            <b-card-group>
                <div
                v-for="auto in autosJson"
                :key="auto.imagen"
                style="margin-top:15px"
                >
                <auto :autoParams="auto"></auto>
                </div>
            </b-card-group>
        </b-container>
    </div>
</template>

<script>
import Auto from '@/components/Auto.vue';
    export default {
        name:'Nuestros-Autos',
        components: {
            "auto":Auto
        },
        async mounted(){
            await this.getAutos();
            this.busqueda();
        },
        data() {
            return {
            autosJson: [],
            autosBusqueda:[]
            }
        },
        methods: {
            async  getAutos() {
            const res=await fetch("/autos.json");
            const resJson=await res.json();
            this.autosJson=resJson;
            },
            busqueda(){
                const url=window.location.href;
                console.log(url)
                if(url.includes("/busqueda/")){
                    const parametro=this.$route.params.parametro;
                    for(let auto of this.autosJson){
                        if(auto.marca.toLowerCase().includes(parametro.toLowerCase()) || auto.modelo.toLowerCase().includes(parametro.toLowerCase()) || auto.anio.toLowerCase().includes(parametro.toLowerCase())){
                            this.autosBusqueda.push(auto);
                        }
                    }
                    this.autosJson=this.autosBusqueda;
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>