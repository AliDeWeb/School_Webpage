const getTokenFromCookie = () => {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith("token=")) {
      return cookie.substring("token=".length);
    }
  }
  return null;
};

export default getTokenFromCookie;
