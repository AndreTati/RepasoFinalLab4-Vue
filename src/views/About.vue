<template>
  <div class="about">
    <b-container style="margin-top:20px">
      <b-row>
        <b-col style="text-align:center">
          <img :src="'/images/'+heroeEncontrado.img" alt=""><br>
          <a href="javascript: history.go(-1)">VOLVER</a>
        </b-col>
        <b-col>
          <b-row>
            <b-col><h3><b>Nombre: </b>{{heroeEncontrado.nombre}}</h3></b-col>
          </b-row>
          <b-row>
            <b-col><h4><b>Creador: </b>{{heroeEncontrado.casa}}</h4></b-col>
          </b-row>
          <b-row>
            <b-col>
              <b>Poderes: </b>
              <li v-for="poder in heroeEncontrado.poderes" :key="poder">{{poder}}</li>
            </b-col>
          </b-row>
          <b-row>
            <b-col><b>Biografía: </b>{{heroeEncontrado.bio}}</b-col>
          </b-row>
          <b-row>
            <b-col><b>Aparición: </b>{{heroeEncontrado.aparicion}}</b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name:"Detalle",
  mounted () {
    this.getHeroeXId();
  },
  data() {
    return {
      heroeEncontrado: []
    }
  },
  methods: {
    async getHeroeXId() {
      const parametroID=this.$route.params.id;
      const res=await fetch("/heroes.json");
      const resJson= await res.json();
      this.heroeEncontrado=resJson.find(heroe=>heroe.id===parametroID);
    }
  },
}
</script>
<style lang="scss">

</style>