/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
  * @type {{mkdirpSync?: (function(*=, *=): *), ensureFileSync?: (function(*=): void), createSymlinkSync?: (function(*=, *=, *=): (undefined|*)), removeSync?: (function(*=): (*|undefined)), emptydirSync?: (function(*=): (*|undefined)), moveSync?: (function(*=, *=, *=): *|undefined), pathExists?: *, ensureDirSync?: (function(*=, *=): *), createFile?: *, createLink?: *, remove?: *, ensureLinkSync?: (function(*=, *=): (undefined|*)), writeJson?: *, readJsonSync?: *, outputFile?: *, ensureSymlink?: *, emptyDir?: *, mkdirsSync?: (function(*=, *=): *), writeJsonSync?: *, copy?: *, readJson?: *, write?: function(*=, *=, ...[*]): (*), ensureFile?: *, ensureSymlinkSync?: (function(*=, *=, *=): (undefined|*)), move?: *, read?: function(*=, *=, *=, *=, *=, *=): (*), ensureLink?: *, createSymlink?: *, ensureDir?: *, copySync?: (function(*=, *=, *=): undefined|*|void), emptyDirSync?: (function(*=): (*|undefined)), mkdirp?: *, createFileSync?: (function(*=): void), emptydir?: *, mkdirs?: *, outputFileSync?: (function(*=, ...[*]): (*|undefined)), pathExistsSync?: *, exists?: function(*=, *=): (*), createLinkSync?: (function(*=, *=): (undefined|*)), writev?: function(*=, *=, ...[*]): (*)}}
 */
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve('./cypress/', 'config', `${file}.json`);
    return fs.readJson(pathToConfigFile);
}

// plugins file
module.exports = (on, config) => {
    // config 아래 json 파일을 읽어오되, 기본 값은 dev.json 파일을 읽어오도록 한다.
    const file = config.env.configFile || 'dev';
    return getConfigurationByFile(file);
};
