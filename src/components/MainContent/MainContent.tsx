import style from './maincontent.module.scss'

interface MainContentProps {
    children?: any;
    class?: string;
}

export function MainContent(props: { children?: any, class?: string }) {
    return (
        <main class={`${style.mainContent} ${props.class}`}>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center">Solid Start</h1>
                        <p class="text-center">A starter template for SolidJS</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
