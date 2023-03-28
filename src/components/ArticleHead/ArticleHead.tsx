import { Head, Title, Meta, Link, Body, Scripts } from 'solid-start'

interface ArticleHeadProps {
  title: string;
}

export const ArticleHead = ({ title }: ArticleHeadProps) => {
    return (
        <Head>
            <Meta title={title} />
        </Head>
    );
}


