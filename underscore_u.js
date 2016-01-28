// ~~~> _u. utilities <~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        _u = (function(){
            var alog = function(text,label){
                    log((label ? label + ': ' : '') + text);
                },
                
                bound = function(value,lower,upper,integer){
                    var v = Number(value)||~~value,
                        l = Number(lower)||~~lower,
                        u = Number(upper)||~~upper,
                        r = integer ? ~~(Math.max(Math.min(v,u),l)) : Math.max(Math.min(v,u),l);
                    return r;
                },
                
                removeObj = function (obj,type){
                    if(!_.isUndefined(obj)){
                        if(_.has(obj,'remove') && _.isFunction(obj.remove) ){
                            obj.remove();
                            return true;
                        }
                        obj = getObj(type||'graphic',obj);
                        if(obj){
                            obj.remove();
                            return true;
                        }
                    }
                    return false;
                },
                
                snapdist = function(distance,unit,integer){
                    var d = Number(distance)||~~distance,
                        u = Number(unit)||~~unit,
                        r = integer ? ~~((d/u) * u) : ((d/u) * u);
                    return r;
                },
                
                snapspin = function(r,d){
                   return (~~(((~~r)/(~~d))+0.5)*(~~d))%360 + ((~~r) < 0 ? 360 : 0);
                };
                
            return {
                alog: alog,
                bound: bound,
                removeObj: removeObj,
                snapspin: snapspin,
                snapdist: snapdist
            };
        }()),
// ~~~> _u. utilities <~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
