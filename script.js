document.addEventListener('DOMContentLoaded', function() {
    const activateBtn = document.getElementById('activate');
    const statusEl = document.getElementById('status');
    const particlesContainer = document.getElementById('particles');
    const explorerLink = document.getElementById('explorer-link');
    const chartLink = document.getElementById('chart-link');
    
    const CONTRACT_ADDRESS = '83dxm6jSYEmhRuQNdz8PHwzGmrnsBFmUhD4152K4Fray';
    
    // Configurar enlaces del token
    explorerLink.href = `https://explorer.solana.com/address/${CONTRACT_ADDRESS}`;
    chartLink.href = `https://dexscreener.com/solana/${CONTRACT_ADDRESS}`;
    
    // Crear partículas de fondo
    function createParticles() {
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 4 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            const opacity = Math.random() * 0.4 + 0.1;
            particle.style.opacity = opacity;
            particle.style.backgroundColor = `rgba(56, 189, 248, ${opacity})`;
            
            const duration = Math.random() * 20 + 10;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Simular activación del Nexus
    function activateNexus() {
        statusEl.textContent = "INICIANDO SISTEMA CUÁNTICO...";
        statusEl.style.opacity = "1";
        
        setTimeout(() => {
            statusEl.textContent = "CALIBRANDO OSCILADORES...";
        }, 1500);
        
        setTimeout(() => {
            statusEl.textContent = "ESTABILIZANDO CAMPOS MORFOGENÉTICOS...";
        }, 3000);
        
        setTimeout(() => {
            statusEl.textContent = "NEXUS ACTIVADO — BIENVENIDO AL ECOSISTEMA CUÁNTICO";
            activateBtn.textContent = "NEXUS ACTIVO";
            activateBtn.style.borderColor = "var(--success)";
            activateBtn.style.color = "var(--success)";
            activateBtn.disabled = true;
            
            // Efecto visual adicional
            document.body.style.animation = "pulse 2s infinite";
            
            // Mostrar mensaje final
            setTimeout(() => {
                statusEl.innerHTML = "SISTEMA OPERATIVO<br><span style='font-size:0.8em'>Token $QCN completamente funcional</span>";
            }, 2000);
        }, 4500);
    }
    
    // Copiar dirección al portapapeles
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            const originalText = statusEl.textContent;
            statusEl.textContent = "¡Dirección copiada al portapapeles!";
            setTimeout(() => {
                statusEl.textContent = originalText;
            }, 2000);
        });
    }
    
    // Inicializar
    createParticles();
    activateBtn.addEventListener('click', activateNexus);
    
    // Efecto de escritura para el título
    const title = document.querySelector('.title');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Iniciar efecto de escritura después de un breve retraso
    setTimeout(typeWriter, 500);
    
    // Permitir copiar la dirección del contrato
    const contractElement = document.querySelector('.contract-address');
    contractElement.style.cursor = 'pointer';
    contractElement.title = 'Click para copiar';
    contractElement.addEventListener('click', () => {
        copyToClipboard(CONTRACT_ADDRESS);
    });
});
