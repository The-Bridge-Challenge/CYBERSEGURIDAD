# Guía de Cloud y DevOps

## Tecnologías y Herramientas
- **Plataforma Cloud:** Google Cloud Platform (GCP)
- **Infraestructura como Código (IaC):** Cloud Build
- **CI/CD:** GitHub para control de versiones, Docker para contenedores
- **Computación en la Nube:** Cloud Run para ejecutar contenedores
- **Sistema Operativo en la Nube:** Ubuntu
- **Base de Datos en la Nube:** Cloud SQL para SQL

## Desarrollo y Directrices Específicas
- **Configuración de la Infraestructura en la Nube y Automatización de Despliegue:**
  - Configurar la infraestructura de la nube con Cloud Build y GCP.
  - Automatizar el aprovisionamiento y la gestión de la infraestructura mediante código (Infrastructure as Code).
  - Utilizar técnicas de automatización para configuración y actualización.

- **Selección y Gestión de la Cuenta de Cloud:**
  - Elegir la cuenta de Cloud asociada al grupo del proyecto.
  - Gestionar la gratuidad para el tiempo que dure el desafío de tripulaciones.
  - Establecer niveles de acceso y edición de recursos para los miembros del equipo.

- **Flujos de Trabajo CI/CD:**
  - Establecer flujos de trabajo de CI/CD con GitHub Actions y Docker para automatizar las pruebas y el despliegue.
  - Definir la arquitectura de CI según el tipo y lenguaje de la aplicación a desarrollar.
  - Definir la arquitectura de CD según el objetivo (Solo Dev, Dev y Prod).

- **Despliegue de Infraestructura en la Nube:**
  - Diseñar una infraestructura en la nube utilizando servicios de GCP.
  - Documentar adecuadamente la arquitectura en las herramientas correspondientes.

- **Utilización de Cloud Run:**
  - Desplegar y gestionar contenedores utilizando Cloud Run para un enfoque gestionado y escalable.

- **Administración de Base de Datos:**
  - Administrar la base de datos SQL mediante Cloud SQL, enfocándose en la seguridad y la integridad de los datos.

- **Monitorización y Gestión de Logs:**
  - Implementar una solución de monitorización para que los desarrolladores puedan revisar el estado de su solución desplegada en cualquier momento.

- **Seguridad y Cumplimiento:**
  - Asegurar la infraestructura y la aplicación mediante buenas prácticas de seguridad.
  - Prevenir el uso indebido tanto por elementos externos como internos de la organización.



# Guía de Desarrollo Fullstack

## Tecnologías y Herramientas
- **Lenguaje de Programación:** JavaScript
- **Backend:** Node.js con Express.js
- **Frontend:** React
- **ORM para SQL:** Sequelize para interactuar con Cloud SQL

## Desarrollo y Directrices Específicas
- **Arquitectura de la Solución:**
  - Crear y documentar la arquitectura de la solución, asegurando la implementación efectiva de la misma.
  - Trabajar lado a lado con el equipo de Ciberseguridad para determinar el nivel de seguridad adecuado. ( Nota: De que lado? ~~del que tengo aqui colg~~ cordinarse con ciberseguridad para que puedan revisar el código y evitar vulnerabilidades) 
  
- **Desarrollo Frontend y Backend:**
  - Desarrollar el frontend de la aplicación utilizando React, enfocándose en un diseño mobile-first y SPA (single page application).
  - Crear y mantener una API RESTful con Express.js, que será alojada en Cloud Run, para el manejo del backend.
  - Asegurar que la aplicación no requiera recarga de página y que solo cargue y renderice los contenidos necesarios con cada cambio de endpoint.

- **Selección de Base de Datos:**
  - Elegir entre base de datos SQL o NoSQL según el modelo de datos requerido y la compatibilidad con los resultados del trabajo de Data.
  - Integrar Sequelize para la manipulación de la base de datos SQL en Cloud SQL, si se elige SQL como base de datos.

- **Uso de Recursos de Terceros:**
  - Utilizar recursos de terceros (librerías, paquetes npm, etc.) para optimizar el tiempo de desarrollo y entrega.

- **Gestión de Control de Versiones:**
  - Manejar el control de versiones del proyecto utilizando GitHub desde el inicio del proyecto.

- **Documentación y Pruebas:**
  - Gestionar la documentación y pruebas del proyecto hasta donde el tiempo lo permita.
  - Documentar adecuadamente todas las fases y componentes del desarrollo.

- **Colaboración y Presentación:**
  - Trabajar en colaboración con otros equipos, especialmente con UX, para una implementación y presentación efectiva del proyecto.

## Documentación
- Mantener la documentación actualizada a lo largo de todo el proceso de desarrollo, cubriendo aspectos técnicos y decisiones tomadas.
- Preparar material para la presentación del proyecto, destacando características clave y decisiones de diseño.
