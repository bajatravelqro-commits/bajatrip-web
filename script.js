function appendMessage(sender, text) {
    const chatBox = document.getElementById('chat-box');
    const div = document.createElement('div');
    if (sender === 'user') {
        div.className = 'bg-gray-800 text-white p-2.5 rounded-xl max-w-[90%] ml-auto text-right text-xs';
    } else {
        div.className = 'bg-blue-950/60 text-blue-200 p-2.5 rounded-xl max-w-[90%] border border-blue-800/40 text-xs';
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
        let reply = "Salimos directo de Querétaro en autobús ejecutivo con seguro de viajero[cite: 4, 9]. ¿Te aparto tu lugar con el 50% ($300 MXN)?[cite: 5]";

        if (lower.includes('lugar') || lower.includes('pago') || lower.includes('apartar') || lower.includes('precio') || lower.includes('costo') || lower.includes('reservar')) {
            reply = "El viaje cuesta $600 MXN y se aparta con la mitad ($300 MXN)[cite: 5]. Te paso directo a WhatsApp (442 879 4383) para asegurar tu asiento[cite: 4, 5].";
            appendMessage('bot', reply);
            setTimeout(() => { 
                window.open("https://wa.me/5214428794383?text=¡Hola!%20Hablé%20con%20el%20agente%20virtual%20y%20quiero%20apartar%20mi%20lugar%20con%20el%2050%.", "_blank"); 
            }, 1500);
            return;
        } else if (lower.includes('donde') || lower.includes('salida') || lower.includes('queretaro')) {
            reply = "Salimos de un punto fijo y seguro en Querétaro[cite: 4, 9]. El horario exacto se avisa en el grupo de WhatsApp del viaje.";
        } else if (lower.includes('regreso')) {
            reply = "El regreso a Querétaro es exacto: 1 hora después de terminar el concierto[cite: 4, 9].";
        } else if (lower.includes('seguro') || lower.includes('confiable')) {
            reply = "100% seguro. Viajamos en unidades ejecutivas con seguro de viajero vigente y coordinador a bordo[cite: 4, 9].";
        }
        appendMessage('bot', reply);
    }, 800);
}

document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') handleUserMessage();
});