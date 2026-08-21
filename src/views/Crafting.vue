<template>
  <div class="container my-4"> <h1 class="text-center mb-4">Recetas de Project Zomboid</h1>
    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando recetas...</span>
      </div>
      <p class="mt-2">Cargando recetas...</p>
    </div>

    <div v-else-if="error" class="alert alert-danger" role="alert">
      Error al cargar recetas: {{ error }}
    </div>

    <div v-else-if="recipes.length === 0" class="alert alert-info text-center" role="alert">
      No hay recetas disponibles.
    </div>

    <div v-else class="row row-cols-1 row-cols-md-2 g-4"> <div class="col" v-for="recipe in recipes" :key="recipe.name">
        <div class="card h-100 shadow-sm recipe-card-horizontal"> <div class="row g-0"> <div class="col-md-4 d-flex align-items-center justify-content-center bg-light p-3 border-end"> <img
                v-if="recipe.image"
                :src="recipe.image"
                class="img-fluid rounded-start recipe-image-horizontal"
                :alt="recipe.name"
              >
            </div>
            <div class="col-md-8"> <div class="card-body">
                <h5 class="card-title text-primary">{{ itemName(recipe.name) }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Categoría: {{ recipe.category }}</h6>
                <p class="card-text mb-1">
                  <strong>Tiempo: </strong> {{ recipe.time }} segundos | <strong>Sonido: </strong> {{ soundName(recipe.sound) }} | <strong>Se puede hacer desde el suelo: </strong> <span> {{ recipe.canBeDoneFromFloor ? 'Sí' : 'No' }} </span></p>
                <p class="card-text mb-1">
                </p>

                <div class="mt-3">
                  <strong>Ingredientes:</strong>
                  <ul>
                    <li v-for="(quantity, ingredient) in recipe.ingredients" :key="ingredient">
                      {{ itemName(ingredient) }}:
                      <span class="fw-bold">
                        {{ quantity === 'keep' ? 'Requiere' : quantity }}
                      </span>
                    </li>
                  </ul>
                </div>

                <div v-if="Object.keys(recipe.skillRequired).length > 0" class="mt-3">
                  <strong>Habilidades Requeridas:</strong>
                  <ul>
                    <li v-for="(level, skill) in recipe.skillRequired" :key="skill">
                      {{ skillName(skill) }}: <span>{{ level }}</span>
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
// Nombres en espanol de los items/habilidades/sonidos que aparecen en recipes.json.
// Si un item no esta en el mapa, se muestra tal cual viene del JSON (fallback).
const ITEM_NAMES = {
  Paintbrush: 'Brocha',
  PaintWhite: 'Pintura Blanca',
  PaintYellow: 'Pintura Amarilla',
  YellowBox: 'Caja de manera amarilla',
  WhiteBox: 'Caja de manera blanca',
  carpentry_01_16: 'Caja de madera',
};

const SKILL_NAMES = {
  Woodwork: 'Carpintería',
};

const SOUND_NAMES = {
  Hammering: 'Martilleo',
};

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
    itemName(key) {
      return ITEM_NAMES[key] ?? key;
    },
    skillName(key) {
      return SKILL_NAMES[key] ?? key;
    },
    soundName(key) {
      return SOUND_NAMES[key] ?? key;
    },
  },

  async mounted() {
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
