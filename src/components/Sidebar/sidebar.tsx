import { For, Show } from "solid-js";
import { style } from "solid-js/web";
import styles from './sidebar.module.scss'



export function Sidebar() {
    const pages: any = {
        'introduction': '/pages/introduction',
        'Glyphs': '/pages/glyphs',
        'Types': '/pages/types',
    }

    return (
        <nav aria-labelledby="grid-left">
            <ul class={styles.sidebarGroups}>
                {
                    <li>
                        <div class="nav-group">
                            <h2 class="no-bullets">Sidebar</h2>
                            <ul>

                                <For each={Object.keys(pages)}>
                                    {(page) => (
                                        <li class={styles.sidebarLink + styles.noBullets}>
                                            <a href={pages[page]}>{page}</a>
                                        </li>
                                    )}
                                </For>
                            </ul>
                        </div>
                    </li>
                }
            </ul>
        </nav>
    )
}
