import SignupForm from '@/components/signup/SignupForm';
import AuthLayout from '@/components/common/AuthLayout';    

export default function SignupPage() {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
}