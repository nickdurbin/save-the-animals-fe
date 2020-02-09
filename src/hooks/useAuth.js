import decode from 'jwt-decode';

export const useAuth = () => {
  const token = localStorage.getItem('token')
  const { subject }= decode(token)

  return subject
}