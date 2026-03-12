// ===== GLIPEARTE - SISTEMA DE LOCAÇÃO DE ARTIGOS PARA FESTA ===== //

class GlipearteSystem {
    constructor() {
        this.products = [];
        this.selectedItems = [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.loadProducts();
        this.setupEventListeners();
        this.setupScrollEffects();
        this.setupFormValidation();
    }

    // ===== PRODUCT DATA =====
    loadProducts() {
        this.products = [
            // Louças
            {
                id: 1,
                name: 'Jogo de Jantar 20 Peças',
                category: 'loucas',
                description: 'Louça completa para 4 pessoas, inclui pratos, tigelas e xícaras',
                price: 45.00,
                icon: 'fas fa-utensils',
                available: true,
                stock: 25
            },
            {
                id: 2,
                name: 'Taças de Cristal',
                category: 'loucas',
                description: 'Conjunto com 12 taças para vinho e espumante',
                price: 35.00,
                icon: 'fas fa-wine-glass',
                available: true,
                stock: 30
            },
            {
                id: 3,
                name: 'Canecas Personalizadas',
                category: 'loucas',
                description: 'Canecas temáticas para festas infantis',
                price: 25.00,
                icon: 'fas fa-coffee',
                available: true,
                stock: 50
            },
            // Decoração
            {
                id: 4,
                name: 'Kit Balões Coloridos',
                category: 'decoracao',
                description: '100 balões multicoloridos com hélio e acessórios',
                price: 120.00,
                icon: 'fas fa-party-horn',
                available: true,
                stock: 15
            },
            {
                id: 5,
                name: 'Flores Artificiais',
                category: 'decoracao',
                description: 'Arranjos florais variados para mesas e ambientes',
                price: 80.00,
                icon: 'fas fa-seedling',
                available: true,
                stock: 20
            },
            {
                id: 6,
                name: 'Luzes LED Decorativas',
                category: 'decoracao',
                description: 'Fita de LED colorida para iluminação ambiente',
                price: 60.00,
                icon: 'fas fa-lightbulb',
                available: true,
                stock: 12
            },
            // Móveis
            {
                id: 7,
                name: 'Mesas Redondas',
                category: 'moveis',
                description: 'Mesas para 8 pessoas, tampo em madeira',
                price: 25.00,
                icon: 'fas fa-table',
                available: true,
                stock: 40
            },
            {
                id: 8,
                name: 'Cadeiras Brancas',
                category: 'moveis',
                description: 'Cadeiras empilháveis brancas com almofada',
                price: 8.00,
                icon: 'fas fa-chair',
                available: true,
                stock: 200
            },
            {
                id: 9,
                name: 'Palco Modular',
                category: 'moveis',
                description: 'Palco ajustável para apresentações e cerimônias',
                price: 200.00,
                icon: 'fas fa-stage',
                available: true,
                stock: 5
            },
            // Iluminação
            {
                id: 10,
                name: 'Spotlights LED',
                category: 'iluminacao',
                description: 'Projetores LED para iluminação focal',
                price: 85.00,
                icon: 'fas fa-spotlight',
                available: true,
                stock: 18
            },
            {
                id: 11,
                name: 'Lustre Cristal',
                category: 'iluminacao',
                description: 'Lustre elegante para ambientes sofisticados',
                price: 150.00,
                icon: 'fas fa-chandelier',
                available: true,
                stock: 8
            },
            {
                id: 12,
                name: 'Fita Neon Colorida',
                category: 'iluminacao',
                description: 'Iluminação neon colorida para efeitos especiais',
                price: 95.00,
                icon: 'fas fa-neon',
                available: true,
                stock: 10
            }
        ];

        this.renderProducts();
    }

    // ===== RENDER PRODUCTS =====
    renderProducts() {
        const grid = document.getElementById('products-grid');
        const filteredProducts = this.currentFilter === 'all' 
            ? this.products 
            : this.products.filter(p => p.category === this.currentFilter);

        grid.innerHTML = filteredProducts.map(product => `
            <div class="col-md-6 col-lg-4 product-item" data-category="${product.category}">
                <div class="product-card h-100">
                    <div class="product-image">
                        <i class="${product.icon}"></i>
                    </div>
                    <div class="product-info">
                        <h5 class="product-title">${product.name}</h5>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">R$ ${product.price.toFixed(2)}</div>
                        <div class="product-stock text-muted mb-2">
                            <small>Disponível: ${product.stock} unidades</small>
                        </div>
                        <div class="product-actions">
                            <button class="btn btn-primary btn-sm add-to-cart" 
                                    data-id="${product.id}"
                                    ${!product.available ? 'disabled' : ''}>
                                <i class="fas fa-plus me-1"></i>Adicionar
                            </button>
                            <button class="btn btn-outline-primary btn-sm view-details" 
                                    data-id="${product.id}">
                                <i class="fas fa-eye me-1"></i>Ver
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        this.setupProductEventListeners();
    }

    // ===== EVENT LISTENERS =====
    setupEventListeners() {
        // Filter buttons
        document.querySelectorAll('[data-category]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.filterProducts(category);
            });
        });

        // Budget simulator
        document.getElementById('event-date')?.addEventListener('change', () => this.updateBudget());
        document.getElementById('guest-count')?.addEventListener('input', () => this.updateBudget());
        document.getElementById('request-quote')?.addEventListener('click', () => this.requestQuote());

        // Contact form
        document.getElementById('contact-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitContactForm();
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupProductEventListeners() {
        // Add to cart buttons
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.id);
                this.addToCart(productId);
            });
        });

        // View details buttons
        document.querySelectorAll('.view-details').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.id);
                this.viewProductDetails(productId);
            });
        });
    }

    // ===== PRODUCT FILTERING =====
    filterProducts(category) {
        // Update active button
        document.querySelectorAll('[data-category]').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');

        // Update current filter and re-render
        this.currentFilter = category;
        this.renderProducts();
    }

    // ===== SHOPPING CART =====
    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.selectedItems.find(item => item.id === productId);
        
        if (existingItem) {
            if (existingItem.quantity < product.stock) {
                existingItem.quantity += 1;
            } else {
                this.showNotification('Quantidade máxima disponível atingida!', 'warning');
                return;
            }
        } else {
            this.selectedItems.push({
                ...product,
                quantity: 1
            });
        }

        this.updateCartDisplay();
        this.updateBudget();
        this.showNotification(`${product.name} adicionado ao orçamento!`, 'success');
    }

    removeFromCart(productId) {
        this.selectedItems = this.selectedItems.filter(item => item.id !== productId);
        this.updateCartDisplay();
        this.updateBudget();
        this.showNotification('Item removido do orçamento', 'info');
    }

    updateQuantity(productId, newQuantity) {
        const item = this.selectedItems.find(item => item.id === productId);
        const product = this.products.find(p => p.id === productId);
        
        if (!item || !product) return;

        if (newQuantity <= 0) {
            this.removeFromCart(productId);
            return;
        }

        if (newQuantity > product.stock) {
            this.showNotification('Quantidade máxima disponível atingida!', 'warning');
            return;
        }

        item.quantity = newQuantity;
        this.updateCartDisplay();
        this.updateBudget();
    }

    updateCartDisplay() {
        const container = document.getElementById('selected-items');
        
        if (this.selectedItems.length === 0) {
            container.innerHTML = '<p class="text-muted text-center">Nenhum item selecionado ainda</p>';
            return;
        }

        container.innerHTML = this.selectedItems.map(item => `
            <div class="selected-item">
                <div class="selected-item-info">
                    <div class="selected-item-title">${item.name}</div>
                    <div class="selected-item-price">R$ ${item.price.toFixed(2)} cada</div>
                </div>
                <div class="selected-item-quantity">
                    <button class="quantity-btn" onclick="glipearte.updateQuantity(${item.id}, ${item.quantity - 1})">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="quantity-btn" onclick="glipearte.updateQuantity(${item.id}, ${item.quantity + 1})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="remove-item" onclick="glipearte.removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    // ===== BUDGET CALCULATOR =====
    updateBudget() {
        const guestCount = parseInt(document.getElementById('guest-count')?.value || 50);
        const eventDate = document.getElementById('event-date')?.value;
        
        let subtotal = 0;
        this.selectedItems.forEach(item => {
            subtotal += item.price * item.quantity;
        });

        // Calculate delivery fee based on guest count
        let deliveryFee = Math.max(30, guestCount * 0.5);
        
        // Calculate discount for large events
        let discount = 0;
        if (guestCount > 100) {
            discount = subtotal * 0.1; // 10% discount for events over 100 guests
        }

        const total = subtotal + deliveryFee - discount;

        // Update display
        document.getElementById('subtotal').textContent = `R$ ${subtotal.toFixed(2)}`;
        document.getElementById('delivery-fee').textContent = `R$ ${deliveryFee.toFixed(2)}`;
        document.getElementById('discount').textContent = `R$ ${discount.toFixed(2)}`;
        document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;
    }

    // ===== QUOTE REQUEST =====
    requestQuote() {
        if (this.selectedItems.length === 0) {
            this.showNotification('Por favor, adicione itens ao orçamento!', 'warning');
            return;
        }

        const eventDate = document.getElementById('event-date')?.value;
        const guestCount = document.getElementById('guest-count')?.value;

        if (!eventDate) {
            this.showNotification('Por favor, selecione a data do evento!', 'warning');
            return;
        }

        // Calculate total
        let subtotal = 0;
        this.selectedItems.forEach(item => {
            subtotal += item.price * item.quantity;
        });

        // Create quote data
        const quoteData = {
            items: this.selectedItems,
            eventDate: eventDate,
            guestCount: guestCount,
            subtotal: subtotal,
            deliveryFee: Math.max(30, guestCount * 0.5),
            discount: guestCount > 100 ? subtotal * 0.1 : 0,
            total: subtotal + Math.max(30, guestCount * 0.5) - (guestCount > 100 ? subtotal * 0.1 : 0),
            timestamp: new Date().toISOString()
        };

        // Store quote data (in a real app, this would be sent to a server)
        localStorage.setItem('glipearte_quote', JSON.stringify(quoteData));

        // Show success message
        this.showNotification('Orçamento solicitado com sucesso! Entraremos em contato em breve.', 'success');
        
        // Scroll to contact form
        document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
    }

    // ===== CONTACT FORM =====
    submitContactForm() {
        const form = document.getElementById('contact-form');
        const formData = new FormData(form);
        
        const contactData = {
            name: formData.get('name') || document.getElementById('name').value,
            phone: formData.get('phone') || document.getElementById('phone').value,
            email: formData.get('email') || document.getElementById('email').value,
            eventType: formData.get('event-type') || document.getElementById('event-type').value,
            message: formData.get('message') || document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };

        // Simulate form submission
        this.showNotification('Mensagem enviada com sucesso! Obrigado pelo contato.', 'success');
        
        // Reset form
        form.reset();
        
        // Store contact data (in a real app, this would be sent to a server)
        const existingContacts = JSON.parse(localStorage.getItem('glipearte_contacts') || '[]');
        existingContacts.push(contactData);
        localStorage.setItem('glipearte_contacts', JSON.stringify(existingContacts));
    }

    // ===== PRODUCT DETAILS =====
    viewProductDetails(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        // Create modal or detailed view
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${product.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-4 text-center">
                                <div class="product-image" style="height: 150px; width: 150px; margin: 0 auto;">
                                    <i class="${product.icon} fa-3x"></i>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <p><strong>Descrição:</strong> ${product.description}</p>
                                <p><strong>Preço:</strong> R$ ${product.price.toFixed(2)}</p>
                                <p><strong>Disponível:</strong> ${product.stock} unidades</p>
                                <p><strong>Categoria:</strong> ${this.getCategoryName(product.category)}</p>
                                ${product.available ? 
                                    '<span class="badge bg-success">Disponível</span>' : 
                                    '<span class="badge bg-danger">Indisponível</span>'
                                }
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        ${product.available ? 
                            `<button type="button" class="btn btn-primary" onclick="glipearte.addToCart(${product.id})" data-bs-dismiss="modal">
                                <i class="fas fa-plus me-1"></i>Adicionar ao Orçamento
                            </button>` : 
                            '<button type="button" class="btn btn-secondary" disabled>Indisponível</button>'
                        }
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();

        // Remove modal from DOM after it's hidden
        modal.addEventListener('hidden.bs.modal', () => {
            document.body.removeChild(modal);
        });
    }

    getCategoryName(category) {
        const names = {
            'loucas': 'Louças',
            'decoracao': 'Decoração',
            'moveis': 'Móveis',
            'iluminacao': 'Iluminação'
        };
        return names[category] || category;
    }

    // ===== SCROLL EFFECTS =====
    setupScrollEffects() {
        // Add scroll spy for navigation
        window.addEventListener('scroll', () => {
            const sections = ['home', 'catalogo', 'simulador', 'contato'];
            const scrollPos = window.scrollY + 100;

            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                const navLink = document.querySelector(`a[href="#${sectionId}"]`);
                
                if (section && navLink) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    
                    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                        document.querySelectorAll('.nav-link').forEach(link => {
                            link.classList.remove('active');
                        });
                        navLink.classList.add('active');
                    }
                }
            });
        });

        // Add fade in animation for elements
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.feature-card, .product-card, .selected-item').forEach(el => {
            observer.observe(el);
        });
    }

    // ===== FORM VALIDATION =====
    setupFormValidation() {
        // Phone number formatting
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length <= 10) {
                    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
                } else {
                    value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
                }
                e.target.value = value;
            });
        }

        // Email validation
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('blur', (e) => {
                const email = e.target.value;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (email && !emailRegex.test(email)) {
                    e.target.classList.add('is-invalid');
                } else {
                    e.target.classList.remove('is-invalid');
                }
            });
        }
    }

    // ===== NOTIFICATION SYSTEM =====
    showNotification(message, type = 'info') {
        // Remove existing notifications
        document.querySelectorAll('.notification').forEach(n => n.remove());

        const notification = document.createElement('div');
        notification.className = `notification alert alert-${type} alert-dismissible fade show`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;
        
        notification.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // ===== UTILITIES =====
    formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }

    formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('pt-BR');
    }
}

// ===== INITIALIZATION =====
let glipearte;

document.addEventListener('DOMContentLoaded', () => {
    glipearte = new GlipearteSystem();
});

// ===== GLOBAL FUNCTIONS =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function getProductById(id) {
    return glipearte.products.find(p => p.id === id);
}

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GlipearteSystem;
}