<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

import PageTitle from '@/components/PageTitle/PageTitle.vue'
import TextField from '@/components/TextField/TextField.vue'
import Button from '@/components/Button/Button.vue'
import LinkButton from '@/components/LinkButton/LinkButton.vue'

const router = useRouter()
</script>

<template>
  <div class="signin__container">
    <main class="signin__box">
      <PageTitle>Crie um conta</PageTitle>
      <div class="signin__controls">
        <TextField placeholder="Digite seu nome" label="Nome" />
        <TextField placeholder="Digite seu email" label="Email" />
        <TextField placeholder="Digite sua senha" label="Senha" />
        <TextField placeholder="Confirme sua senha" label="Repita a senha" />
        <Button>Cadastrar</Button>
        <p class="signin__create-account-text">
          Já tem uma conta?
          <LinkButton @onClick="() => router.push({ name: 'signIn' })">Entre agora</LinkButton>
        </p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.signin__container {
  height: 100vh;
  width: 100%;
  background: #9ee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signin__box {
  padding: 16px;
  max-width: 400px;
  width: 100%;
  background: #fff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;

  @media (min-width: 769px) {
    padding: 32px;
  }
}

.signin__controls {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.signin__create-account-text {
  text-align: center;
  font-size: 14px;
}
</style>
