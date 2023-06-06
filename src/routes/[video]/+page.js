import {video} from "../../video.js"

export async function load({params}){
    // @ts-ignore
    const now = video.find(v => v.id === params.video)
    // @ts-ignore
    const rest = video.filter(v => v.id !== params.video)
    return {
        now, rest
    } 
}