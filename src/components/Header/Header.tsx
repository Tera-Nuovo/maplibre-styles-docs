import { A } from "solid-start";
import style from './header.module.scss'
// random image
const logo = 'https://source.unsplash.com/random';

export function Header() {
    return (
        <header class={style.header}>
            <div class={style.logoContainer}>
                <A href="/">
                    <img src={logo} alt="logo" class={style.logo} />
                </A>
            </div>
        </header>
    );
}
