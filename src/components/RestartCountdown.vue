<template>
    <div class="restart-countdown">
        <p class="mb-1">
            <strong>{{ $t('RESTART.TITLE') }}:</strong>
            {{ countdownLabel }}
        </p>
        <p class="mb-1 text-muted small">
            {{ localTimeLabel }}
        </p>
        <p class="mb-0 text-muted small">
            {{ $t('RESTART.SCHEDULE_NOTE') }}
        </p>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

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
    const time = target.value.toLocaleTimeString(locale.value, { hour: '2-digit', minute: '2-digit' })
    const isSameDay = target.value.toDateString() === now.value.toDateString()
    const dayLabel = isSameDay ? t('RESTART.TODAY') : t('RESTART.TOMORROW')
    return t('RESTART.LOCAL_TIME', { day: dayLabel, time })
})
</script>
