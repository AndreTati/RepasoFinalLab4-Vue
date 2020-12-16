<template>
    <div>
        <b-container>
            <table>
                <tr>
                    <td class="td" style="width: 300px;"><span style="margin-top:100px;">Tierra</span></td>
                    <td class="td">
                        <tr>
                            <td v-for="signo in signosTierra" :key="signo.id"><elemento style="margin-top:15px; margin-bottom:15px" :signoParam="signo"></elemento></td>
                        </tr>
                    </td>
                </tr>
                <tr>
                    <td class="td"><span style="margin-top:100px">Fuego</span></td>
                    <td class="td">
                        <tr>
                            <td v-for="signo in signosFuego" :key="signo.id"><elemento style="margin-top:15px; margin-bottom:15px" :signoParam="signo"></elemento></td>
                        </tr>
                    </td>
                </tr>
                <tr>
                    <td class="td"><span style="margin-top:100px">Agua</span></td>
                    <td class="td">
                        <tr>
                            <td v-for="signo in signosAgua" :key="signo.id"><elemento style="margin-top:15px; margin-bottom:15px" :signoParam="signo"></elemento></td>
                        </tr>
                    </td>
                </tr>
                <tr>
                    <td class="td"><span style="margin-top:100px">Aire</span></td>
                    <td class="td">
                        <tr>
                            <td v-for="signo in signosAire" :key="signo.id"><elemento style="margin-top:15px; margin-bottom:15px" :signoParam="signo"></elemento></td>
                        </tr>
                    </td>
                </tr>
            </table>
        </b-container>
    </div>
</template>

<script>
import Elemento from '../components/Elemento.vue';
    export default {
        components:{Elemento},
        data() {
            return {
                signosJson: [],
                signosTierra:[],
                signosAire:[],
                signosFuego:[],
                signosAgua:[]
            }
        },
        mounted () {
            this.getSignosAgrupados();
        },
        methods: {
            async getSignosAgrupados() {
                debugger
                const res=await fetch('/zodiaco.json');
                const resJson=await res.json();
                this.signosJson=resJson;
                for(let signo of this.signosJson){
                    if(signo.elemento.toLowerCase()==='tierra'){
                        this.signosTierra.push(signo)
                    }else if(signo.elemento.toLowerCase()==='agua'){
                        this.signosAgua.push(signo);
                    }else if(signo.elemento.toLowerCase()==='fuego'){
                        this.signosFuego.push(signo);
                    }else if(signo.elemento.toLowerCase()==='aire'){
                        this.signosAire.push(signo);
                    }
                }
                console.log(this.signosJson)
            },
        },
    }
</script>

<style lang="scss" scoped>
.td{
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
}
</style>