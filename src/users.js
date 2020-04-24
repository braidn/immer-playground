const users = [
  "Braden",
  "Stefano",
  "Billy"
]

export const allUsers = users.map((human, idx) => ({
  id: idx, name: human
}))

export function getCurrentUser() {
  if (typeof sessionStorage === "undefined") return null
  const currentUserId = sessionStorage.getItem("user") 
    || Math.round(Math.random() * (users.length - 1) )
  sessionStorage.setItem("user", currentUserId)
  return allUsers[parseInt(currentUserId)]
}
