<template>
    <div>
        <b-container>
            <table style="margin-top:30px">
                <tr>
                    <td><span><b>Provincia:</b></span></td>
                    <td><span>{{provinciaEncontrado.provincia}}</span></td>
                </tr>
                 <tr>
                    <td><span><b>Abreviatura:</b></span></td>
                    <td><span>{{provinciaEncontrado.abreviatura}}</span></td>
                </tr>
                 <tr>
                    <td><span><b>Capital:</b></span></td>
                    <td><span>{{provinciaEncontrado.capital}}</span></td>
                </tr>
                 <tr>
                    <td><span><b>Bandera:</b></span></td>
                    <td><img :src="'/img/'+provinciaEncontrado.bandera" alt=""></td>
                </tr>
                 <tr>
                    <td><span><b>Fecha Autonomía:</b></span></td>
                    <td><span>{{provinciaEncontrado.fechaAutonomia}}</span></td>
                </tr>
                 <tr>
                    <td><span><b>Población:</b></span></td>
                    <td><span>{{provinciaEncontrado.poblacion}}</span></td>
                </tr>
                 <tr>
                    <td><span><b>Superficie:</b></span></td>
                    <td><span>{{provinciaEncontrado.provincia}}</span></td>
                </tr>
                 <tr>
                    <td><span><b>N° Departamentos:</b></span></td>
                    <td><span>{{provinciaEncontrado.nroDepartamentos}}</span></td>
                </tr>
                 <tr>
                    <td><span><b>Tiene Puerto:</b></span></td>
                    <td>
                        <span v-if="provinciaEncontrado.tienePuerto==='Y'">SI</span>
                        <span v-if="provinciaEncontrado.tienePuerto==='N'">NO</span>
                    </td>
                </tr>
                 <tr>
                    <td><a href="javascript: history.go(-1)">VOLVER</a><td>
                    <td></td>
                </tr>
            </table>
        </b-container>
    </div>
</template>

<script>
    export default {
        name:'DetalleProvincia',
        components:{},
        mounted () {
            this.getProvinciaXId();
        },
        data() {
            return {
                provinciaEncontrado: []
            }
        },
        methods: {
            async getProvinciaXId() {
                const parametroID=this.$route.params.id;
                const res=await fetch("/lista_provincias.json")
                const resJson=await res.json()
                this.provinciaEncontrado=resJson.find(prov=>prov.abreviatura===parametroID);
            }
        },
    }
</script>

<style lang="scss" scoped>
    td{
        width: 200px;
    }
</style>