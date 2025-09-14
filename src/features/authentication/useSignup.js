import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address"
      );
    },
    onError: (error) => {
      toast.error('Error signing up: ' + error.message);
    },
    // async onSettled(_, { data }) {
    //   if (data?.token) {
    //     // Store the token in the local storage
    //     localStorage.setItem('token', data.token);
    //   }
    // },
  });
  return { signup, isLoading };
}
