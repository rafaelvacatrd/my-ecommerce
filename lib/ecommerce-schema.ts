// User related types
export type User = {
  id: string
  email: string
  firstName: string
  lastName: string
  createdAt: Date
  updatedAt: Date
  role: 'customer' | 'admin'
  addresses: Address[]
  paymentMethods: PaymentMethod[]
}

export type Address = {
  id: string
  userId: string
  street: string
  city: string
  state: string
  country: string
  zipCode: string
  isDefault: boolean
  createdAt: Date
  updatedAt: Date
}

export type PaymentMethod = {
  id: string
  userId: string
  type: 'credit_card' | 'debit_card' | 'paypal'
  cardNumber?: string
  cardHolderName?: string
  expiryDate?: string
  isDefault: boolean
  createdAt: Date
  updatedAt: Date
}

// Product related types
export type Product = {
  id: string
  name: string
  description: string
  price: number
  discountPrice?: number
  stock: number
  sku: string
  categoryId: string
  brandId: string
  images: string[]
  specifications: Record<string, string>
  rating: number
  reviewCount: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export type Category = {
  id: string
  name: string
  slug: string
  description?: string
  parentId?: string
  image?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export type Brand = {
  id: string
  name: string
  logo: string
  description?: string
  website?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

// Order related types
export type Order = {
  id: string
  userId: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  totalAmount: number
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: PaymentMethod
  items: OrderItem[]
  trackingNumber?: string
  createdAt: Date
  updatedAt: Date
}

export type OrderItem = {
  id: string
  orderId: string
  productId: string
  quantity: number
  price: number
  createdAt: Date
  updatedAt: Date
}

// Review related types
export type Review = {
  id: string
  userId: string
  productId: string
  rating: number
  title: string
  comment: string
  images?: string[]
  isVerifiedPurchase: boolean
  createdAt: Date
  updatedAt: Date
}

// Cart related types
export type Cart = {
  id: string
  userId: string
  items: CartItem[]
  createdAt: Date
  updatedAt: Date
}

export type CartItem = {
  id: string
  cartId: string
  productId: string
  quantity: number
  createdAt: Date
  updatedAt: Date
}

// Wishlist related types
export type Wishlist = {
  id: string
  userId: string
  items: WishlistItem[]
  createdAt: Date
  updatedAt: Date
}

export type WishlistItem = {
  id: string
  wishlistId: string
  productId: string
  createdAt: Date
  updatedAt: Date
} 