import getImages from './src/utils/getImages.js';

const posts = await getImages('wallpaper', { limit: 20 });

console.log(posts);
