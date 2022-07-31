import getPosts from './src/utils/getPosts.js';

const posts = await getPosts('wallpaper', { limit: 20 });

console.log(posts);
