<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/null">HOME</b-nav-item>
                <b-nav-item href="/" style="margin-right:10px; width: 350px;">Ordenados por Diámetro</b-nav-item>
                <select class="custom-select" name="region" id="" v-model="filter" v-on:change="buscar($event)">
                    <option value="" selected disabled>--Seleccione una región--</option>
                    <option value="eu">European Union</option>
                    <option value="efta">European Free Trade Association</option>
                    <option value="caricom">Caribbean Community</option>
                    <option value="pa">Pacific Alliance</option>
                    <option value="au">African Union</option>
                    <option value="usan">Union of Southeast Asian Nations</option>
                    <option value="eeu">Eurasian Economic Union</option>
                    <option value="al">Arab League</option>
                    <option value="asean">Association of Southeast Asian Nations</option>
                    <option value="cais">Central American Integration System</option>
                    <option value="cefta">Central European Free Trade Agreement</option>
                    <option value="nafta">North American Free Trade Agreement</option>
                    <option value="saarc">South Asian Association for Regional Cooperation</option>
                </select>
            </b-navbar-nav>            
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                filter: ""
            }
        },
        mounted () {
            
        },
        methods: {
            buscar(evento) {
                window.location.href="/"+evento.target.value;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>