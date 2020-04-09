export const defaults = {
	isLoggedIn: localStorage.getItem("token") != null ? true : false,
};

export default resolvers = {
	Mutation: {
		logUserIn: (_, { token }, { cache }) => {
			localStorage.setItem("token", token);
			cache.writeData({
				data: {
					isLoggedIn: true,
				},
			});
			return null;
		},
		logUserOut: (_, __, { cache }) => {
			localStorage.removeItem("token");
			window.location.reload();
			return null;
		},
	},
};
