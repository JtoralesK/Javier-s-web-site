type navLink = {
  text: string;
  hreft: string;
};
export const navLinks: navLink[] = [
  { text: "Sobre mi", hreft: "sobremi" },
  { text: "Contacto", hreft: "contacto" },
  { text: "Projectos", hreft: "projectos" },
  { text: "Servicios", hreft: "servicios" },
];
export const home = {
  title: "Hola, soy Javier 👋",
  description: `Desarrollador Java Fullstack con un año y medio de experiencia construyendo aplicaciones.
   Trabajo para descomponer lo complejo en soluciones más pequeñas que se relacionan entre sí, logrando sistemas eficientes y bien estructurados.
`,
  location: "Buenos Aires, Argentina",
  available: "Disponible para realizar nuevo proyectos",
};

export const aboutMe = {
  section: "sobre mi",
  idSection: "sobremi",
  title: "Un poco sobre mi",
  description: [
    `Bienvenido a mi sitio web, querido amigo. Mi nombre es Javier Torales y soy programador.
Me apasiona encontrar la mejor estrategia a la hora de resolver un problema.
Más allá de las tecnologías y el código, busco descomponer la incógnita y tratar de resolver
la ecuación en pequeñas partes, trabajando paso a paso y encontrando una manera
sencilla y práctica de solucionarlo.
`,
    `Mis intereses abarcan Java con Spring Boot, utilizando JPA como ORM para trabajar con MySQL,
así como React.js con Tailwind para representar visualmente los datos con los que he trabajado. Como desarrollador,
siempre trato de seguir buenas practicas, escribir código limpio y mantenerme actualizado con las últimas tecnologías.
Desde utilizar testing, patrones de diseño, hasta buscar el mejor nombre de una variable o función.
`,
    `Por ultimo, quiero decir que soy una persona cuya motivación de seguir aprendiendo se basa en 
     concretar metas y superar desafíos. Me gusta trabajar en equipo, compartir conocimientos y aprender de los demás.
      Siempre estoy dispuesto a ayudar y aportar mi granito de arena en cualquier proyecto.
    .`,
  ],

  skills: ["Autodidacta", "Persistencia", "Colaboración", "Iniciativa"],
};
