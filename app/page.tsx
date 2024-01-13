
import styles from './page.module.css';

import { HeroSection, ProjectsGrid, SkillsPreview, AboutmePreview, ContactPreview } from '@/app/components/organisms';
import { RandomQuote } from '@/app/components/molecules';
import { mocks } from "./(pages)/constants"



export default function Home() {
  const { homepage: { projectGrid } } = mocks;
  return (
    <main className={styles.home_container}>
      <section className={styles.hero_section}>
        <HeroSection />
      </section>

      <section className={styles.quote_section}>
        <RandomQuote />
      </section>

      <section className={styles.projectpreview_section}>
        <ProjectsGrid data={projectGrid} />
      </section>

      <section className={styles.skillspreview_section}>
        <SkillsPreview />
      </section>

      <section className={styles.aboutmepreview_section}>
        <AboutmePreview isPreview={true} />
      </section>

      <section className={styles.contactpreview_section}>
        <ContactPreview />
      </section>


    </main>
  )
}

