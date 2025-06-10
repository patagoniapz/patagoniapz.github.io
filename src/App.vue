<template>
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container">
            <router-link to="/" class="navbar-brand">Patagonia PZ</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/como-ingresar" class="nav-link active">{{ $t('MENU.HOW_TO_CONNECT') }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/reglas" class="nav-link">{{ $t('MENU.RULES') }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/cambios" class="nav-link">{{ $t('MENU.CHANGE_LOG') }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/donaciones" class="nav-link">{{ $t('MENU.DONATIONS') }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/crafteos" class="nav-link">{{ $t('MENU.RECIPES') }}</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  aria-current="page" href="https://discord.gg/yGTbwUkVtV"
                            target="_blank">Discord</a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownLanguage" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{ $t(`MENU.LANGUAGES.${locale.toUpperCase()}`) }}</a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownLanguage">
                            <li>
                                <a class="dropdown-item" :class="{ 'active': locale === 'en' }" @click="changeLocale('en')">{{ $t('MENU.LANGUAGES.ENGLISH') }}</a>
                            </li>
                            <li>
                                <a class="dropdown-item" :class="{ 'active': locale === 'es' }" @click="changeLocale('es')">{{ $t('MENU.LANGUAGES.SPANISH') }}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view />
</template>
<script setup>
    import { onMounted } from "vue"
    import { useI18n } from "vue-i18n"

    const { locale } = useI18n()

    const changeLocale = (newLocale) => {
        locale.value = newLocale
        localStorage.setItem("user-locale", newLocale)
    };

    onMounted(() => {
        const savedLocale = localStorage.getItem("user-locale")
        if (savedLocale) {
            locale.value = savedLocale
        }
    });

</script>
