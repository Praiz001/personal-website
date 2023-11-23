
import styles from './page.module.css';
import { HeroSection } from '@/app/components/organisms';
import { quotesIcon } from '@/app/assets';

import { ProjectsGrid, SkillsPreview, AboutmePreview, ContactPreview } from '@/app/components/organisms';
import { mocks } from "../constants"


import Image from 'next/image';

export default function Home() {
    const { homepage: { projectGrid } } = mocks;
    return (
        <main className={styles.home_container}>
            <section className={styles.hero_section}>
                <HeroSection />
            </section>

            <section className={styles.quote_section}>
                <div className={styles.quote_wrapper}>
                    <span>
                        <figure className={styles.open_quote}>
                            <Image src={quotesIcon} alt='quote' />
                        </figure>
                        <p>With great power comes great electricity bill</p>
                        <figure className={styles.close_quote}>
                            <Image src={quotesIcon} alt='quote' />
                        </figure>

                    </span>
                    <p>- Dr. Who</p>
                </div>
            </section>

            <section className={styles.projectpreview_section}>
                <ProjectsGrid data={projectGrid} />
            </section>

            <section className={styles.skillspreview_section}>
               <SkillsPreview />
            </section>

            <section className={styles.aboutmepreview_section}>
                <AboutmePreview />
            </section>

            <section className={styles.contactpreview_section}>
                <ContactPreview />
            </section>


        </main>
    )
}
