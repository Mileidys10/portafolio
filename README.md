# Portafolio Profesional &mdash; Mileidys Agamez Ospino

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="Nginx" />
  <img src="https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/Responsive-100%25-10B981?style=for-the-badge" alt="Responsive" />
  <img src="https://img.shields.io/badge/Licencia-MIT-F59E0B?style=for-the-badge" alt="MIT License" />
</p>

> **Portafolio Oficial de Ingeniería de Software & Soluciones de Inteligencia Artificial**.  
> Especialista en aplicaciones móviles híbridas (Ionic/Angular), backends empresariales (Spring Boot/Java, FastAPI/Python), arquitectura hexagonal y orquestación de sistemas de agentes de IA gobernados por Google Cloud OKF v0.2.

---

## 🌟 Proyectos Destacados en el Portafolio

| Proyecto | Descripción | Stack Tecnológico |
| :--- | :--- | :--- |
| **DevCards AI** | Plataforma de aprendizaje nemotécnico con 1,295 flashcards, visualizador de arquitectura hexagonal y quizzes Leitner. | FastAPI, Python 3.12, JavaScript ES6+, Docker, Ollama |
| **MindDump** | Aplicación PWA de "Segundo Cerebro" con persistencia local en IndexedDB y sincronización reactiva. | Angular 20, TypeScript, Dexie.js, Service Workers |
| **CinemaStellar** | Portal cinematográfico interactivo con trailers HD, sinopsis y diseño responsive glassmorphism. | HTML5, Vanilla CSS, JS ES6+, Docker, Nginx |
| **TinderApp Mobile** | Aplicación móvil reactiva de citas y networking con gestos táctiles, matching y mensajería en tiempo real. | Ionic Framework 8, Angular 20, Capacitor, Supabase |
| **Luxury Perfumes Store** | Plataforma de comercio electrónico fullstack de perfumería fina con pasarela y catálogo dinámico. | Spring Boot 3, Java 21, Angular 20, PostgreSQL, Docker |
| **VideoGame Pose** | Videojuego interactivo de combate y pausas activas controlado por visión artificial y MediaPipe. | Python, MediaPipe, OpenCV, Pygame |
| **Agente Telegram ERP** | Agente autónomo para control de inventarios, alertas de stock mínimo y órdenes de compra en PDF. | Python, Telegram Bot API, ReportLab, OKF v0.2 |

---

## 🐳 Despliegue con Docker (1 Comando)

El portafolio cuenta con contenedor Nginx Alpine ultra-ligero y configuración lista para producción:

```bash
# 1. Clonar el repositorio
git clone https://github.com/Mileidys10/portafolio.git
cd portafolio

# 2. Levantar con Docker Compose
docker compose up -d --build
```

Abre tu navegador en: **[http://localhost:8080](http://localhost:8080)**

---

## 💻 Ejecución Local Ligera

Si prefieres ejecutarlo sin Docker mediante el servidor Python integrado:

```bash
python serve.py
```

O simplemente abre el archivo `index.html` en cualquier navegador moderno.

---

## 📁 Estructura del Repositorio

```text
portafolio/
├── assets/             # Recursos gráficos, logotipos e iconos
├── css/                # Hojas de estilo modulares y responsive
├── js/                 # Lógica interactiva, filtros y animaciones
├── index.html          # Estructura semántica principal
├── Dockerfile          # Imagen reducida Nginx Alpine
├── docker-compose.yml  # Orquestación de despliegue
├── nginx.conf          # Configuración de compresión Gzip y caché
├── serve.py            # Servidor local de desarrollo
└── README.md           # Documentación oficial
```

---

## 📬 Contacto y Redes

* **Autora**: Mileidys Agamez Ospino
* **GitHub**: [@Mileidys10](https://github.com/Mileidys10)
* **Ubicación**: Barranquilla, Colombia
* **Licencia**: [MIT](LICENSE)
