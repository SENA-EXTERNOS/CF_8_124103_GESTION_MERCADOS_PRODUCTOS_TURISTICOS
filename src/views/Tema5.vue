<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Trazabilidad y plan de mejora

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.svg')})`}"
          )

          .bloque-texto-g__texto.p-4
            p La trazabilidad se refiere a tener documentado el seguimiento que se realiza a un plan, una estrategia, una táctica, una actividad o un proceso; es muy relevante porque posibilita tener una visión completa del inicio y el desarrollo de aquello que se está observando.

    .row.justify-content-center.align-items-center.mb-5.mt-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
         
    .row.mt-5
      p Con el fin de tener una perspectiva aplicada del tema, se invita a consultar el #[b Material complementario 1]- Guía plan de marketing de la Universidad del País Vasco.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-acento-botones.p-3.mb-5.background-descarga
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema3/img1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Material complementario 1 - Ejemplo guía de marketing
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Material_complementario.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajonAmarillo.bgr-tarjeta-tema1.p-4
           p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, como son la síntesis, la actividad didáctica, el material complementario, entre otros.
           

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
