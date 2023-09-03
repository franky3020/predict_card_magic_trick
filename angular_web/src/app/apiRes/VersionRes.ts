export class VersionRes {

    versionDict: {[version: string]: versionList} = {};

    lastVersion = {
        version: '',
        minSDK: '',
        miniOS: ''
    }
}

class versionList {
    forceUpdate = false;
    minSDK = '';
    miniOS = '';
}