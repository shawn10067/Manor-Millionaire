import create from "zustand";

// create user store with the user context properties from "./user.context.js" similar to the trade store
export const useUserStore = create((set) => ({
    friends: [],
    friendRequests: [],
    properties: [],
    searchedUsers: [],
    trades: [],
    setFriends: (friends) =>
        set({
            friends: friends,
        }),
    setFriendRequests: (friendRequests) =>
        set({
            friendRequests: friendRequests,
        }),
    setProperties: (properties) =>
        set({
            properties: properties,
        }),
    setSearchedUsers: (searchedUsers) =>
        set({
            searchedUsers: searchedUsers,
        }),
    setTrades: (trades) =>
        set({
            trades: trades,
        }),
}));

