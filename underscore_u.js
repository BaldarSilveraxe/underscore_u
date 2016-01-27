// ~~~> _u. utilities <~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        _u = (function(){
            var alog = function(text,label){
                    log((label ? label + ': ' : '') + text);
                };
                bound(value,lower,upper,integer){
                    v = Number(value)||~~value;
                    l = Number(lower)||~~lower;
                    u = Number(upper)||~~upper;
                    r = integer ? ~~(Math.max(Math.min(v,u),l)) : Math.max(Math.min(v,u),l);
                    return r;
                },
                snapspin(r,d){
                    return (~~(((~~r)/(~~d))+0.5)*(~~d))%360 + ((~~r) < 0 ? 360 : 0);
                };
            return {
                alog: alog,
                bound: bound
                snapspin: snapspin
            };
            
        }()),
// ~~~> _u. utilities <~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
