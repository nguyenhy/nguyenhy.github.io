import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_SLOGAN, SITE_TITLE } from "../consts";

export async function GET(context) {
    const posts = await getCollection("blog");
    return rss({
        title: `${SITE_TITLE} - ${SITE_SLOGAN}`,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: posts.map((post) => ({
            ...post.data,
            link: `/blog/${post.id}/`,
        })),
    });
}
