# underscore_u
Underscore "u" (_u.) a JavaScript library that provides a whole mess of useful functional programming for writting API code for VTT platforms.

**_u.alog(text, optional_label)**<br>
Sends a "log" ( log([value]) ) to the API Output Console. Advantage is the script should only have one "log" which will return a "Undeclared 'log'" error in JSLint only once. Useful way to ensure all logs used for debugging are removed from the final script. **text** is required but the **label** is optional.
> _u.alog(obj.get('left'))<br>=> 105

or

> _u.alog(obj.get('left'),'left')<br>=> left: 105

**_u.removeObj(obj,[type required for non-graphics types])**<br>
Used to remove an object. Returns false if the object is undefined. Graphic do not require a ***type*** ("graphic') but other objects require a ***type*** to avoid mistaken removal. 

**_u.snapspin(rotation,[snap degree])**<br>
Used to snap "isdrawing: true" rotation. Cares for over rotation (value larger then 360 and cares for input errors as follows:<br>
null => 0<br>
undefined => 0<br>
NaN => 0<br>
false => 0<br>
true => 0<br>

> _u.snapspin(obj=get('rotation',45)<br>=> -5.5

**_u.bound(number,lowerlimit,upperlimit,[integer true, false])**<br>
Used restrict a number to a lower and upper range. Many uses in RPG applications (prevent over healing of hit points) or canvas applications (prevent a script from moving a token outside the canvas edges.) Optional true/false for **integers.** Cares for input errors as follows:<br>
null => 0<br>
undefined => 0<br>
NaN => 0<br>
false => 0<br>
true => 1<br>

> _u.bound(-5.5,0,10)<br>=> -5.5

or

> _u.bound(50.5,0,10,true)<br>=> 56
