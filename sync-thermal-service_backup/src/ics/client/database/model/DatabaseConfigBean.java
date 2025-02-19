package ics.client.database.model;

/**
 *
 * @author nateesun
 */
public class DatabaseConfigBean {

    // legacy database
    private String legacyDbHost;
    private String legacyDbName;
    private String legacyDbPort;
    private String legacyDbUser;
    private String legacyDbPass;
    private String legacyDbVersion;

    // new database
    private String newDbHost;
    private String newDbName;
    private String newDbPort;
    private String newDbUser;
    private String newDbPass;
    private String newDbVersion;

    // legacy crm database
    private String crmDbHost;
    private String crmDbName;
    private String crmDbPort;
    private String crmDbUser;
    private String crmDbPass;
    private String crmDbVersion;

    public String getLegacyDbHost() {
        return legacyDbHost;
    }

    public void setLegacyDbHost(String legacyDbHost) {
        this.legacyDbHost = legacyDbHost;
    }

    public String getLegacyDbName() {
        return legacyDbName;
    }

    public void setLegacyDbName(String legacyDbName) {
        this.legacyDbName = legacyDbName;
    }

    public String getLegacyDbPort() {
        return legacyDbPort;
    }

    public void setLegacyDbPort(String legacyDbPort) {
        this.legacyDbPort = legacyDbPort;
    }

    public String getLegacyDbUser() {
        return legacyDbUser;
    }

    public void setLegacyDbUser(String legacyDbUser) {
        this.legacyDbUser = legacyDbUser;
    }

    public String getLegacyDbPass() {
        return legacyDbPass;
    }

    public void setLegacyDbPass(String legacyDbPass) {
        this.legacyDbPass = legacyDbPass;
    }

    public String getLegacyDbVersion() {
        return legacyDbVersion;
    }

    public void setLegacyDbVersion(String legacyDbVersion) {
        this.legacyDbVersion = legacyDbVersion;
    }

    public String getNewDbHost() {
        return newDbHost;
    }

    public void setNewDbHost(String newDbHost) {
        this.newDbHost = newDbHost;
    }

    public String getNewDbName() {
        return newDbName;
    }

    public void setNewDbName(String newDbName) {
        this.newDbName = newDbName;
    }

    public String getNewDbPort() {
        return newDbPort;
    }

    public void setNewDbPort(String newDbPort) {
        this.newDbPort = newDbPort;
    }

    public String getNewDbUser() {
        return newDbUser;
    }

    public void setNewDbUser(String newDbUser) {
        this.newDbUser = newDbUser;
    }

    public String getNewDbPass() {
        return newDbPass;
    }

    public void setNewDbPass(String newDbPass) {
        this.newDbPass = newDbPass;
    }

    public String getNewDbVersion() {
        return newDbVersion;
    }

    public void setNewDbVersion(String newDbVersion) {
        this.newDbVersion = newDbVersion;
    }

    public String getCrmDbHost() {
        return crmDbHost;
    }

    public void setCrmDbHost(String crmDbHost) {
        this.crmDbHost = crmDbHost;
    }

    public String getCrmDbName() {
        return crmDbName;
    }

    public void setCrmDbName(String crmDbName) {
        this.crmDbName = crmDbName;
    }

    public String getCrmDbPort() {
        return crmDbPort;
    }

    public void setCrmDbPort(String crmDbPort) {
        this.crmDbPort = crmDbPort;
    }

    public String getCrmDbUser() {
        return crmDbUser;
    }

    public void setCrmDbUser(String crmDbUser) {
        this.crmDbUser = crmDbUser;
    }

    public String getCrmDbPass() {
        return crmDbPass;
    }

    public void setCrmDbPass(String crmDbPass) {
        this.crmDbPass = crmDbPass;
    }

    public String getCrmDbVersion() {
        return crmDbVersion;
    }

    public void setCrmDbVersion(String crmDbVersion) {
        this.crmDbVersion = crmDbVersion;
    }

    @Override
    public String toString() {
        return "DatabaseConfigBean{" + "legacyDbHost=" + legacyDbHost + ", legacyDbName=" + legacyDbName + ", legacyDbPort=" + legacyDbPort + ", legacyDbUser=" + legacyDbUser + ", legacyDbPass=" + legacyDbPass + ", legacyDbVersion=" + legacyDbVersion + ", newDbHost=" + newDbHost + ", newDbName=" + newDbName + ", newDbPort=" + newDbPort + ", newDbUser=" + newDbUser + ", newDbPass=" + newDbPass + ", newDbVersion=" + newDbVersion + ", crmDbHost=" + crmDbHost + ", crmDbName=" + crmDbName + ", crmDbPort=" + crmDbPort + ", crmDbUser=" + crmDbUser + ", crmDbPass=" + crmDbPass + ", crmDbVersion=" + crmDbVersion + '}';
    }

}
