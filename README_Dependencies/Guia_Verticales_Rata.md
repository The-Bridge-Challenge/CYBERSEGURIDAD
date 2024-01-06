# ☁️ Guía de Cloud y DevOps 🛠️

---

## 🛠️ Tecnologías y Herramientas
- **Plataforma Cloud:** Google Cloud Platform (GCP) ☁️
- **Infraestructura como Código (IaC):** Cloud Build 🏗️
- **CI/CD:** GitHub para control de versiones 🔄, Docker 🐳 para contenedores
- **Computación en la Nube:** Cloud Run para ejecutar contenedores 🚀
- **Sistema Operativo en la Nube:** Ubuntu 🐧
- **Base de Datos en la Nube:** Cloud SQL para SQL 🗄️

---

## 📝 Desarrollo y Directrices Específicas

### 🌐 Configuración de la Infraestructura en la Nube y Automatización de Despliegue
- Configurar la **infraestructura de la nube** con Cloud Build y GCP.
- Automatizar el **aprovisionamiento y la gestión de la infraestructura** mediante código (Infrastructure as Code).
- Utilizar técnicas de **automatización para configuración y actualización**.

### 🛠️ Selección y Gestión de la Cuenta de Cloud
- Elegir **cuenta de Cloud asociada al grupo del proyecto**.
- Gestionar la **gratuidad** para el tiempo que dure el desafío de tripulaciones.
- Establecer **niveles de acceso y edición de recursos** para los miembros del equipo.

### 💻 Flujos de Trabajo CI/CD
- Establecer **flujos de trabajo de CI/CD** con GitHub Actions y Docker para automatizar las pruebas y el despliegue.
- Definir la **arquitectura de CI** según el tipo y lenguaje de la aplicación a desarrollar.
- Definir la **arquitectura de CD** según el objetivo (Solo Dev, Dev y Prod).

### 🌟 Despliegue de Infraestructura en la Nube
- Diseñar una **infraestructura en la nube** utilizando servicios de GCP.
- Documentar **adecuadamente la arquitectura** en las herramientas correspondientes.

### 🚀 Utilización de Cloud Run
- Desplegar y gestionar contenedores utilizando **Cloud Run** para un enfoque gestionado y escalable.

### 🗄️ Administración de Base de Datos
- Administrar la **base de datos SQL** mediante Cloud SQL, enfocándose en la seguridad y la integridad de los datos.

### 🔍 Monitorización y Gestión de Logs
- Implementar una **solución de monitorización** para que los desarrolladores puedan revisar el estado de su solución desplegada en cualquier momento.

### 🛡️ Seguridad y Cumplimiento
- Asegurar la **infraestructura y la aplicación** mediante buenas prácticas de seguridad.
- Prevenir el **uso indebido** tanto por elementos externos como internos de la organización.

---




# 🌐 Guía de Desarrollo Fullstack

---

## 🛠️ Tecnologías y Herramientas
- **📜 Lenguaje de Programación:** JavaScript
- **🔙 Backend:** Node.js con Express.js
- **🖥️ Frontend:** React
- **🗃️ ORM para SQL:** Sequelize para interactuar con Cloud SQL

---

## 📝 Desarrollo y Directrices Específicas

### 🏗️ Arquitectura de la Solución
- Crear y documentar la arquitectura de la solución, asegurando la implementación efectiva de la misma.
- Trabajar lado a lado con el equipo de Ciberseguridad para determinar el nivel de seguridad adecuado.

### 💻 Desarrollo Frontend y Backend
- Desarrollar el frontend con React, enfocado en diseño mobile-first y SPA (single page application).
- Crear y mantener una API RESTful con Express.js, alojada en Cloud Run, para el backend.
- Asegurar que la aplicación cargue y renderice solo los contenidos necesarios con cada cambio de endpoint.

### 🗄️ Selección de Base de Datos
- Elegir entre base de datos SQL o NoSQL según el modelo de datos y la compatibilidad con los resultados del trabajo de Data.
- Integrar Sequelize para la manipulación de la base de datos SQL en Cloud SQL.

### 📦 Uso de Recursos de Terceros
- Utilizar recursos de terceros (librerías, paquetes npm, etc.) para optimizar el tiempo de desarrollo y entrega.

### 🔁 Gestión de Control de Versiones
- Manejar el control de versiones con GitHub desde el inicio del proyecto.

### 📊 Documentación y Pruebas
- Gestionar la documentación y pruebas del proyecto en la medida que el tiempo lo permita.
- Documentar todas las fases y componentes del desarrollo.

### 🤝 Colaboración y Presentación
- Trabajar en colaboración con otros equipos, especialmente UX, para una implementación efectiva del proyecto.

---

## 📄 Documentación
- Mantener la documentación actualizada durante todo el proceso de desarrollo.
- Preparar material para la presentación del proyecto, resaltando características clave y decisiones de diseño.

---



# 📊 Guía de Data Science y Análisis

---

## 🛠️ Tecnologías y Herramientas
- **🌊 Data Lake y Almacenamiento de Datos Masivos:** BigQuery
- **📈 Visualización de Datos:** Power BI, conectado a BigQuery
- **🔍 Webscraping:** Herramientas específicas para extraer datos de la intranet de Candela

---

## 📝 Desarrollo y Directrices Específicas
### 🎯 Definición del Alcance del Proyecto
- Generar diagramas para definir el alcance del proyecto en lo que a Datos se refiere, incluyendo funcionalidad e interfaz de entrega.

