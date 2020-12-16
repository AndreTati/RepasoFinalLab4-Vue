<template>
    <div>
        <b-container>
            <table>
                <tr>
                    <td class="nombre"><span style="color:green"><b>{{heroeParam.nombre}}</b></span></td>
                    <td style="color:red; width: 400px;"><span>Poderes</span></td>
                </tr>
                <tr>
                    <td style="text-align:center"><img :src="'/images/'+heroeParam.img" alt=""></td>
                    <td style="text-align:justify; margin-left:30px">
                        <li style="text-align:justify; margin-left:30px" v-for="poder in heroeParam.poderes" :key="poder.id">{{poder}}</li>
                    </td>
                </tr>
                <tr>
                    <td style="text-align:center"><a :href="'/detalle/'+heroeParam.id"><button >VER MÁS</button></a></td>
                    <td></td>
                </tr>
            </table>
            <hr style="width: 800px; background-color:black">
        </b-container>
    </div>
</template>

<script>
    export default {
        name:"Heroe",
        props: ["heroeParam"]
    }
</script>

<style lang="scss">
.nombre{
    text-align: center;
    border-bottom: 1px solid green;
    border-right: 1px solid green;
    width: 400px;
}
table{
    border: 1px solid black;
    border-collapse: collapse;
}
tr{
    border: 1px solid black;
}
td{
    border: 1px solid black;
}
</style>