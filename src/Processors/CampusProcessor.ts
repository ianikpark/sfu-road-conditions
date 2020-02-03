import axios from 'axios';
import { fromUnixTime } from 'date-fns';

import { CampusPayload, Campus } from '../Models/Campus';

const apiEndpoint = 'https://www.sfu.ca/security/sfuroadconditions/api';

export async function getRoadCondition(): Promise<Campus> {
    const url = `${apiEndpoint}/3/current`;

    const { data } = await axios.get<CampusPayload>(url, {
        headers: { 'content-type': 'application/json' }
    });

    const campus = Campus.getInstance();
    campus.location = Object.keys(data.campuses)[0].toString();
    campus.status = data.campuses.burnaby.roads.status;
    campus.severity = data.campuses.burnaby.roads.severity;
    campus.announcement = data.campuses.burnaby.announcements;
    campus.lastUpdated = fromUnixTime(data.lastUpdated).toString();

    return campus;
}
