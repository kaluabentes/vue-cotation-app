<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import AuthLayout from '@/layouts/AuthLayout/AuthLayout.vue'
import PageTitle from '@/components/PageTitle/PageTitle.vue'
import TextField from '@/components/TextField/TextField.vue'
import Button from '@/components/Button/Button.vue'
import useSignIn from '@/modules/auth/composables/signIn'

const router = useRouter()

const { signIn } = useSignIn()

const email = ref('')
const password = ref('')
const errors = ref({
  email: '',
  password: ''
})

const setError = (field, error) => {
  errors.value = {
    ...errors.value,
    [field]: error
  }
}

const handleSignIn = () => {
  try {
    const theresAnyError = { count: 0 }

    if (!email.value) {
      setError('email', 'Este campo é obrigatório')
      theresAnyError.count = ++theresAnyError.count
    } else {
      setError('email', '')
    }

    if (!password.value) {
      setError('password', 'Este campo é obrigatório')
      theresAnyError.count = ++theresAnyError.count
    } else {
      setError('password', '')
    }

    if (theresAnyError.count > 0) {
      return
    }

    signIn({
      email: email.value,
      password: password.value
    })
  } catch (error: any) {
    setError('password', error.message)
  }
}
</script>

<template>
  <AuthLayout title="Bem-vindo de volta">
    <TextField v-model="email" placeholder="Digite seu email" label="Email" :error="errors.email" />
    <TextField
      v-model="password"
      placeholder="Digite sua senha"
      label="Senha"
      :error="errors.password"
      type="password"
    />
    <Button @click="handleSignIn">Login</Button>
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
