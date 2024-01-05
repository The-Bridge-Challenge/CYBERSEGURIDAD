# Guía de Ciberseguridad - OWASP Top 10 para el MVP

## Introducción
Esta guía detalla cómo abordar las vulnerabilidades del OWASP Top 10 de 2021 en el proyecto MVP (Producto Mínimo Viable).

## Detalles de Implementación

### 1. Broken Access Control (A01)
Configurar controles de acceso para gestionar lo que los usuarios pueden hacer después de iniciar sesión. Esto incluye:
- Configurar listas de control de acceso y roles en el backend. Por ejemplo, asegurar que solo los administradores puedan acceder a las funciones de administración de usuarios.
- Verificar permisos en funciones críticas del servidor. Por ejemplo, confirmar que solo los usuarios con permisos puedan editar o borrar registros en la base de datos.

### 2. Cryptographic Failures (A02)
Proteger los datos sensibles mediante cifrado adecuado. Esto implica:
- Utilizar HTTPS en todas las comunicaciones.
- Cifrar todos los datos sensibles almacenados, como contraseñas y datos personales.

### 3. Injection (A03)
Prevenir ataques de inyección, como SQL o XSS, mediante:
- Uso de consultas parametrizadas y ORM/ODM para bases de datos. Por ejemplo, utilizar Sequelize para consultas SQL seguras.
- Sanitización de todas las entradas de usuario. Por ejemplo, limpiar inputs de usuario en formularios web para prevenir XSS.

### 4. Insecure Design (A04)
Incorporar prácticas de diseño seguro y modelado de amenazas desde el inicio:
- Realizar modelado de amenazas en fases tempranas.
- Aplicar principios de diseño seguro. Por ejemplo, seguir el principio de menor privilegio al asignar permisos de usuario.

### 5. Security Misconfiguration (A05)
Evitar configuraciones inseguras en todos los niveles del software:
- Revisar y asegurar la configuración predeterminada.
- Mantener el software actualizado y parcheado.
- (Si da tiempo) Automatizar la configuración de seguridad.

### 6. Vulnerable and Outdated Components (A06)
Mantener actualizados los componentes para evitar vulnerabilidades:
- Utilizar herramientas para gestionar y actualizar dependencias. Por ejemplo, Dependabot en GitHub para actualizaciones automáticas.
- Revisar regularmente las librerías y componentes. Por ejemplo, chequear el estado de seguridad de las librerías de Node.js usadas.

### 7. Identification and Authentication Failures (A07)
Fortalecer los procesos de autenticación e identificación:
- Implementar autenticación robusta, incluyendo, si es posible, autenticación multifactor.
- Asegurar la gestión segura de contraseñas y sesiones.

### 8. Software and Data Integrity Failures (A08)
Verificar la integridad del software y los datos, especialmente en entornos de CI/CD:
- Usar firmas digitales o hashes para verificar la integridad.
- Asegurar que las actualizaciones y cambios de datos sean legítimos y autorizados.

### 9. Security Logging and Monitoring Failures (A09)
Establecer un sistema de registro y monitoreo para detectar y responder a incidentes de seguridad:
- Registrar todas las actividades críticas.
- Monitorizar los registros en busca de actividades sospechosas.
- (Si da tiempo) Realizar pruebas de penetración básicas.

### 10. Server-Side Request Forgery (A10)
Proteger contra la falsificación de solicitudes del lado del servidor:
- Validar y verificar todas las solicitudes del servidor.
- Restringir las solicitudes a recursos de confianza y externos.

## Nota Final
Las actividades marcadas con "Si da tiempo" son para considerar en etapas finales del proyecto.
