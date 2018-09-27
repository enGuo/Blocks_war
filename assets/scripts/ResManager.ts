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
export class ResManager{
    
    /**
     * 本地加载单个资源
     * @param url 路径
     * @param callbackComplete 完成回调
     * @param callbackProgress 过程回调
     * @param type 资源类型
     */
    public GetOneRes(url: string, callbackComplete?: IResCallBack_Complete, callbackProgress?: IResCallBack_Progress, type?: any)
    {
        cc.loader.loadRes(url, type, callbackProgress, callbackComplete);
    }

    /**
     * 本地加载多个资源
     * @param url 路径
     * @param callbackComplete 完成回调
     * @param callbackProgress 过程回调
     * @param type 资源类型
     */
    public GetMultiRes(url: string, callbackComplete?: IResCallBack_Complete, callbackProgress?: IResCallBack_Progress, type?: any)
    {
        cc.loader.loadResDir(url, type, callbackProgress, callbackComplete);
    }
    
    public GetRemoteRes(remoteArg: string | string[] | IRemoteResObject, callback?: Function)
    {
        cc.loader.load(remoteArg, callback);
    }
}

interface IResCallBack_Complete
{
    (err: Error, assets: any, ulr?: string[]) : void;
}

interface IResCallBack_Progress
{
    (completedCount: number, totalCount: number, item: any) : void;
}

interface IRemoteResObject
{
    uuid?: string;
    url?:  string;
    type?: string;
}