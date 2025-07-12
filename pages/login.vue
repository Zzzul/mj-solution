<template>
    <div class="flex items-center justify-center h-screen mx-4">
        <div class="bg-white rounded px-6 py-10 m-auto shadow-sm">
            <NuxtPicture
            src="/images/logo.png"
            :img-attrs="{
                id: 'logo',
                class: 'text-center mx-auto w-32 mb-10 rounded',
                style: 'display: block',
                'data-my-data': 'my-value'
            }"
            />
        <h3 class="text-xl text-cyan-400 font-semibold">Login</h3>

        <p class="mt-4 text-base">Thankyou for get back to <span class="text-cyan-500">MJ Solution Photobooth</span></p>
        
        <div class="mt-6">
            <label for="username" class="text-sm mb-1 block">Username</label>
            <input id="username" type="text" class="w-full ring-1 ring-zinc-200 rounded-sm p-2 focus:ring-cyan-500 hover:ring-cyan-500 focus:outline-none" placeholder="Email or username">
        </div>

        <div class="mt-3">
            <label for="password" class="text-sm mb-1 block">Password</label>
            <input id="password" type="password" class="w-full ring-1 ring-zinc-200 rounded-sm p-2 focus:ring-cyan-500 hover:ring-cyan-500 focus:outline-none" placeholder="Password">
        </div>

        <div>
            <button type="button" class="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 mt-8 rounded-sm">
                Sign In
            </button>
        </div>
    </div>
    </div>
</template>

<script>
definePageMeta({
    layout: 'guest'
})
</script>