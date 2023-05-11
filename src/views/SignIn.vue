<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

import AuthLayout from '@/layouts/AuthLayout/AuthLayout.vue'
import PageTitle from '@/components/PageTitle/PageTitle.vue'
import TextField from '@/components/TextField/TextField.vue'
import Button from '@/components/Button/Button.vue'
import LinkButton from '@/components/LinkButton/LinkButton.vue'

const router = useRouter()
</script>

<template>
  <AuthLayout title="Bem-vindo de volta">
    <TextField placeholder="Digite seu email" label="Email" />
    <TextField placeholder="Digite sua senha" label="Senha" />
    <Button>Login</Button>
    <p class="signin__create-account-text">
      Você ainda não possui uma conta?
      <Button variant="link" @onClick="() => router.push({ name: 'signUp' })">
        Crie uma agora
      </Button>
    </p>
  </AuthLayout>
</template>

<style scoped>
.signin__create-account-text {
  text-align: center;
  font-size: 14px;
  margin: 0;
}
</style>
