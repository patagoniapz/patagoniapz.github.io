<template>
    <div class="restart-banner text-center py-2 px-3">
        <div>
            <strong>Próximo reinicio del servidor:</strong>
            {{ countdownLabel }}
            <span class="text-muted">— {{ localTimeLabel }}</span>
        </div>
        <div class="small text-muted">
            Reinicios diarios a las 06:00 y 18:00 (hora Argentina), para liberar la memoria acumulada del servidor.
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// El servidor reinicia todos los dias a las 06:00 y a las 18:00, hora Argentina.
// Argentina no tiene horario de verano desde 2009, asi que el offset UTC-3 es fijo
// y no hace falta lidiar con conversiones de zona horaria del navegador (esa fue
// la fuente del bug original: nunca hace falta saber en que zona horaria esta la
// persona que visita la pagina, todo se calcula en UTC y el navegador se encarga
// de mostrarlo en su horario local con toLocaleTimeString).
const ARGENTINA_UTC_OFFSET_HOURS = -3
const RESTART_HOURS_ARGENTINA = [6, 18]

function nextRestart(now) {
    const candidates = []
    for (const dayOffset of [0, 1, 2]) {
        for (const hour of RESTART_HOURS_ARGENTINA) {
            candidates.push(new Date(Date.UTC(
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate() + dayOffset,
                hour - ARGENTINA_UTC_OFFSET_HOURS,
                0, 0, 0,
            )))
        }
    }
    candidates.sort((a, b) => a - b)
    return candidates.find((candidate) => candidate.getTime() > now.getTime())
}

const now = ref(new Date())
let intervalId = null

onMounted(() => {
    intervalId = window.setInterval(() => {
        now.value = new Date()
    }, 1000)
})

onUnmounted(() => {
    if (intervalId) {
        window.clearInterval(intervalId)
    }
})

const target = computed(() => nextRestart(now.value))

const countdownLabel = computed(() => {
    const diffMs = Math.max(0, target.value.getTime() - now.value.getTime())
    const totalSeconds = Math.floor(diffMs / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    const pad = (n) => String(n).padStart(2, '0')
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
})

const localTimeLabel = computed(() => {
    // Sin locale explicito: se usa el idioma/formato por defecto del navegador de quien visita.
    const time = target.value.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const isSameDay = target.value.toDateString() === now.value.toDateString()
    const dayLabel = isSameDay ? 'hoy' : 'mañana'
    return `${dayLabel} a las ${time} (tu horario)`
})
</script>

<style scoped>
.restart-banner {
    background-color: #212529;
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

/* Bootstrap's .text-muted is tuned for light backgrounds; override for this dark bar. */
.restart-banner .text-muted {
    color: rgba(255, 255, 255, 0.75) !important;
}
</style>
