# 🚀 **Desafío de Tripulaciones - Proyecto Integrado**

## **Introducción** 🌟

Bienvenido a la emocionante travesía de las Tripulaciones en The Bridge. A lo largo de este proyecto integrado, las distintas verticales - **Ciberseguridad** 🛡️, **Data Science** 📊, **Fullstack** 💻, **Marketing** 📈 y **UX/UI** 🎨 - han colaborado intensamente para crear un producto integral que aborda desafíos desde múltiples perspectivas.

## **Ciberseguridad 🛡️**

### **Guía de Verticales** 📚
Descubre las tecnologías y herramientas utilizadas en cada vertical en la [Guía de Verticales](README_Dependencies/Guia_Verticales_Simple.md). ¡No te pierdas la versión extendida para los verdaderos "ratas"! 🐀

### **Calendario de Actividades 📅**
Consulta el [Calendario de Ciberseguridad](README_Dependencies/Calendario.md) para conocer la planificación detallada de tareas y responsabilidades. ⏳

### **Contexto y Análisis de Riesgos 🕵️**
- Analizamos el contexto funcional de la aplicación identificando elementos críticos y susceptibles a ataques.
- Evaluamos el impacto técnico y de negocio de posibles brechas de seguridad.

### **Hardening y Configuración de Seguridad 🔐**
- Aplicamos hardening en sistemas operativos y aplicativos.
- Diseñamos una infraestructura de TI escalable y segura.

### **OWASP Top 10 y Pruebas de Seguridad 🌐**
Utilizamos la metodología del OWASP Top 10 para abordar las principales vulnerabilidades web. ¡Consulta nuestra [Guía de Ciberseguridad OWASP Top 10](README_Dependencies/OWASP10_Guide.md) para detalles aplicados a nuestro proyecto!

Ejecutamos pruebas específicas de seguridad, incluyendo:
- Information Gathering 🕵️
- Configuration and Deployment Management Testing 🔧
- Identity Management Testing 👤
- Authentication Testing 🔑
- Authorization Testing 🔒
- Session Management Testing ⏲️
- Input Validation Testing ✅
- Error Handling Testing 🚫
- Testing for Weak Cryptography 🔓
- Business Logic Testing 💼
- Client-side Testing 💻

### **Autenticación y Control de Acceso 🚪**
Implementamos autenticación multifactor y robustos controles de acceso.

### **Protección de Datos y Cumplimiento Normativo 🛡️**
- Ciframos datos sensibles en tránsito y en reposo.
- Garantizamos el cumplimiento de normativas como GDPR.

### **Backup y Recuperación de Datos 💾**
Establecimos una estrategia de backup con periodos de conservación definidos.

### **Documentación y Mejora Continua 📝**
- Documentamos políticas y procedimientos de seguridad.
- Mantenemos un enfoque de mejora continua en la seguridad del proyecto.
## **Data Science 📊**

### **Alcance del Proyecto 🎯**
- Creamos una base de datos 📚 con PostgreSQL alojada en Google BigQuery 🌐.
- Normalizamos tablas para mejorar la escalabilidad 🔝.
- Implementamos la ingesta automática 🔄 de datos desde el backend.
- Realizamos Web Scraping 🕸️ de la web de Candela para obtener datos automáticamente 🤖.

### **Fases del Proyecto 📄**
- Establecimos un modelo lógico 🧠 para conectar las tablas de la BBDD.
- Creación de tablas mediante queries SQL 💻. ¡Mira el [archivo de queries](./BBDD/notebooks/queries_SQL.ipynb) para detalles!

### **Diagrama Entidad-Relación 🌐**
- Desarrollamos un diagrama E-R 📈 para visualizar la estructura de la base de datos.

### **Web Scraping de Candela 🕸️**
- Implementamos un [archivo de aplicación](./webscrapping/app/src/app.py) para realizar Web Scraping.
- Automatizamos la entrada de datos en la tabla de personalización de precios 💲.

## **Fullstack 🌐**

### **Proyecto Final - Comparador de Precios Online para Candela 💰**
- Desarrollamos un comparador de precios online 🛒 con una calculadora integrada para la empresa Candela.
- Utilizamos una arquitectura MVC 🖥️ y un modelo de negocio B2B 🤝.
- Frontend desarrollado en React ⚛️, Backend en Node.js 🟢 con Sequelize como ORM.
- Persistencia de datos en base de datos PostgreSQL 📊.

### **Funcionalidades Actuales 🔍**
1. **Comparador de Precios:** Permite a los usuarios comparar precios de productos de diferentes proveedores 🔎.
2. **Calculadora Integrada:** Facilita a los usuarios realizar cálculos relacionados con los precios y cantidades de productos 🧮.
3. **Persistencia de Datos:** La información se almacena de manera segura en PostgreSQL utilizando Sequelize 🗄️.

### **Acceso a la Aplicación 🌍**
Visita [este enlace](https://cloudbuilds-client-folgybvrpq-ew.a.run.app/) para acceder a la aplicación (¡solicita las credenciales de acceso a nuestros devs! 🔑).

### **Desarrolladores 👩‍💻👨‍💻**
- Javier 🧑
- Elena 👩
- Carlos 🧑
- Raúl 🧑

¡Gracias por contribuir al desarrollo de este proyecto! Siéntete libre de proponer nuevas funciones, reportar problemas o contribuir con mejoras ✨.
