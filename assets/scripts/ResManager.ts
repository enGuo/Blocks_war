// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class ResManager{
    
    /**
     * 本地获取单个资源
     * @param url 路径
     * @param callback 获取资源回调
     * @param type 资源类型
     */
    public GetOneRes(url:string, callbackComplete?:ResCallBack_Complete, callbackProgress?:ResCallBack_Progress, type?:any)
    {
        cc.loader.loadRes(url, type, callbackProgress, callbackComplete);
    }

    public GetMultiRes(url:string, callback:ResCallBack_Progress, type:any)
    {
        cc.loader.loadResDir
    }
    
}

interface ResCallBack_Complete
{
    (err:Error, assets:any, ulr?:string) : void;
}

interface ResCallBack_Progress
{
    (completedCount: number, totalCount: number, item: any) : void;
}