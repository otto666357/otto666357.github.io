import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { defaultLanguage, type Language } from '~/i18n/utils';
import { t } from '~/i18n/ui';
import { postSlug } from '~/utils/readingTime';

export async function GET(context: { site: URL | undefined }) {
  const lang: Language = defaultLanguage;
  const posts = (await getCollection('posts', ({ data }) => !data.draft && data.lang === lang))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: `yeye (${lang})`,
    description: t('home.description', lang),
    site: context.site ?? 'https://example.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/${lang}/posts/${postSlug(post)}/`,
      categories: post.data.tags,
    })),
    customData: `<language>${lang === 'zh' ? 'zh-cn' : 'en-us'}</language>`,
  });
}
