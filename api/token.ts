export const setTokensInCookie = (
  accessToken: string,
  refreshToken: string
) => {
  const isSecure = window.location.protocol === "https:";

  document.cookie = `access_token=${accessToken}; path=/; ${
    isSecure ? "Secure" : ""
  }; SameSite=Strict`;
  document.cookie = `refresh_token=${refreshToken}; path=/; ${
    isSecure ? "Secure" : ""
  }; SameSite=Strict`;
};

export const setGoogleTokenInCookie = (googleAccessToken: string) => {
  const isSecure = window.location.protocol === "https:";

  document.cookie = `google_access_token=${googleAccessToken}; path=/; ${
    isSecure ? "Secure" : ""
  }; SameSite=Strict`;
};
