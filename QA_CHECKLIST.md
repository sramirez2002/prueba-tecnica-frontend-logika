# QA Checklist – Prueba Técnica Frontend

Este documento describe las pruebas funcionales realizadas sobre la aplicación desarrollada para la prueba técnica Frontend.

Las pruebas cubren el flujo completo de la aplicación:
- Login
- Dashboard
- Listado de acciones
- Paginación
- Creación de acciones
- Manejo de errores

---

## 1. Login con credenciales válidas

**Descripción:**  
Se intenta iniciar sesión con un correo y contraseña correctos.

**Pasos:**
1. Ingresar correo válido.
2. Ingresar contraseña válida.
3. Presionar el botón “Ingresar”.

**Resultado esperado:**  
- El sistema autentica al usuario.
- Se guarda el token.
- Se redirige al Dashboard.

**Resultado obtenido:**  
- El usuario accede correctamente al Dashboard.



---

## 2. Login con credenciales inválidas

**Descripción:**  
Se intenta iniciar sesión con credenciales incorrectas.

**Pasos:**
1. Ingresar correo inválido o contraseña incorrecta.
2. Presionar “Ingresar”.

**Resultado esperado:**  
- Se muestra un mensaje de error.
- No se permite el acceso al Dashboard.

**Resultado obtenido:**  
- Se muestra el mensaje “Usuario o contraseña incorrectos”.



---

## 3. Login con campos vacíos

**Descripción:**  
Se intenta enviar el formulario sin completar los campos.

**Pasos:**
1. Dejar correo y/o contraseña vacíos.
2. Observar el botón de ingreso.

**Resultado esperado:**  
- El botón “Ingresar” permanece deshabilitado.

**Resultado obtenido:**  
- El botón no se habilita hasta completar ambos campos.



---

## 4. Visualización inicial del Dashboard

**Descripción:**  
Acceso al Dashboard después de un login exitoso.

**Resultado esperado:**  
- Se muestra el layout con header y sidebar.
- Se carga la tabla de acciones.

**Resultado obtenido:**  
- El Dashboard se renderiza correctamente.



---

## 5. Carga del listado de acciones

**Descripción:**  
Verificación de la carga de acciones desde la API.

**Resultado esperado:**  
- Se muestran las acciones en la tabla.
- Se respeta el tamaño de página.

**Resultado obtenido:**  
- Las acciones se muestran correctamente.



---

## 6. Paginación – Página siguiente

**Descripción:**  
Se navega a la siguiente página del listado.

**Pasos:**
1. Presionar el botón “Siguiente”.

**Resultado esperado:**  
- Se cargan nuevas acciones.
- Se incrementa el número de página.

**Resultado obtenido:**  
- La paginación funciona correctamente.



---

## 7. Paginación – Página anterior

**Descripción:**  
Se regresa a la página anterior.

**Resultado esperado:**  
- Se muestran las acciones previas.
- El botón “Anterior” se deshabilita en la primera página.

**Resultado obtenido:**  
- El comportamiento es el esperado.



---

## 8. Abrir modal de creación de acción

**Descripción:**  
Se abre el modal para crear una nueva acción.

**Pasos:**
1. Presionar el botón “Crear acción”.

**Resultado esperado:**  
- Se muestra el modal con el formulario.

**Resultado obtenido:**  
- El modal se abre correctamente.



---

## 9. Crear acción con campos vacíos

**Descripción:**  
Se intenta crear una acción sin completar los campos obligatorios.

**Resultado esperado:**  
- El botón “Crear” permanece deshabilitado.
- Se muestra mensaje de validación.

**Resultado obtenido:**  
- El formulario valida correctamente.



---

## 10. Crear acción correctamente

**Descripción:**  
Creación de una acción con todos los campos completos.

**Resultado esperado:**  
- La acción se crea exitosamente.
- Se muestra mensaje de éxito.
- El modal se cierra.
- El listado se actualiza.

**Resultado obtenido:**  
- La acción se crea y aparece en la tabla.



---

## 11. Manejo de errores al crear acción

**Descripción:**  
Simulación de error en la creación de una acción.

**Resultado esperado:**  
- Se muestra un mensaje de error.
- No se cierra el modal.

**Resultado obtenido:**  
- El error se maneja correctamente.



---

## 12. Estados de carga

**Descripción:**  
Verificación de estados de carga en login y dashboard.

**Resultado esperado:**  
- Botones deshabilitados durante la carga.
- Mensajes de “Cargando...”.

**Resultado obtenido:**  
- Los estados de carga funcionan correctamente.



---

## Conclusión QA

Todas las pruebas funcionales fueron ejecutadas exitosamente.  
La aplicación cumple con los flujos solicitados y maneja correctamente estados, validaciones y errores.

No se encontraron errores críticos durante las pruebas.
