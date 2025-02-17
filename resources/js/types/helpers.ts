import { CartItem, User } from ".";

export function can(user: User, permission: string): boolean {
  return user.permissions.includes(permission)
}

export function hasRole(user: User, role: string): boolean {
  return user.roles.includes(role)
}

export const productRoute = (item: CartItem) => {
  const params = new URLSearchParams()

  Object.entries(item.option_ids).forEach(([typeId, optionId]) => {
    params.append(`options[${typeId}]`, optionId + '')
  })

  return route('product.show', item.slug) + '?' + params.toString()
}