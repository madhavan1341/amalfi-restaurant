// Image Modal Logic
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const fullImg = document.getElementById("fullImage");
    if(modal && fullImg) {
        modal.style.display = "block";
        fullImg.src = imageSrc;
    }
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    if(modal) modal.style.display = "none";
}

// Full Menu Overlay Logic (Page Flip Animation)
function openFullMenu() {
    const overlay = document.getElementById("fullMenuOverlay");
    if(overlay) {
        overlay.style.display = "block";
       setTimeout(() => {
            overlay.classList.add('active');
        }, 50);
    }
}

function closeFullMenu() {
    const overlay = document.getElementById("fullMenuOverlay");
    if(overlay) {
        overlay.classList.remove('active');
       
        setTimeout(() => {
            overlay.style.display = "none";
        }, 600);
    }
}

// Close everything on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeModal();
        closeFullMenu();
    }
});

// Sides Menu Logic
function openSidesMenu() {
    const overlay = document.getElementById("sidesMenuOverlay");
    overlay.style.display = "block";
    setTimeout(() => {
        overlay.classList.add('active');
    }, 50);
}

function closeSidesMenu() {
    const overlay = document.getElementById("sidesMenuOverlay");
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = "none";
    }, 600);
}


// Soup Menu Logic
function openSoupMenu() {
    const overlay = document.getElementById("soupMenuOverlay");
    overlay.style.display = "block";
    setTimeout(() => {
        overlay.classList.add('active');
    }, 50);
}

function closeSoupMenu() {
    const overlay = document.getElementById("soupMenuOverlay");
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = "none";
    }, 600);
}
// Pasta Menu Logic
function openPastaMenu() {
    const overlay = document.getElementById("pastaMenuOverlay");
    overlay.style.display = "block";
    setTimeout(() => {
        overlay.classList.add('active');
    }, 50);
}

function closePastaMenu() {
    const overlay = document.getElementById("pastaMenuOverlay");
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = "none";
    }, 600);
}

// Risotto Menu Logic
function openRisottoMenu() {
    const overlay = document.getElementById("risottoMenuOverlay");
    overlay.style.display = "block";
    setTimeout(() => {
        overlay.classList.add('active');
    }, 50);
}

function closeRisottoMenu() {
    const overlay = document.getElementById("risottoMenuOverlay");
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = "none";
    }, 600);
}
// Secondi Menu Logic
function openSecondiMenu() {
    const overlay = document.getElementById("secondiMenuOverlay");
    overlay.style.display = "block";
    setTimeout(() => {
        overlay.classList.add('active');
    }, 50);
}

function closeSecondiMenu() {
    const overlay = document.getElementById("secondiMenuOverlay");
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = "none";
    }, 600);
}
// Pizza Menu Logic
function openPizzaMenu() {
    const overlay = document.getElementById("pizzaMenuOverlay");
    overlay.style.display = "block";
    setTimeout(() => {
        overlay.classList.add('active');
    }, 50);
}

function closePizzaMenu() {
    const overlay = document.getElementById("pizzaMenuOverlay");
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = "none";
    }, 600);
}
// Mocktails Menu Logic
function openMocktailsMenu() {
    const overlay = document.getElementById("mocktailsMenuOverlay");
    overlay.style.display = "block";
    setTimeout(() => {
        overlay.classList.add('active');
    }, 50);
}

function closeMocktailsMenu() {
    const overlay = document.getElementById("mocktailsMenuOverlay");
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = "none";
    }, 600);
}
// Coffee & Tea Menu Logic
function openCoffeeMenu() {
    const overlay = document.getElementById("coffeeMenuOverlay");
    overlay.style.display = "block";
    setTimeout(() => {
        overlay.classList.add('active');
    }, 50);
}

function closeCoffeeMenu() {
    const overlay = document.getElementById("coffeeMenuOverlay");
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = "none";
    }, 600);
}
// Desserts Menu Logic
function openDessertsMenu() {
    const overlay = document.getElementById("dessertsMenuOverlay");
    overlay.style.display = "block";
    setTimeout(() => {
        overlay.classList.add('active');
    }, 50);
}

function closeDessertsMenu() {
    const overlay = document.getElementById("dessertsMenuOverlay");
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = "none";
    }, 600);
}


