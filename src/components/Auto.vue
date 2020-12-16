<template >
    <div class="texto-centrado"  style="padding:2px">
        <b-card
            tag="article"
            style="width: 150px; height: 290px"
            class="mb-2"
        >
            <router-link :to="'/detalle/'+getId()">
                <b-card-img
                :src="'/images/'+autoParams.imagen"
                alt="Image"
                style="min-height:120px; max-height:120px"
                ></b-card-img>
            </router-link>
            <b-card-title :title="autoParams.marca"></b-card-title>
            <b-card-text>
                <p>{{autoParams.modelo}}  {{autoParams.anio}}</p>
                <span style="color:orange" v-if="autoParams.precio>0">{{autoParams.precio}}</span>
                <span style="color:orange" v-if="autoParams.precio==0">Consultar</span>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        name:"Auto",
        props: ["autoParams"],
        mounted(){
        },
        data() {
            return {
            
            }
        },
        methods: {
            getId(){
                return this.autoParams.imagen.replace(".jpg", "");
            }
        }
    }
    
    
</script>

<style lang="scss" scoped>
    .texto-centrado{
        text-align: center;
    }
</style>