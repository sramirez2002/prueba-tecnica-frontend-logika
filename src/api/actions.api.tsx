export type Action = {
  id: number
  name: string
  status: number
  createdAt: string
}

type CreateActionPayload = {
  name: string
  description: string
  status: number
  icon?: File | null
}

const BASE_URL = "https://dev.api.bekindnetwork.com/api/v1/actions"

export const getActions = async (
  pageNumber: number,
  pageSize: number
) => {
  const token = localStorage.getItem("token")

  const response = await fetch(
    `${BASE_URL}/admin-list?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  if (!response.ok) {
    throw new Error("Error fetching actions")
  }

  return response.json()
}

export const createAction = async (
  payload: CreateActionPayload
) => {
  const token = localStorage.getItem("token")

  const formData = new FormData()
  formData.append("name", payload.name)
  formData.append("description", payload.description)
  formData.append("status", String(payload.status))

  
  formData.append("color", "#1E1B4D")

  if (payload.icon) {
    formData.append("icon", payload.icon)
  }

  const response = await fetch(`${BASE_URL}/admin-add`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })

  if (!response.ok) {
    const error = await response.text()
    console.error("Backend error:", error)
    throw new Error("Error creating action")
  }

  return response.json()
}
