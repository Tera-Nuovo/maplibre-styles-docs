import style from './sidebar.module.scss'
import './sidebar.css'
import { A, useNavigate } from 'solid-start'
import { pages } from '~/pages';

interface SidebarProps {
    class?: string;
}

export function Sidebar(props: SidebarProps) {

    const navigate = useNavigate();
    return (
        <aside class={`${style.sidebar} ${props.class}`}>
            <h1 class={style.header} onclick={()=>{navigate('/')}}>MapLibre Style Spec</h1>
            <hr />
            
            <div class={style.navItems}>
                <ul>
                    {pages.map((page) => (
                        <li>
                            <A end={true} class="sidebar-link" href={page.path}>{page.title}</A>
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