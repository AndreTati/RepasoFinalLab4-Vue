<template>
    <div>
        <b-container fluid style="width: 50%; margin-top:30px">
            <b-row>
                <b-col style="text-align:center">
                    <img :src="'/images/'+autoEncontrado.imagen" alt=""/><br><br>
                    <b-button href="javascript:history.go(-1)">Volver</b-button>
                </b-col>
                <b-col>
                    <b-row>
                        <b-col>
                            <h2>Marca: {{autoEncontrado.marca}}</h2>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <h3>Modelo: {{autoEncontrado.modelo}}</h3>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <h4>Año: {{autoEncontrado.anio}}</h4>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <h5 style="color:orangered">{{this.getPrecio(autoEncontrado.precio)}}</h5>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <p>Localidad: {{autoEncontrado.localidad}}</p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name:"Detalle-Plato",
        components:{},
        mounted () {
            this.getAutoXId();
        },
        data() {
            return {
                autoEncontrado: []
            }
        },
        methods: {
            async getAutoXId() {
                const parametroID=this.$route.params.id;
                const res=await fetch("/autos.json");
                const resJson=await res.json();
                this.autoEncontrado=await resJson.find(auto=>auto.imagen.replace(".jpg", "")===parametroID);
                console.log(this.autoEncontrado)
            },
            getPrecio(precio){
                if(precio=='0'){
                    return "Consultar";
                }else{
                    return "$"+precio;
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>