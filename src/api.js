import axios from 'axios'

const api = axios.create({
  // [수정] 맨 앞에 슬래시(/) 필수! 
  // 이렇게 해야 어느 페이지에 있든 "http://도메인/api"로 요청합니다.
  baseURL: "/api" 
})

export async function fetchUsers(){
  // 결과: /api/users
  const { data } = await api.get('users')
  return data
}

export async function fetchRecommendations(userId, limit=12){
  // 결과: /api/recommend?user_id=...
  const { data } = await api.get('recommend', { params: { user_id: userId, limit } })
  return data
}

export async function fetchMovies(){
  // 결과: /api/movies?limit=100
  const { data } = await api.get('movies?limit=100')
  return data
}

export default apicd