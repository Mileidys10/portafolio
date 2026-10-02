"""
serve.py - Servidor Local de Demostracion para el Portafolio
Portafolio Profesional de Ingenieria
Mileidys Agamez Ospino
"""

import http.server
import socketserver
import webbrowser
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class PortfolioHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run():
    with socketserver.TCPServer(("127.0.0.1", PORT), PortfolioHandler) as httpd:
        url = f"http://localhost:{PORT}"
        print("=" * 70)
        print(f"🚀 Portafolio de Mileidys Agamez en línea en:")
        print(f"   {url}")
        print("   Presiona Ctrl+C para detener el servidor.")
        print("=" * 70)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor detenido.")

if __name__ == "__main__":
    run()
