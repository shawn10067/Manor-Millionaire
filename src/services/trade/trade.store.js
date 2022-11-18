import create from "zustand";

// create trade store with properties above
export const useTradeStore = create((set) => ({
  myCash: 0,
  myProperties: [],
  theirCash: 0,
  theirProperties: [],
  theirId: 0,
  theirUsername: "",
  setMyCash: (cash) =>
    set({
      myCash: cash,
    }),
  setTheirCash: (cash) =>
    set({
      theirCash: cash,
    }),
  setTheirId: (id) => set({ theirId: id }),
  setTheirUsername: (username) => set({ theirUsername: username }),
  addMyProperty: (properties) =>
    set((state) => ({
      myProperties: [...state.myProperties, properties],
    })),
  addTheirProperty: (properties) =>
    set((state) => ({
      theirProperties: [...state.theirProperties, properties],
    })),
  removeMyProperty: (property) =>
    set((state) => ({
      myProperties: state.myProperties.filter((val) => val.id != property.id),
    })),
  removeTheirProperty: (property) =>
    set((state) => ({
      theirProperties: state.theirProperties.filter(
        (val) => val.id != property.id
      ),
    })),
  reset: () =>
    set({
      myCash: 0,
      myProperties: [],
      theirCash: 0,
      theirProperties: [],
      theirId: 0,
    }),
}));
