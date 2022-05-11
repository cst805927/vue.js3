let notSure: any = 4;
notSure.ifItExists(); //ifItExists()方法可能在运行时存在
notSure.toFixed(); //toFixed()方法存在

let prettySure: Object = 4;
prettySure.toFixed(); //错误，在Object类型中不存在toFixed()方法