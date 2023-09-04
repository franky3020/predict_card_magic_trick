export class AppVersionInfo {

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