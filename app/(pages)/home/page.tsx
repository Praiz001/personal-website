
import styles from './page.module.css';
import { HeroSection } from '@/app/components/organisms';

export default function Home() {
    return (
        <main className={styles.home_container}>
            <section className={styles.hero_section}>
                <HeroSection />
            </section>
        </main>
    )
}
