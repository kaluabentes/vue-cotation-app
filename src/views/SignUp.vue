<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import AuthLayout from '@/layouts/AuthLayout/AuthLayout.vue'
import Button from '@/components/Button/Button.vue'
import PageTitle from '@/components/PageTitle/PageTitle.vue'
import TextField from '@/components/TextField/TextField.vue'
import useSignUp from '@/modules/auth/composables/signUp'

const REDIRECT_DELAY = 3000

const router = useRouter()

const { signUp, verifyEmailExists } = useSignUp()

const name = ref('')
const email = ref('')
const password = ref('')
const passwordRepeat = ref('')
const errors = ref({
  name: '',
  email: '',
  password: '',
  passwordRepeat: ''
})
const isSignUpDone = ref(false)

const setError = (field, error) => {
  errors.value = {
    ...errors.value,
    [field]: error
  }
}

const handleSignUp = () => {
  const theresAnyError = { count: 0 }

  if (!name.value) {
    setError('name', 'Este campo é obrigatório')
    theresAnyError.count = ++theresAnyError.count
  } else {
    setError('name', '')
  }

  if (!email.value) {
    setError('email', 'Este campo é obrigatório')
    theresAnyError.count = ++theresAnyError.count
  } else {
    setError('email', '')
  }

  if (verifyEmailExists(email.value)) {
    setError('email', 'Já existe um usuário com este email')
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

  if (!passwordRepeat.value) {
    setError('passwordRepeat', 'Este campo é obrigatório')
    theresAnyError.count = ++theresAnyError.count
  } else {
    setError('passwordRepeat', '')
  }

  if (password.value !== passwordRepeat.value) {
    setError('passwordRepeat', 'As senhas precisam ser iguais')
    theresAnyError.count = ++theresAnyError.count
  }

  if (theresAnyError.count > 0) {
    return
  }

  signUp({
    name: name.value,
    email: email.value,
    password: password.value
  })

  isSignUpDone.value = true
}

watch(isSignUpDone, (newIsSignUpDone) => {
  if (newIsSignUpDone) {
    setTimeout(() => {
      router.push({ name: 'signIn' })
    }, REDIRECT_DELAY)
  }
})
</script>

<template>
  <AuthLayout title="É um prazer tê-lo a bordo">
    <template v-if="!isSignUpDone">
      <TextField v-model="name" placeholder="Digite seu nome" label="Nome" :error="errors.name" />
      <TextField
        v-model="email"
        placeholder="Digite seu email"
        label="Email"
        :error="errors.email"
      />
      <TextField
        v-model="password"
        type="password"
        placeholder="Digite sua senha"
        label="Senha"
        :error="errors.password"
      />
      <TextField
        v-model="passwordRepeat"
        type="password"
        placeholder="Confirme sua senha"
        label="Repita a senha"
        :error="errors.passwordRepeat"
      />
      <Button @click="handleSignUp">Cadastrar</Button>
      <p class="login-text">
        Já tem uma conta?
        <Button variant="link" @onClick="() => router.push({ name: 'signIn' })">
          Entre agora
        </Button>
      </p>
    </template>
    <div class="success-message" v-if="isSignUpDone">
      <v-icon scale="5" fill="orange" name="fa-check-circle" />
      <h3 class="sucess-message__title">Sua conta foi criada com sucesso</h3>
      <p class="login-text">
        Em instantes você será redirecionado para pagina de
        <Button variant="link" @onClick="() => router.push({ name: 'signIn' })">login</Button>
      </p>
    </div>
  </AuthLayout>
</template>

<style scoped>
.login-text {
  text-align: center;
  font-size: 14px;
  margin: 0;
}

.check-icon {
  font-size: 100px;
}

.success-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.sucess-message__title {
  margin: 0;
}
</style>
