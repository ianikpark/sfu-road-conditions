import { Toolkit } from 'actions-toolkit';

export default function createIssue(title: string, body: string) {
    Toolkit.run(
        async tools => {
            tools.log.info(`Creating a new issue ${ title }`);

            // Create a new issue
            try {
                const issue = await tools.github.issues.create({
                    ...tools.context.repo,
                    title,
                    body,
                });

                tools.log.success(
                    `Created a new issue #${ issue.data.number } ` +
                    `${ issue.data.title } (${ issue.data.html_url })`,
                );
            } catch (e) {
                // Write general error message
                tools.log.error(e);

                // Write detailed error message
                if (e.errors) tools.log.error(e.errors);

                // Exit with the failure status
                tools.exit.failure();
            }
        },
        {
            secrets: ['GITHUB_TOKEN'],
        },
    );
}
