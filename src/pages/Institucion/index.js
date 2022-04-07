import React from 'react'
import Helmet from 'react-helmet'
import institucion from './institucion.module.css'
import styles from 'styles.module.css'

function Institucion() {
  return (
    <>
      <Helmet>
        <title>Institución | EETP N° 477</title>
      </Helmet>
      <h1 className={styles.title}>Reseña Histórica</h1>
      <h2 className={institucion.subTitle}>
        Escuela de Educación Técnico Profesional N° 477 “Combate de San Lorenzo”
      </h2>
      <p className={styles.p}>
        Cuando analizamos la crisis económica de los años 1929-30, llama la
        atención la similitud con que se expresa en distintas latitudes,
        produciendo similares consecuencias. La recesión estalló en los Estados
        Unidos en 1929 y rápidamente se expandió por todo el mundo. Esta crisis
        no amainó hasta promediar la década y aun así, nunca de manera
        definitiva. Su propagación, sacudió al mundo con una intensidad sin
        precedentes.
      </p>
      <p className={styles.p}>
        Entonces cada país buscó su autonomía, surgiendo el nacionalismo
        económico y el deseo de independencia política, que unido a la penuria
        por la falta de divisas y a la preparación para la guerra, colaboraron
        en la tarea de industrializar a los países que aún no lo estaban (como
        Argentina) y de impulsar como contrapartida a los industrializados al
        autoabastecimiento de productos alimenticios y de materias primas. De
        esto resultó la decadencia inexorable del comercio internacional y el
        aislamiento de los países.
      </p>
      <p className={styles.p}>
        Junto a la aceleración de la industrialización nacen las ciudades
        masificadas al compás de las nuevas radicaciones industriales, como es
        el caso de nuestra histórica ciudad de San Lorenzo, transformándose en
        un polo industrial significativo en la región y el país. A partir de
        entonces nuestra zona giró en torno al empuje de San Lorenzo, verdadero
        centro socio cultural.
      </p>
      <p className={styles.p}>
        Quienes proyectaban la instalación de fábricas, tanto en la esfera
        oficial como privada, buscaban una infraestructura favorable: buena
        provisión de agua y energía, ágiles transportes y comunicaciones,
        esperaban encontrar un aparato eficaz para la comercialización, mano de
        obra idónea y capacitada, etc. El lugar tenía todo eso, en parte
        naturalmente pero en parte por obra de sus habitantes, como por ejemplo
        la creación y desarrollo de nuestra escuela.
      </p>
      <p className={styles.p}>
        Así tomó cuerpo, entonces, la necesidad de capacitar a la población para
        las nuevas exigencias del trabajo y muy especialmente a las jóvenes
        generaciones.
      </p>
      <p className={styles.p}>
        En 1936 se ejecuta el proyecto de crear una “escuela de artes y
        oficios”, dentro de la jurisdicción y presupuesto provincial. A partir
        del 12 de mayo de ese año ocupó una vieja casona que sería por décadas
        su sede habitual (Av.San Martín y Ricchieri). Los comienzos fueron muy
        pobres, sin herramientas ni materiales para las clases prácticas.
      </p>
      <p className={styles.p}>
        Luego se produjo la fusión con la Escuela Industrial General San Martín,
        que era una escuela particular, gratuita y para señoritas, fundada en el
        año 1933. Nuestra escuela pasaría a llamarse “Escuela de Artes y Oficios
        y del Hogar”, modificándose luego al de “Escuela de Industrias
        Regionales Sargento Cabral”.
      </p>
      <p className={styles.p}>
        Entre los años 1947-48 pasa a depender del presupuesto nacional,
        denominándose “Escuela fábrica de la Nación N°29”, con mejores
        posibilidades teóricas y prácticas en un nivel superior.
      </p>
      <p className={styles.p}>
        En la década del ´60 recibirá otro nombre: “Escuela Nacional de
        Educación Técnica N°1, y con su traslado al actual edificio en el norte
        de la ciudad, en el año 1973, y agregará el nombre de “Combate de San
        Lorenzo”.
      </p>
      <p className={styles.p}>
        Por las características de la Institución y su ubicación estratégica
        concurren a la misma alumnos de la ciudad y, también, de localidades
        vecinas, tales como Ricardone, Granadero Baigorria, Capitán Bermúdez,
        Fray Luis Beltrán, Puerto General San Martín, Timbúes, Oliveros, Aldao;
        todos ellos con el objetivo de adquirir los conocimientos necesarios
        para proseguir estudios superiores y/o emplearse en talleres y fábricas
        del cordón industrial.
      </p>
      <p className={styles.p}>
        Así, en este siglo XXI, la Escuela de Educación Técnico Profesional N°
        477 “Combate de San Lorenzo”, asume, como lo hiciera desde sus orígenes,
        el compromiso con los jóvenes de la región, de brindarles posibilidades
        de cara al futuro. Con tres terminalidades (Equipos e Instalaciones
        Electromecánicas, Electrónica y Energías Renovables) afronta el desafío
        de satisfacer las demandas de formación e inserción en el sector
        productivo de una región en continuo crecimiento.
      </p>
      <img
        src="http://escuelatecnica477.com/wp-content/uploads/2020/11/resena-historica-1-1024x712.png"
        alt="Foto de la escuela en el año 1936 y en el año 2016"
        className={institucion.img}
        loading="lazy"
      />
    </>
  )
}

export default Institucion
