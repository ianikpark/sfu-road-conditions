export interface CampusPayload {
    campuses: {
        burnaby: {
            roads: {
                status: string;
                severity: string;
            };
            announcements: string;
        };
        surrey: {
            announcements: string;
        };
        vancouver: {
            announcements: string;
        };
    };
    lastUpdated: number;
}

export class Campus {
    private static instance: Campus;

    private _location: string;
    private _status: string;
    private _severity: string;
    private _announcement: string;
    private _lastUpdated: string;

    private constructor() {
        this._location = '';
        this._status = '';
        this._severity = '';
        this._announcement = '';
        this._lastUpdated = '';
    }

    static getInstance(): Campus {
        if (!Campus.instance) {
            Campus.instance = new Campus();
        }

        return Campus.instance;
    }

    get location(): string {
        return this._location;
    }

    set location(location: string) {
        this._location = location;
    }

    get status(): string {
        return this._status;
    }

    set status(status: string) {
        this._status = status;
    }

    get severity(): string {
        return this._severity;
    }

    set severity(severity: string) {
        this._severity = severity;
    }

    get announcement(): string {
        return this._announcement;
    }

    set announcement(announcement: string) {
        this._announcement = announcement;
    }

    get lastUpdated(): string {
        return this._lastUpdated;
    }

    set lastUpdated(lastUpdated: string) {
        this._lastUpdated = lastUpdated;
    }
}
