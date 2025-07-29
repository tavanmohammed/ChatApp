import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../lib/api";

const useLogout = () => {
  const queryClient = useQueryClient();

  const { mutate: logoutMutation, isPending, error } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      // Clear all cached queries including authUser
      queryClient.clear();
      // Redirect to login page
      window.location.href = "/login";
    },
  });

  return { logoutMutation, isPending, error };
};

export default useLogout;
