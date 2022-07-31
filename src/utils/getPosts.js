import getRandomUserAgent from './getRandomUserAgent.js';
import axios from 'axios';

const getPosts = async (subreddit, { limit = 1, sort = 'new' } = {}) => {
  if (!subreddit) {
    throw new Error('Subreddit argument can not be undefined');
  }

  const url = new URL(`https://www.reddit.com/r/${subreddit}/new.json`);
  url.searchParams.set('limit', limit);
  url.searchParams.set('sort', sort);

  const endpoint = url.href;
  const response = await axios.get(endpoint, {
    headers: {
      'User-Agent': getRandomUserAgent(),
    },
  });

  const posts = response.data.data.children;
  let images = [];

  for (let post of posts) {
    if (post.data.is_gallery) {
      const galleryImages = post.data.gallery_data.items.map(image => ({
        id: image.id,
        title: post.data.title,
        author: post.data.author,
        isAdult: post.data.over_18,
        isSpoiler: post.data.spoiler,
        path: `https://i.redd.it/${image.media_id}.jpg`,
        source: `https://reddit.com` + post.data.permalink,
      }));

      images.push(...galleryImages);
    } else if (!post.data.is_self && post.data.image_hint === 'image') {
      images.push({
        id: post.data.id,
        path: post.data.url,
        title: post.data.title,
        author: post.data.author,
        isAdult: post.data.over_18,
        isSpoiler: post.data.spoiler,
        source: `https://reddit.com` + post.data.permalink,
      });
    }
  }

  return images;
};

export default getPosts;
