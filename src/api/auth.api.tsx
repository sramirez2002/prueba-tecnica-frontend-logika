const AUTH_URL =
  "https://dev.apinetbo.bekindnetwork.com/api/Authentication/Login"

export const login = async (username: string, password: string) => {
  const response = await fetch(AUTH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })

  if (!response.ok) {
    throw new Error("Login failed")
  }

  return response.text()
}