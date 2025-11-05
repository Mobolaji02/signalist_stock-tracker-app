// Minimal stubbed auth actions so the sign-in/sign-up pages can import these
// Replace with real implementations that call your API or auth provider.

export async function signInWithEmail(data: SignInFormData): Promise<{ success: boolean; user?: User; error?: string }>{
  // TODO: wire this up to your real auth endpoint
  // For now return a successful fake response to allow local testing.
  return {
    success: true,
    user: {
      id: 'local-1',
      name: 'Local Test User',
      email: data.email,
    }
  };
}

export async function signUpWithEmail(data: SignUpFormData): Promise<{ success: boolean; user?: User; error?: string }>{
  // Stubbed sign-up behavior
  return {
    success: true,
    user: {
      id: 'local-2',
      name: data.fullName || 'New User',
      email: data.email,
    }
  };
}
