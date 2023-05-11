<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

import AuthLayout from '@/layouts/AuthLayout/AuthLayout.vue'
import Button from '@/components/Button/Button.vue'
import PageTitle from '@/components/PageTitle/PageTitle.vue'
import TextField from '@/components/TextField/TextField.vue'
import LinkButton from '@/components/LinkButton/LinkButton.vue'

const router = useRouter()
</script>

<template>
  <AuthLayout title="É um prazer tê-lo a bordo">
    <TextField placeholder="Digite seu nome" label="Nome" />
    <TextField placeholder="Digite seu email" label="Email" />
    <TextField placeholder="Digite sua senha" label="Senha" />
    <TextField placeholder="Confirme sua senha" label="Repita a senha" />
    <Button>Cadastrar</Button>
    <p class="signin__create-account-text">
      Já tem uma conta?
      <Button variant="link" @onClick="() => router.push({ name: 'signIn' })"> Entre agora </Button>
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
