<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Baja Trip | Transporte a Conciertos desde Querétaro</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Outfit', sans-serif; background-color: #0b0f19; color: #f3f4f6; }
        .neon-glow { box-shadow: 0 0 25px rgba(168, 85, 247, 0.4); }
        .neon-border { border: 1px solid rgba(168, 85, 247, 0.5); }
    </style>
</head>
<body class="bg-[#0b0f19] min-h-screen flex flex-col justify-between">

    <!-- HEADER / HERO -->
    <header class="border-b border-gray-800 bg-[#0f172a]/80 backdrop-blur sticky top-0 z-50">
        <div class="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <span class="text-2xl font-black tracking-wider text-purple-400">BAJA<span class="text-white">TRIP</span></span>
            </div>
            <span class="text-xs bg-purple-900/60 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">📍 Salidas desde Querétaro</span>
        </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 py-8 flex-grow w-full space-y-8">
        
        <!-- HERO BANNER -->
        <div class="text-center space-y-4">
            <h1 class="text-4xl md:text-5xl font-black tracking-tight text-white">
                Tu viaje, <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">tu música.</span>
            </h1>
            <p class="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
                Transporte ejecutivo redondo desde Querétaro a los mejores conciertos y festivales. Unidades equipadas, seguro de viajero y ambiente 100% de fans[cite: 4, 9].
            </p>
        </div>

        <!-- PRÓXIMA RUTA ACTIVA: KAROL G -->
        <div class="bg-gradient-to-br from-gray-900 to-purple-950/40 rounded-2xl p-6 neon-border neon-glow space-y-6">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <span class="bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">¡Próxima Salida!</span>
                    <h2 class="text-2xl md:text-3xl font-extrabold text-white mt-2">Karol G en CDMX</h2>
                    <p class="text-gray-400 text-sm mt-1">🗓️ 13 de Noviembre, 2026 | 🚌 Salida puntual desde Querétaro[cite: 5]</p>
                </div>
                <div class="text-left md:text-right">
                    <span class="text-xs text-gray-400 block">Viaje Redondo</span>
                    <span class="text-3xl font-black text-purple-400">$600 <span class="text-xs text-gray-300">MXN</span></span>[cite: 5]
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-gray-800 pt-4 text-sm text-gray-300">
                <div class="flex items-center space-x-2">
                    <span>🛡️</span>
                    <span>Seguro de viajero incluido[cite: 4, 9]</span>
                </div>
                <div class="flex items-center space-x-2">
                    <span>⚡</span>
                    <span>Aparta con solo el 50% ($300)[cite: 5]</span>
                </div>
                <div class="flex items-center space-x-2">
                    <span>🕒</span>
                    <span>Regreso 1 hr post-concierto[cite: 4, 9]</span>
                </div>
            </div>

            <div class="pt-2">
                <a href="https://wa.me/5214428794383?text=¡Hola!%20Quiero%20apartar%20mi%20lugar%20para%20el%20concierto%20de%20Karol%20G" target="_blank" class="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3.5 px-6 rounded-xl transition shadow-lg">
                    Reservar Lugar en WhatsApp 📲
                </a>
            </div>
        </div>

        <!-- ASISTENTE VIRTUAL IA -->
        <div class="bg-gray-900/90 rounded-2xl p-6 border border-gray-800 space-y-4">
            <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 class="font-bold text-lg text-white">Asistente Virtual Baja Trip (IA)</h3>
            </div>
            <p class="text-gray-400 text-sm">¿Tienes dudas sobre las paradas, los horarios o cómo apartar? Pregúntale a nuestro asistente aquí mismo:</p>
            
            <div id="chat-box" class="bg-gray-950 rounded-xl p-4 h-48 overflow-y-auto space-y-3 text-sm border border-gray-800">
                <div class="bg-purple-950/60 text-purple-200 p-3 rounded-xl max-w-[85%] border border-purple-800/40">
                    ¡Hola! 🚍 Soy el asistente virtual de Baja Trip. ¿En qué te puedo ayudar sobre nuestros viajes a conciertos desde Querétaro?[cite: 4, 9]
                </div>
            </div>

            <div class="flex gap-2">
                <input type="text" id="user-input" placeholder="Escribe tu duda (ej. ¿De dónde salen en Qro?)..." class="flex-grow bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 text-white">
                <button onclick="handleUserMessage()" class="bg-purple-600 hover:bg-purple-500 text-white px-5 py-3 rounded-xl font-bold text-sm transition">Enviar</button>
            </div>
        </div>

    </main>

    <!-- FOOTER -->
    <footer class="border-t border-gray-800 bg-[#0f172a] py-6 text-center text-xs text-gray-500">
        <p>© 2026 Baja Trip Querétaro. Todos los derechos reservados.[cite: 4]</p>
    </footer>

    <!-- SCRIPT DEL ASISTENTE DE IA -->
    <script>
        function appendMessage(sender, text) {
            const chatBox = document.getElementById('chat-box');
            const div = document.createElement('div');
            if (sender === 'user') {
                div.className = 'bg-gray-800 text-white p-3 rounded-xl max-w-[85%] ml-auto text-right';
            } else {
                div.className = 'bg-purple-950/60 text-purple-200 p-3 rounded-xl max-w-[85%] border border-purple-800/40';
            }
            div.innerText = text;
            chatBox.appendChild(div);
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        function handleUserMessage() {
            const input = document.getElementById('user-input');
            const text = input.value.trim();
            if (!text) return;

            appendMessage('user', text);
            input.value = '';

            setTimeout(() => {
                const lower = text.toLowerCase();
                let reply = "¡Claro! Salimos directo desde Querétaro en autobús ejecutivo con seguro de viajero[cite: 4, 9]. ¿Te gustaría que te pase el enlace directo de WhatsApp para apartar tu lugar con el 50% ($300 MXN)?[cite: 5]";

                if (lower.includes('lugar') || lower.includes('pago')|| lower.includes('apartar')|| lower.includes('boleto')|| lower.includes('precio')) {
                    reply = "Para apartar tu lugar solo requerimos el 50% de anticipo ($300 MXN). Te redirigiré a nuestro WhatsApp oficial para enviarte los datos bancarios y asegurar tu asiento de inmediato.";
                    appendMessage('bot', reply);
                    setTimeout(() => {
                        window.open("https://wa.me/5214428794383?text=¡Hola!%20Hablé%20con%20el%20asistente%20virtual%20y%20quiero%20apartar%20mi%20lugar", "_blank");
                    }, 1500);
                    return;
                } else if (lower.includes('donde') || lower.includes('salida') || lower.includes('queretaro')) {
                    reply = "Las salidas son desde un punto fijo y seguro en Querétaro (con opción de parada en San Juan del Río según el evento)[cite: 4, 9]. El horario exacto se comparte en el grupo de WhatsApp del viaje.";
                } else if (lower.includes('regreso') || lower.includes('hora')) {
                    reply = "El autobús emprende el viaje de regreso a Querétaro exactamente 1 hora después de haber finalizado el concierto[cite: 4, 9].";
                }

                appendMessage('bot', reply);
            }, 800);
        }

        document.getElementById('user-input').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                handleUserMessage();
            }
        });
    </script>
</body>
</html>
