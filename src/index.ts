import { format } from 'date-fns';

import createIssue from './GitHubActions';
import { getRoadCondition } from './Processors/CampusProcessor';

async function main() {
    const road = await getRoadCondition();
    const headline =
        road.severity.toUpperCase() + ': ' +
        road.status.charAt(0).toUpperCase() + road.status.slice(1);
    const body = [
        `# ${ headline }`,
        `${ road.announcement }`,
        '<hr>',
        ''
    ].join('\n');

    createIssue(`[SFU Road Report] ${ headline }`, body);
}

main();
