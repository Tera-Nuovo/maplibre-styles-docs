export async function loadPages() {
    const introductionModule = import.meta.glob('/src/routes/\\(introduction\\).tsx');
    const pageModules = import.meta.glob('/src/routes/pages/**/*.tsx');
    const allModules = { ...introductionModule, ...pageModules };
    console.log(introductionModule);

    const modules = await Promise.all(
        Object.entries(allModules).map(async ([file, importModule]) => {
            let link = '';
            const relativePath = file.replace('/src/routes', '');
            if (relativePath.includes('introduction')) {
                link = '/';
            } else {
                link = relativePath.replace('.tsx', '');
            }
            const slug = link.split('/').pop() || ''; // Extract the last part of the link as the slug
            const module: any = await importModule();

            return {
                title: module.title,
                link: link,
                slug: slug,
                default: module.default,
            };
        })
    );

    console.log(modules);

    return modules;
}





// const pagesContext = import.meta.glob('/src/routes/pages/*.tsx');

// export async function loadPages() {
//     const modules: any[] = [];

//     for (const path in pagesContext) {
//         const module: any = await pagesContext[path]();
//         modules.push({
//             default: module.default,
//             title: module.title,
//             path,
//         });
//     }

//     return modules;
// }
