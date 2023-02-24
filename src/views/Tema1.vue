<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Planeación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema1/img1.svg", alt="alt").banner-principal-decorativo-5
      .col-lg-8.mt-3

        p La palabra planeación tiene como alcance la “acción y efecto de proyectar”, viene del francés #[em plant] y del latín #[em planta]. Se podría entender como la acción de plantear en el presente las acciones que deberán ejecutarse en el futuro. De acuerdo con esto, un proceso de este tipo implica la formalización de lo que se pretende realizar, por lo tanto, involucra simultáneamente análisis, determinación y recursos.

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          h4.mb-0 Pasos para realizar un proceso de planeación

      p Un buen proceso de planeación implica definir y priorizar los objetivos, realizar un diagnóstico de la situación actual, identificar futuras situaciones adversas, diseñar el plan, implementar el plan y evaluar los resultados.

      p A continuación, se describen los pasos a tener en cuenta en la estructuración de un proceso de planeación:

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .titulo-sexto.color-acento-contenido
          h5(data-aos="fade-down").mb-0 Figura 1
          p.mb-0 #[em Proceso de planeación]
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8.col-xs-10
            figure(data-aos="zoom-in-left")
              img(src="@/assets/curso/temas/tema1/img2.svg", alt="alt")
          figcaption.mt-3 
            p.mb-0 #[b Fuente:] elaboración propia del experto.

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4.height-tarjetas.banner1-tema-1
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img3.svg' alt='AvatarTop')
        h3.text-center Definición de objetivos 
        p.text-center Es la formulación de aquello que se quiere lograr, es decir, de hacia dónde se quiere ir, teniendo presente que los objetivos sean retadores y alcanzables al mismo tiempo.
      
      .tarjeta.p-4.height-tarjetas.banner1-tema-1
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img4.svg' alt='AvatarTop')
        h3.text-center Priorización de objetivos 
        p.text-center Consiste en ponderar y categorizar, según el nivel de importancia y de impacto, los objetivos diseñados, esto permite tener perspectiva.

      .tarjeta.p-4.height-tarjetas.banner1-tema-1
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img5.svg' alt='AvatarTop')
        h3.text-center Determinar la situación actual 
        p.text-center Consiste en investigar y realizar un análisis del entorno y de la propia situación, es decir, conocer cuáles son las variables que no se pueden controlar pero que pueden impactar, a la vez que se realiza un diagnóstico de cómo está actualmente la empresa.

      .tarjeta.p-4.height-tarjetas.banner1-tema-1
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img6.svg' alt='AvatarTop')
        h3.text-center Ventaja competitiva
        p.text-center Asimismo, se debe mapear cuál es la ‘ventaja competitiva’ actual de la empresa, es decir, qué la hace diferente de las demás.

      .tarjeta.p-4.height-tarjetas.banner1-tema-1
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img7.svg' alt='AvatarTop')
        h3.text-center Identificar situaciones adversas
        p.text-center Es un paso que no muchos empresarios tienen en cuenta, sin embargo, es de alta relevancia, dado que permite identificar riesgos y plantear escenarios de mitigación (en otras palabras, las acciones que se implementarían si los mismos se materializan).

      .tarjeta.p-4.height-tarjetas.banner1-tema-1
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img8.svg' alt='AvatarTop')
        h3.text-center Diseñar el plan
        p.text-center Consiste en estructurar cómo se espera que se logren los objetivos propuestos.

      .tarjeta.p-4.height-tarjetas.banner1-tema-1
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img9.svg' alt='AvatarTop')
        h3.text-center Implementar y evaluar
        p.text-center Consiste en poner en marcha el plan y evaluarlo para determinar si se lograron o no los objetivos.

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          h4.mb-0 Tipos de planeación

    p Los tipos de planeación que se dan en el contexto empresarial son la planeación estratégica, la táctica, la operativa y la normativa.
    p.mb-4 A continuación, se revisarán las definiciones de los diferentes tipos de planeación:

    .row
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-contenido.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="Planeación estratégica ")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img10.svg", alt="alt")

              .col-lg-10.mt-3
                h3 Planeación estratégica 
                p La planeación estratégica es un conjunto de objetivos y metas específicas que permitan ejecutarse en un horizonte de tiempo definido y es potestad del grupo directivo de la organización. Suele diseñarse a largo plazo y surge como respuesta a la pregunta: ¿qué debe hacer la empresa para ser sostenible? La planeación estratégica es de suma importancia porque definirá qué es lo que debe realizarse para sobrevivir de forma rentable. 
          
          .tarjeta.clr-paleYellow.p-4(titulo="Planeación táctica")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img11.svg", alt="alt")

              .col-lg-10.mt-3
                h3 Planeación táctica 
                p La planeación táctica es el proceso que toma en cuenta lo definido en la estratégica y en la cual se empiezan a estructurar planes y programas en las diferentes áreas de la organización a mediano plazo, con el fin de apalancar el cumplimiento de los objetivos trazados durante la primera fase. En cuanto a la ejecución, es liderada por los mandos medios (jefes de área) de la empresa; principalmente se orienta hacia el liderazgo de los diferentes equipos y la optimización de los recursos disponibles.

          .tarjeta.clr-paleYellow.p-4(titulo="Planeación operativa ")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img12.svg", alt="alt")

              .col-lg-10.mt-3
                h3 Planeación operativa 
                p La planeación operativa es aquella enfocada al cumplimiento de las diferentes actividades que se definieron en la táctica, por lo que sus resultados deben ser medibles en el corto plazo. Es ejecutada por todos los colaboradores de la organización, por lo que requiere de la asignación de recursos para su implementación.

          .tarjeta.clr-paleYellow.p-4(titulo="Planeación normativa")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img13.svg", alt="alt")

              .col-lg-10.mt-3
                h3 Planeación normativa
                p La planeación normativa, en algunos casos también conocida como prospectiva, es transversal a las demás y hace referencia a las políticas internas, reglamentos y/o procedimientos que deben seguirse dentro de la planeación de un objetivo. Es importante, porque permite la reducción de incertidumbre, porque se tienen definiciones validadas, a la vez que orienta la toma de decisiones, imposibilitando que los mandos medios realicen acciones de forma desordenada o parcial. 

          .tarjeta.clr-paleYellow.p-4(titulo="Ejemplo de planeación")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img14.svg", alt="alt")

              .col-lg-10.mt-3
                h3 Ejemplo de planeación
                p Para ejemplificar mejor estos conceptos se da el siguiente contexto: una agencia de viajes define, dentro de su planeación estratégica, que se convertirá en la segunda empresa con mayor participación en el mercado en cinco años, por lo que le entrega diferentes planes a cada dependencia directiva. Específicamente, en el área de mercadeo, asignan la responsabilidad de posicionar la marca en todo el territorio colombiano, para lo cual se formulan una serie de actividades que apuntan al logro propuesto, siendo el manual de identidad corporativa el encargado de dar las pautas de cómo desarrollar la táctica. 

          .tarjeta.clr-paleYellow.p-4(titulo="Ejemplo de planeación estratégica")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img15.svg", alt="alt")

              .col-lg-10.mt-3
                h3 Ejemplo de planeación estratégica
                p De acuerdo con lo anterior, lo definido dentro de la planeación es estratégico porque posibilita la permanencia de la empresa en el mercado; cuando el mercadeo define su plan, este es táctico, y cuando se enlistan las actividades que se deben realizar, se trata de una planeación operativa; el manual de marca es el reflejo de la planeación normativa.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
