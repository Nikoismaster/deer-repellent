import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deerrepellent.store'
  const now = new Date().toISOString()
  const blogSlugs: Array<{ slug: string; lastModified: string; priority?: number; changeFrequency?: MetadataRoute.Sitemap[0]['changeFrequency'] }> = [
    { slug: 'ultimate-guide-deer-control', lastModified: '2024-03-15', priority: 0.7, changeFrequency: 'yearly' },
    { slug: 'deer-feeding-patterns', lastModified: '2024-03-12', priority: 0.6, changeFrequency: 'yearly' },
    { slug: 'solar-deer-repellent-vs-battery', lastModified: '2024-03-10', priority: 0.6, changeFrequency: 'yearly' },
    { slug: 'deer-resistant-plants', lastModified: '2024-03-08', priority: 0.6, changeFrequency: 'yearly' },
    { slug: 'winter-deer-damage-prevention', lastModified: '2024-03-05', priority: 0.6, changeFrequency: 'yearly' },
    { slug: 'ultrasonic-frequency-explained', lastModified: '2024-03-03', priority: 0.6, changeFrequency: 'yearly' },
    { slug: 'garden-damage-assessment', lastModified: '2024-03-01', priority: 0.6, changeFrequency: 'yearly' },
  ]
  const baseEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/product`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/installation-guide`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/success-stories`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(b.lastModified).toISOString(),
    changeFrequency: b.changeFrequency ?? 'yearly',
    priority: b.priority ?? 0.6,
  }))

  return [...baseEntries, ...blogEntries]
}
