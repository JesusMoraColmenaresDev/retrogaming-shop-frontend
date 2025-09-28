import React from 'react'
import AuthForm from '../components/auth/AuthForm'

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <AuthForm
        title="Registrarse"
        subtitle="Introduce tu información"
        view="register"
      />
    </div>
  )
}
