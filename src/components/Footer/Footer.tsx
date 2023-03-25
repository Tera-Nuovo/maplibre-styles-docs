function Footer({ path }: {
    path: string;
}) {

    // const [path, setPath] = createState(Astro.props.path);

    return (
        <div>
            <footer style={{
                "margin-top": "auto",
                "padding": "2rem",
                "border-top": "3px solid var(--theme-divider)"
            }}>
            </footer>


        </div >
    )
}

export default Footer;