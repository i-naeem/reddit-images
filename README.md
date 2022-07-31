# Reddit Images

> A scrapper that scrapes images from a subreddit, without any credentials.

## Example

```javascript

import getImages from './src/utils/getImages.js';

const subreddit = 'wallpapers' // Subreddit name
const images = await getImages(subreddit, { limit: 20 });

console.log(images);
```

## Image Schema

> Every image object contains following

```javascript
const imageSchema = {
  id: "Unique ID",
  title: "Title of the post",
  author: "Name of the author",
  path: "Download path of the image",
  source: "Link of the original post of Reddit",
  isAdult: "Boolean value to represent if post is 18+",
  isSpoiler: "Boolean value to represent if post contain spoiler"
}
```
