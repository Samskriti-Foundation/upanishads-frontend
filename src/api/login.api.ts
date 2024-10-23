import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/management`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
})

export type TLogin = {
  username: string
  password: string
}

export const login = async ({
  username,
  password,
}: {
  username: string
  password: string
}) => {
  const response = await api.post(`/auth/login`, {
    username,
    password,
  })
  return response.data
}

export const useLoginQuery = () => {
  return useMutation({
    mutationFn: login,
  })
}
