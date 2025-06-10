<template>
  <div class="container my-4"> <h1 class="text-center mb-4">{{ $t('appTitle') }}</h1>

    <div class="mb-4 d-flex justify-content-center">
      <div class="btn-group" role="group" aria-label="Language selector">
        <button
          type="button"
          class="btn"
          :class="{ 'btn-primary': $i18n.locale === 'en', 'btn-outline-primary': $i18n.locale !== 'en' }"
          @click="changeLocale('en')"
        >
          English
        </button>
        <button
          type="button"
          class="btn"
          :class="{ 'btn-primary': $i18n.locale === 'es', 'btn-outline-primary': $i18n.locale !== 'es' }"
          @click="changeLocale('es')"
        >
          Español
        </button>
      </div>
    </div>

    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">{{ $t('loadingRecipes') }}</span>
      </div>
      <p class="mt-2">{{ $t('loadingRecipes') }}</p>
    </div>

    <div v-else-if="error" class="alert alert-danger" role="alert">
      {{ $t('errorLoadingRecipes') }} {{ error }}
    </div>

    <div v-else-if="recipes.length === 0" class="alert alert-info text-center" role="alert">
      {{ $t('noRecipesAvailable') }}
    </div>

    <div v-else class="row row-cols-1 g-4"> <div class="col" v-for="recipe in recipes" :key="recipe.name">
        <div class="card h-100 shadow-sm recipe-card-horizontal"> <div class="row g-0"> <div class="col-md-4 d-flex align-items-center justify-content-center bg-light p-3 border-end"> <img
                v-if="recipe.image"
                :src="recipe.image"
                class="img-fluid rounded-start recipe-image-horizontal"
                :alt="recipe.name"
              >
            </div>
            <div class="col-md-8"> <div class="card-body">
                <h5 class="card-title text-primary">{{ $t(`items.${recipe.name}`) }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ $t('category') }}: {{ recipe.category }}</h6>
                <p class="card-text mb-1">
                  <strong>{{ $t('time') }}: </strong> {{ recipe.time }} {{ $t('seconds') }} | <strong>{{ $t('sound') }}: </strong> {{ $t(recipe.sound) }} | <strong>{{ $t('canBeDoneFromFloor') }}: </strong> <span> {{ recipe.canBeDoneFromFloor ? $t('yes') : $t('no') }} </span></p>
                <p class="card-text mb-1">
                </p>

                <div class="mt-3">
                  <strong>{{ $t('ingredients') }}:</strong>
                  <ul>
                    <li v-for="(quantity, ingredient) in recipe.ingredients" :key="ingredient">
                      {{ $t(`items.${ingredient}`) }}:
                      <span class="fw-bold">
                        {{ quantity === 'keep' ? $t('keep') : quantity }}
                      </span>
                    </li>
                  </ul>
                </div>

                <div v-if="Object.keys(recipe.skillRequired).length > 0" class="mt-3">
                  <strong>{{ $t('skillsRequired') }}:</strong>
                  <ul>
                    <li v-for="(level, skill) in recipe.skillRequired" :key="skill">
                      {{ $t(`skills.${skill}`) }}: <span>{{ level }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeList',
  data() {
    return {
      recipes: [],
      loading: true,
      error: null
    };
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem('user-locale', locale);
    }
  },
  async mounted() {
    const savedLocale = localStorage.getItem('user-locale');
    if (savedLocale) {
      this.$i18n.locale = savedLocale;
    }

    try {
      const response = await fetch(`./recipes.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.recipes = await response.json();
    } catch (e) {
      this.error = e.message;
      console.error("Failed to load recipes:", e);
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
p {
    margin: 0;
    padding: 0;
}
</style>
