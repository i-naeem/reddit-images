import UserAgent from 'user-agents';

/**
 * getRandomUserAgent.js - Returns a random user agent string.
 * @returns {string} - User Agent
 */
const getRandomUserAgent = () => new UserAgent().toString();

export default getRandomUserAgent;