let cart = {}; 

function addToCart(name, price) {
    if (cart[name]) {
        cart[name].qty += 1;
    } else {
        cart[name] = { price: price, qty: 1 };
    }
    updateCartBar();
}

function updateCartBar() {
    let totalItems = 0;
    let totalPrice = 0;
    for (let item in cart) {
        totalItems += cart[item].qty;
        totalPrice += (cart[item].price * cart[item].qty);
    }

    const cartBar = document.getElementById("cartBar");
    const cartSummary = document.getElementById("cartSummary");

  
    if (cartBar && cartSummary) {
        if (totalItems > 0) {
            cartBar.style.display = "block"; 
            cartSummary.innerHTML = `🛒 Items: <b>${totalItems}</b> | Total: <b>₹${totalPrice}</b>`;
        } else {
            cartBar.style.display = "none";
        }
    }
}

function cancelCart() {
    
    if(confirm("Are you sure you want to clear the cart?")) {
        cart = {}; 
        document.getElementById("cartBar").style.display = "none";
    }
}

function sendToWhatsApp() {
    const nameInput = document.getElementById("userName");
    const name = nameInput ? nameInput.value : "";

    if (!name) { 
        alert("Please enter your name!"); 
        return; 
    }

    let orderText = `*New Order from Amalfi Restaurant*%0A--------------------------%0A*Name:* ${name}%0A%0A*Items:*%0A`;
    let grandTotal = 0;

    for (let item in cart) {
        let itemTotal = cart[item].price * cart[item].qty;
        orderText += `• ${item} x ${cart[item].qty} = ₹${itemTotal}%0A`;
        grandTotal += itemTotal;
    }

    orderText += `%0A*Grand Total: ₹${grandTotal}*%0A--------------------------`;
    
    const amalfiWhatsApp = "918668023282"; 
    window.open(`https://wa.me/${amalfiWhatsApp}?text=${orderText}`, '_blank');
}




     const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('reveal-visible'); });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        const matrixArea = document.getElementById('matrix-brand-hover');
const glitterBox = document.getElementById('glitter-container');
let glitterTimer;

function createStarDust() {
    const colors = ['#FF0000', '#FFFFFF', '#FF8888'];
    for (let i = 0; i < 5; i++) {
        const dust = document.createElement('div');
        dust.className = 'star-dust';
        dust.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const x = (Math.random() - 0.5) * 80 + 'px';
        const y = (Math.random() - 0.5) * 80 + 'px';
        dust.style.setProperty('--x', x);
        dust.style.setProperty('--y', y);
        
        dust.style.left = '40%';
        dust.style.top = '50%';
        
        glitterBox.appendChild(dust);
        setTimeout(() => dust.remove(), 800);
    }
}

if (matrixArea) {
    matrixArea.addEventListener('mouseenter', () => {
        glitterTimer = setInterval(createStarDust, 150);
    });
    matrixArea.addEventListener('mouseleave', () => {
        clearInterval(glitterTimer);
    });
    matrixArea.addEventListener('click', createStarDust);
}





document.addEventListener('DOMContentLoaded', () => {
    const brandLink = document.getElementById('matrix-brand-hover');
    const glitterBox = document.getElementById('glitter-container');
    let dustInterval;

    function createDust() {
        const colors = ['#FF0000', '#FFFFFF', '#FF8888'];
        for (let i = 0; i < 6; i++) {
            const dust = document.createElement('div');
            dust.className = 'star-dust';
            dust.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            const x = (Math.random() - 0.5) * 80 + 'px';
            const y = (Math.random() - 0.5) * 80 + 'px';
            dust.style.setProperty('--x', x);
            dust.style.setProperty('--y', y);
            
            dust.style.left = '50%';
            dust.style.top = '50%';
            
            glitterBox.appendChild(dust);
            setTimeout(() => dust.remove(), 1000);
        }
    }

    if(brandLink) {
        brandLink.addEventListener('mouseenter', () => {
            dustInterval = setInterval(createDust, 150);
        });

        brandLink.addEventListener('mouseleave', () => {
            clearInterval(dustInterval);
        });

        brandLink.addEventListener('click', createDust);
    }
});
