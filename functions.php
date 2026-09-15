<?php
/**
 * Plural Criativo - Functions
 */

// Definir constantes do tema
define('PLURAL_VERSION', '1.0.0');
define('PLURAL_TEMPLATE_DIR', get_template_directory());
define('PLURAL_TEMPLATE_URI', get_template_directory_uri());

// Suporte a recursos do WordPress
function plural_criativo_setup() {
    // Suporte a título
    add_theme_support('title-tag');
    
    // Suporte a logo
    add_theme_support('custom-logo', array(
        'height'      => 50,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    
    // Suporte a imagens destacadas
    add_theme_support('post-thumbnails');
    
    // Suporte a HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
    
    // Registrar menus
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'plural-criativo'),
    ));
}
add_action('after_setup_theme', 'plural_criativo_setup');

// Carregar scripts e estilos
function plural_criativo_scripts() {
    // Font Awesome
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0');
    
    // Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap', array(), null);
    
    // Estilo Principal
    wp_enqueue_style('plural-style', get_stylesheet_uri(), array('font-awesome', 'google-fonts'), PLURAL_VERSION);
    
    // JavaScript Principal
    wp_enqueue_script('plural-fun', PLURAL_TEMPLATE_URI . '/fun.js', array(), PLURAL_VERSION, true);
    
    // Passar variáveis para o JavaScript
    wp_localize_script('plural-fun', 'plural_vars', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'theme_uri' => PLURAL_TEMPLATE_URI,
        'site_url' => home_url('/'),
        'nonce' => wp_create_nonce('plural_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'plural_criativo_scripts');

// Adicionar meta tag com caminho do tema
function plural_add_theme_meta() {
    echo '<meta name="theme-path" content="' . PLURAL_TEMPLATE_URI . '" />' . "\n";
}
add_action('wp_head', 'plural_add_theme_meta', 1);

// Otimizar WordPress
function plural_optimize() {
    // Remover emojis
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    
    // Remover versão do WordPress
    add_filter('the_generator', '__return_null');
    
    // Remover meta tags desnecessárias
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'feed_links', 2);
    remove_action('wp_head', 'index_rel_link');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'feed_links_extra', 3);
    remove_action('wp_head', 'start_post_rel_link', 10, 0);
    remove_action('wp_head', 'parent_post_rel_link', 10, 0);
    remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
    remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
    remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
    remove_action('wp_head', 'rest_output_link_wp_head', 10);
    remove_action('wp_head', 'wp_oembed_add_discovery_links', 10);
}
add_action('init', 'plural_optimize');

// Criar shortcode para informações de contato
function plural_contact_shortcode($atts) {
    $atts = shortcode_atts(array(
        'type' => 'phone'
    ), $atts, 'plural_contact');
    
    $output = '';
    
    switch($atts['type']) {
        case 'phone':
            $output = '<a href="tel:+5588994462677" class="contact-link">(88) 99446-2677</a>';
            break;
        case 'whatsapp':
            $output = '<a href="https://wa.me/+5588994462677" target="_blank" class="contact-link whatsapp">WhatsApp</a>';
            break;
        case 'instagram':
            $output = '<a href="https://instagram.com/pluralcriativo" target="_blank" class="contact-link instagram">Instagram</a>';
            break;
    }
    
    return $output;
}
add_shortcode('plural_contact', 'plural_contact_shortcode');

// Adicionar suporte a SVG
function plural_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'plural_mime_types');

// Redirecionar tentativas de acesso ao admin para não-logados
function plural_redirect_admin() {
    if (!current_user_can('manage_options') && !wp_doing_ajax()) {
        wp_redirect(home_url());
        exit;
    }
}
add_action('admin_init', 'plural_redirect_admin');

// Desabilitar editor de temas e plugins
define('DISALLOW_FILE_EDIT', true);

// Suporte a WooCommerce (opcional)
function plural_woocommerce_support() {
    add_theme_support('woocommerce');
}
add_action('after_setup_theme', 'plural_woocommerce_support');