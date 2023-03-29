import { For, Show } from "solid-js";
// import { style } from "solid-js/web";
import style from './sidebar.module.scss'
import { createSignal } from "solid-js";

interface SidebarProps {
    class?: string;
}

type DocItem = {
    title: string;
    link: string;
};

const docs: DocItem[] = [
    { title: 'Getting Started', link: '/getting-started' },
    { title: 'Installation', link: '/installation' },
    { title: 'Configuration', link: '/configuration' },
    { title: 'Components', link: '/components' },
    { title: 'API', link: '/api' },
];

export function Sidebar(props: SidebarProps) {


    return (
        <aside class={`${style.sidebar} ${props.class}`}>
            <div class={style.navItems}>
                <ul>
                    {docs.map((doc) => (
                        <li>
                            <a href={doc.link}>{doc.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
