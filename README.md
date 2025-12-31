# Prueba Técnica Frontend 

Este repositorio contiene la solución a la prueba técnica Frontend solicitada por Lógika.  
La aplicación fue desarrollada utilizando React y cumple con los requerimientos funcionales descritos en el documento de la prueba.

---

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio.
2. Instalar dependencias:

npm install

3. Ejecutar el proyecto en modo desarrollo:

npm run dev

4. Acceder desde el navegador a:

http://localhost:5173

---

## 🎯 Objetivo de la prueba

Desarrollar una aplicación Frontend que permita:

- Autenticarse mediante un login.
- Visualizar un listado paginado de acciones.
- Crear nuevas acciones mediante un formulario.
- Consumir correctamente los endpoints proporcionados.
- Manejar estados de carga, éxito y error.
- Implementar una interfaz basada en el diseño entregado en Figma.

---

## 🧠 Decisiones técnicas

- Se utilizó React con TypeScript para mejorar el tipado y la mantenibilidad.
- Se implementó React Router DOM para la navegación entre Login y Dashboard.
- La comunicación con la API se realiza mediante funciones personalizadas usando `fetch`.
- El token de autenticación se almacena en `localStorage`.
- No se utilizó Context API ni hooks personalizados porque no eran estrictamente necesarios para el alcance de la prueba.
- Los estilos se realizaron en CSS puro, priorizando claridad y similitud visual con el diseño de Figma.

---

## 🔐 Autenticación

El flujo de autenticación se realiza mediante un formulario de login.

### Comportamiento esperado
- Validar que los campos estén completos.
- Deshabilitar el botón si los campos están vacíos.
- Mostrar estado de carga mientras se realiza la petición.
- Mostrar mensaje de error si las credenciales son incorrectas.
- Guardar el token recibido y redirigir al Dashboard.

### Resultado obtenido
- El login funciona correctamente.
- Se manejan errores y estados de carga.
- La redirección ocurre solo cuando la autenticación es exitosa.

---

## 📊 Dashboard – Listado de acciones

El Dashboard muestra un listado paginado de acciones obtenidas desde la API.

### Comportamiento esperado
- Mostrar acciones en una tabla.
- Implementar paginación usando `pageNumber` y `pageSize`.
- Mostrar estados de carga y error.
- No permitir avanzar páginas si no hay más resultados.

### Resultado obtenido
- Las acciones se muestran correctamente.
- La paginación funciona según lo esperado.
- Se manejan correctamente los estados de loading y error.

---

## ➕ Crear acción

El usuario puede crear una nueva acción mediante un modal.

### Comportamiento esperado
- Validar campos obligatorios.
- Deshabilitar el botón “Crear” si el formulario está incompleto.
- Mostrar mensajes de error si la acción falla.
- Mostrar confirmación si la acción se crea exitosamente.
- Refrescar el listado automáticamente.

### Resultado obtenido
- El formulario valida correctamente.
- El botón se habilita y deshabilita según el estado del formulario.
- La acción se crea y aparece en el listado.
- El modal se cierra automáticamente tras una creación exitosa.

---

## 🎨 Interfaz de usuario

- El diseño está basado en el archivo de Figma entregado.
- El login está centrado y contenido en una tarjeta.
- El Dashboard incluye header y sidebar.
- Los botones y tablas tienen estados visuales claros.
- El diseño no es pixel-perfect, pero es fiel a la intención del diseño original.

---

## ⚠️ Manejo de errores

- Errores de login muestran mensaje visible al usuario.
- Errores al cargar acciones muestran feedback visual.
- Errores al crear acciones muestran mensaje en el modal.
- Los botones se bloquean durante operaciones en curso.