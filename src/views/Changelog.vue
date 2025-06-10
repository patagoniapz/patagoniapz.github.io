<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>Lista de cambios / Changelog</h1>
                    <h6>En esta sección, figuran las modificaciones que se realizan dentro del servidor.</h6>
                    <h6>Ya sea, un nuevo mod, una nueva mecánica, un nuevo mapa o modificación de alguno de ellos, reparación de fallos, reparación de reloot en edificios propios o vanilla, rebuscar, e.t.c</h6>
                </div>
            </div>
            <div v-for="(entrada, index) in changelogs" :key="index" class="changelog-entry">
                <h6 class="changelog-date">{{ entrada.fecha }}</h6>
                <ul>
                    <li v-for="(cambio, i) in entrada.cambios" :key="i">{{ cambio }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-weight: bold;
    margin-top: 0.5em;
}

.changelog-date {
    font-weight: bold;
    margin-top: 0.5em;
}
</style>

<script setup>
import { ref } from 'vue'

const changelogs = ref([
    {
        fecha: "27-02-2025",
        cambios: [
            "Se restringe el reclamar refugio, solo a las parcelas.",
            "De esa forma, la gente no se confunde y sabe que debe ir a vivir a ellas. Cada vez mas cerca, se habilitar el safetogether (invitar amigos a tu refugio, aunque ya dispongan de uno propio)"
        ]
    },
    {
        fecha: "21-02-2025",
        cambios: [
            "Se añaden mas casas a Rosewood",
            "Se borro el minimapa que lleva a las parcelas (la ruta) (luego lo reparo)",
            "Puede haber zombies dentro de las casas nuevas, asi que cuidado."
        ]
    },
    {
        fecha: "16-02-2025",
        cambios: [
            "Se realiza el wipe del mapa (menos las parcelas).",
            "Todos los edificios del juego fueron restaurados al día 1.",
            "Los nuevos autos, deberían de tener, según el modelo, el doble o triple de espacio en el maletero.",
            "Cuidado con los autos quemados en los puentes y los cruces de rutas."
        ]
    },
    {
        fecha: "13-02-2025",
        cambios: [
            "Se añade el minimapa faltante de las parcelas de West Point",
            "Se restauran los mods del servidor que faltaban debido a las actualizaciones."
        ]
    },
    {
        fecha: "20-12-2024",
        cambios: [
            "Las linternas se pueden equipar en el cinturón (en el 2 y 3)",
            "El spawn ahora de zombies, es cada 72 horas (antes era 36)",
            "Tienda de VHS (reparada) en March Ridge"
        ]
    },
    {
        fecha: "15-12-2024",
        cambios: [
            "McCOY restaurado y protegido.",
            "(Si falta proteger mas edificios, me avisan y los revisamos)."
        ]
    },
    {
        fecha: "14-12-2024",
        cambios: [
            "Se añade la parcela de West Point.",
            "Se modifica la capacidad de los maleteros de los autos nuevos (no todos los autos fueron modificados)."
        ]
    },
    {
        fecha: "13-12-2024",
        cambios: [
            "Tuvimos que hacer un pequeño rollback a las 10 de la mañana, por problemas en el mapa, de todos modos, me puse en contacto con el hosting porque varias personas manifestaron tener problemas de conexion, a ver que respuesta me dan al respeto. Cuando sepa algo, informo.",
            "Se empezo a trabajar en la parcela de West Point (si bien ya esta añadida, todavia no esta jugable, ni visible, debido a que hubo gente visitando esas zonas, entonces, tenemos que borrarlas, para que cargue el mapa nuevo de las parcelas)",
            "Se amplio el cupo a 25 slots, si vemos que trae problemas, bajaremos nuevamente a 20. Nosotros no tenemos limite de slots, lo que tenemos son 20 GB de RAM. Pero no quiero añadir tampoco 32 slots, porque evidentemente no va a alcanzar, pero quizas, con 25 ande bien, y en todo caso, tendremos que ampliar los recursos luego."
        ]
    },
    {
        fecha: "11-12-2024",
        cambios: [
            "Se añade el crafteo de los cristales rotos (para transformarlos todos a un solo tipo)",
            "Se cambian las recetas, para que usen, botellas, o el cristal único.",
            "Se arregla el fallo al craftear el fregadero."
        ]
    },
    {
        fecha: "10-12-2024",
        cambios: [
            "Se añaden parcelas extra en Louisville (porque estaba lleno).",
            "Se corrige el rebuscar en las parcelas de Louisville.",
            "Se añade el rebuscar en las parcelas de Riverside.",
            "Se añade el rebuscar en las parcelas de Rosewood.",
            "Se elimina el uso de la almádena del mundo abierto (temporal)."
        ]
    },
    {
        fecha: "07-12-2024",
        cambios: [
            "Se vuelve a activar la horda cada 48 horas."
        ]
    }
])
</script>
