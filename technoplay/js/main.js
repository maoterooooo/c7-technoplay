/* ============================================
   SISTEMA DE GESTIÓ D'EQUIPS TIC - JavaScript
   Script simple per a funcionalitat bàsica
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    /* ============================================
       1. MENÚ RESPONSIU (Obrir/tancar menú en móvil)
       ============================================ */
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            // Mostra/amaga el menú
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
            }
        });
    }

    /* ============================================
       2. TANCAR MENÚ AL CLICAR UN ENLLAÇ
       ============================================ */
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Tanca el menú automàticament
            if (navMenu) {
                navMenu.style.display = 'none';
            }
        });
    });

    /* ============================================
       3. SUPORT PER A <details> EN NAVEGADORS VELLS
       (Els navegadors moderns ja ho suporten)
       ============================================ */
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const summary = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (summary && answer) {
            summary.addEventListener('click', function(e) {
                // Mostra/amaga la resposta
                answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            });
        }
    });

    /* ============================================
       4. SCROLL SUAU PER ALS ENLLAÇOS
       (Els navegadors moderns ja ho fan automàticament)
       ============================================ */
    // Aquest codi ja està a styles.css amb scroll-behavior: smooth;

    console.log('Sistema de Gestió d\'Equips TIC - Script carregat correctament');
});
