export const PHONE = '2347085011674'
export const PHONE_DISPLAY = '+234 708 501 1674'

export const wa = (text = "Hello Damsel Beauty, I'd like to place an order.") =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`
