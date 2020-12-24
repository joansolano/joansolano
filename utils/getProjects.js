export default async ($content, params) => {
    const projects = await $content('projects', params.project)
        .only(['title', 'img', 'slug'])
        .sortBy('createdAt', 'desc')
        .fetch();

    return {
        projects
    }
}