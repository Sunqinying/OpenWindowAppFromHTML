/**
 * window 拉起本地应用,注册表配置
 */
var Registry = require('winreg');
var regKeyChaoXin = new Registry({
    hive: Registry.HKCR,
    key: '\\MyChaoxinTest'
});
regKeyChaoXin.create(function (err) {
    if (err) throw err;
});
regKeyChaoXin.set(Registry.DEFAULT_VALUE,Registry.REG_SZ,"URL:MyChaoxinTest Protocol",function (err) {
    if(err) {
        console.log(err);
    }
});
regKeyChaoXin.set('URL Protocol',Registry.REG_SZ,"",function (err) {
    if(err) {
        console.log(err);
    }
});

var regKeyChaoXinDefaultIcon = new Registry({
    hive: Registry.HKCR,
    key: '\\MyChaoxinTest\\DefaultIcon'
});
regKeyChaoXinDefaultIcon.create(function (err) {
    if (err) throw err;
});
regKeyChaoXinDefaultIcon.set(Registry.DEFAULT_VALUE,Registry.REG_SZ,"C:\\Users\\Administrator\\AppData\\Roaming\\chaoxin\\chaoxin.exe",function (err) {
    if(err) {
        console.log(err);
    }
});

var regKeyChaoXinShell = new Registry({
    hive: Registry.HKCR,
    key: '\\MyChaoxinTest\\Shell'
});
regKeyChaoXinShell.create(function (err) {
    if (err) throw err;
});
regKeyChaoXinShell.set(Registry.DEFAULT_VALUE,Registry.REG_SZ,"",function (err) {
    if(err) {
        console.log(err);
    }
});

var regKeyChaoXinShellOpen = new Registry({
    hive: Registry.HKCR,
    key: '\\MyChaoxinTest\\Shell\\Open'
});
regKeyChaoXinShellOpen.create(function (err) {
    if (err) throw err;
});
regKeyChaoXinShellOpen.set(Registry.DEFAULT_VALUE,Registry.REG_SZ,"",function (err) {
    if(err) {
        console.log(err);
    }
});

var regKeyChaoXinShellOpenCommand = new Registry({
    hive: Registry.HKCR,
    key: '\\MyChaoxinTest\\Shell\\Open\\command'
});
regKeyChaoXinShellOpenCommand.create(function (err) {
    if (err) throw err;
});
regKeyChaoXinShellOpenCommand.set(Registry.DEFAULT_VALUE,Registry.REG_SZ,"C:\\Users\\Administrator\\AppData\\Roaming\\chaoxin\\chaoxin.exe",function (err) {
    if(err) {
        console.log(err);
    }
});