### ⚙️ Flujo de Trabajo y Gestión de Versiones
- Elegir el flujo de trabajo utilizando CI/CD con Git para la gestión de versiones.

### 🔎 Investigación y Extracción de Datos
- Identificar portales principales para la obtención de datos necesarios.
- Extraer datos mediante APIs, webscraping, etc., y almacenarlos en bases de datos SQL/No-SQL o ficheros planos.

### 📊 Análisis y Visualización de Datos
- Determinar y explicar las características más relevantes del problema.
- Analizar, interpretar y visualizar los datos utilizando BigQuery y Power BI.
- Destacar patrones y validar hipótesis mediante visualización de datos.

### 🤖 Modelos de Machine Learning
- Evaluar escenarios para modelos de ML como problemas supervisados, no supervisados, etc.
- Desarrollar o plantear el desarrollo de un modelo de ML con los datos empleados.

### 📈 Monitorización de Datos y Rendimiento de Modelos
- Establecer criterios para monitorizar los datos y el rendimiento de los modelos.
- Definir métricas asociadas y datos para el seguimiento.

### 🔗 APIs para Gestión y Monitorización
- Crear APIs para la gestión de la base de datos o modelo y para la monitorización del uso de datos y/o modelo.

### 🚀 Implementación de Webscraping y BigQuery
- Utilizar técnicas de webscraping para enriquecer los datos del ERP.
- Emplear BigQuery para el procesamiento y análisis de grandes volúmenes de datos.
- Conectar BigQuery con Power BI para la creación de dashboards y reportes analíticos.

---

## 📄 Documentación
- Mantener una documentación detallada de todas las fases del proyecto, incluyendo análisis, decisiones técnicas y resultados obtenidos.
- Documentar los procesos de investigación, extracción de datos, análisis, modelado de ML y monitorización.

---





# 🎨 Guía de Diseño de Producto Digital UX/UI

---

## 🕵️ UX: Research y Estrategia
- Realizar investigación para definir el alcance del producto digital y su target principal.
- Identificar el problema o necesidad central del tema.
- Ejecutar un benchmark y identificar oportunidades viables, acotándolas con el cliente.
- Utilizar el canvas de negocio para identificar el modelo de negocio y redactar la propuesta de valor.
- Crear el user persona y mapear los customer journeys, así como otras herramientas para entender a los usuarios.
- Idear y sintetizar las funcionalidades del producto digital mediante técnicas de generación de ideas.

---

## 📐 Conceptualización de UX
- Diseñar el wireflow (combinación de wireframes y flowchart) y validarlo con el equipo.

---

## 💻 UI: Diseño de Interfaz
- Diseñar la interfaz, incluyendo el estilo visual y la imagen de marca, de forma comprensible para el equipo.
- Crear un sistema de diseño que abarque:
  - Paletas de colores.
  - Tipografías.
  - Componentes con variantes, utilizando técnicas como autolayout y constrains.
- Elaborar un prototipo navegable con efectos de animación como overlay y transiciones de smart animate.
- Presentar y argumentar las pantallas diseñadas.

---

## 🔍 Desarrollo y Directrices Específicas
- Investigar y definir la experiencia de usuario, mapeando el viaje del cliente y definiendo personas.
- Diseñar wireframes, mockups y prototipos funcionales para la aplicación.
- Realizar pruebas de usabilidad para validar y mejorar la interfaz de usuario.

---

## 📄 Documentación
- Mantener documentación detallada de todo el proceso de diseño, desde la investigación hasta la conceptualización y diseño de la interfaz.
- Documentar claramente las decisiones de diseño y las justificaciones detrás de la elección de estilos visuales, tipografías y componentes de la interfaz.

---



# 📣 Guía de Marketing Digital

---

## 📊 Estrategia y Análisis
- Realizar un análisis del sector/mercado para identificar la situación actual, competidores y soluciones sustitutivas.
- Investigar y definir los buyer/user personas, customer journey map, intereses y comportamiento online.

---

## 🚀 Desarrollo de la Propuesta de Valor
- Construir la propuesta de valor y mensajes del producto/servicio.
- Integrar la propuesta de valor en copies orientados (gain creators / pain relievers).

---

## 💼 Modelo de Negocio y Branding
- Definir el modelo de negocio junto al equipo, basándose en el análisis y la propuesta de valor.
- Desarrollar el naming y branding, incluyendo personalidad de marca, tono de comunicación y plan de contenidos.

---

## 🎯 Estrategia de Captación y CRM
- Identificar datos y eventos clave para seguimiento en la aplicación (plan de tracking mínimo).
- Crear una estrategia de captación de usuarios/clientes, con un plan de medios detallado.
- Elaborar un plan de contacto para gestionar el CRM.

---

## 🧪 Testing y Optimización
- Sugerir pruebas de testing para mejorar la Conversión en las principales landing pages de conversión.

---

## 🌟 Directrices Específicas de Marketing Digital
- Desarrollar una estrategia de marketing digital enfocada en atraer a nuevos asesores energéticos.
- Crear y gestionar campañas de publicidad online.
- Analizar y optimizar el rendimiento de las campañas según los resultados obtenidos.

---

## 📄 Documentación
- Documentar todas las estrategias, planes y análisis realizados.
- Mantener registros de las campañas y sus resultados para referencias futuras y mejoras continuas.

---





