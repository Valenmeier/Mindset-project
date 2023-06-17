import React from "react";
import TitleSection from "../common/titleSection/TitleSection.jsx";
import CardArticles from "./cardsArticles/CardArticles.jsx";
import styles from "./styles.module.css";
import TextoConEspacio from "../common/textoConEspacio/TextoConEspacio.jsx";

const Articles = () => {
  return (
    <section id="articulos">
      <div className={styles.imagenInicio}>
        <img src="https://res.cloudinary.com/meierdeveloper/image/upload/v1687023348/Mindset/MindsetArticles_lwbrxe.webp" alt="Mindset Articles" />
      </div>
      <TitleSection title={"Artículos"} />
      <section className={styles.cardContainer}>
        <CardArticles
          imagen={"https://res.cloudinary.com/meierdeveloper/image/upload/v1687023348/Mindset/cardArticulos1_xzsd9l.webp"}
          title={"El poder de los datos"}
          texto={
            "A través de los datos podemos potenciar el crecimiento de negocios."
          }
          titlePopup={
            "El poder de los datos para potenciar el crecimiento de los negocios"
          }
          textoPopup={
            <TextoConEspacio
              texto={`La clave del crecimiento económico está en crear empresas de alto valor. Para lograr organizaciones competitivas hay que identificar las necesidades del cliente y aportar a nuestros productos y servicios un valor agregado. Si nuestro objetivo como dueño de un negocio es diferenciarnos del resto, pues necesariamente debemos acceder a los datos correctos, y usarlos a nuestro favor.

          En un entorno donde todas las empresas generan datos, indistintamente de su categoría y tamaño; algunas empresas han logrado entender su poder como activo estratégico. Una visión integral, eficiente y eficaz de los datos para los negocios, debe comprender en transformar los datos en información, y la información en conocimiento a fin de generar valor y lograr una diferencia competitiva en el mercado.
          
          El uso estratégico de los datos favorece una toma de decisiones objetiva y con una base sólida. Por lo tanto, tiene un impacto positivo y numerosos beneficios en la competitividad de las empresas.
          
          Entre los principales aportes que brindan los datos a los negocios están: 
          • Más capacidad para tomar decisiones. 
          • Mejora de procesos y eficiencia en la producción.
           • Ayuda a resolver los problemas internos y externos del negocio. 
          • Impulsa el crecimiento de las ventas. 
          • Proporciona una perspectiva más amplia de la empresa.
           • Permite predecir el futuro del negocio(análisis descriptivo, análisis predictivo). 
          • Fomenta la reducción de costes en procesos y acciones estratégicas.
           • Permite conocer los comportamientos de los consumidores. 
          • Ayuda a prevenir riesgos, mediante la detección oportuna de errores. 
          • Fomenta la creación de servicios innovadores en menos tiempo.
          
          En este sentido, es posible que los negocios puedan crear y desarrollar mejores estrategias de negocio, identificando así nuevas oportunidades y aumentando la eficacia empresarial. 
          
          Por otro lado, es cierto que en la región se empieza a entender la importancia de los datos como valor empresarial y estratégico para generar competitividad. Sin embargo, todos los negocios no tienen el presupuesto que requiere la implementación de una área de analítica de datos y/o adquisición de herramientas de Business Intelligence (BI).
          
          Ante esta realidad, existen opciones que permiten a los negocios obtener los beneficios de la analítica empresarial sin designar un gran presupuesto. Estos son los proyectos de inteligencia de negocios y análisis de datos, los cuales son alternativas sumamente viables para negocios pequeños y medianos, dado que, se implementan por un periodo de tiempo determinado e incluyen las áreas que requiera el negocio. Su implementación va a depender de los objetivos visionarios del negocio y la capacidad q u e tiene la empresa de adaptarse a los nuevos retos que requiere el mercado actual.
          
          Publicado en Revista “Networking: Revista Institucional del Colegio de Licenciados en administración de la Libertad”; Agosto 2022; Edición Nro. 08.`}
            />
          }
        />
        <CardArticles
          imagen={"https://res.cloudinary.com/meierdeveloper/image/upload/v1687023346/Mindset/cardArticulos2_frdthy.webp"}
          title={"El valor de la analítica"}
          texto={"Analítica como clave del éxito para las PYMES."}
          titlePopup={
            "Analítica comercial como creador de valor para las PYMES"
          }
          textoPopup={
            <TextoConEspacio
              texto={`En la actualidad, los datos se han convertido en los principales activos más valiosos para el crecimiento sostenible en una empresa. En plena era de la información, organizaciones (empresas e instituciones) multinacionales han implementado la analítica de negocios con la finalidad de mejorar la efectividad de sus operaciones y toma de decisiones para ser más eficaces. 

          Concepto clave 
          Entonces, ¿Cómo podemos definir la analítica de negocios? Como término general, se refiere a una variedad de procesos que incluyen el análisis, procesamiento, interpretación y utilización del conjunto de datos que obtenemos de los procesos de una empresa, para extraer conclusiones sobre la información que contienen. Asimismo, es un componente de la inteligencia de negocios y tiene como pilar la analítica de datos; dado que - se explota grandes volúmenes de datos - con la diferencia que están orientados a los usos y beneficios comerciales. La analítica comercial se enfoca en los datos históricos y actuales de la empresa, con la finalidad de comprender mejor el desempeño que la misma experimenta para pronosticar o predecir escenarios futuros. 
          
          Analítica de negocios y las Pymes 
          Las pequeñas y medianas empresas que implementan analítica no solo procesan y analizan datos, sino dirigen sus acciones hacia un en enfoque correcto, proporcionando a su negocio factores clave y estratégicos, ya que provee a los tomadores de decisiones información oportuna y confiable para responder a las situaciones adversas que puedan presentarse dentro y fuera de la empresa; con ello operar de manera más ágil y eficiente. Recordemos que lo que marca la diferenciación entre una y otra empresa, es la oportuna y correcta toma de decisiones.
          
          Analítica como clave de éxito para las Pymes 
          Cualquier Pyme puede aplicar analítica comercial, lo importante es saber exactamente lo que necesitamos y con qué datos contamos para emplearlos de la manera correcta. Las iniciativas de analítica comercial ayudan a los negocios [además de aumentar los ingresos], a mejorar la eficiencia operativa, optimizar las campañas de marketing, agilizar los esfuerzos de servicio al cliente, optimizar recursos (equipos, humanos y económicos), responder más rápidamente a las tendencias del mercado emergente y - sobre todo - obtener una ventaja competitiva sobre los rivales; que, sin duda, conlleva al objetivo general de aumentar el rendimiento empresarial.
          
          En el mes de la patria, y este año, mes del Bicentenario de nuestro querido Perú, nos sentimos más orgullosos que nunca de ser peruanos y ser libres; más aún de quienes tenemos el privilegio de vivir en esta hermosa tierra norteña de la región La Libertad, que gracias a heroísmo de grandes luchadores y con gallardía se dio el grito de libertad que le dio su nombre; como un humilde homenaje a ello, presentamos a continuación una infografía de cómo es que llega nuestra región al año del bicentenario de nuestra independencia nacional
          
          Publicado en “Publicado en Revista “Networking: Revista Institucional del Colegio de Licenciados en administración de la Libertad”; p.13-14; Julio 2021; Edición Nro. 06 Bicentenario.`}
            />
          }
        />
        <CardArticles
          imagen={"https://res.cloudinary.com/meierdeveloper/image/upload/v1687023346/Mindset/cardArticulos3_v4wu2t.webp"}
          title={"Marketing Analytics"}
          texto={"Una estrategia basada en información."}
          titlePopup={
            "Marketing Analytics: Una estrategia basada en información"
          }
          textoPopup={
            <TextoConEspacio
              texto={`La inteligencia de negocios implica recolectar, almacenar, procesar, analizar e interpretar la información necesaria para la toma de decisiones de una empresa, términos como analítica comercial o analítica de datos están muy presentes en el desarrollo de estrategias basadas en datos. El conocimiento que proveen los datos para las empresas ha pasado a convertirse en su nueva “moneda de cambio”. Las empresas con un enfoque analítico no solo procesan y analizan sus datos, sino que dirigen sus actividades hacia un enfoque, y centran sus recursos en generar estrategias de valor para lograr una diferencia competitiva. En este contexto, saber interpretar los datos es el gran desafío en la era del Big Data, y cada vez más, se espera que los especialistas en marketing utilicen la analítica para generar estrategias y tomar decisiones basadas en datos.

          Concepto clave
          El Marketing Analytics, integra la analítica (procedente de la aplicación de inteligencia de negocios, analítica comercial y/o analítica de datos) y la evolución del marketing estratégico, dado que, ofrece un análisis global de todas las actividades de la empresa, sus estrategias, sus resultados y centra sus decisiones en el conocimiento obtenido del análisis de los datos de mayor calidad posible. Además, va ligado al marketing digital [ya que gran parte de esta analítica puede centrarse en aquellos datos procedentes de fuentes digitales (Internet)] y al marketing relacional; dado que, tiene un enfoque centrado en el cliente.
          
          Como definición “El Marketing Analytics es la disciplina que utiliza los datos disponibles para evaluar las estrategias y poder tomar las decisiones más adecuadas para optimizar los resultados de negocio”.
          
          En tal sentido, permite a los especialistas en marketing medir, conocer sobre las preferencias de los clientes o tendencias del mercado, determinar el presupuesto de las campañas en diferentes frentes; gestionar y analizar el rendimiento de sus acciones y estrategias para maximizar y optimizar el Retorno de la Inversión (ROI). Por lo cual, su impacto va más allá de las aplicaciones de ventas y la generación de oportunidades de ventas, lo que distingue al marketing analytics de otros análisis de negocios es su enfoque en la retroalimentación real del mercado.
          
          “Independientemente del tamaño de la empresa, el marketing analytics pueden proporcionar datos invaluables que pueden ayudar a impulsar el crecimiento de la empresa. Siempre que las analíticas de marketing se seleccionen cuidadosamente y se implementen correctamente, los datos recopilados pueden ayudar a que una empresa de cualquier tamaño crezca, mejore su rentabilidad, optimice sus recursos y mejore la efectividad de sus estrategias de marketing.”
          Publicación propia de Mindset.`}
            />
          }
        />
      </section>
    </section>
  );
};

export default Articles;
