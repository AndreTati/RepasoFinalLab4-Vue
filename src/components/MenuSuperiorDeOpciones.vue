<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/mes/null">Home</b-nav-item>
                <b-nav-item href="/agrupados" style="width: 400px;">Agrupados por Elemento</b-nav-item>
                <select class="custom-select" name="" id="" v-on:change="buscar($event)">
                <option value="" selected disabled>Seleccione un mes</option>
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="5">Mayo</option>
                <option value="6">Junio</option>
                <option value="7">Julio</option>
                <option value="8">Agosto</option>
                <option value="9">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
            </select>
            </b-navbar-nav>
            
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        mounted () {
            
        },
        methods: {
            buscar(evento) {
                window.location.href="/mes/"+evento.target.value
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>