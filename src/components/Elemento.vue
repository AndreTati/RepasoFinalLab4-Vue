<template>
    <div>
        <table>
            <tr>
                <td><span><img class="imagen" :src="'/images/'+signoParam.imagen" alt=""></span></td>
            </tr>
            <tr>
                <td>{{signoParam.signo}}</td>
            </tr>
            <tr>
                <td><a :href="'/detalle/'+signoParam.id">VER DETALLE</a></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        props: ["signoParam"],
    }
</script>

<style lang="scss" scoped>
td{
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    text-align: center;
}
.imagen{
    width: 100px;
    height: 100px;
}
</style>