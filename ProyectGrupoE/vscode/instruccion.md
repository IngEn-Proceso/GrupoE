# Guía Básica para Usar Visual Studio Code

**Visual Studio Code (VS Code)** es un editor de código fuente gratuito, ligero y potente desarrollado por Microsoft. Es compatible con múltiples lenguajes de programación y cuenta con una gran variedad de extensiones.

## Instalación

1. Ve al sitio oficial: [https://code.visualstudio.com](https://code.visualstudio.com)
2. Descarga la versión correspondiente a tu sistema operativo (Windows, macOS o Linux).
3. Sigue los pasos del instalador.

## Interfaz Principal

- **Barra lateral izquierda**: contiene el explorador de archivos, búsqueda, control de versiones, depuración y extensiones.
- **Área de edición**: donde escribes tu código.
- **Terminal integrada**: puedes abrirla con `Ctrl + ñ` o desde el menú `Ver > Terminal`.

## Primeros Pasos

1. **Abrir una carpeta de proyecto**:
   - Ve a `Archivo > Abrir carpeta...` y selecciona tu proyecto.
2. **Crear un archivo nuevo**:
   - Haz clic derecho en el explorador de archivos y selecciona `Nuevo archivo`.

## Atajos Útiles

- `Ctrl + P`: abrir archivos rápidamente por nombre.
- `Ctrl + Shift + P`: abrir la paleta de comandos.
- `Ctrl + /`: comentar o descomentar líneas.
- `Alt + Shift + F`: formatear el código.

## Extensiones Recomendadas

- **Prettier**: formateador de código.
- **ESLint**: para detectar errores de estilo en JavaScript/TypeScript.
- **Live Server**: recarga automática del navegador para desarrollo web.
- **Python**: soporte para desarrollo en Python.

## Configuración

- Accede a la configuración desde `Archivo > Preferencias > Configuración`.
- Puedes editar directamente el archivo `settings.json` para configuraciones avanzadas.

```json
{
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "files.autoSave": "onFocusChange"
}
