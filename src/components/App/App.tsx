import { render } from 'solid-js/web';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { MainContent } from '../MainContent/MainContent';
import { Footer } from '../Footer/Footer';
import style from './App.module.scss';

export function App(props: { children?: any }) {
    return (
        <>
            <Header />
            <div class={style.container}>
                <Sidebar class={style.sidebar} />
                <MainContent class={style.mainContent}>{props.children}</MainContent>
            </div>
            <Footer />
        </>
    );
}

// render(() => <App />, document.getElementById('app')!);
