<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/introduccion/img1.svg", alt="alt")
      .col-lg-8.mt-3

        p Estimado aprendiz, en este recurso educativo se describen los elementos requeridos para la estructuración de un #[b plan de mercadeo], resaltando la importancia que tiene la planeación dentro de las organizaciones, y la razón por la cual documentar los planes es relevante, no solo como mecanismo de divulgación de la hoja de ruta para los colaboradores, sino como mecanismo para controlar y constatar la efectividad de las actividades que se realizan. Para lograr lo anterior, se podrá profundizar en lo que significa un plan estratégico, la necesidad de establecer objetivos claros y los elementos que se necesitan para su puesta en marcha, además de establecer qué indicadores se deben tener en cuenta, cómo desarrollar un plan de mercado, cómo llevar una adecuada trazabilidad de los procesos y la importancia de generar planes de mejora. 

        p #[b En el siguiente video conocerá, de forma general, la temática que estudiará a lo largo del componente formativo. ¡Muchos éxitos en este proceso de aprendizaje!]

    .row.justify-content-center.align-items-center.mb-5.mt-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
         
  
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
