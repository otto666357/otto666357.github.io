export const languages = {
  zh: '中文',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'zh';

export const ui = {
  zh: {
    'nav.home': '首页',
    'nav.archive': '归档',
    'nav.tags': '标签',
    'nav.about': '关于',
    'theme.toggle': '切换主题',
    'lang.switch': 'English',
    'home.title': '欢迎来到我的博客',
    'home.description': '记录想法、技术与生活。',
    'home.recent': '最新文章',
    'home.all': '查看全部',
    'home.empty': '还没有文章,敬请期待。',
    'post.published': '发布于',
    'post.updated': '更新于',
    'post.readTime': '分钟阅读',
    'post.words': '字',
    'post.tags': '标签',
    'post.back': '返回首页',
    'archive.title': '归档',
    'archive.description': '所有文章按时间排序。',
    'tags.title': '标签',
    'tags.description': '按标签浏览文章。',
    'tags.empty': '暂无标签。',
    'tag.empty': '该标签下还没有文章。',
    'about.title': '关于',
    'footer.builtWith': '使用 Astro 构建',
    'rss.subscribe': 'RSS 订阅',
    'notfound.title': '页面未找到',
    'notfound.description': '抱歉,你访问的页面不存在。',
    'notfound.back': '返回首页',
  },
  en: {
    'nav.home': 'Home',
    'nav.archive': 'Archive',
    'nav.tags': 'Tags',
    'nav.about': 'About',
    'theme.toggle': 'Toggle theme',
    'lang.switch': '中文',
    'home.title': 'Welcome to my blog',
    'home.description': 'Notes on ideas, technology, and life.',
    'home.recent': 'Recent posts',
    'home.all': 'View all',
    'home.empty': 'No posts yet. Stay tuned.',
    'post.published': 'Published',
    'post.updated': 'Updated',
    'post.readTime': 'min read',
    'post.words': 'words',
    'post.tags': 'Tags',
    'post.back': 'Back to home',
    'archive.title': 'Archive',
    'archive.description': 'All posts in chronological order.',
    'tags.title': 'Tags',
    'tags.description': 'Browse posts by tag.',
    'tags.empty': 'No tags yet.',
    'tag.empty': 'No posts under this tag yet.',
    'about.title': 'About',
    'footer.builtWith': 'Built with Astro',
    'rss.subscribe': 'Subscribe via RSS',
    'notfound.title': 'Page not found',
    'notfound.description': "Sorry, the page you're looking for doesn't exist.",
    'notfound.back': 'Back to home',
  },
} as const;

export type UIKey = keyof (typeof ui)['zh'];

export function t(key: UIKey, lang: Language): string {
  return ui[lang][key] ?? ui[defaultLanguage][key] ?? key;
}