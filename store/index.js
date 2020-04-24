export const state = () => ({
	githubProjects: []
});

export const mutations = {
	updateGithubProjects: (state, payload) => {
		state.githubProjects = payload;
	}
};

export const actions = {
	async getGithubProjects({ state, commit }) {
		if (state.githubProjects.length) return;

		try {
			let githubProjects = await fetch(
				`https://api.github.com/users/ehylam/repos?page=1&per_page=100`
			).then(res => res.json());
		} catch (err) {
			console.log(err);
		}
		commit('updateGitubProjects', payload);
	}
};