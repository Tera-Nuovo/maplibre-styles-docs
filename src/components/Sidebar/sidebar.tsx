import { For, Show } from "solid-js";
import style from './sidebar.module.scss'
import { createSignal } from "solid-js";
import { A, createRouteData, useRouteData } from 'solid-start'
import { createEffect } from "solid-js";
import { loadPages } from "../../utils/loadPages";

interface SidebarProps {
    class?: string;
}

type DocItem = {
    title: string;
    link: string;
};

const docs: DocItem[] = [
    { title: 'Introduction', link: '/' },
    { title: 'Installation', link: '/installation' },
    { title: 'Configuration', link: '/configuration' },
    { title: 'Components', link: '/components' },
    { title: 'API', link: '/api' },
];

export function Sidebar(props: SidebarProps) {

    const [pages, setPages] = createSignal([]);

    createEffect(async () => {
        const loadedPages: any = await loadPages();
        setPages(loadedPages);
    });

    return (
        <aside class={`${style.sidebar} ${props.class}`}>
            <h1 class={style.header}>MapLibre Styles Docs</h1>
            <hr />
            <div class={style.navItems}>
                <ul>
                    {pages().map((page: any) => (
                        <li>
                            <a href={page.link}>{page.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

// export function Sidebar(props: SidebarProps) {


//     return (
//         <aside class={`${style.sidebar} ${props.class}`}>
//             <h1 class={style.header}>MapLibre Styles Docs</h1>
//             <hr />
//             <div class={style.navItems}>
//                 <ul>
//                     {docs.map((doc) => (
//                         <li>
//                             <a href={doc.link}>{doc.title}</a>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </aside>
//     );
// }