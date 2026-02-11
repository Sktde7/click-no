document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const message = document.getElementById('message');
    const gif = document.getElementById('gif');
    let noClickCount = 0;
    const noMessages = [
        'Are you sure about that?',
        'Do not do it!',
        'Please do not do it!',
        'You are still pressing it!',
        'Do not press the button!',
        'Why are you pressing the button?',
        "It's gone! It's not here!",
        'Do not press it again!',
        'Press the Yes button, it\'s right here!',
        'It\'s growing bigger now!'
    ];

    const gifs = ['g2.gif','g3.gif','g4.gif','g5.gif','g7.gif','g7.gif','g8.gif','g2.gif','g3.gif','g4.gif','g5.gif', 'g7.gif','g7.gif','g8.gif'
]; // Add more GIF filenames as needed

    // Set initial GIF on page load
    gif.src = gifs[0];

    noBtn.addEventListener('click', function() {
        noClickCount++;

        // Random position for "No" button
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const randomX = Math.random() * (viewportWidth - noBtn.offsetWidth);
        const randomY = Math.random() * (viewportHeight - noBtn.offsetHeight);

        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;

        // Shrink the "No" button
        const scaleFactor = 0.9;
        const currentScale = noBtn.dataset.scale || 1;
        const newScale = currentScale * scaleFactor;
        noBtn.style.transform = `scale(${newScale})`;
        noBtn.dataset.scale = newScale;

        // Display a random message
        const randomMessage = noMessages[Math.floor(Math.random() * noMessages.length)];
        message.textContent = randomMessage;

        // Change the GIF
        const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
        gif.src = randomGif;

        // Grow the "Yes" button
        const growFactor = 1.1; // Increase size by 5% each time "No" is clicked
        const currentYesScale = yesBtn.dataset.scale || 1;
        const newYesScale = currentYesScale * growFactor;
        yesBtn.style.transform = `scale(${newYesScale})`;
        yesBtn.dataset.scale = newYesScale;

         yesBtn.addEventListener('click', function() {
        // Final message
        message.textContent = 'Yaaaaaaayyyyy!!!  I knew you would do it! 💖';

        // Disable buttons so user can't spam
        yesBtn.disabled = true;
        noBtn.disabled = false;

        // 🌸 FLOWER FALL EFFECT 🌸
        const flowerContainer = document.createElement('div');
        flowerContainer.style.position = 'fixed';
        flowerContainer.style.left = '0';
        flowerContainer.style.top = '0';
        flowerContainer.style.width = '100%';
        flowerContainer.style.height = '100%';
        flowerContainer.style.pointerEvents = 'none';
        flowerContainer.style.overflow = 'hidden';
        document.body.appendChild(flowerContainer);

        for (let i = 0; i < 40; i++) {
            const flower = document.createElement('div');
            flower.textContent = '🌸';
            flower.style.position = 'absolute';
            flower.style.fontSize = Math.random() * 20 + 20 + 'px';
            flower.style.left = Math.random() * 100 + 'vw';
            flower.style.top = '-50px';
            flower.style.animation = `fall ${Math.random() * 3 + 3}s linear forwards`;
            flowerContainer.appendChild(flower);
        }

        // Add falling animation dynamically
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fall {
                to {
                    transform: translateY(110vh) rotate(360deg);
                    opacity: 0.8;
                }
            }
        `;
        document.head.appendChild(style);

        // 🌙 After flowers fall, show moon
        setTimeout(() => {
            document.body.innerHTML = `
                <div style="
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    height:100vh;
                    background: radial-gradient(circle at center, #0d1b2a, #000);
                    color:white;
                    text-align:center;
                    font-family:sans-serif;
                ">
                   <img id="gif" src="gg.gif" alt="Valentine Gif">
                    <h1>I knew you would do it 🌙✨</h1>
                </div>
            `;
        }, 4000);
    });

    // ❌ Make "No" button vanish after many clicks
    const maxNoClicks = 8;

    noBtn.addEventListener('click', function() {
        if (noClickCount >= maxNoClicks) {
            noBtn.style.display = 'none';
            message.textContent = "See? Only one choice left 😏";
        }
    });

    });
});