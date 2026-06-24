export function slugify(input: string): string {
  return input
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\u4e00-\u9fff\w-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
