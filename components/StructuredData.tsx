export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sudhanshukrsinha.vercel.app'
  
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sudhanshu Kumar Sinha',
    alternateName: ['Sudhanshu Sinha', 'Sudhanshu K Sinha'],
    jobTitle: 'AI / Full-Stack Developer',
    description: 'Full Stack Developer and AI Engineer specializing in React, Next.js, Node.js, and Machine Learning. Building scalable web applications and innovative AI solutions.',
    url: siteUrl,
    sameAs: [
      'https://www.linkedin.com/in/sudhanshu-kumar-sinha-b58776210/',
      'https://github.com/Sudhanshu2024',
    ],
    email: 'sudhanshu14sinha@gmail.com',
    knowsAbout: [
      'Full Stack Development',
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'Machine Learning',
      'Artificial Intelligence',
      'Web Development',
      'JavaScript',
      'MongoDB',
      'PostgreSQL',
      'Tailwind CSS',
      'Framer Motion',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Educational Institution',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sudhanshu Kumar Sinha - Portfolio',
    url: siteUrl,
    author: {
      '@type': 'Person',
      name: 'Sudhanshu Kumar Sinha',
    },
    description: 'Portfolio website of Sudhanshu Kumar Sinha - AI / Full-Stack Developer specializing in React, Next.js, Node.js, and Machine Learning.',
    inLanguage: 'en-US',
  }

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Sudhanshu Kumar Sinha',
      jobTitle: 'AI / Full-Stack Developer',
      url: siteUrl,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  )
}

