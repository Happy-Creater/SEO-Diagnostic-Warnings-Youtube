export abstract class SessionStorageHandler {
    constructor() {
        this.initSession();
    }
    /**
     * Initialize session.
     */
    abstract initSession();
    /**
     * Save session.
     */
    abstract saveSession();

    /**
     * Get item of session.
     * @param key key of session
     */
    protected getSessionItem(key: string): string {
        return window.sessionStorage.getItem(key);
    }
    /**
     * Set item of session.
     * @param key key of session
     * @param item item of session
     */
    protected setSessionItem(key: string, item: string) {
        window.sessionStorage.setItem(key, item);
    }
    /**
     * Remove item of session.
     * @param key key of session
     */
    protected removeSessionItem(key: string) {
        window.sessionStorage.removeItem(key);
    }
}
