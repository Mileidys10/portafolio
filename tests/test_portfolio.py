"""
test_portfolio.py - Suite de Pruebas Automatizadas para el Portafolio
Gobernanza: Google Cloud OKF v0.2 Knowledge Bundle
Fabrica de Software Agentica - Mileidys10
"""

import os
import sys
import time
import threading
import urllib.request
import http.server
import socketserver
import unittest

sys.stdout.reconfigure(encoding='utf-8')

PORTFOLIO_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

class TestPortfolioIntegrity(unittest.TestCase):

    def test_01_html_structure(self):
        html_path = os.path.join(PORTFOLIO_DIR, "index.html")
        self.assertTrue(os.path.exists(html_path), "index.html no existe")
        
        with open(html_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Validaciones de estructura y SEO
        self.assertIn("<!DOCTYPE html>", content, "Falta DOCTYPE")
        self.assertIn("<html lang=\"es\"", content, "Falta atributo lang")
        self.assertIn("<title>Mileidys Agamez Ospino", content, "Falta título descriptivo")
        self.assertIn("meta name=\"viewport\"", content, "Falta viewport responsivo")
        self.assertIn("meta name=\"description\"", content, "Falta meta description")
        
        # Secciones requeridas
        required_sections = ["id=\"hero\"", "id=\"projects\"", "id=\"skills\"", "id=\"terminal\"", "id=\"milestones\"", "id=\"contact\""]
        for sec in required_sections:
            self.assertIn(sec, content, f"Falta sección obligatoria: {sec}")

    def test_02_css_design_system(self):
        css_path = os.path.join(PORTFOLIO_DIR, "css", "style.css")
        self.assertTrue(os.path.exists(css_path), "style.css no existe")
        
        with open(css_path, "r", encoding="utf-8") as f:
            content = f.read()

        self.assertIn(":root", content, "Faltan tokens de diseño en :root")
        self.assertIn("--bg-primary", content, "Falta variable --bg-primary")
        self.assertIn("--gradient-brand", content, "Falta gradiente de marca")
        self.assertIn("[data-theme=\"light\"]", content, "Falta soporte para tema claro")
        self.assertIn("@media", content, "Faltan media queries responsivas")

    def test_03_js_logic_and_projects(self):
        js_path = os.path.join(PORTFOLIO_DIR, "js", "app.js")
        self.assertTrue(os.path.exists(js_path), "app.js no existe")
        
        with open(js_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Proyectos requeridos
        self.assertIn("tinder-app", content, "Falta proyecto TinderApp")
        self.assertIn("perfume-store", content, "Falta proyecto Aeterna Perfumes")
        self.assertIn("devcards-ai", content, "Falta proyecto DevCards AI")
        self.assertIn("videogame-pose", content, "Falta proyecto VideoGame Pose")
        self.assertIn("telegram-erp", content, "Falta proyecto Telegram ERP")
        self.assertIn("cinemastellar", content, "Falta proyecto CinemaStellar")

        # Comandos de terminal
        self.assertIn("help:", content, "Falta comando help en CLI")
        self.assertIn("bio:", content, "Falta comando bio en CLI")
        self.assertIn("skills:", content, "Falta comando skills en CLI")

    def test_04_image_assets_exist(self):
        images_dir = os.path.join(PORTFOLIO_DIR, "assets", "images")
        self.assertTrue(os.path.exists(images_dir), "Directorio de imágenes no existe")

        expected_images = [
            "tinder_app_preview.jpg",
            "perfume_store_preview.jpg",
            "devcards_ai_preview.jpg",
            "videogame_pose_preview.jpg",
            "telegram_erp_preview.jpg"
        ]

        for img in expected_images:
            img_path = os.path.join(images_dir, img)
            self.assertTrue(os.path.exists(img_path), f"Imagen no encontrada: {img}")
            size = os.path.getsize(img_path)
            self.assertGreater(size, 10000, f"Imagen {img} demasiado pequeña ({size} bytes)")

    def test_05_http_server_and_asset_serving(self):
        # Levantar servidor estático temporal en puerto dinámico
        test_port = 8899
        handler = lambda *args: http.server.SimpleHTTPRequestHandler(*args, directory=PORTFOLIO_DIR)
        
        server = None
        for p in range(8890, 8920):
            try:
                server = socketserver.TCPServer(("127.0.0.1", p), handler)
                test_port = p
                break
            except OSError:
                continue

        self.assertIsNotNone(server, "No se pudo enlazar el servidor de pruebas")
        
        thread = threading.Thread(target=server.serve_forever)
        thread.daemon = True
        thread.start()
        time.sleep(0.3)

        try:
            base_url = f"http://127.0.0.1:{test_port}"
            endpoints = [
                "/index.html",
                "/css/style.css",
                "/js/app.js",
                "/assets/images/tinder_app_preview.jpg",
                "/assets/images/perfume_store_preview.jpg",
                "/assets/images/devcards_ai_preview.jpg"
            ]

            for ep in endpoints:
                url = base_url + ep
                req = urllib.request.Request(url, headers={"User-Agent": "PortfolioTester/1.0"})
                with urllib.request.urlopen(req, timeout=3) as resp:
                    self.assertEqual(resp.status, 200, f"Error cargando {ep}: status {resp.status}")
                    content = resp.read()
                    self.assertGreater(len(content), 0, f"Contenido vacío en {ep}")
        finally:
            server.shutdown()
            server.server_close()

if __name__ == "__main__":
    unittest.main()
