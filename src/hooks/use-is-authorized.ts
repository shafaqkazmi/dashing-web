export const useIsAuthorized = () => {
  return { isAuthorized: localStorage.getItem("accessToken") };
};
