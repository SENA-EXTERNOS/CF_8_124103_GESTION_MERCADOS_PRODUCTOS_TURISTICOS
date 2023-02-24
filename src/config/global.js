export default {
  global: {
    componenteFormativo: 'Plan de mercadeo turístico',
    descripcionCurso:
      'El plan de mercadeo es una herramienta de trabajo muy importante en las empresas, ya que es el documento que recopila el análisis del sector, las estrategias, tácticas y actividades necesarias para comercializar con éxito un producto turístico en el mercado; así mismo, incluye los objetivos propuestos y los indicadores sobre los cuales se realizará el seguimiento de lo planteado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planeación',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Plan estratégico',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Indicadores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Plan de mercadeo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Trazabilidad y plan de mejora',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Planeación',
      referencia:
        'Presidencia de la República de Colombia (s.f.) <em>Comisión Nacional de Competitividad e Innovación.</em> ',
      tipo: 'Página web',
      link:
        'http://www.colombiacompetitiva.gov.co/snci/el-sistema/comision-nacional-competitividad-innovacion',
    },
    {
      tema: 'Plan de mercadeo',
      referencia:
        'Kotler, P. y Keller, K. (2012). <em>Dirección de Marketing</em>. Prentice Hall.',
      tipo: 'Libro',
      link:
        'https://www.montartuempresa.com/wp-content/uploads/2016/01/direccion-de-marketing-14edi-kotler1.pdf',
    },
    {
      tema: 'Plan de mercadeo',
      referencia:
        'Universidad del País Vasco. (2015). Guía plan de marketing: guía inicial.',
      tipo: 'Guía',
      link:
        'https://www.ehu.eus/documents/1432750/4992644/PLAN+DE+MARKETING+GU%C3%8DA+INICIAL+FINAL+cast.pdf',
    },
    {
      tema: 'Plan de mercadeo',
      referencia:
        'Armstrong, G. y Kotler, P. (2013). <em>Fundamentos de marketing</em>. Pearson Educación.',
      tipo: 'Libro',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/14584/mod_resource/content/1/Fundamentos%20del%20Marketing-Kotler.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Estrategias de <em>marketing</em>',
      significado:
        'es el conjunto de tácticas y actividades con los cuales la empresa persigue el cumplimiento de los objetivos de mercadeo y ventas.',
    },
    {
      termino: 'Indicador de gestión',
      significado:
        'es la expresión cuantitativa del comportamiento y desempeño de un proceso cuya magnitud, al ser comparada con algún nivel de referencia, puede estar señalando una desviación sobre la cual se toman acciones correctivas o preventivas según el caso.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'el proceso de mejora continua es la ejecución constante de acciones que optimizan los procesos en una organización, minimizando al máximo el margen de error y de pérdidas.',
    },
    {
      termino: 'Objetivos',
      significado:
        'son cada uno de los fines que se quieren alcanzar. Son enunciados claros, articulados y en el contexto organizacional son coherentes con las metas.',
    },
    {
      termino: 'Plan de mercadeo',
      significado:
        'documento escrito que define las estrategias que se implementarán para lograr los objetivos de mercadeo y ventas de la empresa.',
    },
    {
      termino: 'Planeación',
      significado:
        'es un proceso de análisis y determinación respecto a la consecución de una acción a realizar, una meta o un objetivo. ',
    },
    {
      termino: 'Plan estratégico',
      significado:
        'es un documento que brinda una perspectiva sobre la forma en que se espera se desarrolle la empresa y el negocio en el largo, mediano y corto plazo.',
    },
    {
      termino: 'Planes de mejora',
      significado:
        'son las acciones por implementar con base en los resultados observados de un proyecto, actividad o táctica realizada.',
    },
    {
      termino: 'Presupuesto del plan de mercadeo',
      significado:
        'es la cuantificación o el cálculo anticipado de los recursos requeridos para poner en marcha el plan de mercadeo propuesto.',
    },
    {
      termino: 'Recursos',
      significado:
        'son todo aquello que se requiere para garantizar el funcionamiento de la empresa y que esta desempeñe de manera idónea su objeto social.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chiavenato, I. (2004). <em>Introducción a la teoría general de la administración</em>. Editorial Mc. Graw Hill.',
      link: '',
    },
    {
      referencia:
        'Kotler, P. & Armstrong, G. (2007). <em>Marketing, Versión para Latinoamérica</em>. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Kotler, P. y Keller, K. (2012). <em>Dirección de Marketing</em>. Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Monroy González, L. L. & Simbaqueba Prieto, N. (2017) <em>La importancia de los indicadores de gestión en las organizaciones colombianas</em>. Universidad de La Salle.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
