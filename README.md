# Ciberseguridad para el Proyecto

## Contexto y Análisis
- Comprender en detalle el contexto funcional de la aplicación para identificar elementos sensibles y potencialmente vulnerables.
- Determinar el impacto técnico y de negocio de posibles brechas de seguridad.
- Asegurar que el diseño sigue las buenas prácticas del Secure Software Development Life Cycle (SSDLC).

## Hardening y Configuración de Seguridad
- Realizar hardening de los sistemas operativos Ubuntu en la nube y de los aplicativos utilizados, como Node.js y React.
- Mantener actualizadas las configuraciones de seguridad y aplicar parches de forma regular.
- Proponer y documentar una infraestructura de despliegue escalable, modular y extensible.

## Autenticación y Control de Acceso
- Implementar controles de acceso robustos y autenticación multifactor.
- Realizar Identity Management Testing para asegurar la gestión adecuada de identidades y accesos.

## Protección de Datos
- Cifrar los datos sensibles, tanto en tránsito como en reposo.
- Implementar y probar medidas para la validación de parámetros de entrada y manejo de errores.

## Backup y Recuperación
- Establecer y documentar una estrategia de backup, incluyendo cálculos de costes y periodos de conservación.
- Analizar la sensibilidad de los datos almacenados.

## Pruebas de Seguridad
- Utilizar herramientas de análisis de código estático durante el desarrollo.
- Realizar pruebas básicas de pentesting al finalizar el desarrollo.
- Incluir pruebas específicas de:
  1. Information Gathering.
  2. Configuration and Deployment Management Testing.
  3. Identity Management Testing.
  4. Authentication Testing.
  5. Authorization Testing.
  6. Session Management Testing.
  7. Input Validation Testing.
  8. Error Handling Testing.
  9. Testing for Weak Cryptography.
  10. Business Logic Testing.
  11. Client-side Testing.

## Cumplimiento Normativo
- Asegurar el cumplimiento con normativas como GDPR.
- Documentar todos los procesos y políticas de seguridad implementados.
