const posts = [
  {
    title:
      "Revoluciona Tu Presencia Digital: Cómo las Progressive Web Apps (PWA) Transforman la Experiencia del Usuario",
    date: "16 de agosto de 2024",
    author: "Francisco Javier Carranza Esquivel",
    description:
      "Las Progressive Web Apps (PWA) están cambiando la forma en que interactuamos con la web, combinando lo mejor de las aplicaciones móviles y los sitios web tradicionales. Estas aplicaciones modernas son rápidas, confiables y ofrecen una experiencia de usuario similar a una app nativa, pero sin necesidad de descargarla desde una tienda de aplicaciones. Además, las PWA permiten a las empresas llegar a los usuarios de manera más eficiente, ofreciendo acceso incluso sin conexión a Internet y mejorando el rendimiento en dispositivos de todas las gamas. En un mundo donde la experiencia del usuario es clave, las PWA se están convirtiendo en una herramienta esencial para cualquier estrategia digital.",
    categories: [
      "Tecnología Web",
      "Aplicaciones Móviles",
      "Desarrollo Front-End",
    ],
    image:
      "/assets/posts_minaturas/como-las-pwa-transforman-la-experiencia-usuario.jpg",
    href: "como-las-pwa-transforman-la-experiencia-usuario",
    sections: [
      {
        type: "description",
        class: "post-description",
        content: `Las Progressive Web Apps (PWA) son aplicaciones web que utilizan capacidades modernas para ofrecer una experiencia similar a las aplicaciones nativas en dispositivos móviles y de escritorio. Combinan lo mejor de la web y las aplicaciones móviles al aprovechar las tecnologías web más recientes para ofrecer una experiencia de usuario más rica y envolvente.`,
        src: "",
        list: [],
      },
      {
        type: "subtitle",
        class: "post-subtitle",
        content: `Características de las PWA`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: `Las PWA tienen varias características clave que las diferencian de las aplicaciones web tradicionales:`,
        src: "",
        list: [],
      },
      {
        type: "list",
        class: "post-list",
        content: ``,
        src: "",
        order: true,
        list: [
          {
            content: "<strong>Responsivas: </strong>Funcionan en cualquier dispositivo y tamaño de pantalla, proporcionando una experiencia de usuario óptima en todos los dispositivos.",
          },
          {
            content: "<strong>Capacidad de Trabajar Offline: </strong>Gracias a los Service Workers, las PWA pueden funcionar sin conexión o con conexiones de red limitadas, proporcionando acceso a contenido previamente cargado.",
          },
          {
            content: "<strong>Actualización Automática: </strong> Siempre están actualizadas con la última versión gracias a las actualizaciones automáticas gestionadas por los Service Workers.",
          },
          {
            content: "<strong>Seguras: </strong>Se sirven a través de HTTPS, asegurando una conexión segura entre el usuario y la aplicación.",
          },
          {
            content: "<strong>Instalables: </strong>Los usuarios pueden instalar las PWA en su dispositivo como si fueran aplicaciones nativas, sin necesidad de pasar por una tienda de aplicaciones.",
          },
          {
            content: "<strong>Notificaciones Push: </strong>Pueden enviar notificaciones push, permitiendo una interacción directa y en tiempo real con el usuario.",
          },
        ],
      },
      {
        type: "subtitle",
        class: "post-subtitle",
        content: `¿Cuándo utilizar PWA?`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: ` Las PWA son especialmente útiles en los siguientes escenarios:`,
        src: "",
        list: [],
      },
      {
        type: "list",
        class: "post-list",
        content: ``,
        src: "",
        order: true,
        list: [
          {
            content: "<strong>Conexiones de Red Inestables o Lentas: </strong>En lugares donde las conexiones de red son lentas o inestables, las PWA pueden seguir funcionando offline y proporcionar una experiencia de usuario consistente.",
          },
          {
            content: "<strong>Presupuesto Limitado para Desarrollo de Aplicaciones Nativas: </strong>Las PWA son más económicas de desarrollar y mantener que las aplicaciones nativas porque una única base de código puede servir a todas las plataformas.",
          },
          {
            content: "<strong>Audiencia Global: </strong>Para aplicaciones dirigidas a una audiencia global donde los usuarios pueden tener diferentes tipos de dispositivos y condiciones de red.",
          },
          {
            content: "<strong>Accesibilidad Universal: </strong>Cuando se desea que la aplicación esté accesible desde cualquier dispositivo sin la necesidad de instalaciones complicadas.",
          },
          {
            content: "<strong>Actualización Rápida: </strong>En aplicaciones que necesitan ser actualizadas frecuentemente sin depender de los procesos de actualización de las tiendas de aplicaciones.",
          },
        ],
      },
      {
        type: "subtitle",
        class: "post-subtitle",
        content: `Herramientas para desarrollar y mantener PWA`,
        src: "",
        list: [],
      },
      {
        type: "list",
        class: "post-list",
        content: ``,
        src: "",
        order: true,
        list: [
          {
            content: "<strong>HTML, CSS y JavaScript: </strong>Las tecnologías básicas de la web son el núcleo del desarrollo de PWA.",
          },
          {
            content: "<strong>Service Workers: </strong>Scripts que el navegador ejecuta en segundo plano y permiten funcionalidades offline, almacenamiento en caché, y notificaciones push. Puedes empezar a trabajar con ellos usando herramientas como Workbox.",
          },
          {
            content: "<strong>Web App Manifest: </strong>Archivo JSON que define la apariencia de la PWA cuando se instala en el dispositivo del usuario. Contiene metadatos como el nombre de la aplicación, íconos, y el tema de color.",
          },
        ],
      },
      {
        type: "subtitle",
        class: "post-subtitle",
        content: `Frameworks y Librerías:`,
        src: "",
        list: [],
      },
      {
        type: "list",
        class: "post-list",
        content: ``,
        src: "",
        order: true,
        list: [
          {
            content: "<strong>React: </strong>Biblioteca de JavaScript para construir interfaces de usuario. Se puede utilizar junto con Create React App para crear rápidamente PWA.",
          },
          {
            content: "<strong>Angular: </strong>Framework para aplicaciones web que ofrece soporte para PWA mediante Angular Service Worker.",
          },
          {
            content: "<strong>Vue.js: </strong>Framework progresivo de JavaScript que también permite crear PWA con el plugin Vue CLI PWA.",
          },
          {
            content: "<strong>Workbox: </strong>Librería de Google que simplifica el manejo de Service Workers y caching.",
          },
          {
            content: "<strong>Lighthouse: </strong>Herramienta de Google para auditar la calidad de una PWA. Proporciona informes sobre el rendimiento, la accesibilidad, y la conformidad con las prácticas recomendadas para PWA.",
          },
        ],
      },
      {
        type: "subtitle",
        class: "post-subtitle",
        content: `Mantenimiento y Producción`,
        src: "",
        list: [],
      },
      {
        type: "list",
        class: "post-list",
        content: ``,
        src: "",
        order: true,
        list: [
          {
            content: "<strong>Firebase Hosting: </strong>Servicio de Google que permite desplegar y alojar aplicaciones web, incluyendo PWA. Ofrece características como SSL automático y gestión de dominios.",
          },
          {
            content: "<strong>Netlify: </strong>Plataforma para desplegar aplicaciones web estáticas y PWA con soporte para funciones serverless.",
          },
          {
            content: "<strong>Vercel: </strong>Plataforma de despliegue para aplicaciones front-end y serverless, ideal para PWA creadas con Next.js y otras tecnologías.",
          },
        ],
      },
      {
        type: "subtitle",
        class: "post-subtitle",
        content: `Automatización de Pruebas:`,
        src: "",
        list: [],
      },
      {
        type: "list",
        class: "post-list",
        content: ``,
        src: "",
        order: true,
        list: [
          {
            content: "<strong>Cypress: </strong>Herramienta para pruebas end-to-end que permite probar PWA en entornos de desarrollo y producción.",
          },
          {
            content: "<strong>Puppeteer: </strong> Biblioteca de Node.js para controlar navegadores y automatizar tareas de pruebas y despliegue.",
          },
        ],
      },
      {
        type: "subtitle",
        class: "post-subtitle",
        content: `Actualizaciones y Notificaciones:`,
        src: "",
        list: [],
      },
      {
        type: "list",
        class: "post-list",
        content: ``,
        src: "",
        order: true,
        list: [
          {
            content: "<strong>Firebase Cloud Messaging: </strong>Servicio para enviar notificaciones push a usuarios de PWA.",
          },
        ],
      },
      {
        type: "subtitle",
        class: "post-subtitle",
        content: `Conclusión`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: `Las Progressive Web Apps representan una evolución significativa en el desarrollo de aplicaciones web, proporcionando una experiencia de usuario más rica y nativa en todos los dispositivos. Utilizar PWA es una excelente opción cuando se busca crear aplicaciones accesibles, rápidas, y con capacidades offline, mientras se reduce el costo y la complejidad asociados al desarrollo de aplicaciones nativas separadas para diferentes plataformas. Al usar herramientas modernas y seguir las mejores prácticas, las PWA pueden ser una solución potente para los desarrolladores que buscan ofrecer experiencias excepcionales a sus usuarios.`,
        src: "",
        list: [],
      },
    ],
  },
  {
    title:
      "La Guía Definitiva para una Estructura de Carpetas 'Screaming Architecture'",
    date: "10 de agosto de 2024",
    author: "Francisco Javier Carranza Esquivel",
    description:
      "Al momento de empezar un nuevo proyecto, nos topamos con la pregunta de siempre: ¿cómo vamos a estructurar las carpetas? Existen muchos factores a tomar en cuenta, pero hoy haremos un breve análisis de algunas de las formas más utilizadas y cuál es la que recomiendo para casi cualquier tipo de proyecto.",
    categories: ["proyectos en equipo", "desarrollo"],
    image:
      "/assets/posts_minaturas/miniatura-guia-definitiva-estructura-carpetas-creaming-architecture.jpg",
    href: "v2-guia-definitiva-estructura-carpetas-creaming-architecture",
    sections: [
      {
        type: "description",
        class: "post-description",
        content: `Al momento de empezar un nuevo proyecto, nos topamos con la pregunta
          de siempre: <strong>¿cómo vamos a estructurar las carpetas?</strong> Existen
          muchos factores a tomar en cuenta, pero hoy haremos un breve análisis de
          algunas de las formas más utilizadas y cuál es la que recomiendo para casi
          cualquier <strong>tipo de proyecto</strong>.`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: `Algunos de los factores que debemos tomar en cuenta y que son muy
          importantes son, por ejemplo, el tipo de <strong>framework</strong> que
          vamos a usar. Este framework o herramienta puede marcarnos una pauta o
          lineamientos que debemos seguir, pero no siempre seguir las recomendaciones
          del framework (hablando de la estructura de un proyecto) es lo mejor. Muchas
          veces es mejor <strong>delimitar nuestros propios criterios</strong>.
          No es lo mismo un proyecto de <strong>backend</strong> que un proyecto
          de <strong>frontend</strong> o incluso uno de <strong
            >serverless</strong>`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: `El primer punto es ver qué tan dependiente es la estructura del
          proyecto que nos <strong>proporciona</strong> el framework. Una vez identificado
          esto, si es posible, podemos <strong>crear</strong> nuestra propia manera
          de estructurar los proyectos. La idea es tener todo <strong
            >separado</strong
          >, <strong>modularizado</strong> y que sea de
          <strong>fácil legibilidad</strong> para los demás desarrolladores de tu
          equipo.`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: ` Teniendo en cuenta esto, existen otros dos factores que me gustaría
          mencionar en este artículo: el <strong>tiempo de entrega</strong> y la
          <strong>escala</strong> que va a tener el proyecto.`,
        src: "",
        list: [],
      },
      {
        type: "subtitle",
        class: "post-subtitle",
        content: `Tiempo de entrega`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: `Con este factor me refiero a que es muy importante tener claro cuánto
          tiempo tenemos. Muchas veces, y más en empresas emergentes como
          <strong>startups</strong>, se dispone de muy poco tiempo para realizar
          diferentes entregas y liberaciones de proyectos, ya que la mayoría de
          productos digitales aún no se sabe si serán bien recibidos en el
          mercado. En este tipo de empresas, la <strong>rapidez</strong> es un punto
          clave, por lo que el tiempo de entrega es <strong>limitado</strong>.`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: `Un error que se puede cometer es querer implementar una estructura de
          carpetas muy sofisticada, pensando en muchos detalles a futuro, cuando
          realmente no sabemos si el producto va a ser exitoso en el mercado.
          Puede que fracase o crezca significativamente; es una <strong
            >incertidumbre</strong
          >. Por ello, a veces en estos casos, menos es más. Este punto es
          crucial a tener en cuenta, ya que también existe el lado opuesto:
          realizar una estructura de carpetas muy sencilla que nos pueda
          perjudicar cuando el proyecto esté avanzado y necesitemos <strong
            >escalarlo</strong
          >. En ese caso, tendríamos mucha dificultad para hacerlo.`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: ` Mi recomendación es encontrar un punto neutral para ambas situaciones:
          no dedicar demasiado tiempo a definir la <strong>arquitectura</strong
          >, pero tampoco crear una estructura tan simple que sea difícil de
          mantener en el futuro, incluso para los mismos <strong
            >desarrolladores</strong>`,
        src: "",
        list: [],
      },
      {
        type: "subtitle",
        class: "post-subtitle",
        content: `Escala del proyecto`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: ` con este punto me refiero a la importancia de conocer los detalles del
          proyecto en <strong>profundidad</strong>. No basta solo con saber de
          qué va a tratar el proyecto; es fundamental entender qué es lo que el <strong
            >cliente</strong
          > quiere a largo plazo, cuál es su <strong>presupuesto</strong>, y qué <strong
            >expectativas</strong
          > tiene para el futuro del <strong>producto</strong>. Estos aspectos
          son cruciales para tomar una decisión informada acerca de la <strong
            >estructura</strong
          > de carpetas más <strong>adecuada</strong>.`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: ` Si el proyecto tiene un presupuesto <strong>limitado</strong> y el cliente
          no tiene planes de expandirlo considerablemente, podría ser más eficiente
          optar por una estructura más <strong>simple</strong> y <strong
            >directa</strong
          >. Sin embargo, si se prevé un crecimiento significativo del proyecto,
          es vital diseñar una estructura que pueda <strong>escalar</strong> y <strong
            >adaptarse</strong
          > a las futuras necesidades, evitando la necesidad de <strong
            >reorganizar</strong
          > o <strong>refactorizar</strong> el código más adelante.`,
        src: "",
        list: [],
      },
      {
        type: "subtitle",
        class: "post-subtitle",
        content: `Estructura por tipos`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: `  Este primer tipo de estructura es una de las más básicas que puedes
          encontrar. De hecho, es la más simple y la que la mayoría de los
          desarrolladores usan, especialmente cuando están empezando. La razón
          de esto es que, en la mayoría de los cursos de casi todos los
          frameworks o herramientas de desarrollo, se enseña este tipo de
          estructura`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: ` Consiste básicamente en crear carpetas en la raíz del proyecto según
          el <strong>tipo</strong> de elemento que vas a desarrollar. Por ejemplo,
          en una aplicación Angular, podrías tener diferentes carpetas como <strong
            >components</strong
          >,
          <strong>services</strong>, <strong>pipes</strong>, <strong
            >pages</strong
          >, <strong>guards</strong>, <strong>models</strong>, etc. Cada una de
          estas carpetas agrupa los archivos relacionados según su función o
          propósito dentro del proyecto.`,
        src: "",
        list: [],
      },
      {
        type: "image-small",
        class: "",
        content: ``,
        src: "/assets/post_guia-definitiva-estructura-carpetas-creaming-architecture/1.jpg",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: ` ¿Qué hay de malo en este tipo de estructura? Imagina que tu aplicación
          inicialmente solo tiene algunas páginas, quizás 10 componentes y tal
          vez unos 3 servicios; todo parece genial y no sientes la necesidad de
          escalar. Pero, ¿qué sucede si en algún momento necesitas escalar?
          Imagina lo abrumador que sería tener más de 50 archivos en tu carpeta
          de componentes sin una organización clara; podría convertirse en un
          caos.`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: `Aquí analizaremos las ventajas y desventajas de este tipo de
          estructura de carpetas.`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: `<strong>Ventajas</strong>`,
        src: "",
        list: [],
      },
      {
        type: "list",
        class: "post-list",
        content: ``,
        src: "",
        order: true,
        list: [
          {
            content: "Ideal para proyectos chicos o medianos",
          },
          {
            content: "Es simple de implementar",
          },
        ],
      },
      {
        type: "description",
        class: "post-description",
        content: `<strong>Desventajas</strong>`,
        src: "",
        list: [],
      },
      {
        type: "list",
        class: "post-list",
        content: ``,
        src: "",
        order: true,
        list: [
          {
            content: "Difícil de mantener",
          },
          {
            content: "Difícil de escalar",
          },
          {
            content: "poca legibilidad para nuevos programadores",
          },
        ],
      },
      {
        type: "subtitle",
        class: "post-subtitle",
        content: `Estructura por tipos y funciones`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: ` Si bien la estructura anterior era ideal para proyectos pequeños,
          ahora surge una <strong>evolución</strong> de esa misma estructura. En
          esta nueva versión, seguimos teniendo las mismas carpetas <strong
            >principales</strong
          >, pero dentro de ellas añadimos <strong>subcarpetas</strong>,
          organizadas según el <strong>formulario</strong>,
          <strong>módulo</strong> o <strong>función</strong> que estés desarrollando.
          Esto soluciona, en parte, una de las desventajas anteriores: la poca <strong
            >legibilidad</strong
          >. Sin embargo, si el proyecto sigue creciendo, esta estructura
          también podría
          <strong>complicarse</strong>. Aunque es cierto que es un poco más
          ordenada, no deja de tener algunas desventajas adicionales.
        </p>`,
        src: "",
        list: [],
      },
      {
        type: "image-small",
        class: "",
        content: ``,
        src: "/assets/post_guia-definitiva-estructura-carpetas-creaming-architecture/2.jpg",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: ` <strong>Ventajas</strong>`,
        src: "",
        list: [],
      },
      {
        type: "list",
        class: "post-list",
        content: ``,
        src: "",
        order: true,
        list: [
          {
            content: "Ideal para proyectos medianos",
          },
          {
            content: "Nivel de implementación media de dificultad",
          },
        ],
      },
      {
        type: "description",
        class: "post-description",
        content: ` <strong>Desventajas</strong>`,
        src: "",
        list: [],
      },
      {
        type: "list",
        class: "post-list",
        content: ``,
        src: "",
        order: true,
        list: [
          {
            content: "Difícil de mantener en proyectos grandes",
          },
          {
            content: "poca legibilidad para nuevos programadores",
          },
        ],
      },
      {
        type: "subtitle",
        class: "post-subtitle",
        content: `screaming architecture`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: `La <strong>Screaming Architecture</strong> es un enfoque de diseño de software
          propuesto por Robert C. Martin, también conocido como "Uncle Bob". Su idea
          principal es que la estructura del proyecto debe <strong
            >gritar su propósito</strong
          > desde el primer vistazo. En otras palabras, cuando un desarrollador observa
          la organización de las carpetas y archivos de un proyecto, debería ser
          evidente cuál es el dominio o el objetivo principal de la aplicación. En
          lugar de organizar el proyecto en torno a herramientas, frameworks o patrones
          de diseño, se organiza en torno a las <strong>funcionalidades</strong>
          o <strong>características</strong> clave del <strong>negocio</strong>.`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: `  Este enfoque promueve la creación de <strong>módulos</strong> y <strong
            >capas</strong
          > que reflejan directamente las necesidades del negocio. Por ejemplo, en
          lugar de tener carpetas como controllers, services o repositories, tendrías
          carpetas como <strong>billing</strong>, <strong>userManagement</strong
          > o <strong>inventory</strong>, que representan áreas funcionales del
          sistema. Esto ayuda a mantener el código alineado con los objetivos
          del negocio y facilita la <strong>comunicación</strong>
          entre <strong>desarrolladores</strong>, <strong>gerentes</strong> y otros
          <strong>stakeholders</strong>, ya que el propósito de cada parte del
          código es <strong>claro</strong> y <strong>explícito</strong>.`,
        src: "",
        list: [],
      },
      {
        type: "image-small",
        class: "",
        content: ``,
        src: "/assets/post_guia-definitiva-estructura-carpetas-creaming-architecture/3.jpg",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: `<strong>Ventajas</strong>`,
        src: "",
        list: [],
      },
      {
        type: "list",
        class: "post-list",
        content: ``,
        src: "",
        order: true,
        list: [
          {
            content: "Claridad del dominio",
          },
          {
            content: "Mantenimiento simplificado",
          },
          {
            content: "Facilita la escalabilidad",
          },
        ],
      },
      {
        type: "description",
        class: "post-description",
        content: `<strong>Desventajas</strong>`,
        src: "",
        list: [],
      },
      {
        type: "list",
        class: "post-list",
        content: ``,
        src: "",
        order: true,
        list: [
          {
            content: "Curva de aprendizaje",
          },
          {
            content: "Ambigüedad en proyectos pequeños",
          },
        ],
      },
      {
        type: "subtitle",
        class: "post-subtitle",
        content: `Conclusiones`,
        src: "",
        list: [],
      },
      {
        type: "description",
        class: "post-description",
        content: `Ahora que ya conoces esta nueva manera de estructurar tus proyectos,
          no dudes en aplicarla para ir perfeccionando cada vez más tus
          proyectos o los de tu equipo de trabajo. ¡Nos vemos en un próximo
          artículo!`,
        src: "",
        list: [],
      },
    ],
  },
  {
    title:
      "Desbloqueando el potencial de los Observables en Angular: La clave para un código más reactivo",
    date: "12 de junio de 2023",
    author: "Francisco Javier Carranza Esquivel",
    description:
      "En el mundo del desarrollo web, la capacidad de crear aplicaciones altamente interactivas y receptivas es crucial. Angular, uno de los frameworks más populares para la creación de aplicaciones web.",
    categories: ["frontend", "angular"],
    image:
      "https://media.licdn.com/dms/image/D5612AQE0Nl_xkxu2Jw/article-cover_image-shrink_720_1280/0/1686627070022?e=1727913600&v=beta&t=6icXOZBgDVMb1FaEeJJA8mS49fDcVMg1XxT1TGIdz1M",
    href: "desbloqueando-potencial-observables-angular",
    sections: [],
  },
  {
    title: "Git y sus comandos esenciales para un trabajo en equipo eficiente",
    date: "14 de junio de 2023",
    author: "Francisco Javier Carranza Esquivel",
    description:
      "El desarrollo de software en equipo requiere una gestión efectiva de versiones y colaboración sin problemas. Aquí es donde entra en juego Git, un sistema de control de versiones distribuido ampliamente utilizado.",
    categories: ["full-stack", "desarrollo en equipo"],
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQH6rIn-JC2aeQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686778950157?e=1727913600&v=beta&t=ogLQJ7uzgQcxEIKrN0Bvh89XBvioOcSo1ZPIEcTQW_0",
    href: "git-y-sus-comandos-esenciales",
    sections: [],
  },
  {
    title:
      "Explorando la inyección de dependencias en Angular y su poderoso impacto en el desarrollo de aplicaciones",
    date: "9 de junio de 2023",
    author: "Francisco Javier Carranza Esquivel",
    description:
      "La inyección de dependencias es un patrón de diseño que se utiliza en angular ( así como en otros frameworks) que nos va a permitir proporcionarnos las dependencias de un componente de manera externa en lugar de que el componente las cree internamente",
    categories: ["angular", "frontend"],
    image:
      "https://media.licdn.com/dms/image/D5612AQGepsMedziC-A/article-cover_image-shrink_720_1280/0/1686327245098?e=1727913600&v=beta&t=0t00HCYCt82eQY-0fqaj2_vs_Gpze99BR15ZjMb3sbo",
    href: "explorando-la-inyeccion-dependencias-angular",
    sections: [],
  },
  {
    title: "Consumiendo la API de spotify en angular (standalone components)",
    date: "8 de junio de 2023",
    author: "Francisco Javier Carranza Esquivel",
    description:
      "¡Hola! soy Francisco Carranza, y en esta ocasión te traigo un pequeño tutorial donde te explico como consumir la API de Spotify, a un nivel principiante. El objetivo de este tutorial es que aprendas a generar tokens utilizando la herramienta de Postman y que además aprendas a usar el modulo HttpClient que ofrece angular para realizar peticiones, en el tutorial he creado un pequeño clone de la pagina principal de la app móvil de Spotify",
    categories: ["angular", "frontend", "api", "tutorial"],
    image:
      "https://media.licdn.com/dms/image/D5612AQEtSwRYxxClsw/article-cover_image-shrink_720_1280/0/1686246118553?e=1727913600&v=beta&t=13Fnnn59InF-tE7FESnrG70NF9lnsyoyY21gcvMq_0g",
    href: "consumiendo-api-spotify-angular-standalone-components",
    sections: [],
  },
  {
    title: "Potencia tu desarrollo en Typescript con los Utility Types",
    date: "7 de junio de 2023",
    author: "Francisco Javier Carranza Esquivel",
    description:
      "Te traigo una breve explicación de que son los utility types en typescript, para que sirven y como puedes usarlos para hacer que tu codigo sea mucho mas seguro y no este propenso a errores o a malas practicas que se pueden generar a la hora de tipar objetos o de trabajar con interfaces",
    categories: ["código seguro", "typescript"],
    image:
      "https://media.licdn.com/dms/image/D5612AQEr8WpyiSSsZA/article-cover_image-shrink_720_1280/0/1685988125178?e=1727913600&v=beta&t=z9hboymTEr7gdRS2a-S-o9KnhNNu7gPIslSLpUakzM0",
    href: "potencia-tu-desarrollo-typescript",
    sections: [],
  },
];
export default posts;
