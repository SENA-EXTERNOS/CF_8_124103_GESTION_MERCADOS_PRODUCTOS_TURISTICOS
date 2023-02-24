<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Indicadores

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajonAmarillo.bgr-tarjeta-tema1.p-4
          p.mb-0 Los indicadores son mecanismos o instrumentos de medición que muestran cómo se está logrando un resultado, así que deben ser medibles y observables. En el ámbito empresarial se deben desarrollar para aquellas actividades o procesos relevantes al objetivo específico del área de la organización. En este sentido, de los indicadores generales surgen los indicadores claves de desempeño o #[i Key Performance Indicators], por sus siglas en inglés (KPI), que son una medida específica que evalúa cómo una empresa ejecuta su visión estratégica.

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          h4.mb-0 Indicadores de gestión (KPI)

      p Los indicadores de gestión (KPI) permiten revisar los resultados y la trazabilidad de las variables escogidas para el indicador general, en otras palabras, permite poder entender el nivel del objetivo propuesto desde el punto de vista de las políticas establecidas por la compañía. En ellos se reflejan las fortalezas, debilidades, oportunidades y amenazas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-acento-botones.p-3.mb-5.background-descarga
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema3/img1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Características de los indicadores
                  p.text-small.text-white Para ampliar la información sobre las características que debe tener un indicador, se invita a revisar el #[b anexo 1]
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          h4.mb-0 Interpretación y análisis de los indicadores

      p.mb-4 Una vez se haya calculado el indicador de gestión se debe proceder con su interpretación. A continuación, se darán pautas para la correcta interpretación de un indicador de gestión:

    .tarjeta.tarjeta--azul.p-4.banner1-tema-3
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Indicadores
            p La interpretación del indicador se refiere a comprender lo que está ocurriendo en un proceso específico o actividad, a partir de lo cual se procede a la toma de decisiones, que son, por lo general, opciones de mejora para corregir un resultado que se desvía de lo esperado, logrando así resultados satisfactorios. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img2.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Cultura de medición
            p En la cultura de la medición del desempeño de las organizaciones, al momento de leer los indicadores de gestión, es muy importante realizar el ejercicio planteado que se ve en la gráfica generada, que se encuentra vinculada con los niveles de tolerancia de los indicadores, los cuales envían señales de alerta.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Evaluación del indicador
            p Para la evaluación del indicador, usualmente se establece una banda o escala para catalogar el resultado, lo que se conoce como semáforo. Por ejemplo, si es bueno generalmente se asocia al color verde, si es regular se relaciona con el color naranja, y si es malo se asocia al color rojo. A cada indicador se le establece una banda de tolerancia que permita calificar su cumplimiento.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img4.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Ejemplo de rangos para evaluar indicadores
            p En seguida se muestra un ejemplo de una escala de evaluación. Cabe mencionar que la definición de los rangos es propia de cada empresa.
            p Según el ejemplo, cada resultado del indicador arrojará una evaluación;  en este caso, si la persona cumple al 100 % el resultado de su evaluación es bueno, si es del 60 % su indicador es malo.
          .col-md-6
            .row.mt-5
              .titulo-sexto.color-acento-contenido
                h5(data-aos="fade-down").mb-0  Tabla 2
                p.mb-0 #[i Ejemplo de rangos para evaluar indicadores]

              .tabla-a.color-acento-contenido 
                table
                  caption 
                    p.mb-0 #[b Fuente:] elaboración propia del experto
                  thead
                    tr
                      th Resultadosdel indicador (% de cumplimiento)
                      th Evaluación
                  tbody
                    tr
                      td Superior al 95 %
                      td Bueno
                    tr
                      td Entre el 94.9 % y el 80 %
                      td Regular
                    tr
                      td Menor al 80 %
                      td Malo

    .row.mt-5
      p La gestión basada en indicadores se aplica a todas y cada una de las áreas de la organización, tanto a nivel estratégico, táctico y operativo. Por tal motivo, se debe diseñar para monitorear el resultado de la variable de acuerdo a la necesidad de cada nivel, y su resultado estará expresado de manera numérica, lo cual indicará el nivel de desempeño o cumplimiento de los objetivos trazados. 

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          h4.mb-0 Pasos para diseñar e implementar un indicador
    
    p A continuación se destacan los pasos necesarios para el diseño y la implementación de un indicador:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema3/img5.svg', alt='Texto que describa la imagen')
          figcaption.mt-3 
            p.mb-0 #[b Nota:] elaboración propia del experto.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-acento-botones.p-3.mb-5.background-descarga
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema3/img1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Diseño e implementación de indicadores
                  p.text-small.text-white Para ampliar la información sobre los pasos para diseñar e implementar un indicador, se invita a revisar el #[b Anexo 2].  Pasos para diseñar e implementar un indicador.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          h4.mb-0 Reporte de los indicadores

      p Los reportes e informes de gestión basados en los indicadores deben centrarse en las estrategias de valor que se han diseñado para la satisfacción del cliente, sumado a las áreas organizacionales comprometidas en la atención, colaboración con el cliente y oportunidades de negocio. 

      p Los reportes o informes inherentes al desempeño de las áreas se deben presentar por cada uno de los responsables, con su respectivo análisis de los resultados arrojados; pero antes de lo anterior, es necesario establecer los KPI que se van a instaurar en cada área o actividad.

      p Hay tres categorías principales de informes de KPI que se pueden crear en función de sus objetivos y de lo que necesita su público:

    .tarjeta.tarjeta--azul.p-4.banner1-tema-3
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Informe analítico:
            p Detalla el KPI y trabaja para explicar qué fue lo que más impactó en sus resultados. Puede incluir datos históricos de informes anteriores para su comparación.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img6.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Informe operativo:
            p Proporciona datos sobre cómo los KPI miden las operaciones diarias de una organización para que la dirección pueda tomar decisiones bien informadas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img7.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Informe estratégico:
            p Refleja la ‘salud’ de la organización y su progreso para que las partes interesadas puedan determinar si están cumpliendo los objetivos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img8.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Análisis de indicadores:
            p De acuerdo con lo revisado respecto de los indicadores, cabe resaltar su pertinencia dentro de la ejecución de cualquier tipo de acción porque mostrarán, de una forma puntual, cuáles son los resultados parciales o finales de lo planeado. Así mismo, se recalca la necesidad no solo de crearlos, sino de analizarlos, socializarlos y realizar las gestiones a las que haya lugar según los resultados que estén arrojando.
            
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img9.svg', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema3',
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
