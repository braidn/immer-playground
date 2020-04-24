import {addGift, toggleReservation} from './gifts'

const initialState = {
  users: [
    {
      id: 1,
      name: "Test User"
    },
    {
      id: 2,
      name: "Second Test User"
    }
  ],
  currentUser: {
    id: 1,
    name: "Test User"
  },
  gifts: [
    {
      id: "immer_license",
      description: "Immer License",
      image: "https://example.com/image.png",
      reservedBy: 2
    },
    {
      id: "egg_subscription",
      description: "Get all your eggs",
      image: "https://example.com/image.png",
      reservedBy: undefined
    }
  ]
}

describe("Gift Collection", () => {
  const nextState = addGift(initialState, "mug", "Coffee mug", "")

  test("adds a a gift to the collection", () => {
    expect(nextState.gifts.length).toBe(3)
  })

  test("does not modify the original state", () => {
    expect(initialState.gifts.length).toBe(2)
  })
})

describe("Gift reservations", () => {
  const nextState = toggleReservation(initialState, "egg_subscription")

  test("stores reservations", () => {
    expect(nextState.gifts[1].reservedBy).toBe(1)
  })

  test("does not modify the original state", () => {
    expect(initialState.gifts[1].reservedBy).toBe(undefined)
  })
})

describe("Gift reservation for an already reserved gift", () => {
  const nextState = toggleReservation(initialState, "immer_license")

  test("preserves the original reservedBy", () => {
    expect(nextState.gifts[0].reservedBy).toBe(2)
  })
})
