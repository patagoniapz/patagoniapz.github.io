<template>
    <div>
        <img src="/e8803786-bd55-4a67-8f3b-f8e2a1d10370.jpg" alt="connect" class="img-fluid w-100">
        <div class="container">
            <div class="row">
                <div class="col mt-3 estrecho">
                    <h2>{{ $t('DATA_TO_ACCESS_THE_SERVER') }}</h2>
                    <ul>
                        <li><strong>IP:</strong> 45.235.98.35</li>
                        <li><strong>{{ $t('PORT') }}:</strong> 16261</li>
                        <li><strong>{{ $t('COUNTRY') }}:</strong> Argentina</li>
                        <li><strong>{{ $t('VERSION') }}:</strong> 42.20.3</li>
                        <li><strong>{{ $t('SERVER_TYPE') }}:</strong> {{ $t('SERVER_TYPE_DETAIL') }}</li>
                        <li><strong>{{ $t('EXPERIENCE') }}:</strong> x5</li>
                        <li><strong>{{ $t('WIPE') }}</strong></li>
                        <li>{{ $t('START') }}</li>
                        <li><a href="https://discord.patagoniapz.com.ar/" target="_blank"><strong>Discord</strong></a></li>
                        <li><a href="https://www.trackyserver.com/es/server/2209052" target="_blank"><strong>Trackyserver</strong></a></li>
                    </ul>
                    <p class="mt-3">{{ $t('CONNECT.MODS_PHILOSOPHY') }}</p>
                </div>
            </div>
            <div class="row">
                <div class="col estrecho">
                    <p>{{ $t('CONNECT.LINE_ONE') }}</p>
                    <p>{{ $t('CONNECT.LINE_TWO') }}</p>
                    <p>{{ $t('CONNECT.LINE_THREE') }}</p>
                    <p>{{ $t('CONNECT.LINE_FOUR') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
