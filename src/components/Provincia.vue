<template>
    <div>
        <table>
            <tr>
                <td class="bordeFila"><span style="color: green;">{{provinciaParam.provincia}}</span></td>
            </tr>
            <tr>
                <td><img :src="'/img/'+provinciaParam.bandera" alt=""></td>
            </tr>
            <tr>
                <td><p><b>Capital-{{provinciaParam.capital}}</b></p></td>
            </tr>
            <tr>
                <td><a :href="'/detalle/'+provinciaParam.abreviatura"><button>Ver Mas</button></a></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name:'Provincia',
        props: ["provinciaParam"]
    }
</script>

<style lang="scss" scoped>
    table{
        border:solid 1px black;
        border-collapse: collapse;
        width:170px;
        height: 200px;
        margin-top: 20px;
    }
    tr{
        border:solid 1px black;
        text-align: center;
    }
    .bordeFila{
        border-bottom: solid 1px green;
    }
</style>