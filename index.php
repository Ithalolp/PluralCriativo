<?php
get_header();
?>

<main id="main" class="site-main">
  <div class="container">

    <?php if ( have_posts() ) : ?>
      <?php while ( have_posts() ) : the_post(); ?>

        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
          <?php the_content(); ?>
        </article>

      <?php endwhile; ?>
    <?php else : ?>

      <p>Nenhum conteúdo encontrado.</p>

    <?php endif; ?>

  </div>
</main>

<?php
get_footer();
