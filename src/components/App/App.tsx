import { render } from 'solid-js/web';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { MainContent } from '../MainContent/MainContent';
import { Footer } from '../Footer/Footer';
import { RightSidebar } from '../RightSidebar/RightSidebar';
import style from './App.module.scss';

export function App(props: { children?: any }) {
    return (
        <>
            <div class={style.outerContainer}>
                <Header />
                <div class={style.container}>
                    <Sidebar class={style.sidebar} />
                    <MainContent class={style.mainContent}>{props.children}</MainContent>
                    {/* <RightSidebar class={style.rightSidebar} /> */}
                </div>
                <Footer />
            </div>
        </>
    );
}

