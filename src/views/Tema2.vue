<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Plan estratégico
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.svg')})`}"
          )

          .bloque-texto-g__texto.p-4
            p El plan estratégico de una empresa es un documento que brinda una perspectiva sobre la forma en la cual se espera se desarrolle la empresa y el negocio en el largo, mediano y corto plazo. Usualmente, se elabora en un período de tiempo de entre tres a cinco años, y se incluyen las metas y objetivos que esperan alcanzarse durante el mismo.
            
    .row.mt-5
      p Los pasos para realizar un plan estratégico son:

    .row.justify-content-center.mb-4
      .col-lg-12
        .crd.clr--gray.brd--rad.p-4.banner2-tema-2
          PasosB.color-acento-contenido
            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Realizar un análisis externo: 
                p Implica diagnosticar aquello que está por fuera de la empresa y la puede impactar. Se sugiere en este sentido utilizar la técnica PESTEL, es decir, buscar y analizar información asociada a lo político, económico, sociocultural, tecnológico y ecológico que rodea el campo de acción de la actividad de la empresa.
              .col-lg-5.col-xs-10
                figure
                  img(src='@/assets/curso/temas/tema2/img7.svg', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                p Específicamente, es muy importante tener presente el escenario económico, especialmente porque el desempeño de una nación en esta área es factor clave de impacto para el desempeño de la actividad dentro de la misma. Para ello, puede ser útil buscar información en el DANE (Departamentos Administrativo Nacional de Estadística), las cámaras de comercio, datos abiertos e información en gremios que pueda ser de utilidad para comprender de una mejor manera el desempeño actual del sector económico en el cual se encuentra la empresa, así como las perspectivas y expectativas que se tienen al respecto.

              .col-lg-5.col-xs-10
                figure
                  img(src='@/assets/curso/temas/tema2/img8.svg', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                p A su vez, para formular un plan estratégico es relevante conocer el marco político, puesto que este permea el entorno de negocios. Es por ello que se sugiere que la empresa revise los documentos formales que existan respecto a las perspectivas políticas y económicas, con el fin de encontrar señales, alertas o condiciones que pueden beneficiarlos o perjudicarlos.
                p En este contexto, surgen los planes de desarrollo, las agendas de competitividad y las agendas internas como insumos para obtener dicha información.
              .col-lg-5.col-xs-10
                figure
                  img(src='@/assets/curso/temas/tema2/img9.svg', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Planes de desarrollo:
                p en Colombia, son documentos que detallan los pilares sobre los cuales se desarrollará un gobierno, sea nacional (país), regional (departamento) o local (municipio). A partir de los mismos, se genera la hoja de ruta para la definición de programas y proyectos de impacto para la sociedad, las empresas y los ciudadanos. 
              .col-lg-5.col-xs-10
                figure
                  img(src='@/assets/curso/temas/tema2/img10.svg', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Agendas de competitividad:
                p son instrumentos creados por el Gobierno y apoyados por diversos sectores de la economía para implementar de manera mancomunada y organizada los programas o acciones que permitan mejorar la competitividad del país. En este sentido, se crean como insumo para la elaboración de los planes de desarrollo.
              .col-lg-5.col-xs-10
                figure
                  img(src='@/assets/curso/temas/tema2/img11.svg', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Agendas internas:
                p constituyen mecanismos de cooperación entre el sector público, privado y la sociedad civil, con el fin de adelantar acciones estratégicas que posibiliten la mejora en la productividad y la competitividad del país.
              .col-lg-5.col-xs-10
                figure
                  img(src='@/assets/curso/temas/tema2/img12.svg', alt='')


            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Realizar un análisis interno:
                p es importante también tener mapeado el desempeño actual de la empresa, desde las áreas funcionales claves: dirección, talento humano, mercadeo y ventas, proceso productivo, finanzas y tecnología; esto permitirá tener una ‘radiografía’ del estado actual.
              .col-lg-5.col-xs-10
                figure
                  img(src='@/assets/curso/temas/tema2/img13.svg', alt='')


            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Definir las metas y/u objetivos:
                p se deben formular aquellas metas y objetivos que se consideren estratégicos para la empresa, y por supuesto, para su formulación deben contemplarse los hallazgos obtenidos en el análisis externo e interno previo.
              .col-lg-5.col-xs-10
                figure
                  img(src='@/assets/curso/temas/tema2/img14.svg', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Plantear las estrategias:
                p son las guías con las cuales se proyecta la consecución de las metas y objetivos.
              .col-lg-5.col-xs-10
                figure
                  img(src='@/assets/curso/temas/tema2/img15.svg', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Implementación:
                p la implementación del plan estratégico consiste en poner en marcha las estrategias diseñadas para la consecución de los objetivos.
              .col-lg-5.col-xs-10
                figure
                  img(src='@/assets/curso/temas/tema2/img16.svg', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Evaluación y control:
                p ambos son mecanismos permanentes de seguimiento. La evaluación permite mostrar a través de indicadores cómo está funcionando el plan con relación a lo trazado en él, y el control facilita desarrollar las acciones necesarias para encauzar de mejor manera lo que se viene ejecutando.
              .col-lg-5.col-xs-10
                figure
                  img(src='@/assets/curso/temas/tema2/img17.svg', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Documentar:
                p los anteriores pasos deben ser documentados y socializados con los mandos medios de la organización, con la finalidad de que estos creen y accionen en conjunto con sus colaboradores los planes, proyectos o programas específicos para el logro de los objetivos y/o metas.
              .col-lg-5.col-xs-10
                figure
                  img(src='@/assets/curso/temas/tema2/img18.svg', alt='')

            


    separador

    #t_2_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.1  Objetivos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .cajonAmarillo.bgr-tarjeta-tema1.p-4
           p Los objetivos, como se mencionó previamente, son cada uno de los fines que se quieren alcanzar. Son enunciados claros, articulados y en el contexto organizacional son coherentes con las metas.

      p.mt-5 Para la correcta formulación de los objetivos, metodológicamente se cuenta con la estructura SMART, la cual es un acróstico que en cada una de sus letras da orientación sobre cómo debe estructurarse cada objetivo, tal como se puede ver a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img3.svg', alt='Texto que describa la imagen')

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b #[i Smart]]

    .row.justify-content-center.align-items-center.mb-5
      .col-8
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='Texto que describa la imagen')

          .tarjeta.color-primario.p-3(x="7%" y="90%" numero="")
            .h5.mb-2.text-white Específico: 
            p.text-white El objetivo debe ser específico y estar muy claramente definido.

          .tarjeta.puntos-caliente-2.p-3(x="28%" y="90%" numero="")
            .h5.mb-2.text-white Medible:
            p.text-white El progreso hacia el objetivo debe ser medible. En la mayoría de los casos significa que puede cuantificarse. Sin embargo, esto a veces puede ser difícil, y es más sencillo, sin dejar de ser eficaz, tener al menos una definición clara de cómo evaluar el nivel de rendimiento. Como regla general, el 80 % de los objetivos deberían estar cuantificados.

          .tarjeta.color-acento-botones.p-3(x="48.5%" y="90%" numero="")
            .h5.mb-2 Alcanzable:
            p El objetivo puede lograrse de forma realista. La organización debe mejorar constantemente y adelantarse a su competencia, lo que debe reflejarse en objetivos que también sean ambiciosos y adaptables al entorno cuando este cambie (o cuando se cumplan). Sin embargo, esto no significa que todos deban ser impulsados hacia arriba, dado que puede ser perjudicial para las condiciones de trabajo y el bienestar de las personas. Es parte del desafío de la dirección elegir cuándo y qué debe ser adaptado hacia arriba o abajo.

          .tarjeta.color-acento-contenido.p-3(x="69%" y="90%" numero="")
            .h5.mb-2 Relevante:
            p El objetivo debe ser relevante para la organización al estar alineado con la estrategia y la práctica o proceso que mide.

          .tarjeta.puntos-caliente-5.p-3(x="90%" y="90%" numero="")
            .h5.mb-2.text-white Tiempo:
            p.text-white El plazo para alcanzar el objetivo debe ser claro,  desde la definición del indicador hasta su socialización.

    .row.mt-5
      p Seguidamente, se redactan algunos objetivos para una agencia de viajes creada este año con presencia en un municipio de Colombia. En la columna de la derecha se evalúa si dicho objetivo está correctamente formulado y el motivo de dicha categorización.

      .titulo-sexto.color-acento-contenido
          p(data-aos="fade-down").mb-0 #[b Tabla 1. ]#[i Ejemplo de formulación de objetivos]

      .tabla-a.color-acento-contenido 
        table
          caption Nota: elaboración propia del experto
          thead
            tr
              th Objetivo
              th Evaluación del objetivo

          tbody
            tr
              td Ser en dos años la agencia de viajes número uno de Colombia en ventas.
              td Es específico, medible relevante y a tiempo; sin embargo NO es alcanzable, ya que no sería viable que una empresa con menos de un año en el mercado en dos años se convierta en la número uno.
                  <br>De acuerdo con lo anterior, NO está bien estructurado.


            tr
              td Abrir una sucursal en el departamento de Antioquia en el próximo año.
              td Es específico, medible, alcanzable, relevante  y tiene un horizonte temporal.

            tr
              td Atraer clientes nuevos.
              td Es relevante, alcanzable y medible, sin embargo, no es específico ni tiene un horizonte de tiempo definido.<br>
                  De acuerdo con lo anterior, NO está bien estructurado.

    separador

    #t_2_2

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.2  Recursos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema2/img4.svg", alt="alt").banner-principal-decorativo-5
      .col-lg-8

        p A nivel empresarial, los recursos son todo aquello que se requiere para garantizar el funcionamiento de la empresa, y poder desempeñar de manera idónea su objeto social (es decir, a lo que se dedica, sea la producción de un bien y/o la prestación de un servicio). Desde esta perspectiva, los recursos se clasifican en humanos, financieros, tecnológicos y técnicos.

        p Los recursos son indispensables para accionar los planes, dado que son los que posibilitan principalmente la puesta en marcha de las estrategias, tácticas y actividades propuestas; es por ello que siempre se debe costear cuánto se requiere para ejecutar cada acción planteada, con el fin de establecer si es viable o no realizarla.

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .titulo-sexto.color-acento-contenido
          p(data-aos="fade-down").mb-0 #[b Figura 2. ]#[i Tipos de recursos en una empresa]
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6.col-xs-12
            figure(data-aos="zoom-in-left")
              img(src="@/assets/curso/temas/tema2/img5.svg", alt="alt")
              figcaption.mt-3 Nota: elaboración propia del experto.

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Recursos humanos")
              .col-12
                p También llamada gestión humana, talento humano, recursos humanos o simplemente colaboradores; sin importar la denominación y la filosofía, en términos prácticos hace alusión a las personas que lideran los procesos y ejecutan las distintas actividades. 

                p En este sentido, desde la perspectiva de la administración como proceso, es el área responsable de asegurar las actividades de atracción, selección, contratación, desarrollo, nómina y desvinculación del personal; desde el tipo de recursos recopila todos los conocimientos, habilidades y experiencias que requiere la empresa en sus diferentes roles (posiciones).
            
            .row(titulo="Recursos financieros")
              .col-12
                p Se refieren al dinero o activos con los que cuenta la empresa y que tienen la capacidad de generar liquidez (capacidad que se tiene para transformar algo en dinero en el corto plazo y/o para pagar las obligaciones financieras). Puntualmente, se refiere a dinero en efectivo, cuentas bancarias, bonos, cuentas por cobrar, acciones o divisas (moneda extranjera).

                p En una empresa son importantes porque permiten hacer frente a los costos (aquellos montos que se requieren para la producción del bien/prestación del servicio) y los gastos (lo que la empresa requiere para su funcionamiento administrativo).
            
            .row(titulo="Recursos técnicos")
              .col-12
                p.mb-0 Son las herramientas, procesos, materias primas e insumos que se requieren para la fabricación del producto o para la adecuada y oportuna entrega del servicio.

            .row(titulo="Recursos tecnológicos")
              .col-12
                p.mb-0 La tecnología hoy posibilita la productividad (mejores formas de hacer las cosas al interior de una empresa) y la competitividad (prácticas diferenciales positivas frente a la competencia); es por ello que las herramientas y equipos tecnológicos se involucran tanto en los procesos productivos, como en las actividades administrativas que se realizan en una empresa. Incluye, en este sentido, el #[i hardware] (componentes tangibles) y el #[i software] (programas y aplicaciones).

        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img6.svg", alt="alt").img400.m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
