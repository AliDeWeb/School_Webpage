const setTokenCookie = (token: string) => {
  const now = new Date();
  const fiveDaysFromNow = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000);

  document.cookie = `token=${token};expires=${fiveDaysFromNow.toUTCString()};path=/;SameSite=Strict`;
};

export default setTokenCookie;
