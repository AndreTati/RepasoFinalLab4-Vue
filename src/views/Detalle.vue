<template>
  <div class="about">
    <b-container fluid style="margin-top:40px; width: 600px;" >
      <b-row>
        <b-col>
          <span style="color:green; font-size:24px; font-weight:bold">PAIS: </span>
          <span style="color:blue; font-size:24px; font-weight:bold">{{pais.name}}</span>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col>
          <span><b>Capital: </b></span>
          <span>{{pais.capital}}</span>
        </b-col>
        <b-col>
          <span><b>Región:</b></span>
          <span>{{pais.region}}</span>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <span><b>Subregión: </b></span>
          <span>{{pais.subregion}}</span>
        </b-col>
        <b-col>
          <span><b>Población: </b></span>
          <span>{{pais.population}} habitantes</span>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <span><b>Superficie: </b></span>
          <span>{{pais.area}} km2</span>
        </b-col>
        <b-col>
          <span><b>Monedas: </b></span>
          <span v-for="moneda in pais.currencies" :key="moneda">{{moneda.code}}-{{moneda.name}}-{{moneda.symbol}}</span><br>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-row>
            <b-col><span><b>Zonas Horarias: </b></span></b-col>
            <b-col><li v-for="zh in pais.timezones" :key="zh">{{zh}}</li></b-col>
          </b-row>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-row>
            <b-col><span><b>Idiomas: </b></span></b-col>
            <b-col><li v-for="idioma in pais.languages" :key="idioma">{{idioma.name}}</li></b-col>
          </b-row>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pais: []
    }
  },
  mounted () {
    this.getPais();
  },
  methods: {
    async getPais() {
      const code=this.$route.params.id
      const res=await fetch('https://restcountries.eu/rest/v2/alpha/'+code);
      const resJson=await res.json();
      console.log(resJson)
      this.pais=resJson
    }
  },
}
</script>
<style lang="scss">

</style>