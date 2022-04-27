const API_URL=process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

/**
 * Given an image return the url
 * works for local and deployed strapis
 * @param {any} coverphoto
 */

export const fromImageToUrl=(coverphoto)=> {
    if(!coverphoto) {
        return "/vercel.svg"
    }
    if(coverphoto.url.indexOf("/")===0) {
        return `${API_URL}${coverphoto.url}`
    }
    return coverphoto.url
} 