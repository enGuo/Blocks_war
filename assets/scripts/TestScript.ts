import {ResManager} from "./ResManager";
// declare let require: (string)=>any;

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
export default class TestScript extends cc.Component {

    // onLoad () {}

    start () {    
        let resman = new ResManager();
        // resman.GetOneRes('img/matter',function(err:Error, assets:any){
        //     console.log(assets);
        // })

        // resman.GetMultiRes('img', function(err, assets, url){
        //     console.log(assets);
        //     console.log(url);
        // }, function(x,y,itme){
        //     console.log(x);
        //     console.log(y);            
        //     console.log(itme);            
        // },cc.SpriteFrame);

    }

    // update (dt) {}
}
