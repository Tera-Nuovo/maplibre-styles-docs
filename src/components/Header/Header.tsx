import { A } from "solid-start";
import styles from './header.module.scss'
// random image
const logo = 'https://source.unsplash.com/random';

export function Header() {
    return (
        <div class={styles.header}>
            <nav>
                {/* insert logo here */}
                <A href="/">
                    <div class={styles.logo}>
                        <img src={logo} alt="logo" class={styles.logo} />
                    </div>
                </A>

            </nav>
        </div>
    )
}