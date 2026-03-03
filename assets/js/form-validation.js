// Form validation and visual feedback
document.addEventListener('DOMContentLoaded', function() {
    // Get all password inputs
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    
    passwordInputs.forEach(input => {
        // Check if it's a registration password field
        if (input.id === 'registration_form_plainPassword' || input.name === 'registration_form[plainPassword]') {
            const formGroup = input.closest('div').parentElement;
            
            // Create password strength indicator
            const strengthContainer = document.createElement('div');
            strengthContainer.className = 'mt-3 space-y-2';
            strengthContainer.innerHTML = `
                <div class="password-requirements space-y-1">
                    <div class="requirement min-length flex items-center gap-2 text-xs text-gray-400">
                        <span class="indicator">○</span> Mínimo 8 caracteres
                    </div>
                    <div class="requirement uppercase flex items-center gap-2 text-xs text-gray-400">
                        <span class="indicator">○</span> Mayúsculas (A-Z)
                    </div>
                    <div class="requirement lowercase flex items-center gap-2 text-xs text-gray-400">
                        <span class="indicator">○</span> Minúsculas (a-z)
                    </div>
                    <div class="requirement numbers flex items-center gap-2 text-xs text-gray-400">
                        <span class="indicator">○</span> Números (0-9)
                    </div>
                </div>
            `;
            
            formGroup.appendChild(strengthContainer);
            
            // Add event listener for real-time validation
            input.addEventListener('input', function() {
                const value = this.value;
                
                // Check each requirement
                const requirements = {
                    'min-length': value.length >= 8,
                    'uppercase': /[A-Z]/.test(value),
                    'lowercase': /[a-z]/.test(value),
                    'numbers': /\d/.test(value)
                };
                
                // Update visual indicators
                Object.keys(requirements).forEach(req => {
                    const element = strengthContainer.querySelector(`.${req}`);
                    if (element) {
                        const indicator = element.querySelector('.indicator');
                        if (requirements[req]) {
                            element.classList.remove('text-gray-400');
                            element.classList.add('text-green-400');
                            indicator.textContent = '●';
                        } else {
                            element.classList.remove('text-green-400');
                            element.classList.add('text-gray-400');
                            indicator.textContent = '○';
                        }
                    }
                });
                
                // Update input border color based on validity
                if (value.length > 0) {
                    const allMet = Object.values(requirements).every(v => v === true);
                    if (allMet) {
                        this.classList.remove('border-red-500');
                        this.classList.add('border-green-500');
                    } else {
                        this.classList.remove('border-green-500');
                        this.classList.add('border-red-500');
                    }
                }
            });
        }
    });
    
    // Email validation visual feedback
    const emailInputs = document.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.classList.add('border-red-500');
            } else if (this.value) {
                this.classList.remove('border-red-500');
                this.classList.add('border-green-500');
            }
        });
        
        input.addEventListener('input', function() {
            if (!this.value) {
                this.classList.remove('border-red-500', 'border-green-500');
            }
        });
    });
    
    // NIF/CIF validation visual feedback
    const nifInputs = document.querySelectorAll('input[id*="nif"], input[name*="nif"]');
    nifInputs.forEach(input => {
        input.addEventListener('blur', function() {
            const nifRegex = /^[0-9X][0-9]{7}[A-Z]$|^[KLMXYZ][0-9]{7}[A-Z]$/;
            const value = this.value.toUpperCase();
            
            if (this.value && !nifRegex.test(value)) {
                this.classList.add('border-red-500');
            } else if (this.value) {
                this.classList.remove('border-red-500');
                this.classList.add('border-green-500');
            }
        });
        
        input.addEventListener('input', function() {
            if (!this.value) {
                this.classList.remove('border-red-500', 'border-green-500');
            }
            // Auto-format to uppercase
            this.value = this.value.toUpperCase();
        });
    });
    
    // Age validation for date inputs
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.value) {
                const birthDate = new Date(this.value);
                const today = new Date();
                const age = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                
                if (age < 18) {
                    this.classList.add('border-red-500');
                } else {
                    this.classList.remove('border-red-500');
                    this.classList.add('border-green-500');
                }
            }
        });
    });
    
    // Form submission validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = this.querySelectorAll('[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('border-red-500');
                    isValid = false;
                } else {
                    input.classList.remove('border-red-500');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    });
});
