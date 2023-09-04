import { AppVersionInfo } from "../entity/AppVersionInfo";

export class VersionRes {

    versionDict: {[version: string]: VersionInfo} = {};

    lastVersion = {
        version: '',
        minSDK: '',
        miniOS: ''
    }
}

class VersionInfo {
    forceUpdate = false;
    minSDK = '';
    miniOS = '';
}

export function toAppVersionInfo(versionRes: VersionRes): AppVersionInfo {

    const appVersionInfo = new AppVersionInfo();
    appVersionInfo.versionDict = versionRes.versionDict;
    appVersionInfo.lastVersion = versionRes.lastVersion;
    return appVersionInfo;

}